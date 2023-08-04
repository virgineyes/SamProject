<template>
  <el-table
    v-loading="props.isLoading"
    class="list-table"
    :data="
      props.tableData.slice(
        (page.currentPage - 1) * page.pageSize,
        page.currentPage * page.pageSize
      )
    "
    :stripe="props.stripe"
    @row-click="$emit('row-click', $event)"
  >
    <el-table-column
      v-for="col in props.tableCol"
      :key="`col-${col.colKey}`"
      v-bind="col"
      :label="col.name"
      :className="`list-table__col--${col.colKey}`"
      :prop="col.colKey"
    >
      <template v-slot="scope">
        <slot v-if="$slots[col.colKey] && !col.type" :name="col.colKey" :scope="scope" />
        <template v-else-if="col.type === 'switch'">
          <el-switch
            v-model="scope.row[col.colKey]"
            @change="switchChange(scope.row, scope.$index)"
          />
        </template>
        <template v-else-if="col.type === 'link'">
          <div @click="$emit('link-click', scope.row)" v-html="scope.row[col.colKey]" />
        </template>
        <template v-else>
          <a
            v-if="col.externalLink"
            :href="col.externalLink(scope.row[col.colKey], scope.row)"
            target="_blank"
            v-html="scope.row[col.colKey]"
          />
          <span v-else-if="scope.row[col.colKey]" v-html="scope.row[col.colKey]" />
        </template>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    v-if="showPagination"
    layout="prev, pager, next, jumper"
    :total="tableData.length"
    :page-size="page.pageSize"
    :pager-count="5"
    :current-page="page.currentPage"
    hide-on-single-page
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const page = reactive<{ currentPage: number; pageSize: number }>({
  currentPage: 1,
  pageSize: 2
})
type TD = {
  colKey: any
  name: string
  type?: string
  width?: number
  externalLink?: any
}
const props = withDefaults(
  defineProps<{
    isLoading?: boolean
    tableCol: Array<TD>
    tableData: Array<Object>
    dropdownAction?: boolean
    actionCol?: Array<Object>
    stripe?: boolean
    showPagination?: boolean
  }>(),
  {
    isLoading: false,
    dropdownAction: false,
    stripe: true,
    showPagination: true
  }
)
const emit = defineEmits(['switchChange'])

function switchChange(e: any, i: any) {
  emit('switchChange', e, i)
}
function handleCurrentChange(val: number) {
  page.currentPage = val
  window.scrollTo(0, 0)
}
</script>

<style lang="scss" scoped>
.list-table {
  width: 100%;
  td {
    .cell {
      display: flex;
      align-items: center;
    }
    &.is-center {
      .cell {
        justify-content: center;
      }
    }
    &.is-right {
      .cell {
        justify-content: flex-end;
      }
    }
  }
  &__icon {
    font-size: 20px;
  }
  a {
    text-decoration: none;
  }
  .el-button {
    position: relative;
    &:not(.is-disabled) {
      z-index: 1;
    }
    + .el-button {
      margin-left: 7px;
    }
  }
  .el-table {
    &__header,
    &__body {
      width: 100% !important;
    }
  }
}
.el-pagination {
  overflow: auto;
  margin-top: 30px;
  .el-pager {
    li {
      width: 48px;
      height: 48px;
    }
  }
  @media (max-width: 767.98px) {
    margin-top: 16px;
    text-align: center;
    .el-pager {
      li {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: #222;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 0;
        &.active {
          background-color: #222;
          color: #fff;
        }
        + li {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
