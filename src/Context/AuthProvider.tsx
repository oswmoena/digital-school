import React from 'react';
import { AuthProviderData } from './Auth';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    let [user, setUser] = React.useState<any>(null);

    let signin = (newUser: any) => {
        localStorage.setItem('user', newUser.userName)
        setUser(newUser);
        return AuthProviderData.signin();
    };

    let signout = () => {
        localStorage.removeItem('user')
        setUser(null);
        return AuthProviderData.signout();
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
