import React from 'react'
import css from './searchForm.module.css'

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
            <h2>Country:{searchinfo.Country}</h2>
            <h3> Daily statistics:</h3>
            <ul className={css.liveInfoList}>
              <li key={searchinfo.Date} className={css.oneDayInfo}>
                <p className={css.infoFirst}>
                  Total cases:{searchinfo.TotalConfirmed}
                </p>
                <p className={css.infoFirst}>
                  New cases:{searchinfo.NewConfirmed}
                </p>
                <p className={css.infoSecond}>
                  Total deaths:{searchinfo.TotalDeaths}
                </p>
                <p className={css.infoSecond}>
                  New deaths:{searchinfo.NewDeaths}
                </p>
                <p className={css.infoThird}>
                  Total recovered:{searchinfo.TotalRecovered}
                </p>
                <p className={css.infoThird}>
                  New recovered:{searchinfo.NewRecovered}
                </p>
              </li>
            </ul>
          </div>
)}


</>

    )
}