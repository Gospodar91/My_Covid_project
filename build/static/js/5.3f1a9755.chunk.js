(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[5],{106:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a.n(n),o=a(40),c=a(46),s=a(41),l=a(47),i=a(49),u=a(59),m=a(0),p=a.n(m),f=a(134),h=a(146),g=Object(f.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:300}}}})),d=function(e){var t=e.getQueryonSubmit,a=g();return p.a.createElement(p.a.Fragment,null,p.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off",onSubmit:t},p.a.createElement("div",null,p.a.createElement(h.a,{className:"formDiv",label:"Country",id:"outlined-size-normal",defaultValue:"",variant:"filled",color:"secondary",autoFocus:!0}))))},v=a(43),w=(a(106),a(55)),y=a(57),E=a.n(y),_=function(e){var t=e.searchinfo,a=e.flagQuery;return p.a.createElement(p.a.Fragment,null,t&&a&&p.a.createElement("div",{className:E.a.liveInfoContainer},p.a.createElement("div",{className:E.a.countryImage},p.a.createElement("img",{className:E.a.flag,alt:"not available",src:a[0].webformatURL})),p.a.createElement("div",{className:E.a.homePageContainer},p.a.createElement("div",null,"Country:",p.a.createElement("p",null,t.Country)),p.a.createElement("h3",null," Daily statistics:"),p.a.createElement("ul",{className:E.a.liveInfoList},p.a.createElement("li",{key:t.Date,className:E.a.oneDayInfo},p.a.createElement("p",{className:E.a.totConfirmed},"Total Confirmed:",p.a.createElement("span",{className:E.a.confirm},t.TotalConfirmed.toLocaleString())),p.a.createElement("p",{className:E.a.totConfirmed},"New Confirmed cases :",p.a.createElement("span",{className:E.a.confirm},t.NewConfirmed.toLocaleString())),p.a.createElement("p",{className:E.a.totConfirmed},"Total Deaths :",p.a.createElement("span",{className:E.a.dead},t.TotalDeaths.toLocaleString())),p.a.createElement("p",{className:E.a.totConfirmed},"New Deaths :",p.a.createElement("span",{className:E.a.dead},t.NewDeaths.toLocaleString())),p.a.createElement("p",{className:E.a.totConfirmed},"Total Recovered :",p.a.createElement("span",{className:E.a.alive},t.TotalRecovered.toLocaleString())),p.a.createElement("p",{className:E.a.totConfirmed},"New Recovered :",p.a.createElement("span",{className:E.a.alive},t.NewRecovered.toLocaleString())))))))},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={searchQuery:null,searchinfo:null,flagQuery:null,newsData:null},a.getQueryonSubmit=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.setState({searchQuery:t.target.elements[0].value});case 3:return e.next=5,v.a.getSummary().then((function(e){return a.setState({searchinfo:e.data.Countries.find((function(e){return e.Country.toLowerCase()===a.state.searchQuery.toLowerCase()}))})}));case 5:return e.next=7,v.a.getFlag(a.state.searchQuery).then((function(e){return a.setState({flagQuery:e.data.hits})}));case 7:return e.next=9,v.a.getSearchnews(a.state.searchQuery).then((function(e){return a.setState({newsData:e.data.articles,searchQuery:""})}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(o.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log("this.state.searchQuery",this.state.searchQuery);var e=this.state,t=e.searchinfo,a=e.flagQuery;return p.a.createElement(p.a.Fragment,null,p.a.createElement(d,{getQueryonSubmit:this.getQueryonSubmit}),p.a.createElement(_,{searchinfo:t,flagQuery:a}),p.a.createElement(w.a,{newsData:this.state.newsData}))}}]),t}(m.Component);t.default=N},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(39),r=a.n(n),o=a(40),c=a(53),s=a.n(c),l=a(54),i="65cb0b3a150c4ecfb6031d583c73fa16";l.a.defaults.delay=1800;var u={getSummary:function(){return Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://api.covid19api.com/summary");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("GetSummaryError",e.t0),new Error;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getFlag:function(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("https://pixabay.com/api/?key=".concat("15302072-a81be31270c5e4995077a81d4","&q=").concat(e,"+flag&per+page=3&image_type=photo"));case 3:return 0===(a=t.sent).data.total&&l.a.error({title:"Sorry:",text:"Please write correct country"}),t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(0),console.log("GetSummaryError",t.t0),new Error;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getNews:function(){return Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://newsapi.org/v2/everything?qInTitle=covid&language=en&pageSize=5&sortBy=publishedAt&apiKey=".concat(i));case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),console.log("GetNewsError",e.t0),new Error;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getSearchnews:function(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("https://newsapi.org/v2/everything?qInTitle=covid+".concat(e,"&pageSize=5&sortBy=publishedAt&apiKey=").concat(i));case 3:return a=t.sent,console.log("DATA NEWS",a),0===a.data.totalResults&&l.a.error({title:"Sorry:",text:"News are unavailable now"}),t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(0),console.log("GetNewsError",t.t0),new Error;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},55:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(56),c=a.n(o),s=a(134),l=a(139),i=a(140),u=a(144),m=a(142),p=a(141),f=a(145),h=a(143),g=Object(s.a)({root:{maxWidth:345},media:{height:200}});t.a=function(e){var t=e.newsData,a=g();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.a.newsContainer},t&&(r.a.createElement("h2",{className:c.a.title},"Latest news"),t.map((function(e){return r.a.createElement(l.a,{key:e.title,className:a.root},r.a.createElement(i.a,null,r.a.createElement(p.a,{className:a.media,image:e.urlToImage,title:"Not Available"}),r.a.createElement(m.a,null,r.a.createElement(h.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p"},e.description))),r.a.createElement(u.a,null,r.a.createElement(f.a,{variant:"contained",color:"primary"},r.a.createElement("a",{className:c.a.link,href:e.url},"Learn More"))))})))),r.a.createElement("div",{className:c.a.icons},"Icons made by"," ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," ","from"," ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))}},56:function(e,t,a){e.exports={newsContainer:"latestNews_newsContainer__2mVq1",link:"latestNews_link__1BatP",icons:"latestNews_icons__1FhKi",title:"latestNews_title__3IVku"}},57:function(e,t,a){e.exports={link:"homepage_link__1z91W",homePageContainer:"homepage_homePageContainer__3Ux_t",covidTitle:"homepage_covidTitle__c_o8h",totalCasesContainer:"homepage_totalCasesContainer__1xGAV",totalCasesTitle:"homepage_totalCasesTitle__B7cr-",dead:"homepage_dead__3RFuh",totConfirmed:"homepage_totConfirmed__Z7sFi",alive:"homepage_alive__1crLf",confirm:"homepage_confirm__3NibJ",liveInfoContainer:"homepage_liveInfoContainer__3b3Bf",countryImage:"homepage_countryImage__s6jqK"}}}]);
//# sourceMappingURL=5.3f1a9755.chunk.js.map