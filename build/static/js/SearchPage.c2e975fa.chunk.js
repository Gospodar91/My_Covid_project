(this.webpackJsonplesson=this.webpackJsonplesson||[]).push([[4],{118:function(e,a,t){e.exports={SearchFormContainer:"searchForm_SearchFormContainer__1QF0i"}},170:function(e,a,t){"use strict";t.r(a);var n=t(64),r=t.n(n),l=t(65),c=t(89),s=t(66),o=t(116),i=t(117),m=t(121),u=t(0),f=t.n(u),d=t(155),h=t(167),E=t(118),g=t.n(E),p=Object(d.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%"}}}})),y=function(e){var a=e.getQueryonSubmit,t=p();return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:g.a.SearchFormContainer},f.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:a},f.a.createElement("div",null,f.a.createElement(h.a,{className:"formDiv",label:"Country",id:"outlined-size-normal",defaultValue:"",variant:"filled",color:"secondary",autoFocus:!0})))))},v=t(62),N=t(84),C=t(88),w=t.n(C),S=function(e){var a=e.searchinfo,t=e.flagQuery;return f.a.createElement(f.a.Fragment,null,a&&t&&f.a.createElement("div",{className:w.a.liveInfoContainer},f.a.createElement("div",{className:w.a.countryImage},f.a.createElement("img",{className:w.a.flag,alt:"not available",src:t[0].webformatURL})),f.a.createElement("div",{className:w.a.homePageContainer},f.a.createElement("div",null,"Country:",f.a.createElement("p",null,a.Country)),f.a.createElement("h3",null," Daily statistics:"),f.a.createElement("ul",{className:w.a.liveInfoList},f.a.createElement("li",{key:a.Date,className:w.a.oneDayInfo},f.a.createElement("p",{className:w.a.totConfirmed},"Total Confirmed:",f.a.createElement("span",{className:w.a.confirm},a.TotalConfirmed.toLocaleString())),f.a.createElement("p",{className:w.a.totConfirmed},"New Confirmed cases :",f.a.createElement("span",{className:w.a.confirm},a.NewConfirmed.toLocaleString())),f.a.createElement("p",{className:w.a.totConfirmed},"Total Deaths :",f.a.createElement("span",{className:w.a.dead},a.TotalDeaths.toLocaleString())),f.a.createElement("p",{className:w.a.totConfirmed},"New Deaths :",f.a.createElement("span",{className:w.a.dead},a.NewDeaths.toLocaleString())),f.a.createElement("p",{className:w.a.totConfirmed},"Total Recovered :",f.a.createElement("span",{className:w.a.alive},a.TotalRecovered.toLocaleString())),f.a.createElement("p",{className:w.a.totConfirmed},"New Recovered :",f.a.createElement("span",{className:w.a.alive},a.NewRecovered.toLocaleString())))))))},b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),m=0;m<n;m++)s[m]=arguments[m];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).state={searchQuery:null,searchinfo:null,flagQuery:null,newsData:null},t.getQueryonSubmit=function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,t.setState({searchQuery:a.target.elements[0].value});case 3:return e.next=5,v.a.getSummary().then((function(e){return t.setState({searchinfo:e.data.Countries.find((function(e){return e.Country.toLowerCase()===t.state.searchQuery.toLowerCase()}))})}));case 5:return e.next=7,v.a.getFlag(t.state.searchQuery).then((function(e){return t.setState({flagQuery:e.data.hits})}));case 7:return e.next=9,v.a.getSearchnews(t.state.searchQuery).then((function(e){return t.setState({newsData:e.data.articles,searchQuery:""})}));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.searchinfo,t=e.flagQuery;return f.a.createElement(f.a.Fragment,null,f.a.createElement(y,{getQueryonSubmit:this.getQueryonSubmit}),f.a.createElement(S,{searchinfo:a,flagQuery:t}),f.a.createElement(N.a,{newsData:this.state.newsData}))}}]),a}(u.Component);a.default=b}}]);
//# sourceMappingURL=SearchPage.c2e975fa.chunk.js.map