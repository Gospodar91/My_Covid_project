import React, { useEffect, useState } from "react";
import { operations } from "../operations/Operations";
import LatestNews from "../LatestNews/LatestNews";
import { GlobalInfo } from "./GlobalInfo";
export const HomePage = () => {
  const [globalState, setGlobalState] = useState();
  const [newsState, setNewsState] = useState();
  const getNews = () => {
     operations.getNews().then((data) => setNewsState(data.data.articles));
  };
  const getGlobalData =  () => {
     operations.getSummary().then((data) => setGlobalState(data.data));
  };
  useEffect(() => {
    getGlobalData();
  }, []);
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      {globalState && newsState && (
        <>
          <GlobalInfo Global={globalState} />
          <LatestNews newsData={newsState} />
        </>
      )}
    </>
  );
};
