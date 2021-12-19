import { Route, Switch } from "react-router-dom";
import { memo, VFC } from "react";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoute";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

export const Router:VFC = memo(() => {
    return (
     <Switch>
         <Route exact path="/">
             <Login></Login>
         </Route>
         <Route path="/home" render={( {match : {url}}) => (
             <Switch>
            { homeRoutes.map((route) => (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                    <HeaderLayout>
                    { route.children }
                    </HeaderLayout>
                </Route>
             ))}
             </Switch>
         )} />
         <Route path="*">
             <Page404></Page404>
         </Route>
     </Switch>
    )
});