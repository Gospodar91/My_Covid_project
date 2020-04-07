import React from 'react'
import css from '../CovidItem/covidItem.module.css'
import LatestNews from "../LatestNews/LatestNews";
import { operations } from "../operations/Operations";

const CovidItem = ({maxConfirmed,maxDead,totalRecovered}) => {
 
   console.log('maxDead', maxDead)
    return (
      <>
      <div>
      <h2 className={css.infoFirst}> Top Total Cases</h2>
      <ul className={css.maxConfirmed} > 
   
      {maxConfirmed.map(country=>(
          <li key={country.Country} className={css.countryLi} >
              <div className={css.liDiv}>
          
             <h2 className={css.country}>{country.Country}</h2>
      <p  className={css.infoFirst}>Total cases:{country.TotalConfirmed}</p>
      <p className={css.infoFirst}>New cases:{country.NewConfirmed}</p>
      <p className={css.infoSecond}>Total deaths:{country.TotalDeaths}</p>
      <p className={css.infoSecond}>New deaths:{country.NewDeaths}</p>
      <p className={css.infoThird}>Total recovered:{country.TotalRecovered}</p>
      <p className={css.infoThird}>New recovered:{country.NewRecovered}</p>
    
      </div>
      
      <div className={css.latestNewsDiv}>
    
      </div>
 </li>
      ))}
  </ul>
  </div>
      <div>
      <h2 className={css.infoSecond}> Top Total Deaths</h2>
      <ul className={css.maxConfirmed} > 
      {maxDead.map(country=>(
          <li key={country.Country} className={css.countryLi} >
              <div className={css.liDiv}>
             <h2 className={css.country}>{country.Country}</h2>
      <p className={css.infoSecond}>Total deaths:{country.TotalDeaths}</p>
      <p className={css.infoSecond}>New deaths:{country.NewDeaths}</p>
      <p  className={css.infoFirst}>Total cases:{country.TotalConfirmed}</p>
      <p className={css.infoFirst}>New cases:{country.NewConfirmed}</p>
      <p className={css.infoThird}>Total recovered:{country.TotalRecovered}</p>
      <p className={css.infoThird}>New recovered:{country.NewRecovered}</p>
      </div>
      <div className={css.latestNewsDiv}>
    
      </div>
 </li>


      ))}
  </ul>
  </div>
      <div>
      <h2 className={css.infoThird}> Top Total Recovered</h2>
      <ul className={css.maxConfirmed} > 
      {totalRecovered.map(country=>(
          <li key={country.Country} className={css.countryLi} >
              <div className={css.liDiv}>
             <h2 className={css.country}>{country.Country}</h2>
      <p className={css.infoThird}>Total recovered:{country.TotalRecovered}</p>
      <p className={css.infoThird}>New recovered:{country.NewRecovered}</p>
      <p className={css.infoSecond}>Total deaths:{country.TotalDeaths}</p>
      <p className={css.infoSecond}>New deaths:{country.NewDeaths}</p>
      <p  className={css.infoFirst}>Total cases:{country.TotalConfirmed}</p>
      <p className={css.infoFirst}>New cases:{country.NewConfirmed}</p>
      </div>
      <div className={css.latestNewsDiv}>
      
      </div>
 </li>


      ))}
  </ul>
  </div>
     
      </>
    );
  };
  export default CovidItem;