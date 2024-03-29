import React from 'react';
import { AuthProviderData } from './Auth';

interface AuthContextType {
    user: any;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    let [user, setUser] = React.useState<any>(null);

    let signin = (newUser: string, callback: VoidFunction) => {
        return AuthProviderData.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback: VoidFunction) => {
        return AuthProviderData.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
