const url = "/current-user/"
/// 取得 Current User
export const get = (vueInstance) => vueInstance.$authhttp.get(`${url}`)

/// 取得 Current User 的 Functions
export const functions = (vueInstance) => vueInstance.$authhttp.get(`${url}functions`)
