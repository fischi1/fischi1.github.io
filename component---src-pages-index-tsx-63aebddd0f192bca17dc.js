(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6NQx":function(e,t,a){},F3sz:function(e,t,a){},KLww:function(e,t,a){},KwFM:function(e,t,a){},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return O}));var n=a("q1tI"),l=a.n(n),r=a("7vrA"),i=a("Wbzz"),c=(a("KwFM"),function(e){var t=e.children;return l.a.createElement("div",{className:"project-container d-flex flex-row justify-content-center"},l.a.createElement("div",null,t))}),m=a("iuhU"),o=a("9eSz"),d=a.n(o),s=a("y49b"),u=a("QkV/"),v=(a("M5Yy"),function(e){var t=e.className,a=e.external,n=e.to,r=e.children,c=Object(m.a)("btn btn-primary btn-gradient",t);return a?l.a.createElement(u.a,{className:c,href:n},r):l.a.createElement(i.Link,{className:c,to:n},r)}),f=(a("oODe"),a("KLww"),function(e){var t=e.className;return l.a.createElement("div",{className:Object(m.a)("project-divider",t)})}),E=function(e){var t=e.title,a=e.short,n=e.demo,r=e.noun,c=e.slug,o=e.thumbnailFluidImage,u=e.thumbnailRaw,E=e.flipped,h=e.last;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:Object(m.a)("project-detail my-3 d-flex flex-column flex-md-row",{"flex-md-row-reverse":E})},l.a.createElement("div",{className:"project-image"},l.a.createElement(i.Link,{to:c},l.a.createElement(s.a,{ratio:2/3},o&&l.a.createElement(d.a,{fluid:o,alt:t}),u&&l.a.createElement("img",{src:u,alt:t,width:"100%",height:"100%",style:{objectFit:"cover"}})))),l.a.createElement("div",{className:"project-spacer"}," "),l.a.createElement("div",{className:Object(m.a)("project-content d-flex align-items-center text-center text-md-left",{"text-md-right flex-row-reverse":E})},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"h3"},t),l.a.createElement("p",{className:"mb-2 mb-md-5"},a),l.a.createElement("div",null,n&&l.a.createElement(v,{external:!0,className:"mr-3",to:n},"Go to ",r),l.a.createElement(v,{to:c},"More ..."))))),!h&&l.a.createElement("div",{className:"text-center"},l.a.createElement(f,{className:"my-5"})))},h=function(){var e=Object(i.useStaticQuery)("4135816481").allMarkdownRemark.nodes.sort((function(e,t){var a,n,l,r,i=null!==(a=null===(n=e.frontmatter)||void 0===n?void 0:n.order)&&void 0!==a?a:99999,c=null!==(l=null===(r=t.frontmatter)||void 0===r?void 0:r.order)&&void 0!==l?l:99999;return i<c?-1:i>c?1:0}));return l.a.createElement(c,null,e.map((function(t,a){var n,r,i,c,m,o,d,s,u,v,f,h,g,p,b,N,w=null===(n=t.frontmatter)||void 0===n||null===(r=n.thumbnail)||void 0===r||null===(i=r.childImageSharp)||void 0===i?void 0:i.fluid,x=w?"":null===(c=t.frontmatter)||void 0===c||null===(m=c.thumbnail)||void 0===m?void 0:m.publicURL;return l.a.createElement(E,{key:null!==(o=null===(d=t.fields)||void 0===d?void 0:d.slug)&&void 0!==o?o:"Slug missing",title:null!==(s=null===(u=t.frontmatter)||void 0===u?void 0:u.title)&&void 0!==s?s:"Title missing",short:null!==(v=null===(f=t.frontmatter)||void 0===f?void 0:f.short)&&void 0!==v?v:"Short missing",slug:null!==(h=null===(g=t.fields)||void 0===g?void 0:g.slug)&&void 0!==h?h:"Slug missing",demo:null===(p=t.frontmatter)||void 0===p?void 0:p.demo,noun:null!==(b=null===(N=t.frontmatter)||void 0===N?void 0:N.noun)&&void 0!==b?b:"Noun missing",thumbnailFluidImage:w,thumbnailRaw:x,flipped:a%2==1,last:a===e.length-1})})))},g=a("qJ6M");a("6NQx");var p=["developing experiences","making stuff work","solving problems","learning new things"],b=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(0),r=a[0],i=a[1],c=Object(n.useRef)(0);return Object(n.useEffect)((function(){var e=function(){c.current++,c.current%2==0&&t.current&&(t.current.classList.remove("animated"),t.current.offsetWidth,t.current.classList.add("animated"),i(r+1))};return t.current&&t.current.addEventListener("animationend",e,!1),function(){t.current&&t.current.removeEventListener("animationend",e,!1)}})),l.a.createElement("div",{className:"landing-hightlighted-container animated d-inline-block",ref:t},l.a.createElement("div",{className:"landing-highlighted"},p[(r+1)%p.length]),l.a.createElement("div",{className:"landing-highlighted"},p[r%p.length]),l.a.createElement("div",{className:"spacing-div"},p[0]))},N=(a("wTBh"),function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),l.a.createElement("div",{id:"landing-content-index"},l.a.createElement("div",{id:"landing-text"},l.a.createElement("h1",null,l.a.createElement("span",{className:"text-nowrap"},"I enjoy"),l.a.createElement("br",null),l.a.createElement(b,null))),l.a.createElement("div",{id:"landing-subtext",className:"d-flex flex-column flex-sm-row justify-content-center"},l.a.createElement("div",{className:"lead-container"},l.a.createElement("p",{className:"lead px-0"},"Web",l.a.createElement("br",null),"App development")),l.a.createElement("div",{id:"separator"}," "),l.a.createElement("div",{className:"lead-container"},l.a.createElement("p",{className:"lead text-right text-sm-left px-0"},"Front- & Backend",l.a.createElement("br",null),"Games"))))}),w=a("lkFK"),x=(a("F3sz"),function(){var e=Object(i.useStaticQuery)("1351062508");return l.a.createElement("div",{className:"portrait-component mr-0 mr-md-4 mb-3 mb-md-0"},l.a.createElement(d.a,{fluid:e.portrait.childImageSharp.fluid}))}),j=a("g7sJ"),k=a("2a5s"),y=a("rCZT"),O="3989091669";t.default=function(e){var t,a,n=null===(t=e.data.file)||void 0===t||null===(a=t.childMarkdownRemark)||void 0===a?void 0:a.htmlAst;return l.a.createElement(w.a,null,l.a.createElement(k.a,{title:"Lukas Fischer"}),l.a.createElement(g.a,{fullHeight:!0},l.a.createElement(N,null)),l.a.createElement(r.a,null,l.a.createElement(j.a,{headingClassName:"h1"},"About me"),l.a.createElement(x,null),Object(y.a)(n),l.a.createElement("div",{className:"clearfix"}," "),l.a.createElement(j.a,{headingClassName:"h1"},"Projects"),l.a.createElement(h,null)))}},oODe:function(e,t,a){},wTBh:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-63aebddd0f192bca17dc.js.map