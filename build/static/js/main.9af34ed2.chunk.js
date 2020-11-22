(this.webpackJsonpravenous=this.webpackJsonpravenous||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),c=(a(13),a(1)),o=a(2),l=a(5),u=a(3),h=a(4),m=(a(14),a(15),a(16),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:""})),s.a.createElement("h2",null,this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,this.props.business.state," ",this.props.business.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category),s.a.createElement("h3",{className:"rating"},this.props.business.rating," out of 5 Spoons"),s.a.createElement("p",null,this.props.business.reviewCount," reviews"))))}}]),a}(s.a.Component)),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(m,{key:e.id,business:e})})))}}]),a}(s.a.Component),d=(a(17),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleSearch=n.handleSearch.bind(Object(l.a)(n)),n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},n}return Object(o.a)(a,[{key:"getSortByClass",value:function(e){return e===this.state.sortBy?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var a=e.sortByOptions[t];return s.a.createElement("li",{className:e.getSortByClass(a),key:a,onClick:e.handleSortByChange.bind(e,a)},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Search Businesses",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{onClick:this.handleSearch},"Let's Go")))}}]),a}(s.a.Component)),v={KEY:"FqFP3sObUp3oxcmMhfkHbG4R4fp5lHrDVSvTda1rNyu_oEnU3G7tRi2NAje1qiB5cX_AnIZGJmosrBLX_oBp2FY7siKylx8Jgvct8qpRhGh4CraFROfjKiWrI32GXnYx"},b={search:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat(v.KEY)}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"searchYelp",value:function(e,t,a){var n=this;b.search(e,t,a).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"Ravenous"),s.a.createElement(d,{searchYelp:this.searchYelp}),s.a.createElement(p,{businesses:this.state.businesses}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.9af34ed2.chunk.js.map