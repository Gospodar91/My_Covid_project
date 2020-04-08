import axios from "axios";
const KEY = "15302072-a81be31270c5e4995077a81d4";
const newsKey = "65cb0b3a150c4ecfb6031d583c73fa16";
export const operations = {
  async getSummary() {
    try {
      const data = await axios.get(`https://api.covid19api.com/summary`);

      return data;
    } catch (error) {
      console.log("GetSummaryError", error);
      throw new Error();
    }
  },
  async getLiveInfo(searchQuery) {
    try {
      const data = await axios.get(
        `https://api.covid19api.com/live/country/${searchQuery}/status/confirmed`
      );

      return data;
    } catch (error) {
      console.log("GetQueryError", error);
      throw new Error();
    }
  },

  async getFlag(searchQuery) {
    try {
      const data = await axios.get(
        `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}+flag&per+page=3&image_type=photo`
      );
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("GetSummaryError", error);
      throw new Error();
    }
  },

  async getNews() {
    try {
      const data = await axios.get(
        `http://newsapi.org/v2/everything?qInTitle=covid&language=en&pageSize=5&sortBy=publishedAt&apiKey=${newsKey}`
      );
      return data;
    } catch (error) {
      console.log("GetNewsError", error);
      throw new Error();
    }
  },

  async getSearchnews(country) {
    try {
      const data = await axios.get(
        `http://newsapi.org/v2/everything?qInTitle=covid+${country}&pageSize=5&sortBy=publishedAt&apiKey=${newsKey}`
      );
      return data;
    } catch (error) {
      console.log("GetNewsError", error);
      throw new Error();
    }
  },
};
