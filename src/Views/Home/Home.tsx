import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { Menu } from '../../Components/Menu/Menu'
import './Home.css'

interface UserProps {
    user: String,
    role: String,
    name: String,
    auth: number
}

export const Home = () => {

    const userData: any = localStorage.getItem('user')
    const userDataParsed: UserProps = JSON.parse(userData)// como string, no como objeto

    return (
        <div>
            <div className='title-home'>Bienvenido {userDataParsed.name.toLowerCase()}</div>
            <Menu />
        </div>
    )
}
