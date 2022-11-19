const FileSchemaList = vueInstance => {
    return [
      // {
      //   title: vueInstance.$t("CONTENT_TYPE"),
      //   key: "contentType",
      //   width: 250,
      //   align: "center",
      // },
      {
        title: vueInstance.$t("FILE_NAME"),
        key: "fileName",
        width: 250,
        align: "center",
      },
      // {
      //   title: vueInstance.$t("FILE_SIZE"),
      //   key: "fileSize",
      //   width: 120,
      //   align: "center",
      // },
      {
        title: vueInstance.$t("ACTION"),
        slot: "action",
        width: 120,
        align: "center",
      },
    ]
  }

  const ToolingMaterial = vueInstance => {
    return  [
        {
          title: vueInstance.$t('PART_NO'),
          align: 'center',
          key: 'partNo'
        },
        {
          title: vueInstance.$t('DESCRIPTION'),
          align: 'center',
          key: 'description'
        },
        {
          title: vueInstance.$t('COMPOSITE_PART_NUMBER'),
          align: 'center',
          key: 'compositePartNo'
        },
        {
          title: vueInstance.$t('DOSAGE'),
          align: 'center',
          key: 'dosage'
        },
        {
          title: vueInstance.$t('QUANTITY_PER_ASSEMBLY'),
          align: 'center',
          key: 'qpa'
        },
    ]
  }

  export {
    FileSchemaList,
    ToolingMaterial
  }
