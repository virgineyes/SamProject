const AlertDelete = (self, message) => {
  return new Promise((resolve, reject) => {
    self.$Swal
      .fire({
        icon: "warning",
        title: self.$t("COMMON_MESSAGE_WARN"),
        html: `${self.$t("COMMON_MESSAGE_CONFIRM_DELETE")} ${message ? message : ""}`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: self.$t("COMMON_TEXT_CONFIRM"),
        cancelButtonText: self.$t("COMMON_TEXT_CANCEL"),
      })
      .then(result => {
        if (result.isConfirmed) {
          resolve()
        } else {
          reject()
        }
      })
  })
}

const AlertSave = self => {
  return new Promise((resolve, reject) => {
    self.$Swal
      .fire({
        icon: "warning",
        title: self.$t("COMMON_MESSAGE_WARN"),
        html: `${self.$t("COMMON_MESSAGE_CONFIRM_SAVE")}`,
        showCancelButton: true,
        confirmButtonColor: "#19be6b",
        cancelButtonColor: "#d33",
        confirmButtonText: self.$t("COMMON_TEXT_CONFIRM"),
        cancelButtonText: self.$t("COMMON_TEXT_CANCEL"),
      })
      .then(result => {
        if (result.isConfirmed) {
          resolve()
        } else {
          reject()
        }
      })
  })
}


const AlertInfo = (self, message) => {
  return self.$Swal.fire({
    icon: "info",
    title: self.$t("COMMON_MESSAGE_INFO"),
    html: `${message}`,
    // timer: 1500,
  })
}

export {
  AlertDelete,
  AlertSave,
  AlertInfo
}
