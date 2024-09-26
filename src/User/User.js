class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    edit(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

export default User;