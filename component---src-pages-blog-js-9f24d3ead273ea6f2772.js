(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),i=a(167),l=a(171),s=a(172);t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"Blog"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Thoughts in progress"),r.a.createElement("h4",null,"Check it out I have ",t.allMarkdownRemark.totalCount," post",t.allMarkdownRemark.totalCount>1&&"s"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(i.a,{to:t.fields.slug},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",null,"— ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt)))})))};var c="2068765159"},167:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(5),l=a.n(i),s=a(40),c=a.n(s);a.d(t,"a",function(){return c.a});a(168);var o=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},168:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich",subtitle:"Software Developer at Big Bear Software"}}}}},170:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(5),l=a.n(i),s=a(64),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},171:function(e,t,a){"use strict";var n=a(169),r=a(0),i=a.n(r),l=a(5),s=a.n(l),c=a(167),o=[{title:"Home",uri:"/"},{title:"About Me",uri:"/about"},{title:"Skills",uri:"/skills"},{title:"Blog",uri:"/blog"}],u=function(e){var t=e.siteTitle,a=e.subTitle;return i.a.createElement("header",{className:"container-fluid"},i.a.createElement("section",{className:"row"},i.a.createElement("div",{className:"col-12 pb-2"},i.a.createElement("h1",null,i.a.createElement(c.a,{to:"/"},t)),i.a.createElement("h5",null,a)),i.a.createElement("nav",{className:"col-12 d-flex flex-column"},o.map(function(e,t){return i.a.createElement("div",{className:"py-2",key:t},i.a.createElement(c.a,{to:e.uri},e.title))}),i.a.createElement("div",{className:"py-2"},i.a.createElement("a",{href:"https://github.com/THISS",target:"__blank"},"GitHub")))))};u.propTypes={siteTitle:s.a.string,subTitle:s.a.string},u.defaultProps={siteTitle:"",subTitle:""};var d=u,m=(a(158),function(e){var t=e.children;return i.a.createElement(c.b,{query:"565778879",render:function(e){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"d-none d-sm-block col-sm-4 position-fixed"},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),i.a.createElement("div",{className:"d-sm-none d-block col-12"},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subtitle})),i.a.createElement("div",{className:" col-12 col-sm-8 offset-sm-4"},i.a.createElement("main",{className:"col-12"},t),i.a.createElement("footer",{className:"col-12"},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},data:n})});m.propTypes={children:s.a.node.isRequired};t.a=m},172:function(e,t,a){"use strict";var n=a(173),r=a(0),i=a.n(r),l=a(5),s=a.n(l),c=a(174),o=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,s=e.children,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(r)},s)}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},173:function(e){e.exports={data:{site:{siteMetadata:{title:"Brenton Holswich",description:"A blog / place for me to deploy my thoughts and challenges as I grow in the areas of micro services, machine learning and general software development.",author:"@brentonholswich"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-9f24d3ead273ea6f2772.js.map