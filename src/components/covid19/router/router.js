import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import HomePage from "../../homePage/HomepAge";
export const useRouter = () => {
  const SearchPage = lazy(() => import("../Searchform/SearchPage"));
  const CovidList = lazy(() => import("../CovidList/CovidList"));
  return (
    <>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/searh_page/" component={SearchPage} />
          <Route exact path="/topFive" component={CovidList} />
        </Suspense>
      </Switch>
      <Redirect to="/home" />
    </>
  );
};
