const url = "/group-account/"
/// get roles
export const list = (vueInstance, searchForm) => {
    const params = new URLSearchParams()
    const codes = searchForm.groupAccount.split(";")
    if (codes.length > 0) {
        codes.forEach((code) => {
            params.append("codes", code)
        })
    }

    if (searchForm.startDate) params.append("effectiveStartDate", searchForm.startDate)
    if (searchForm.endDate) params.append("effectiveEndDate", searchForm.endDate)
    if (searchForm.isLock) params.append("isLock", searchForm.isLock)


    if (searchForm.roles.length > 0) {
        searchForm.roles.forEach((role) => {
            params.append("roles", role)
        })
    }

    if (searchForm.sort) {
        params.append("sort", searchForm.sort)
    }

    if (searchForm.status === 'LOCK') {
        params.append("isLock", true)
    } else if (searchForm.status === 'UNLOCK') {
        params.append("isLock", false)
    }
    if (searchForm.size) {
        params.append("size", searchForm.size)
    }

    params.append("un-page", searchForm.unPage)
    params.append("page", searchForm.page)

    return vueInstance.$vendorHttp.get(`${url}list`, {
        params: params,
    })
}

/// download
export const download = (vueInstance, searchForm) => {
    const params = new URLSearchParams()
    const codes = searchForm.groupAccount.split(";")
    if (codes.length > 0) {
        codes.forEach((code) => {
            params.append("codes", code)
        })
    }

    if (searchForm.startDate) params.append("effectiveStartDate", searchForm.startDate)
    if (searchForm.endDate) params.append("effectiveEndDate", searchForm.endDate)
    if (searchForm.isLock) params.append("isLock", searchForm.isLock)


    if (searchForm.roles.length > 0) {
        searchForm.roles.forEach((role) => {
            params.append("roles", role)
        })
    }

    if (searchForm.status === 'LOCK') {
        params.append("isLock", true)
    } else if (searchForm.status === 'UNLOCK') {
        params.append("isLock", false)
    }

    return vueInstance.$vendorHttp.get(`${url}list/download`, {
        responseType: "blob",
        params: params,
    })
}
