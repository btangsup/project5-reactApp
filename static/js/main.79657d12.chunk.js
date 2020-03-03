(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{29:function(e,t,a){e.exports=a(64)},34:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/blackWhite-logo.f1f414da.png"},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(5),r=a.n(o),c=(a(34),a(6)),s=a(7),i=a(9),m=a(8),u=a(10),d=a(15),p=function(){return l.a.createElement("div",{className:"preloaderContainer"},l.a.createElement("h2",null,"Fetching Events"),l.a.createElement("span",null,l.a.createElement("i",{class:"preloader fas fa-music"})))},h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("main",{id:"main"},l.a.createElement("div",{className:"genreBackground"},l.a.createElement("h1",{className:"genreTitle"},""===this.props.genreTitle?"Random Genre":"\ud83c\udfb5 T.O. ".concat(this.props.genreTitle," Results\ud83c\udfb5"))),l.a.createElement("ul",{className:"flexContainer wrapper"},this.props.userSelectedEvent?this.props.event.map((function(e){return l.a.createElement("li",{key:e.id,className:"resultContainer"},l.a.createElement("h2",{className:"eventTitle"},e.name),l.a.createElement("h3",{className:"eventVenue"},e._embedded.venues[0].name),l.a.createElement("h3",{className:"eventDate"},e.dates.start.localDate),l.a.createElement("h3",{className:"eventTime"},e.dates.start.localTime),l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{className:"eventImg",src:e.images[4].url,alt:e.name})),l.a.createElement("a",{className:"ticketLink",target:"_blank",href:e.url},"Buy Tickets"))})):console.log("nothing")),l.a.createElement("button",{className:"scrollToTopBtn",onClick:this.props.scrollToTop},l.a.createElement("i",{className:"far fa-arrow-alt-circle-up"}),l.a.createElement("p",null,"scroll to top")))}}]),t}(n.Component),v=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer wrapper"},l.a.createElement("p",null,"Created by Brandon Tang. Juno College 2020. API provided by ",l.a.createElement("a",{className:"ticketmaster",href:"https://developer.ticketmaster.com/products-and-docs/apis/getting-started/"},"Ticketmaster"))))},E=a(28),g=a.n(E),f=(a(62),function(e){function t(){var e;return Object(c.a)(this,t),console.log("constructor"),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleSelectGenreChange=function(t){console.log(t.target.selectedOptions[0].text),e.setState({genreSelection:t.target.value,selectedGenreTitle:t.target.selectedOptions[0].text})},e.handleFormSubmit=function(t){t.preventDefault(),console.log("being clicked"),console.log("componentDidMount"),e.setState({isLoading:!0}),g()({url:"https://app.ticketmaster.com/discovery/v2/events.json",method:"GET",dataResponse:"json",params:{apikey:"MWm7x4F8toW2nr8tUwIiGndgapxXqsxE",format:"json",city:"toronto",sort:"date,asc",classificationName:"music",genreId:e.state.genreSelection}}).then((function(t){t=t.data._embedded.events,console.log(t),e.setState({event:t,userSelectedEvent:!0,isLoading:!1}),d.scroller.scrollTo("main",{smooth:!0,duration:500})}))},e.scrollToTop=function(){console.log("being clicked"),d.scroller.scrollTo("header",{smooth:!0,duration:700})},e.state={filteredGenreResult:[],musicGenreResults:[],genreSelection:"",selectedGenreTitle:"",userSelectedEvent:!1,isLoading:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("render"),console.log(this.state.event),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"hero",id:"header"},l.a.createElement("div",{className:"title"},l.a.createElement("img",{src:a(63),className:"logo",alt:"Music T.O. Event Logo"})),l.a.createElement("form",{action:"",className:"form"},l.a.createElement("label",{htmlFor:"whichGenre"}),l.a.createElement("select",{name:"whichGenre",id:"whichGenre",className:"selectBtn",onChange:this.handleSelectGenreChange},l.a.createElement("option",{value:""},"Choose a Genre"),l.a.createElement("option",{value:"KnvZfZ7vAeA"},"Rock"),l.a.createElement("option",{value:"KnvZfZ7vAvF"},"EDM"),l.a.createElement("option",{value:"KnvZfZ7vAee"},"R&B"),l.a.createElement("option",{value:"KnvZfZ7vAv1"},"Rap"),l.a.createElement("option",{value:"KnvZfZ7vAvE"},"Jazz")),l.a.createElement("button",{className:"startBtn",type:"submit",onClick:this.handleFormSubmit},"T.O. the Event")),this.state.isLoading?l.a.createElement(p,null):null),void 0===this.state.event?null:l.a.createElement(h,{event:this.state.event,genreTitle:this.state.selectedGenreTitle,userSelectedEvent:this.state.userSelectedEvent,scrollToTop:this.scrollToTop}),l.a.createElement(v,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.79657d12.chunk.js.map