import React, { Component } from "react";
import { operations } from "../operations/Operations";
import LatestNews from "../LatestNews/LatestNews";
import { GlobalInfo } from "./GlobalInfo";

class HomePage extends Component {
  state = {
    globalInfo: [],
    newsData: [],
  };

  async componentDidMount() {
    await operations
      .getSummary()
      .then((data) => this.setState({ globalInfo: data.data }));

    await operations
      .getNews()
      .then((data) => this.setState({ newsData: data.data.articles }));
  }

  render() {
    const { newsData } = this.state;
    const { Global, Date } = this.state.globalInfo;
    return (
      <>
        <GlobalInfo Global={Global} Date={Date} />
        <LatestNews newsData={newsData} />
      </>
    );
  }
}
export default HomePage;
