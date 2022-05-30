import { USERS } from "../Constants/USERS"

interface UserLogin {
    userName: String,
    password: String,
}

interface UserList {
    user: String,
    role: String,
    name: String
}

export const validateLogin = (user: UserLogin) => {
    let result = false
    // eslint-disable-next-line
    USERS.map((item: UserList) => {
        if (!result && item.user === user.userName)
            return result = true
    })
    return result
}