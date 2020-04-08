import { Route, Switch, Redirect } from "react-router-dom";
import React, { lazy, Suspense } from "react";

export const useRouter = () => {
  const SearchPage = lazy(() => import("../Searchform/SearchPage"));
  const CovidList = lazy(() => import("../CovidList/CovidList"));
  const HomePage = lazy(() => import("../../homePage/HomepAge"));
  return (
    <>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/home" component={HomePage} />
          <Route path="/searh_page/" component={SearchPage} />
          <Route exact path="/topFive" component={CovidList} />
        </Suspense>
      </Switch>
      <Redirect to="/home" />
    </>
  );
};
