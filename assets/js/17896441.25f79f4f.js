"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7918],{1986:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),l=n(7294),r=n(6010),c=n(5281),s=n(3438),o=n(8596),i=n(9960),m=n(4996),d=n(5999);function u(e){return l.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){let{children:t,href:n,isLast:a}=e;const r="breadcrumbs__link";return a?l.createElement("span",{className:r,itemProp:"name"},t):n?l.createElement(i.Z,{className:r,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:r},t)}function g(e){let{children:t,active:n,index:c,addMicrodata:s}=e;return l.createElement("li",(0,a.Z)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(c+1)}))}function E(){const e=(0,m.Z)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(i.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",h.breadcrumbsItemLink),href:e},l.createElement(u,{className:h.breadcrumbHomeIcon})))}function p(){const e=(0,s.s1)(),t=(0,o.Ns)();return e?l.createElement("nav",{className:(0,r.Z)(c.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(E,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(g,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(b,{href:t.href,isLast:a},t.label))})))):null}},7653:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var a=n(7294),l=n(1944),r=n(902);const c=a.createContext(null);function s(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(c.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(c);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=o();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(6010),d=n(7524),u=n(4966);function h(){const{metadata:e}=o();return a.createElement(u.Z,{previous:e.previous,next:e.next})}var b=n(3120),g=n(4364),E=n(5281),p=n(5999);function v(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:E.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(v,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}function L(e){const[t,n]=(0,a.useState)(null);return(0,a.useEffect)((()=>{if(console.log(e),null==t){var a=new Headers;a.append("Accept","application/json");var l={method:"GET",headers:a,redirect:"follow"};fetch("https://api.github.com/repos/Capstone-Projects-2023-Spring/project-algorithmic-trading/commits?path=documentation/"+location.pathname.substring(location.pathname.lastIndexOf("docs/"))+".md",l).then((e=>e.json())).then((e=>{console.log(e),n(e)})).catch((e=>console.log("error",e)))}}),[t]),a.createElement(a.Fragment,null,a.createElement("details",null,a.createElement("summary",null,"Revision History"),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{scope:"row"},"Author"),a.createElement("th",{scope:"row"},"Revision"),a.createElement("th",{scope:"row"},"Date"))),a.createElement("tbody",null,null!=t?t.map((e=>a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("th",{scope:"row"},e.commit.author.name),a.createElement("td",null,a.createElement("a",{href:`https://github.com/Capstone-Projects-2023-Spring/project-algorithmic-trading/commit/${e.sha}`},e.commit.message)),a.createElement("td",null,`${new Date(e.commit.author.date).toLocaleString()}`))))):a.createElement(a.Fragment,null,"nothing")))))}function N(e){return a.createElement(a.Fragment,null,a.createElement(L,null),a.createElement(A,e))}var k=n(7462);const Z="iconEdit_Z9Sw";function C(e){let{className:t,...n}=e;return a.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(Z,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:E.k.common.editThisPage},a.createElement(C,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var x=n(9960);const M="tag_zVej",R="tagRegular_sFm0",y="tagWithCount_h2kH";function H(e){let{permalink:t,label:n,count:l}=e;return a.createElement(x.Z,{href:t,className:(0,m.Z)(M,l?y:R)},n,l&&a.createElement("span",null,l))}const B="tags_jXut",w="tag_QGVx";function I(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,m.Z)(B,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:w},a.createElement(H,{label:t,permalink:n}))}))))}const U="lastUpdated_vwxv";function S(e){return a.createElement("div",{className:(0,m.Z)(E.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(I,e)))}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,m.Z)(E.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(T,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",U)},(n||l)&&a.createElement(N,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:c}=e,s=c.length>0,i=!!(t||n||r);return s||i?a.createElement("footer",{className:(0,m.Z)(E.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(S,{tags:c}),i&&a.createElement(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=n(6043),F=n(3743);const G="tocCollapsibleButton_TO0P",J="tocCollapsibleButtonExpanded_MG3E";function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,k.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",G,!t&&J,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const q="tocCollapsible_ETCw",D="tocCollapsibleContent_vkbj",K="tocCollapsibleExpanded_sAul";function Q(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:c,toggleCollapsed:s}=(0,P.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(q,!c&&K,n)},a.createElement(z,{collapsed:c,onClick:s}),a.createElement(P.z,{lazy:!0,className:D,collapsed:c},a.createElement(F.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const X="tocMobile_ITEo";function j(){const{toc:e,frontMatter:t}=o();return a.createElement(Q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(E.k.docs.docTocMobile,X)})}var W=n(9407);function Y(){const{toc:e,frontMatter:t}=o();return a.createElement(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:E.k.docs.docTocDesktop})}var _=n(2503),$=n(6706);function ee(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=o();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(E.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(_.Z,{as:"h1"},n)),a.createElement($.Z,null,t))}var te=n(1986);const ne="docItemContainer_Djhp",ae="docItemCol_VOVn";function le(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=o(),n=(0,d.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(j,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Y,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&ae)},a.createElement(b.Z,null),a.createElement("div",{className:ne},a.createElement("article",null,a.createElement(te.Z,null),a.createElement(g.Z,null),n.mobile,a.createElement(ee,null,t),a.createElement(V,null)),a.createElement(h,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function re(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(le,null,a.createElement(n,null))))}},4966:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),l=n(7294),r=n(5999),c=n(6010),s=n(9960);function o(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return l.createElement(s.Z,{className:(0,c.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function i(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(o,(0,a.Z)({},t,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(o,(0,a.Z)({},n,{subLabel:l.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010),r=n(5999),c=n(5281),s=n(4477);function o(e){let{className:t}=e;const n=(0,s.E)();return n.badge?a.createElement("span",{className:(0,l.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7294),l=n(6010),r=n(2263),c=n(9960),s=n(5999),o=n(4104),i=n(5281),m=n(373),d=n(4477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(c.Z,{to:n,onClick:l},a.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:c}}=(0,r.Z)(),{pluginId:s}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:g}=(0,o.Jo)(s),E=u??(p=g).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,l.Z)(t,i.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:c,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:g.label,to:E.path,onClick:()=>d(g.name)})))}function E(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(g,{className:t,versionMetadata:n}):null}},9407:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7462),l=n(7294),r=n(6010),c=n(3743);const s="tableOfContents_bqdL";function o(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(c.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7462),l=n(7294),r=n(6668);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:c}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:c}),o=i(s,{anchorTopOffset:n.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const h=l.memo(u);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:m,maxHeadingLevel:u,...b}=e;const g=(0,r.L)(),E=m??g.tableOfContents.minHeadingLevel,p=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:E,maxHeadingLevel:p});return d((0,l.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:E,maxHeadingLevel:p}}),[o,i,E,p])),l.createElement(h,(0,a.Z)({toc:v,className:n,linkClassName:o},b))}},9337:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);function l(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return a.createElement("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{}},e.children,e.src?a.createElement("img",{src:e.src,alt:e.alt}):a.createElement(a.Fragment,null),a.createElement("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"}},e.caption),a.createElement("figcaption",{align:e.align?e.align:"center",style:{}},e.subcaption))}},6706:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(4912);function r(e){return a.createElement(a.Fragment,null,a.createElement(l.Z,e))}},6922:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(9337),r=n(9676);const c={React:a,...a,Figure:l.Z,dinosaur:r.Z}},9676:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);