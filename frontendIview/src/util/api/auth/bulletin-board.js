const url = "/bulletin-board/"
/// 取得 Search list
export const get = (vueInstance, effectiveDate, isAnnounce, page, size, sort) => {
  return vueInstance.$authHttp.get(`${url}`, {
    params: { effectiveDate: effectiveDate, isAnnounce: isAnnounce, page: page, size: size, sort: sort },
  })
}

/// Upsert
export const upsert = (vueInstance, params) => vueInstance.$authHttp.post(`${url}`, params)
/// Upsert
export const announcement = (vueInstance, bulletinBoardUuid) =>
  vueInstance.$authHttp.put(`${url}/announce`, {
    bulletinBoardUuid: bulletinBoardUuid,
  })
/// Remove
export const remove = (vueInstance, bulletinBoardUuid) =>
  vueInstance.$authHttp.delete(`${url}delete?bulletinBoardUuid=${bulletinBoardUuid}`)
