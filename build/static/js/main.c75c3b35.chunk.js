(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[0],{24:function(e,a,t){e.exports={header:"covid19_header__2sTef",linkList:"covid19_linkList__27trw",linkItem:"covid19_linkItem__2GskV",appLink:"covid19_appLink__20nqu"}},36:function(e,a,t){e.exports={newsContainer:"latestNews_newsContainer__2mVq1",link:"latestNews_link__1BatP",icons:"latestNews_icons__1FhKi",title:"latestNews_title__3IVku",root:"latestNews_root__3n1F0"}},42:function(e,a,t){e.exports={container:"covidList_container__3Sd3e"}},59:function(e,a,t){e.exports={background:"App_background__2pCp6"}},6:function(e,a,t){e.exports={link:"homepage_link__1z91W",homePageContainer:"homepage_homePageContainer__3Ux_t",covidTitle:"homepage_covidTitle__c_o8h",totalCasesContainer:"homepage_totalCasesContainer__1xGAV",totalCasesTitle:"homepage_totalCasesTitle__B7cr-",dead:"homepage_dead__3RFuh",totConfirmed:"homepage_totConfirmed__Z7sFi",alive:"homepage_alive__1crLf",confirm:"homepage_confirm__3NibJ",liveInfoContainer:"homepage_liveInfoContainer__3b3Bf",countryImage:"homepage_countryImage__s6jqK"}},69:function(e,a,t){e.exports=t(99)},7:function(e,a,t){e.exports={maxConfirmed:"covidItem_maxConfirmed__35Vl_",Ul:"covidItem_Ul__2zlYK",countryLi:"covidItem_countryLi__3y2DT",country:"covidItem_country__2I0jI",info:"covidItem_info__1XKLn",latestNewsDiv:"covidItem_latestNewsDiv__1ZpKs",infoFirst:"covidItem_infoFirst__2nHxU",infoSecond:"covidItem_infoSecond__2LuJp",infoThird:"covidItem_infoThird__2imQ-",maxConfirmedDiv:"covidItem_maxConfirmedDiv__lNXDb"}},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),l=t(30),s=t(28),i=t(23),m=t(16),u=t.n(m),d=t(31),f=t(35),p=t.n(f),h=t(41),E="65cb0b3a150c4ecfb6031d583c73fa16";h.a.defaults.delay=1800;var v=function(){return Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://api.covid19api.com/summary");case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("GetSummaryError",e.t0),new Error;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},N=function(e){return Object(d.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.get("https://pixabay.com/api/?key=".concat("15302072-a81be31270c5e4995077a81d4","&q=").concat(e,"+flag&per+page=3&image_type=photo"));case 3:return 0===(t=a.sent).data.total&&h.a.error({title:"Sorry:",text:"Please write correct country"}),a.abrupt("return",t);case 8:throw a.prev=8,a.t0=a.catch(0),console.log("GetSummaryError",a.t0),new Error;case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()},g=function(){return Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://newsapi.org/v2/everything?qInTitle=covid&language=en&pageSize=3&sortBy=publishedAt&apiKey=".concat(E));case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("GetNewsError",e.t0),new Error;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},_=function(e){return Object(d.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.get("https://newsapi.org/v2/everything?qInTitle=covid+".concat(e,"&pageSize=3&sortBy=publishedAt&apiKey=").concat(E));case 3:return 0===(t=a.sent).data.totalResults&&h.a.error({title:"Sorry:",text:"News are unavailable now"}),a.abrupt("return",t);case 8:throw a.prev=8,a.t0=a.catch(0),console.log("GetNewsError",a.t0),new Error;case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()},w=t(36),C=t.n(w),y=t(135),b=t(138),S=t(140),T=t(144),L=t(142),D=t(141),x=t(145),k=t(143),I=t(147),F=Object(y.a)({root:{maxWidth:345},media:{height:220}}),j=function(e){var a=e.newsData,t=F();return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("h2",{className:C.a.title},"Latest news"),r.a.createElement("div",{className:C.a.newsContainer},a&&a.map((function(e){return r.a.createElement(b.a,{key:Object(I.a)(),className:t.root},r.a.createElement(S.a,null,r.a.createElement(D.a,{className:t.media,image:e.urlToImage||"https://image.flaticon.com/icons/svg/2780/2780120.svg",title:"Image Not Available"}),r.a.createElement(L.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},e.description))),r.a.createElement(T.a,null,r.a.createElement(x.a,{variant:"contained",color:"primary"},r.a.createElement("a",{className:C.a.link,href:e.url},"Learn More"))))}))),r.a.createElement("div",{className:C.a.icons},"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))},O=t(6),R=t.n(O),Q=function(e){var a=e.Global;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("div",{className:R.a.homePageContainer},r.a.createElement("h1",{className:R.a.covidTitle}," COVID-19 Latest info:"),r.a.createElement("div",{className:R.a.totalCasesContainer},r.a.createElement("h2",{className:R.a.totalCasesTitle}," Total cases in the world:"),r.a.createElement("p",{className:R.a.totConfirmed},"Total Confirmed:",r.a.createElement("span",{className:R.a.confirm},a.Global.TotalConfirmed.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"New Confirmed cases :",r.a.createElement("span",{className:R.a.confirm},a.Global.NewConfirmed.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"Total Deaths :",r.a.createElement("span",{className:R.a.dead},a.Global.TotalDeaths.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"New Deaths :",r.a.createElement("span",{className:R.a.dead},a.Global.NewDeaths.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"Total Recovered :",r.a.createElement("span",{className:R.a.alive},a.Global.TotalRecovered.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"New Recovered :",r.a.createElement("span",{className:R.a.alive},a.Global.NewRecovered.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"Last updated at :","".concat(a.Date.substring(0,10)," ").concat(a.Date.substring(11,19))," ","UTC"))))},G=function(){var e=Object(n.useState)(),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(),l=Object(i.a)(c,2),s=l[0],m=l[1];return Object(n.useEffect)((function(){v().then((function(e){return o(e.data)}))}),[]),Object(n.useEffect)((function(){g().then((function(e){return m(e.data.articles)}))}),[]),r.a.createElement(r.a.Fragment,null,t&&s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{Global:t}),r.a.createElement(j,{newsData:s})))},V=t(7),W=t.n(V),B=function(e){var a=e.maxConfirmed,t=e.maxDead,n=e.totalRecovered;return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",{className:W.a.infoFirst}," Top Total Cases"),r.a.createElement("ul",{className:W.a.maxConfirmed},a.map((function(e){return r.a.createElement("li",{key:e.Country,className:W.a.countryLi},r.a.createElement("div",{className:W.a.liDiv},r.a.createElement("h2",{className:W.a.country},e.Country),r.a.createElement("p",{className:W.a.infoFirst},"Total cases:",e.TotalConfirmed.toLocaleString()),r.a.createElement("p",{className:W.a.infoFirst},"New cases:",e.NewConfirmed.toLocaleString()),r.a.createElement("p",{className:W.a.infoSecond},"Total deaths:",e.TotalDeaths.toLocaleString()),r.a.createElement("p",{className:W.a.infoSecond},"New deaths:",e.NewDeaths.toLocaleString()),r.a.createElement("p",{className:W.a.infoThird},"Total recovered:",e.TotalRecovered.toLocaleString()),r.a.createElement("p",{className:W.a.infoThird},"New recovered:",e.NewRecovered.toLocaleString())),r.a.createElement("div",{className:W.a.latestNewsDiv}))})))),r.a.createElement("div",null,r.a.createElement("h2",{className:W.a.infoSecond}," Top Total Deaths"),r.a.createElement("ul",{className:W.a.maxConfirmed},t.map((function(e){return r.a.createElement("li",{key:e.Country,className:W.a.countryLi},r.a.createElement("div",{className:W.a.liDiv},r.a.createElement("h2",{className:W.a.country},e.Country),r.a.createElement("p",{className:W.a.infoSecond},"Total deaths:",e.TotalDeaths.toLocaleString().toLocaleString()),r.a.createElement("p",{className:W.a.infoSecond},"New deaths:",e.NewDeaths.toLocaleString().toLocaleString()),r.a.createElement("p",{className:W.a.infoFirst},"Total cases:",e.TotalConfirmed.toLocaleString().toLocaleString()),r.a.createElement("p",{className:W.a.infoFirst},"New cases:",e.NewConfirmed.toLocaleString().toLocaleString()),r.a.createElement("p",{className:W.a.infoThird},"Total recovered:",e.TotalRecovered.toLocaleString().toLocaleString()),r.a.createElement("p",{className:W.a.infoThird},"New recovered:",e.NewRecovered.toLocaleString().toLocaleString())),r.a.createElement("div",{className:W.a.latestNewsDiv}))})))),r.a.createElement("div",{className:W.a.maxConfirmedDiv},r.a.createElement("h2",{className:W.a.infoThird}," Top Total Recovered"),r.a.createElement("ul",{className:W.a.maxConfirmed},n.map((function(e){return r.a.createElement("li",{key:e.Country,className:W.a.countryLi},r.a.createElement("div",{className:W.a.liDiv},r.a.createElement("h2",{className:W.a.country},e.Country),r.a.createElement("p",{className:W.a.infoThird},"Total recovered:",e.TotalRecovered.toLocaleString()),r.a.createElement("p",{className:W.a.infoThird},"New recovered:",e.NewRecovered.toLocaleString()),r.a.createElement("p",{className:W.a.infoSecond},"Total deaths:",e.TotalDeaths.toLocaleString()),r.a.createElement("p",{className:W.a.infoSecond},"New deaths:",e.NewDeaths.toLocaleString()),r.a.createElement("p",{className:W.a.infoFirst},"Total cases:",e.TotalConfirmed.toLocaleString()),r.a.createElement("p",{className:W.a.infoFirst},"New cases:",e.NewConfirmed.toLocaleString())))}))))))},K=t(42),P=t.n(K),q=function(){Object(n.useEffect)((function(){m()}),[]);var e,a,t,o=Object(n.useState)(),c=Object(i.a)(o,2),l=c[0],s=c[1],m=function(){v().then((function(e){return s(e.data.Countries)}))};return l&&(e=l.sort((function(e,a){return a.TotalConfirmed-e.TotalConfirmed})).slice([0],[5]),a=l.sort((function(e,a){return a.TotalDeaths-e.TotalDeaths})).slice([0],[5]),t=l.sort((function(e,a){return a.TotalRecovered-e.TotalRecovered})).slice([0],[5])),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.container},r.a.createElement("div",{className:P.a.div_wrapper},r.a.createElement(B,{maxConfirmed:e,maxDead:a,totalRecovered:t}))))},A=t(40),U=t(25),z=t(56),J=t(57),H=t(60),M=t(146),X=Object(y.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:300}}}})),Z=function(e){var a=e.getQueryonSubmit,t=X();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:a},r.a.createElement("div",null,r.a.createElement(M.a,{className:"formDiv",label:"Country",id:"outlined-size-normal",defaultValue:"",variant:"filled",color:"secondary",autoFocus:!0}))))},Y=function(e){var a=e.searchinfo,t=e.flagQuery;return r.a.createElement(r.a.Fragment,null,a&&t&&r.a.createElement("div",{className:R.a.liveInfoContainer},r.a.createElement("div",{className:R.a.countryImage},r.a.createElement("img",{className:R.a.flag,alt:"not available",src:t[0].webformatURL})),r.a.createElement("div",{className:R.a.homePageContainer},r.a.createElement("div",null,"Country:",r.a.createElement("p",null,a.Country)),r.a.createElement("h3",null," Daily statistics:"),r.a.createElement("ul",{className:R.a.liveInfoList},r.a.createElement("li",{key:a.Date,className:R.a.oneDayInfo},r.a.createElement("p",{className:R.a.totConfirmed},"Total Confirmed:",r.a.createElement("span",{className:R.a.confirm},a.TotalConfirmed.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"New Confirmed cases :",r.a.createElement("span",{className:R.a.confirm},a.NewConfirmed.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"Total Deaths :",r.a.createElement("span",{className:R.a.dead},a.TotalDeaths.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"New Deaths :",r.a.createElement("span",{className:R.a.dead},a.NewDeaths.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"Total Recovered :",r.a.createElement("span",{className:R.a.alive},a.TotalRecovered.toLocaleString())),r.a.createElement("p",{className:R.a.totConfirmed},"New Recovered :",r.a.createElement("span",{className:R.a.alive},a.NewRecovered.toLocaleString())))))))},$=function(e){function a(){var e,t;Object(A.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(z.a)(this,(e=Object(J.a)(a)).call.apply(e,[this].concat(r)))).state={searchQuery:null,searchinfo:null,flagQuery:null,newsData:null},t.getQueryonSubmit=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.setState({searchQuery:a.target.elements[0].value});case 3:return e.next=5,v().then((function(e){return t.setState({searchinfo:e.data.Countries.find((function(e){return e.Country.toLowerCase()===t.state.searchQuery.toLowerCase()}))})}));case 5:return e.next=7,N(t.state.searchQuery).then((function(e){return t.setState({flagQuery:e.data.hits})}));case 7:return e.next=9,_(t.state.searchQuery).then((function(e){return t.setState({newsData:e.data.articles,searchQuery:""})}));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t}return Object(H.a)(a,e),Object(U.a)(a,[{key:"render",value:function(){var e=this.state,a=e.searchinfo,t=e.flagQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{getQueryonSubmit:this.getQueryonSubmit}),r.a.createElement(Y,{searchinfo:a,flagQuery:t}),r.a.createElement(j,{newsData:this.state.newsData}))}}]),a}(n.Component),ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/home",component:G}),r.a.createElement(s.b,{path:"/searh_page/",component:$}),r.a.createElement(s.b,{exact:!0,path:"/topFive",component:q})),r.a.createElement(s.a,{to:"/home"}))},ae=t(24),te=t.n(ae),ne=function(){var e=ee;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a.header},r.a.createElement("ul",{className:te.a.linkList},r.a.createElement("li",{className:te.a.linkItem},r.a.createElement(l.b,{className:te.a.appLink,to:"/home",activeStyle:{color:"red",textDecoration:"none",fontWeight:"500"},style:{marginRight:"16px",color:"green",textDecoration:"none",fontWeight:"500"}}," ","HomePage")),r.a.createElement("li",{className:te.a.linkItem},r.a.createElement(l.b,{className:te.a.appLink,to:"/searh_page",activeStyle:{color:"red",textDecoration:"none",fontWeight:"500"},style:{color:"green",textDecoration:"none",fontWeight:"500"}},"SearchInfo")),r.a.createElement("li",{className:te.a.linkItem},r.a.createElement(l.b,{className:te.a.appLink,to:"/topFive/",activeStyle:{color:"red",textDecoration:"none",fontWeight:"500"},style:{color:"green",textDecoration:"none",fontWeight:"500"}},"Top 5 countries"))),e())))},re=t(59),oe=t.n(re),ce=(t(97),t(98),function(){return r.a.createElement("div",{className:oe.a.background},r.a.createElement(ne,null))});c.a.render(r.a.createElement(l.a,null,r.a.createElement(ce,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.c75c3b35.chunk.js.map