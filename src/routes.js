import {Switch, Route} from "react-router-dom";
import Home from "./copmonents/Home";


export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
        </Switch>
    )
}