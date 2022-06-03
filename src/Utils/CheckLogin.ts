import { USERS } from "../Constants/USERS"

interface UserLogin {
    userName: String,
    password: String,
}

interface UserList {
    user: String,
    role: String,
    name: String,
    auth: number
    password: String,
}

export const validateLogin = (user: UserLogin) => {
    let result = false
    let userFound = {};
    // eslint-disable-next-line
    USERS.map((item: UserList) => {
        if (!result && item.user === user.userName && item.password === user.password) {
            userFound = {
                auth: item.auth,
                name: item.name,
                role: item.role,
                user: item.user,
            }
            return result = true
        }
    })
    if (result) {
        return {
            result,
            user: userFound
        }
    } else {
        return {
            result
        }

    }
}