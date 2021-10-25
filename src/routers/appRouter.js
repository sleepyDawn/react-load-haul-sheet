import React from "react";
import { BrowserRouter , Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

// export const history = createHistory();


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);


// const AppRouter = () => (
//   <Router history={history}>
//     <div>
//       <Switch>
//         <PublicRoute path="/" component={LoginPage} exact={true}></PublicRoute>
//         <PrivateRoute
//           path="/dashboard"
//           component={DashboardPage}
//         ></PrivateRoute>
//         <Route component={NotFoundPage}></Route>
//       </Switch>
//     </div>
//   </Router>
// );

export default AppRouter;
