(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(173),s=a(171),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(l.a,{location:this.props.location,title:e},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=c;var u="1097489062"},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(151),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(164),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},168:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},170:function(e){e.exports={data:{logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAFiVAABYlQHZbTfTAAAApklEQVQY06XOsQ4BQRSF4UFBIRIUChW2kFBotpQIKoVoaOhE4gWU9tm21evVm2gkohz+G2eTJTo3+XJmZ+7cWfd81xUJbohRdhTpsuW9/9j7Pk+bThxU1VBR7hBoXUIue+fHdx5FSxtYZ3HAUIdH3DW0hRUWmGCOJWZYY8/9ETnFGJv0BWve2lA8EKGtv2uiiw566CsH2rMMUENowwoa2sAFZ/dHvQAWgM7qWcIlvgAAAABJRU5ErkJggg==",width:112,height:28,src:"/static/09ec88a25c21004e2f7706eaae2f0a48/0ffd1/transmute-logo-text-white.png",srcSet:"/static/09ec88a25c21004e2f7706eaae2f0a48/0ffd1/transmute-logo-text-white.png 1x,\n/static/09ec88a25c21004e2f7706eaae2f0a48/094ed/transmute-logo-text-white.png 1.5x,\n/static/09ec88a25c21004e2f7706eaae2f0a48/f2b9b/transmute-logo-text-white.png 2x,\n/static/09ec88a25c21004e2f7706eaae2f0a48/e0c95/transmute-logo-text-white.png 3x"}}},site:{siteMetadata:{author:"Transmute",twitter:"@TransmuteNews",medium:"@Transmute"}}}}},171:function(e,t,a){"use strict";var n=a(172),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(199),c=a.n(s),u=a(153);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,links:[{rel:"stylesheet",href:"/styles.css"}],meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.twitter},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="771484716"},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Github DID",description:"Github DID is an experimental tool for developing and testing the Decentralized Identity, Credentials, Signature Suites and related Cryptography.",author:"Transmute",twitter:"@TransmuteNews"}}}}},173:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(158),s=a(174),c=a.n(s),u=a(176),d=c()({palette:{type:"light",primary:{light:u.blue[400],main:u.blue[700],dark:u.blue[800]},secondary:{light:u.lightBlue[400],main:u.lightBlue[500],dark:u.lightBlue[800]},error:u.red},typography:{useNextVariants:!0,fontFamily:['"Lato"','"Helvetica"','"Arial"',"sans-serif"].join(",")}}),m=(a(32),a(4)),p=a.n(m),h=a(153),f=a(155),g=a.n(f),E=a(186),w=a.n(E),y=a(187),b=a.n(y),v=a(188),x=a.n(v),A=a(175),C=a.n(A),k=a(166),S=a.n(k),T=a(189),D=a.n(T),B=a(177),R=a.n(B),q=a(182),I=a.n(q),F=a(181),G=a.n(F),Q=a(179),j=a.n(Q),N=a(180),U=a.n(N),M=a(183),O=a.n(M),W=a(184),L=a.n(W),H=a(185),P=a.n(H),J=a(167),Y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.classes,a=e.theme,n=e.open,r=e.handleDrawerClose;return o.a.createElement(R.a,{className:t.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:t.drawerPaper}},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(S.a,{onClick:r},"ltr"===a.direction?o.a.createElement(j.a,null):o.a.createElement(U.a,null))),o.a.createElement(G.a,null),o.a.createElement(I.a,null,o.a.createElement(h.Link,{to:"/"},o.a.createElement(O.a,{button:!0},o.a.createElement(L.a,null,o.a.createElement(J.e,null)),o.a.createElement(P.a,{primary:"Home"}))),o.a.createElement(h.Link,{to:"/tutorials"},o.a.createElement(O.a,{button:!0},o.a.createElement(L.a,null,o.a.createElement(J.c,null)),o.a.createElement(P.a,{primary:"Tutorials"}))),o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://github-did.com")}},o.a.createElement(L.a,null,o.a.createElement(J.d,null)),o.a.createElement(P.a,{primary:"Demo"})),o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://github-did.com/api/docs")}},o.a.createElement(L.a,null,o.a.createElement(J.a,null)),o.a.createElement(P.a,{primary:"API Docs"})),o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://github.com/transmute-industries/github-did")}},o.a.createElement(L.a,null,o.a.createElement(J.b,null)),o.a.createElement(P.a,{primary:"Github"}))),o.a.createElement(G.a,null),o.a.createElement(I.a,null,o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://identity.foundation/")}},o.a.createElement(L.a,null,o.a.createElement(J.f,null)),o.a.createElement(P.a,{primary:"DIF"})),o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://w3c-ccg.github.io/did-spec/")}},o.a.createElement(L.a,null,o.a.createElement(J.f,null)),o.a.createElement(P.a,{primary:"DID"})),o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://w3c-dvcg.github.io/ld-signatures/")}},o.a.createElement(L.a,null,o.a.createElement(J.f,null)),o.a.createElement(P.a,{primary:"LD Signatures"})),o.a.createElement(O.a,{button:!0,onClick:function(){window.open("https://w3c.github.io/vc-data-model/")}},o.a.createElement(L.a,null,o.a.createElement(J.f,null)),o.a.createElement(P.a,{primary:"Credentials"}))))},t}(o.a.Component);Y.propTypes={classes:p.a.object.isRequired,theme:p.a.object.isRequired,open:p.a.any.isRequired};var V=Y,X=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t}return r()(t,e),t.prototype.render=function(){var e,t,a=this.props,n=a.classes,r=a.theme,i=a.title,l=a.children,s=this.state.open;return o.a.createElement("div",{className:n.root},o.a.createElement(w.a,null),o.a.createElement(b.a,{position:"fixed",className:g()(n.appBar,(e={},e[n.appBarShift]=s,e))},o.a.createElement(x.a,{disableGutters:!s},o.a.createElement(S.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:g()(n.menuButton,s&&n.hide)},o.a.createElement(D.a,null)),o.a.createElement(h.Link,{to:"/"},o.a.createElement(C.a,{variant:"h5",noWrap:!0},i)))),o.a.createElement(V,{classes:n,theme:r,open:s,handleDrawerClose:this.handleDrawerClose}),o.a.createElement("main",{className:g()(n.content,(t={},t[n.contentShift]=s,t),"drawer-main")},o.a.createElement("div",{className:n.drawerHeader}),l))},t}(o.a.Component);X.propTypes={classes:p.a.object.isRequired,theme:p.a.object.isRequired,children:p.a.any.isRequired,title:p.a.string.isRequired};var Z=Object(l.withStyles)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,width:"100%",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},{withTheme:!0})(X),z=(a(197),a(170)),K=a(198),$=a.n(K),_=a(193),ee=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(h.StaticQuery,{query:"42821047",render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.twitter,r=t.medium,i=e.logo;return o.a.createElement(_.g,{className:"footer",style:{borderRadius:0,padding:"16px",paddingBottom:"16px",position:"relative",bottom:0}},o.a.createElement(_.b,{container:!0},o.a.createElement(_.b,{item:!0,xs:12,sm:6},o.a.createElement(_.h,{variant:"h5"},"About"),o.a.createElement("br",null),o.a.createElement(_.h,{variant:"body2"},"Github DID is an experimental tool for developing and testing the Decentralized Identity, Credentials, Signature Suites and related Cryptography."),o.a.createElement("br",null),o.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){window.open("https://transmute.industries")}},o.a.createElement($.a,{fixed:i.childImageSharp.fixed,alt:a,style:{marginBottom:"10px",minWidth:50}}))),o.a.createElement(_.b,{item:!0,xs:12,sm:6},o.a.createElement(_.h,{variant:"h5"},"Links"),o.a.createElement(_.c,{component:"nav"},o.a.createElement(_.d,{button:!0,onClick:function(){window.open("https://github.com/transmute-industries/github-did")}},o.a.createElement(_.e,null,o.a.createElement(J.b,null)),o.a.createElement(_.f,{primary:"Source"})),o.a.createElement(_.d,{button:!0,onClick:function(){window.open("http://github-did.com")}},o.a.createElement(_.e,null,o.a.createElement(J.f,null)),o.a.createElement(_.f,{inset:!0,primary:"Demo"})),o.a.createElement(_.d,{button:!0,onClick:function(){window.open("https://identity.foundation/")}},o.a.createElement(_.e,null,o.a.createElement(J.f,null)),o.a.createElement(_.f,{inset:!0,primary:"DIF"})))),o.a.createElement(_.b,{item:!0,xs:12,sm:6},o.a.createElement(_.h,{variant:"body2"},"© ",(new Date).getFullYear()," ",a," -"," ",o.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){window.open("https://twitter.com/"+n)}},"Twitter")," ","-"," ",o.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){window.open("https://medium.com/"+r)}},"Medium")))))},data:z})},t}(o.a.Component);ee.propTypes={};var te=ee,ae=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return o.a.createElement(l.MuiThemeProvider,{theme:d},o.a.createElement(Z,{title:t},a,o.a.createElement(te,null)))},t}(o.a.Component);t.a=ae}}]);
//# sourceMappingURL=component---src-pages-404-js-f424c3003cc19d08e5e9.js.map