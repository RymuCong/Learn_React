import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthData} from "../auth/AuthWrapper";

export const Login = () => {

     const navigate = useNavigate();
     const {login} = AuthData();
     const [ formData, setFormData ] = useReducer((formData, newItem) => { return ( {...formData, ...newItem} )}, {userName: "", password: ""})
     const [ errorMessage, setErrorMessage ] = useState(null)

     const doLogin = async () => {
          try {
               await login(formData.userName, formData.password)
               navigate("/")
          } catch (error) {
               setErrorMessage(error)
          }
     }

     return (
         <div className="center-container">

              <div className="col-md-9">
                   <div className="card">
                        <h3 className="card-title">Login Page</h3>
                        <div className="card-body">
                             <div className="mb-3">
                                    <label className="form-label" htmlFor="userName">User Name</label>
                                  <input value={formData.userName} onChange={(e) => setFormData({userName: e.target.value})}
                                         type="text"/>
                             </div>
                             <div className="mb-3">
                                  <label className="form-label" htmlFor="password">Password</label>
                                  <input value={formData.password} onChange={(e) => setFormData({password: e.target.value})}
                                         type="password"/>
                             </div>
                             <div className="button">
                                  <button className={"btn btn-primary"} onClick={doLogin}>Log in</button>
                             </div>
                             {errorMessage ?
                                 <div className="error">{errorMessage}</div>
                                 : null}
                        </div>

                   </div>
              </div>
         </div>
     )
}