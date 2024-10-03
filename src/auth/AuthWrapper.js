import { createContext, useContext, useState } from "react"
import {RenderMenu, RenderRoutes} from "../components/RenderNavigation";
import {UserProvider} from "../user/UserContext";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({
    user: { name: "", isAuthenticated: false }
});
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {

     const navigate = useNavigate();
     const [ user, setUser ] = useState({name: "", isAuthenticated: false})

     const login = (userName, password) => {

          // Make a call to the authentication API to check the username
          
          return new Promise((resolve, reject) => {

               if (password === "password") {
                    setUser({name: userName, isAuthenticated: true})
                    resolve("success")
               } else {
                    reject("Incorrect password")
               }
          })
          
          
     }
     const logout = () => {
         setUser({...user, isAuthenticated: false})
         navigate('/login');
     }


     return (
          <UserProvider>
                <AuthContext.Provider value={{user, login, logout}}>
                      <>
                             <RenderMenu />
                             <RenderRoutes />
                      </>

                </AuthContext.Provider>
          </UserProvider>
          
     )

}