import React from "react";
import css from "../homePage/homepage.module.css";

export const GlobalInfo = ({ Global }) => {
  return (
    <>
      {Global && (
        <div className={css.homePageContainer}>
          <h1 className={css.covidTitle}> COVID-19 Latest info:</h1>
          <div className={css.totalCasesContainer}>
            <h2 className={css.totalCasesTitle}> Total cases in the world:</h2>
            <p className={css.totConfirmed}>
              Total Confirmed:
              <span className={css.confirm}>
                {Global.Global.TotalConfirmed.toLocaleString()}
              </span>
            </p>
            <p className={css.totConfirmed}>
              New Confirmed cases :
              <span className={css.confirm}>
                {Global.Global.NewConfirmed.toLocaleString()}
              </span>
            </p>
            <p className={css.totConfirmed}>
              Total Deaths :
              <span className={css.dead}>
                {Global.Global.TotalDeaths.toLocaleString()}
              </span>
            </p>
            <p className={css.totConfirmed}>
              New Deaths :
              <span className={css.dead}>
                {Global.Global.NewDeaths.toLocaleString()}
              </span>
            </p>
            <p className={css.totConfirmed}>
              Total Recovered :
              <span className={css.alive}>
                {Global.Global.TotalRecovered.toLocaleString()}
              </span>
            </p>
            <p className={css.totConfirmed}>
              New Recovered :
              <span className={css.alive}>
                {Global.Global.NewRecovered.toLocaleString()}
              </span>
            </p>
            <p className={css.totConfirmed}>
              Last updated at :
              {`${Global.Date.substring(0, 10)} ${Global.Date.substring(
                11,
                19
              )}`}{" "}
              UTC
            </p>
          </div>
        </div>
      )}
    </>
  );
};
