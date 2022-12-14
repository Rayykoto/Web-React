//import react router DOM
import { Switch, Route } from "react-router-dom";

//import component private routes
import PrivateRoute from "./Privateroutes";

//=======================================================================
//ADMIN
//=======================================================================

//import view login
import Login from '../pages/admin/Login';

//import view admin Dashboard
import Dashboard from '../pages/admin/dashboard/Index';

//=======================================================================
//WEB
//=======================================================================

//import view web Home
import Home from "../pages/web/home/Index";

//import view web categories show
import WebCategoryShow from "../pages/web/categories/Show";

function Routes() {
    return (
        <Switch>

            {/* route "/admin/login" */}
            <Route exact path="/admin/login">
                <Login /> 
            </Route>

            {/* private route "/admin/dashboard" */}
            <PrivateRoute exact path="/admin/dashboard">
                <Dashboard /> 
            </PrivateRoute>

            {/* route "/" */} 
            <Route exact path="/">
                <Home />
            </Route>

            {/* route categories */}
            <Route exact path={"/category/:slug"}>
                <WebCategoryShow />
            </Route>

        </Switch>
    )
}


export default Routes