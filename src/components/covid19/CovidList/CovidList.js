import React, { useEffect, useState } from "react";
import CovidItem from "../CovidItem/CovidItem";
import { operations } from "../operations/Operations";
import css from "./covidList.module.css";
 const CovidList = () => {
  useEffect(() => {
    getSummaryArray();
  }, []);
  const [summaryAray, setSummaryArry] = useState();
  const getSummaryArray = () => {
    operations.getSummary().then((data) => setSummaryArry(data.data.Countries));
  };
  let maxConfirmed, maxDead, totalRecovered;
  if (summaryAray) {
    maxConfirmed = summaryAray
      .sort((b, a) => a.TotalConfirmed - b.TotalConfirmed)
      .slice([0], [5]);
    maxDead = summaryAray
      .sort((b, a) => a.TotalDeaths - b.TotalDeaths)
      .slice([0], [5]);
    totalRecovered = summaryAray
      .sort((b, a) => a.TotalRecovered - b.TotalRecovered)
      .slice([0], [5]);
  }
  return (
    <>
      <div className={css.container}>
        <div className={css.div_wrapper}>
          <CovidItem
            maxConfirmed={maxConfirmed}
            maxDead={maxDead}
            totalRecovered={totalRecovered}
          />
        </div>
      </div>
    </>
  );
};
export default CovidList;