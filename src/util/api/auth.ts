import { authAxiosInstance } from '../axiosInstance'
const url = '/auth/current-user/'
/// 取得 Current User
export const getCurrentUser = () => {
  console.log(authAxiosInstance)
  return authAxiosInstance.get(`${url}`)
}
