import React from 'react'
// import css from './searchForm.module.css'
import css from '../homePage/homepage.module.css'

 export const SearchFormResult=({searchinfo,flagQuery})=>
{
    return(
<>

{searchinfo && flagQuery && (
          <div className={css.liveInfoContainer}>
            <div className={css.countryImage}>
              <img
                className={css.flag}
                alt="not available"
                src={flagQuery[0].webformatURL}
              />
            </div>
            <div className={css.homePageContainer}>
            <div>Country:<p>{searchinfo.Country}</p></div>
            <h3> Daily statistics:</h3>
            <ul className={css.liveInfoList}>
              <li key={searchinfo.Date} className={css.oneDayInfo}>
              <p className={css.totConfirmed}>
                Total Confirmed:<span className={css.confirm}>{searchinfo.TotalConfirmed.toLocaleString()}</span>
              </p>
              <p className={css.totConfirmed}>
                New Confirmed cases :<span className={css.confirm}>{searchinfo.NewConfirmed.toLocaleString()}</span>
              </p>
              <p className={css.totConfirmed}>
                Total Deaths :<span className={css.dead}>{searchinfo.TotalDeaths.toLocaleString()}</span>
              </p>
              <p className={css.totConfirmed}>
                New Deaths :<span className={css.dead}>{searchinfo.NewDeaths.toLocaleString()}</span>
              </p>
              <p className={css.totConfirmed}>
                Total Recovered :<span className={css.alive}>{searchinfo.TotalRecovered.toLocaleString()}</span>
              </p>
              <p className={css.totConfirmed}>
                New Recovered :<span className={css.alive}>{searchinfo.NewRecovered.toLocaleString()}</span>
              </p>
              </li>
            </ul>
            </div>
          </div>
)}


</>

    )
}