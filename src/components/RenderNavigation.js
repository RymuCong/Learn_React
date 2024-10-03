import {Link, Route, Routes} from "react-router-dom";
import {nav} from "./Navigation";
import {AuthData} from "../auth/AuthWrapper";

export const RenderRoutes = () => {

    const { user } = AuthData();

    return (
        <Routes>
            {nav.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element}/>
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element}/>
                } else return false
            })}

        </Routes>
    )
}

export const RenderMenu = () => {

    const { user, logout } = AuthData()

    const MenuItem = ({r}) => {
        return (
            <li className="nav-item"><Link className="nav-link" to={r.path}>{r.name}</Link></li>
        )
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <h2 className="navbar-item">Admin Dashboard</h2>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {nav.map((r, i) => {

                                if (!r.isPrivate && r.isMenu) {
                                    return (
                                        <MenuItem key={i} r={r}/>
                                    )
                                } else if (user.isAuthenticated && r.isMenu) {
                                    return (
                                        <MenuItem key={i} r={r}/>
                                    )
                                } else return false
                            })}

                            {user.isAuthenticated ?
                                <li className="nav-item">
                                    <Link className="nav-link" to={'#'} onClick={logout}>Log out</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to={'login'}>Log in</Link>
                                </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}