import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Top } from "../components/Pages/Top";
import { Users } from "../components/Pages/Users";
import { Default } from "../components/templates/Default";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Default>
                <Top></Top>
                </Default>
            </Route>
            <Route exact path="/users">
                <HeaderOnly>
                <Users />
                </HeaderOnly>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}