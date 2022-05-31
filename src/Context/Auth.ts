const AuthProviderData = {
    isAuthenticated: false,
    signin() {
        AuthProviderData.isAuthenticated = true;
    },
    signout() {
        AuthProviderData.isAuthenticated = false;
    },
};

export { AuthProviderData };
