(this.webpackJsonpearthquackes=this.webpackJsonpearthquackes||[]).push([[0],{59:function(e,t,a){e.exports=a(92)},64:function(e,t,a){},65:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),c=(a(64),a(65),a(28)),l=a(39),u=a(14),s=n.createContext(),m=Object(c.GoogleApiWrapper)({apiKey:"AIzaSyAl_XkmnroVhmrli2PoEPdK6toxlUnPVe4",libraries:["places"]})((function(e){var t=e.google;return n.createElement(s.Provider,{value:t},e.children)})),g=(s.Consumer,a(80),function(){var e=o.a.useContext(s),t=o.a.useState(null),a=Object(u.a)(t,2),n=a[0],r=a[1],i=o.a.useState(""),c=Object(u.a)(i,2),m=c[0],g=c[1],d=o.a.useState([]),p=Object(u.a)(d,2),f=p[0],h=p[1],v=o.a.useState(null),E=Object(u.a)(v,2),x=E[0],b=E[1],y=o.a.useState([]),O=Object(u.a)(y,2),C=O[0],k=O[1],w=o.a.useState(6),j=Object(u.a)(w,2),S=j[0],L=j[1],N=o.a.useState({initialLat:null,initialLng:null,error:null}),A=Object(u.a)(N,2),_=A[0],I=A[1];o.a.useEffect((function(){if(e&&e.maps){var t=new e.maps.places.AutocompleteService;r(t)}}),[e]);var P=function(){navigator.geolocation.getCurrentPosition((function(e){I(Object(l.a)({},_,{initialLat:e.coords.latitude,initialLng:e.coords.longitude})),console.log("user loc")}),(function(e){return I({error:e.message})}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e3})};o.a.useEffect((function(){var t=new e.maps.Geocoder;null!=x&&t.geocode({placeId:x.place_id},(function(e,t){"OK"===t?(R(e[0].geometry.viewport),q(e[0].geometry.location.lat(),e[0].geometry.location.lng())):window.alert("Geocoder failed due to: "+t)}))}),[x]);var R=function(e){var t=e.getNorthEast().lat(),a=e.getNorthEast().lng(),n=e.getSouthWest().lat(),o=e.getSouthWest().lng();fetch("https://secure.geonames.org/earthquakesJSON?north="+t+"&south="+n+"&east="+a+"&west="+o+"&username=mildredgil").then((function(e){return e.json()})).then((function(e){k(e.earthquakes),L(6)}))},q=function(e,t){I(Object(l.a)({},_,{initialLat:e,initialLng:t}))};o.a.useEffect((function(){var e=!0;if(null!=n){if(""!==m){var t={input:m,types:["geocode"]};return n.getPlacePredictions(t,(function(t,a){e&&h(t||[])})),function(){e=!1}}h([])}}),[m,fetch]);return{state:_,getUserLocation:P,handleChange:function(e){g(e.target.value)},onChangeValue:function(e,t){b(t)},options:f,markersData:C,google:e,zoom:S,onReadyMap:function(e,t){P()},get10LastYear:function(){var e=new Date;fetch("https://secure.geonames.org/earthquakesJSON?north=90&south=-90&east=180&west=-180&maxRows=500&date="+e.getFullYear()+"-"+(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+e.getDate()+"&username=mildredgil").then((function(e){return e.json()})).then((function(e){k(e.earthquakes.sort((function(e,t){return e.magnitude<t.magnitude})).slice(0,10))})),L(2)}}}),d=n.createContext(),p=(d.Consumer,a(5)),f=Object(p.a)((function(){return{map:{height:"85vh !important"}}}))((function(e){var t=e.classes,a=o.a.useContext(d),n=a.state,r=a.google,i=a.markersData,l=a.zoom,u=a.onReadyMap;return o.a.createElement(c.Map,{google:r,zoom:l,onReady:u,className:t.map,center:{lat:n.initialLat,lng:n.initialLng}},i.length>0&&i.map((function(e){var t=null;return t=e.magnitude<3?"http://maps.google.com/mapfiles/ms/icons/green-dot.png":e.magnitude<6?"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png":"http://maps.google.com/mapfiles/ms/icons/red-dot.png",o.a.createElement(c.Marker,{position:{lat:e.lat,lng:e.lng},title:"magnitude: "+e.magnitude,data:e,icon:{url:t,anchor:new r.maps.Point(32,32),scaledSize:new r.maps.Size(32,32)}})})))})),h=a(134),v=a(135),E=a(50),x=a.n(E),b=a(132),y=a(133),O=a(129),C=a(47),k=a.n(C),w=Object(O.a)((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),j=function(){var e=w(),t=o.a.useContext(d),a=t.handleChange,n=t.onChangeValue,r=t.options;return o.a.createElement(v.a,{id:"google-map-demo",style:{width:"75%",margin:"20px 20px 20px 10px"},getOptionLabel:function(e){return"string"===typeof e?e:e.description},filterOptions:function(e){return e},options:r,autoComplete:!0,includeInputInList:!0,disableOpenOnFocus:!0,onChange:n,renderInput:function(e){return o.a.createElement(h.a,Object.assign({},e,{label:"Add a location",variant:"outlined",fullWidth:!0,onChange:a}))},renderOption:function(t){var a=t.structured_formatting.main_text_matched_substrings,n=k()(t.structured_formatting.main_text,a.map((function(e){return[e.offset,e.offset+e.length]})));return o.a.createElement(b.a,{container:!0,alignItems:"center"},o.a.createElement(b.a,{item:!0},o.a.createElement(x.a,{className:e.icon})),o.a.createElement(b.a,{item:!0,xs:!0},n.map((function(e,t){return o.a.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),o.a.createElement(y.a,{variant:"body2",color:"textSecondary"},t.structured_formatting.secondary_text)))}})},S=a(51),L=a.n(S),N=Object(p.a)((function(){return{container:{width:"100%"},header:{display:"flex",width:"100%"},counter:{margin:"auto",padding:"15px 20px",borderRadius:"10px",backgroundColor:"#ffffff69"},star:{margin:"auto",padding:"15px 20px",borderRadius:"10px",backgroundColor:"#ffffff69",cursor:"pointer",display:"flex",verticalAlign:"middle"},starIcon:{paddingRight:"5px"}}}))((function(e){var t=e.classes,a=o.a.useContext(d),n=a.markersData,r=a.get10LastYear;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:t.header},o.a.createElement(j,null),o.a.createElement("label",{className:t.counter},"count: ",n.length),o.a.createElement("div",{onClick:r,className:t.star},o.a.createElement(L.a,{color:"primary",className:t.starIcon}),"Last Earthquakes!"))),o.a.createElement("div",{className:t.container},o.a.createElement(f,null)))}));i.a.render(o.a.createElement(m,null,o.a.createElement((function(e){var t=g();return n.createElement(d.Provider,{value:t},e.children)}),null,o.a.createElement(N,null))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6e282ef8.chunk.js.map