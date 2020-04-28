import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { LoaderUi } from "../Loader/Loader";

const HomePage = lazy(() =>
  import("../homePage/HomepAge" /* webpackChunkName: 'HomePage'*/)
);
const SearhPage = lazy(() =>
  import("../Searchform/SearchPage" /* webpackChunkName: 'SearchPage'*/)
);
const CovidList = lazy(() =>
  import("../CovidList/CovidList" /* webpackChunkName: 'Top5'*/)
);

export const useRouter = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<LoaderUi />}>
          <Route exact path="/home" component={HomePage} />
          <Route path="/searh_page" component={SearhPage} />
          <Route path="/topFive" component={CovidList} />
        </Suspense>
      </Switch>

      <Redirect to="/home" />
    </>
  );
};
