import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '358a8d4a-1f73-454a-89a5-b46db3706ccb'},
    data: {},

})

export const usersAPI = {

    getUsers(currentPage, pageSize ) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },

    authMe() {
        return instance.get(
            `auth/me`,
        ).then(response => response.data)
    },

    follow(user) {
        return instance.post(`follow/${user}`,)
            .then(response => response.data)
    },

    unfollow(user) {
        return instance.delete(`follow/${user}`,)
            .then(response => response.data)
    },
}
