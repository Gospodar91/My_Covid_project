import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import { HomePage } from "../homePage/HomepAge";
import { CovidList } from "../CovidList/CovidList";
import SearhPage from "../Searchform/SearchPage";

export const useRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/searh_page/" component={SearhPage} />
        <Route exact path="/topFive" component={CovidList} />
      </Switch>
      <Redirect to="/home" />
    </>
  );
};
