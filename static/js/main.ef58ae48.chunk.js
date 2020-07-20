(this.webpackJsonpravenous=this.webpackJsonpravenous||[]).push([[0],{177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(82),i=n.n(r),c=n(13),o=n(14),l=n(12),u=n(16),h=n(15),p=(n(177),n(178),n(179),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),s.a.createElement("h2",null,this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,"".concat(this.props.business.state," ").concat(this.props.business.zipCode))),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category.toUpperCase()),s.a.createElement("h3",{className:"rating"},"".concat(this.props.business.rating," stars")),s.a.createElement("p",null,"".concat(this.props.business.reviewCount," reviews")))))}}]),n}(s.a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(p,{business:e,key:e.id})})))}}]),n}(s.a.Component),d=(n(180),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},a.handleTermChange=a.handleTermChange.bind(Object(l.a)(a)),a.handleLocationChange=a.handleLocationChange.bind(Object(l.a)(a)),a.handleSearch=a.handleSearch.bind(Object(l.a)(a)),a.handleSortByChange=a.handleSortByChange.bind(Object(l.a)(a)),a.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},a}return Object(o.a)(n,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var n=e.sortByOptions[t];return s.a.createElement("li",{className:e.getSortByClass(n),key:n,onClick:e.handleSortByChange.bind(e,n)},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Search Businesses",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("button",{onClick:this.handleSearch},"Let's Go")))}}]),n}(s.a.Component));n(181).config();var v={search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("ef5GDqXKo-gYP6FjG0s4Ve47C7OHe4PPoUIFyltnJPMG67PWnIY4MnWdOyRPRJlcfluV3slRPHzm9bfhn_XTr_gcQXR03rALQUMZsIprExElL6xXpUx9P66voWgBW3Yx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={businesses:[]},a.searchYelp=a.searchYelp.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"searchYelp",value:function(e,t,n){var a=this;v.search(e,t,n).then((function(e){a.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"ravenous"),s.a.createElement(d,{searchYelp:this.searchYelp}),s.a.createElement(m,{businesses:this.state.businesses}))}}]),n}(s.a.Component);i.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("/ravenous","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))},83:function(e,t,n){e.exports=n(184)}},[[83,1,2]]]);
//# sourceMappingURL=main.ef58ae48.chunk.js.map