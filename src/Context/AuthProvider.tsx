import React from 'react';
import { AuthProviderData } from './Auth';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    let [user, setUser] = React.useState<any>(null);

    let signin = (newUser: any) => {
        console.log('newUser', newUser)
        localStorage.setItem('user', newUser.userName)
        return AuthProviderData.signin(() => {
            setUser(newUser);
        });
    };

    let signout = () => {
        localStorage.removeItem('user')
        return AuthProviderData.signout(() => {
            setUser(null);
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
