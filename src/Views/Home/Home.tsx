import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import './Home.css'

export const Home = () => {
    const userContext = useContext(AuthContext)

    useEffect(() => {

        return () => {
            console.log('userContext', userContext)
        }
    }, [])


    return (
        <div>Home</div>
    )
}
