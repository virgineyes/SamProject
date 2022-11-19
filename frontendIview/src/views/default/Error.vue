<template>
  <article>
    <Feature :title="$t('COMMON_ERROR_PAGE')" :textClass="'text-delta-red'" :iconClass="'fa-times'">
      <Row>
        <div class="alert alert-danger" style="width: 100%">
          <h4 class="alert-heading">{{ $t("ERROR_TEXT_AUTH") }}</h4>
          <p>{{ $t("ERROR_TEXT_REMARK") }}</p>
        </div>
      </Row>
    </Feature>
  </article>
</template>

<script>
export default {
  name: "Error",
  components: {
  },
}
</script>

<style scoped></style>
