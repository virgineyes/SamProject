import {
    Translate
  } from "@/util/common"

const config = (config, store) => {
    config.headers["Accept-Language"] = store.getters.getLanguage
    config.headers["Authorization"] = 'Bearer ' + getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME)
    config.headers['Content-Type'] = 'application/json'
    if (store.getters.getGroupCode != null) {
      config.headers['selected-group-code'] = store.getters.getGroupCode.code
    }
    return config
}

const error = (error, store) => {
    store.commit(types.LOADING, false)
    Swal.fire({
      icon: "error",
      title: Translate("COMMON_MESSAGE_ERROR"),
      text: Translate("COMMON_MESSAGE_SYSTEM_ERROR"),
    })
    return Promise.reject(error)
}

export {
    config,
    error
}
  