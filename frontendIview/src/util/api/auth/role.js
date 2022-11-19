const url = "/role/"
/// get roles
export const searchAttribute = (vueInstance, paramas) => {
  return vueInstance.$authHttp.post(`${url}search/attribute`, paramas)
}


export const create = (vueInstance, paramas) => {
  return vueInstance.$authHttp.post(`${url}`, paramas)
}

export const simple = (vueInstance, paramas) => {
  return vueInstance.$authHttp.get(`${url}search/simple`, paramas)
}

export const groups = (vueInstance, id) => {
  return vueInstance.$authHttp.get(`${url}${id}/groups`)
}

export const users = (vueInstance, id) => {
  return vueInstance.$authHttp.get(`${url}${id}/users`)
}

export const updateFunction = (vueInstance, id, paramas) => {
  return vueInstance.$authHttp.patch(`${url}${id}/function`, paramas)
}

export const removeRole = (vueInstance, id) => {
  return vueInstance.$authHttp.delete(`${url}${id}`)
}
export const updateRole = (vueInstance, id, paramas) => {
  return vueInstance.$authHttp.put(`${url}${id}`, paramas)
}