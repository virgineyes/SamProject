const url = "/attachment/"
/// 取得 Search list
export const download = (vueInstance, uuid) =>
  vueInstance.$fileHttp.get(`${url}download/${uuid}`, { responseType: "blob" }).then((res) => {
    const { data, headers } = res
    const fileName = headers["content-disposition"].replace(/\w+; filename="(.*)"/, "$1")

    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", fileName)
    document.body.appendChild(link)
    link.click()
    vueInstance.toggleLoading(false)
    return fileName
  })

