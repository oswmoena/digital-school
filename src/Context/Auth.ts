const AuthProviderData = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
        AuthProviderData.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
        AuthProviderData.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export { AuthProviderData };
