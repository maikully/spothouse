(this.webpackJsonpspothouse=this.webpackJsonpspothouse||[]).push([[0],{11:function(e,t,s){},29:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(22),c=s.n(r),i=(s(29),s(5)),o=s(6),u=s(9),l=s(8),h=(s(11),s(12)),d=s.n(h),j=s(23),p=s(3),b=s(4),m=["user-top-read","user-read-currently-playing","user-read-playback-state","user-modify-playback-state"],g=s(24),f=s(7),O=s.n(f),x=s(0),y=function(e){var t=function(e){var t={increased:e.target.className};O.a.post("http://localhost:4567/rankings",t,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){})).catch((function(e){console.log(e)}))};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("center",{children:[Object(x.jsx)("h2",{children:"Queue"}),Object(x.jsx)("br",{}),e.songQueue[0]&&Object(x.jsx)("table",{id:"table",className:"table",border:"1px","table-layour":"fixed",bordercolor:"black",children:Object(x.jsx)("tbody",{children:e.songQueue.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{align:"center",children:Object(x.jsx)("input",{type:"button",className:e.name,value:"Upvote",onClick:t})}),Object(x.jsx)("td",{align:"center",children:Object(x.jsx)("img",{src:e.artwork,width:"50",align:"center"})}),Object(x.jsx)("td",{align:"center",style:{fontSize:13,padding:10},children:e.name})]})}))})})]}),Object(x.jsx)("br",{})]})},v=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var s=t.split("=");e[s[0]]=decodeURIComponent(s[1])}return e}),{});window.location.hash="";var k=v,_=s(13);var S=function(e){var t=Object(n.useRef)(0),s=Object(n.useState)(0),a=Object(_.a)(s,2),r=a[0],c=a[1],i=Object(n.useState)(""),o=Object(_.a)(i,2);return o[0],o[1],Object(n.useEffect)((function(){t.current=e.force,c(e.force)}),[e.force]),Object(x.jsxs)("div",{className:"TextBox",children:[Object(x.jsx)("div",{children:e.label}),Object(x.jsx)("input",{type:"text",value:r,onChange:function(t){return function(e,t){e.onChange(t.target.value)}(e,t)}})]})},w=(s(53),function(e){var t={width:100*e.progress_ms/e.item.duration_ms+"%"};return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"main-wrapper",children:[Object(x.jsx)("div",{className:"now-playing__img",children:Object(x.jsx)("img",{src:e.item.album.images[0].url})}),Object(x.jsxs)("div",{className:"now-playing__side",children:[Object(x.jsx)("div",{className:"now-playing__name",children:e.item.name}),Object(x.jsx)("div",{className:"now-playing__artist",children:e.item.artists[0].name}),Object(x.jsx)("div",{className:"progress",children:Object(x.jsx)("div",{className:"progress__bar",style:t})})]})]})})}),Q=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).updateBackendQueue=function(){for(var t=[],s=[],n=[],a=0;a<e.state.currentQueue.length;a++){var r=e.state.currentQueue[a].name;t.push(r)}var c={songs:t};O.a.post("http://localhost:4567/queue",c,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(t){s=t.data.songList;for(var a=0;a<s.length;a++)for(var r=s[a].name,c=0;c<e.state.currentQueue.length;c++)e.state.currentQueue[c].name===r&&n.push(e.state.currentQueue[c]);e.setState({currentQueue:n})})).catch((function(e){console.log(e)}))},e.addToSpotifyQueue=function(t){var s=encodeURIComponent(e.state.currentQueue[0].uri.trim());b.ajax({url:"https://api.spotify.com/v1/me/player/queue?uri="+s,type:"POST",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+t)},success:function(t){e.state.currentQueue.shift(),e.setState({added:!0})}})},e.scrollToBottom=function(){e.endPage.scrollIntoView({behavior:"smooth"})},e.state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0},is_playing:"Paused",progress_ms:0,no_data:!1,no_top_data:!1,searchQuery:"",searchResults:[{name:"",artist:"",uri:"",artwork:""}],clickedSongURI:"",currentQueue:[],topTracks:[],count:0,added:!1},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(p.a)(e)),e.tick=e.tick.bind(Object(p.a)(e)),e}return Object(o.a)(s,[{key:"changeQuery",value:function(e){this.setState({searchQuery:e}),console.log(e)}},{key:"componentDidMount",value:function(){var e=this,t=k.access_token;t&&(this.setState({token:t}),this.getTopTracks(t),this.getCurrentlyPlaying(t)),this.interval=setInterval((function(){return e.tick()}),500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"tick",value:function(){this.state.token&&(this.getCurrentlyPlaying(this.state.token),this.updateBackendQueue(),this.state.progress_ms/this.state.item.duration_ms>.95&!this.state.added&&this.state.currentQueue.length>0&&this.addToSpotifyQueue(this.state.token))}},{key:"componentDidUpdate",value:function(e,t){t.count!==this.state.count&&this.scrollToBottom(),t.item.name!==this.state.item.name&&this.setState({added:!1})}},{key:"getSearch",value:function(e,t){var s=this,n=encodeURIComponent(t.trim());b.ajax({url:"https://api.spotify.com/v1/search?q="+n+"&type=track",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){if(e)return console.log(e),s.setState({searchResults:e.tracks.items.map((function(e){return{name:e.name,artist:e.artists[0].name,uri:e.uri,artwork:e.album.images[0].url}}))}),void console.log(s.state.searchResults);s.setState({item:e.item})}})}},{key:"getCurrentlyPlaying",value:function(e){var t=this;b.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){e?t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms,no_data:!1}):t.setState({no_data:!0})}})}},{key:"getTopTracks",value:function(e){var t=this;b.ajax({url:"https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){e?(t.setState({topTracks:e.items.map((function(e){return{name:e.name,artist:e.artists[0].name,uri:e.uri,artwork:e.album.images[0].url}}))}),console.log(t.state.topTracks)):t.setState({no_top_data:!0})}})}},{key:"clickResult",value:function(){var e=Object(j.a)(d.a.mark((function e(t){var s,n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.currentTarget.textContent.split(" -, ")[0],n=t.currentTarget.textContent.split(" -, ")[1],a=t.currentTarget.textContent.split(" -, ")[2],r=t.currentTarget.textContent.split(" -, ")[3],e.next=6,this.setState({clickedSongURI:a});case 6:return c=this.state.currentQueue.concat({name:n,artist:s,artwork:r,uri:a}),e.next=9,this.setState({currentQueue:c});case 9:this.setState({count:this.state.count+1});case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:[!this.state.token&&Object(x.jsx)("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("41b5d9c762d04b6182549771690cf81c","&redirect_uri=").concat("https://spothouse-app.herokuapp.com/callback","&scope=").concat(m.join("%20"),"&response_type=token&show_dialog=true"),children:"Login to Spotify"}),this.state.token&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{label:"Search for a song:",force:this.state.searchQuery,onChange:this.changeQuery.bind(this)}),Object(x.jsx)("hr",{style:{height:10,visibility:"hidden"}}),Object(x.jsx)(g.AwesomeButton,{type:"primary",className:"btn btn--search",onPress:function(){e.getSearch(e.state.token,e.state.searchQuery)},children:"Submit"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{style:{fontSize:"small"},children:"Click on a song to add it to the queue!"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{class:"row",children:[Object(x.jsx)("div",{class:"column",children:this.state.token&&!this.state.no_top_data&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:"Your top tracks:"}),Object(x.jsx)("br",{}),this.state.topTracks.map((function(t){return Object(x.jsxs)("p",{className:"search",onClick:function(t){return e.clickResult(t)},children:[t.artist," -",Object(x.jsx)("span",{style:{display:"none"},children:","})," ",t.name,Object(x.jsxs)("div",{style:{display:"none"},children:[" -, ",t.uri," -, ",t.artwork]})]})})),Object(x.jsx)("br",{})]})}),Object(x.jsxs)("div",{class:"column",children:[Object(x.jsx)("hr",{width:"300",style:{visibility:"hidden"}}),this.state.searchResults[0].name&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:"Search results:"}),Object(x.jsx)("br",{}),this.state.searchResults.map((function(t){return Object(x.jsxs)("p",{className:"search",onClick:function(t){return e.clickResult(t)},children:[t.artist," -",Object(x.jsx)("span",{style:{display:"none"},children:","})," ",t.name,Object(x.jsxs)("div",{style:{display:"none"},children:[" -, ",t.uri," -, ",t.artwork]})]})}))]})]})]})]})]}),Object(x.jsx)("br",{}),this.state.token&&!this.state.no_data&&this.state.item&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.state.progress_ms}),Object(x.jsx)(y,{songQueue:this.state.currentQueue}),Object(x.jsx)("br",{})]}),this.state.no_data&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{songQueue:this.state.currentQueue}),Object(x.jsx)("br",{})]}),Object(x.jsx)("div",{style:{float:"left",clear:"both"},ref:function(t){e.endPage=t}})]})}}]),s}(n.Component),C=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"App-header",children:Object(x.jsx)("h2",{children:"SpotHouse!"})}),Object(x.jsx)("div",{children:Object(x.jsx)(Q,{})})]})}}]),s}(n.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),T()}},[[54,1,2]]]);
//# sourceMappingURL=main.497e444f.chunk.js.map