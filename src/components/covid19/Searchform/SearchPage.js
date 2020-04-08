import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { operations } from "../operations/Operations";
import css from "./searchForm.module.css";
import LatestNews from "../LatestNews/LatestNews";
import { SearchFormResult } from "./SearchFormResult";

class SearhPage extends Component {
  state = {
    searchQuery: null,
    searchinfo: null,
    flagQuery: null,
    newsData: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      await operations.getSummary().then((data) =>
        this.setState({
          searchinfo: data.data.Countries.find(
            (country) =>
              country.Country.toLowerCase() ===
              this.state.searchQuery.toLowerCase()
          ),
        })
      );

      await operations
        .getFlag(this.state.searchQuery)
        .then((data) => this.setState({ flagQuery: data.data.hits }));

      await operations
        .getSearchnews(this.state.searchQuery)
        .then((data) => this.setState({ newsData: data.data.articles }));
    }
  }

  getQueryonSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      searchQuery: e.target.elements[0].value,
    });
  };
  render() {
    const { searchinfo, flagQuery } = this.state;
    return (
    
      <>
        <SearchForm getQueryonSubmit={this.getQueryonSubmit} />
        <SearchFormResult searchinfo={searchinfo} flagQuery={flagQuery} />
        <LatestNews newsData={this.state.newsData} />
      </>
      
    );
  }
}
export default SearhPage