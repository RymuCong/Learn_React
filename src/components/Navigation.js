import { Account } from "../pages/Account"
import { Login } from "../pages/Login"
import EditUser from "../pages/EditUser";
import AddUser from "../pages/AddUser";
import Home from "../pages/Home";
import {UsersList} from "../pages/UserList";

export const nav = [
     { path:     "/",              name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/login",         name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/users",         name: "Users",       element: <UsersList />,  isMenu: true,     isPrivate: true  },
     { path:     "/edit/:editId",  name: "Edit User",   element: <EditUser />,   isMenu: false,     isPrivate: true  },
     { path:     "/add",           name: "Add User",   element: <AddUser />,    isMenu: false,     isPrivate: true  },
     { path:     "/account",       name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
]