import { getCookie } from "../util/cookie"
export const getLoading = state => state.loading
export const getLanguage = state => state.language
export const getToken = state => state.token
export const getLogin = state => state.login
export const getSmallDevice = state => state.smallDevice
export const getUserProfile = state => state.userProfile
export const getRedirectUrl = state => state.redirectUrl
export const getGroupCode = state => state.groupCode
export const getWindowsWidth = state => state.windowsWidth
export const getContentType = state => state.contentType
export const getMenuOptionsLeft = state => state.menuOptionsLeft

export const getUploadurl = () => {
    return (
        process.env.VUE_APP_BACKEND_URL + "file/attachment/upload-single?description=" +
        new Date().getTime()
    )
}

export const getHeaders = () => {
    return { Authorization: "Bearer " + getCookie(process.env.VUE_APP_AUTH_TOKEN_NAME) }
}
