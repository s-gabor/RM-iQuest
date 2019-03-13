class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    register() {
        // register user data in the local storage (normally you'd do a POST request)
        try {
            window.localStorage.setItem(this.username, this.password);
            return true;
        } 
        catch (err) {
            return false;
        }
    }

    login() {
        // check if user data is in the local storage (normally you'd do a GET request)
        const localStoragePassword = window.localStorage.getItem(this.username);
        let response;
        localStoragePassword === this.password
            ? response = true  // username and password match local storage data
            : response = false // username NOT or password DOESN'T match
        return response;
    }

    logout() {
        // log user out (normally you'd do a POST request)
        return "Success";
    }
}