import React, { Component } from "react";
import CovidItem from "../CovidItem/CovidItem";
import { operations } from "../operations/Operations";

import css from "./covidList.module.css";
class CovidList extends Component {
  state = {
    summaryAray: [],
    maxConfirmed: [],
    maxDead: [],
    totalRecovered: [],
  };

  async componentDidMount() {
    await operations
      .getSummary()
      .then((data) => this.setState({ summaryAray: data.data.Countries }));
    await this.TotalStat();
  }

  TotalStat = () => {
    const maxConfirmed = this.state.summaryAray
      .sort((b, a) => a.TotalConfirmed - b.TotalConfirmed)
      .slice([0], [5]);
    const maxDead = this.state.summaryAray
      .sort((b, a) => a.TotalDeaths - b.TotalDeaths)
      .slice([0], [5]);
    const totalRecovered = this.state.summaryAray
      .sort((b, a) => a.TotalRecovered - b.TotalRecovered)
      .slice([0], [5]);
    this.setState({
      maxConfirmed: maxConfirmed,
      maxDead: maxDead,
      totalRecovered: totalRecovered,
    });
  };

  render() {
    const { summaryAray, maxConfirmed, maxDead, totalRecovered } = this.state;

    console.log("summaryAray", summaryAray);
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
  }
}
export default CovidList;
