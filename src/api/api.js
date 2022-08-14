import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    'API-KEY': '358a8d4a-1f73-454a-89a5-b46db3706ccb'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },

    getUsers2(currentPage, pageSize) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    }
}
