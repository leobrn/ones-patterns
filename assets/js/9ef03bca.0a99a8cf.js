"use strict";(self.webpackChunkones_patterns=self.webpackChunkones_patterns||[]).push([[720],{612:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=r(4848),s=r(8453);const l={sidebar_position:2,sidebar_label:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",description:"SOLID \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"},t=void 0,d={id:"extra/principle",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",description:"SOLID \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",source:"@site/docs/extra/principle.md",sourceDirName:"extra",slug:"/extra/principle",permalink:"/ones-patterns/extra/principle",draft:!1,unlisted:!1,editUrl:"https://github.com/leobrn/ones-patterns/tree/main/packages/create-docusaurus/templates/shared/docs/extra/principle.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",title:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b",description:"SOLID \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b"},sidebar:"tutorialSidebar",previous:{title:"MVC",permalink:"/ones-patterns/extra/mvc"}},o={},c=[{value:"SOLID",id:"solid",level:2},{value:"SRP (Single Responsibility)",id:"srp-single-responsibility",level:3},{value:"OCP (Open/Closed)",id:"ocp-openclosed",level:3},{value:"LSP (Liskov Substitution)",id:"lsp-liskov-substitution",level:3},{value:"ISP (Interface Segregation)",id:"isp-interface-segregation",level:3},{value:"DIP (Dependency Inversion)",id:"dip-dependency-inversion",level:3},{value:"PTI",id:"pti",level:2},{value:"Loose coupling",id:"loose-coupling",level:2},{value:"Method Responsibility",id:"method-responsibility",level:2}];function p(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"solid",children:"SOLID"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b SOLID \u044d\u0442\u043e \u0432\u0430\u0436\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u044b \u0438 \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0432 1\u0421."}),"\n",(0,i.jsx)(e.h3,{id:"srp-single-responsibility",children:"SRP (Single Responsibility)"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438. \u041c\u0435\u0442\u043e\u0434, \u043c\u043e\u0434\u0443\u043b\u044c, \u043e\u0431\u044a\u0435\u043a\u0442, \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u043f\u0440\u0438\u0447\u0438\u043d\u0443 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e (\u043e\u0442\u0434\u0435\u043b \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0438/\u043e\u0442\u0434\u0435\u043b \u043a\u0430\u0434\u0440\u043e\u0432/\u043e\u0442\u0434\u0435\u043b \u043f\u0440\u043e\u0434\u0430\u0436 \u0438 \u0442.\u043f) \u0438 \u0435\u0441\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0441\u044f\u0442 \u0432\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u043e\u0434\u0438\u043d \u0438 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u0442\u043e \u044d\u0442\u043e \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430. \u0418\u0437 \u044d\u0442\u043e\u0433\u043e \u0441\u043b\u0435\u0434\u0443\u0435\u0442:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c (\u043c\u0435\u0442\u043e\u0434, \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0430) \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsx)(e.li,{children:'\u0417\u0430 \u043e\u0434\u0438\u043d \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d "\u0432\u043b\u0430\u0434\u0435\u043b\u0435\u0446" - \u0431\u0443\u0434\u044c \u0442\u043e \u043e\u0442\u0434\u0435\u043b \u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0438, \u043a\u0430\u0434\u0440\u043e\u0432 \u0438 \u0442.\u043f.'}),"\n",(0,i.jsx)(e.li,{children:"\u0415\u0441\u043b\u0438 \u0437\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u043e\u0431\u0440\u0430\u0449\u0430\u044e\u0442\u0441\u044f \u0441\u0440\u0430\u0437\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0434\u0435\u043b\u043e\u0432 (\u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f \u0438 \u043a\u0430\u0434\u0440\u044b) - \u044d\u0442\u043e \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430, \u0442.\u043a. \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0440\u0435\u0448\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0434\u0430\u0447 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:'\u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0447\u0435\u0442\u043a\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e "\u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430", \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0449\u0435\u0433\u043e \u0437\u0430 \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u0422\u043e\u0433\u0434\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u043d\u043e, \u043a\u0430\u043a\u043e\u0439 \u0438\u043c\u0435\u043d\u043d\u043e \u043c\u043e\u0434\u0443\u043b\u044c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043c\u0435\u043d\u044f\u0442\u044c.'}),"\n",(0,i.jsx)(e.h3,{id:"ocp-openclosed",children:"OCP (Open/Closed)"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438/\u0437\u0430\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u0438. \u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430.\r\n\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043a\u043e\u0434\u0430 \u0447\u0440\u0435\u0432\u0430\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430\u043c\u0438. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043b\u0443\u0447\u0448\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u043e\u0434 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u044b\u043c:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"}),"\n",(0,i.jsx)(e.li,{children:"\u0441\u043e\u0431\u044b\u0442\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u0439"}),"\n",(0,i.jsx)(e.li,{children:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b \u0432\u043c\u0435\u0441\u0442\u043e \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u043a\u043b\u0430\u0441\u0441\u043e\u0432"}),"\n",(0,i.jsxs)(e.li,{children:["\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 1\u0421 \u044d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u043e\u0431\u0449\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0441 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u043e\u043c ",(0,i.jsx)(e.strong,{children:"\u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b\u0435"})," \u0438\u043b\u0438 ",(0,i.jsx)(e.strong,{children:"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0422\u043e\u0433\u0434\u0430 \u043d\u043e\u0432\u044b\u0439 \u043a\u043e\u0434 \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e, \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u044f \u0441\u0442\u0430\u0440\u044b\u0439. \u042d\u0442\u043e \u0432 \u0440\u0430\u0437\u044b \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0440\u0438\u0441\u043a\u0438 \u043f\u043e\u043b\u043e\u043c\u043a\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430."}),"\n",(0,i.jsx)(e.h3,{id:"lsp-liskov-substitution",children:"LSP (Liskov Substitution)"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u041b\u0438\u0441\u043a\u043e\u0432 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c\u0430 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u044b\u0445 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043e\u043a \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."}),"\n",(0,i.jsx)(e.p,{children:"\u042d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0441\u0442\u0438, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0441 \u0442\u0438\u043f\u043e\u0432\u044b\u043c\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043c\u0438 \u0438 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u041f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0431\u043b\u0438\u0437\u043a\u043e\u043c \u043a \u0431\u0430\u0437\u043e\u0432\u043e\u043c\u0443, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0432 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0449\u0435\u043c \u043a\u043e\u0434\u0435."}),"\n",(0,i.jsx)(e.p,{children:'\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0430 \u0432\u0445\u043e\u0434 \u043e\u0431\u044a\u0435\u043a\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442.\u0410\u0440\u0435\u043d\u0434\u0430", \u0442\u043e \u044d\u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0435\u043c\u0443 \u043e\u0431\u044a\u0435\u043a\u0442 \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442.\u0421\u0443\u0431\u0430\u0440\u0435\u043d\u0434\u0430", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f "\u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u043e\u043c" \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c "\u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a" \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u0442\u043e\u0442 \u0436\u0435 \u043d\u0430\u0431\u043e\u0440 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u043e\u0432, \u0447\u0442\u043e \u0438 "\u043f\u0440\u0435\u0434\u043e\u043a", \u0438\u043b\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439.'}),"\n",(0,i.jsx)(e.h3,{id:"isp-interface-segregation",children:"ISP (Interface Segregation)"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0420\u0430\u0437\u0434\u0435\u043b\u044f\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u0443\u0437\u043a\u0438\u0435, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b, \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u0443\u044f \u043c\u0435\u0442\u043e\u0434\u044b \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043f\u043e \u0438\u0445 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e."}),"\n",(0,i.jsx)(e.li,{children:"\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0432 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438. \u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435 \u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e, \u0447\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0443\u0436\u043d\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430."}),"\n",(0,i.jsx)(e.li,{children:"\u0415\u0441\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043c\u043e\u0434\u0443\u043b\u044f \u0438\u043b\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 \u0447\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e \u0440\u0430\u0437\u0434\u0443\u0442 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043c\u043d\u043e\u0433\u043e \u043d\u0435\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u043b\u0443\u0447\u0448\u0435 \u0440\u0430\u0437\u0431\u0435\u0439\u0442\u0435 \u0435\u0433\u043e \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432."}),"\n",(0,i.jsx)(e.li,{children:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 (\u0434\u0440\u0443\u0433\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438, \u0444\u043e\u0440\u043c\u044b, \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438 \u0442.\u043f.) \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 \u0442\u0435\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043c \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b."}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"dip-dependency-inversion",children:"DIP (Dependency Inversion)"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0438\u043d\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 1\u0421 \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u0431\u0449\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0434\u0443\u043b\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443) \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0431\u0449\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f (\u0441\u043a\u0430\u0436\u0435\u043c, \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438)."}),"\n",(0,i.jsx)(e.p,{children:"\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0434\u0430\u0451\u0442 \u0441\u043b\u0430\u0431\u0443\u044e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u043c\u0435\u0436\u0434\u0443 \u0443\u0440\u043e\u0432\u043d\u044f\u043c\u0438 \u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043c\u0435\u043d\u044f\u0442\u044c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438, \u043d\u0435 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u044f \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443."}),"\n",(0,i.jsx)(e.h2,{id:"pti",children:"PTI"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"PTI (Program to an interface, not an implementation)"})," - \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u0443\u0439\u0442\u0435 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432, \u0430 \u043d\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438. \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c, \u0447\u0442\u043e \u043c\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0432 1\u0421 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b.\r\n\u041c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0431\u044b \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a \u043a\u043b\u0430\u0441\u0441\u0430\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u043e\u0432:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// \u041f\u043b\u043e\u0445\u043e\r\n\u041f\u043e\u0447\u0442\u0430 = \u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439\u0421\u0435\u0440\u0432\u0438\u0441Yandex();\r\n\u041f\u043e\u0447\u0442\u0430.\u0412\u0432\u0435\u0441\u0442\u0438\u0410\u0434\u0440\u0435\u0441\u0430\u0442\u043e\u0432(\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442\u044b);  \r\n\u041f\u043e\u0447\u0442\u0430.\u0412\u0432\u0435\u0441\u0442\u0438\u0422\u0435\u043a\u0441\u0442\u041f\u0438\u0441\u044c\u043c\u0430(\u0422\u0435\u043a\u0441\u0442\u041f\u0438\u0441\u044c\u043c\u0430);\r\n\u041f\u043e\u0447\u0442\u0430.\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u041f\u0438\u0441\u044c\u043c\u043e();\r\n\r\n\u041f\u043e\u0447\u0442\u0430 = \u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439\u0421\u0435\u0440\u0432\u0438\u0441Mail();\r\n\u041f\u043e\u0447\u0442\u0430.\u0417\u0430\u0434\u0430\u0442\u044c\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u0435\u0439(\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442\u044b);\r\n\u041f\u043e\u0447\u0442\u0430.\u0417\u0430\u0434\u0430\u0442\u044c\u0422\u0435\u043a\u0441\u0442(\u0422\u0435\u043a\u0441\u0442\u041f\u0438\u0441\u044c\u043c\u0430);  \r\n\u041f\u043e\u0447\u0442\u0430.\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c();\n"})}),"\n",(0,i.jsx)(e.p,{children:'\u041d\u043e \u0442\u0430\u043a \u043c\u044b "\u0437\u0430\u0448\u044c\u0435\u043c\u0441\u044f" \u043d\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0435 \u0438 \u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430\u0445. \u0413\u043e\u0440\u0430\u0437\u0434\u043e \u043b\u0443\u0447\u0448\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441:'}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// \u0425\u043e\u0440\u043e\u0448\u043e\r\n\u041f\u043e\u0447\u0442\u0430 = \u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439\u0421\u0435\u0440\u0432\u0438\u0441.\u0421\u043e\u0437\u0434\u0430\u0442\u044c(\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a);\r\n\u041f\u043e\u0447\u0442\u0430.\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u0435\u0439(\u041a\u043e\u043d\u0442\u0440\u0430\u0433\u0435\u043d\u0442\u044b);\r\n\u041f\u043e\u0447\u0442\u0430.\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0422\u0435\u043a\u0441\u0442(\u0422\u0435\u043a\u0441\u0442\u041f\u0438\u0441\u044c\u043c\u0430);  \r\n\u041f\u043e\u0447\u0442\u0430.\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c();\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u0422\u043e\u0433\u0434\u0430 \u043f\u043e\u0437\u0436\u0435 \u043f\u0440\u0438 \u0441\u043c\u0435\u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043d\u0435 \u043c\u0435\u043d\u044f\u044f \u0432\u044b\u0437\u043e\u0432\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438. \u0412 1\u0421 \u043c\u044b \u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 \u043e\u0431\u0449\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0438\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432."}),"\n",(0,i.jsx)(e.h2,{id:"loose-coupling",children:"Loose coupling"}),"\n",(0,i.jsx)(e.p,{children:"\u0421\u0442\u0440\u0435\u043c\u0438\u0442\u0435\u0441\u044c \u043a \u0441\u043b\u0430\u0431\u043e\u0439 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432. \u042d\u0442\u043e\u0442 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0440\u0430\u0437\u043d\u044b\u0435 \u0447\u0430\u0441\u0442\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b (\u043c\u043e\u0434\u0443\u043b\u0438, \u043a\u043b\u0430\u0441\u0441\u044b, \u043e\u0431\u044a\u0435\u043a\u0442\u044b) \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u043d\u0430\u0442\u044c \u0434\u0440\u0443\u0433 \u043e \u0434\u0440\u0443\u0433\u0435 \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044c\u0448\u0435.\r\n\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c, \u0447\u0442\u043e \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043f\u0435\u0447\u0430\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'// \u041f\u043b\u043e\u0445\u043e\r\n\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u041d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442(\u0414\u043e\u043a)\r\n\r\n    \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 = \u0414\u043e\u043a; // \u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u044c\r\n\r\n    \u0415\u0441\u043b\u0438 \u0422\u0438\u043f\u0417\u043d\u0447(\u0414\u043e\u043a) = \u0422\u0438\u043f("\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0421\u0447\u0435\u0442\u0424\u0430\u043a\u0442\u0443\u0440\u0430") \u0422\u043e\u0433\u0434\u0430\r\n        // \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u043c \u0441\u0447\u0435\u0442-\u0444\u0430\u043a\u0442\u0443\u0440\u0443\r\n    \u0418\u043d\u0430\u0447\u0435\u0415\u0441\u043b\u0438 \u0422\u0438\u043f\u0417\u043d\u0447(\u0414\u043e\u043a) = \u0422\u0438\u043f("\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0421\u043a\u043b\u0430\u0434\u0441\u043a\u0430\u044f\u041d\u0430\u043a\u043b\u0430\u0434\u043d\u0430\u044f") \u0422\u043e\u0433\u0434\u0430\r\n        // \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u043c \u043d\u0430\u043a\u043b\u0430\u0434\u043d\u0443\u044e\r\n    \r\n    \u0418 \u0422\u0430\u043a \u0414\u0430\u043b\u0435\u0435...\r\n\r\n\u041a\u043e\u043d\u0435\u0446\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u042d\u0442\u043e \u043f\u043b\u043e\u0445\u043e - \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0441\u0438\u043b\u044c\u043d\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432. \u041b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u041d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442(\u0414\u043e\u043a\u041e\u0431\u044a\u0435\u043a\u0442)\r\n  \r\n    \u0414\u043e\u043a\u041e\u0431\u044a\u0435\u043a\u0442.\u041d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c();\r\n  \r\n\u041a\u043e\u043d\u0435\u0446\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b\r\n\r\n// \u0430 \u0442\u0438\u043f\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\r\n\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u041d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c() \u042d\u043a\u0441\u043f\u043e\u0440\u0442\r\n\r\n    // \u043f\u0435\u0447\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\r\n\r\n\u041a\u043e\u043d\u0435\u0446\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043f\u0435\u0447\u0430\u0442\u0438 \u043d\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 - \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0441\u043b\u0430\u0431\u0430\u044f."}),"\n",(0,i.jsx)(e.h2,{id:"method-responsibility",children:"Method Responsibility"}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u0430 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0442\u043e\u0434\u0430. \u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0435\u0441\u0442\u0438 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u043e\u0434\u043d\u0443 \u0432\u0435\u0449\u044c."}),"\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f, \u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b, \u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043b\u043e\u0445\u0438\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u043e\u0442\u0447\u0435\u0442, \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0435\u0433\u043e \u043f\u043e email \u0438 \u0435\u0449\u0435 \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043d\u0430 \u043f\u0440\u0438\u043d\u0442\u0435\u0440\u0435."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// \u041f\u043b\u043e\u0445\u043e\r\n\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u041e\u0442\u0447\u0435\u0442() \r\n   \u041e\u0442\u0447\u0435\u0442.\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c();  \r\n   \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u041f\u043e\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439\u041f\u043e\u0447\u0442\u0435(\u041e\u0442\u0447\u0435\u0442);  \r\n   \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u041f\u0435\u0447\u0430\u0442\u044c\u044e\r\n\u041a\u043e\u043d\u0435\u0446\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b\r\n        \r\n// \u0425\u043e\u0440\u043e\u0448\u043e\r\n\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u041e\u0442\u0447\u0435\u0442()  \r\n    \u041e\u0442\u0447\u0435\u0442.\u0421\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c();\r\n\u041a\u043e\u043d\u0435\u0446\u0424\u0443\u043d\u043a\u0446\u0438\u0438\r\n\r\n\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u041e\u0442\u0447\u0435\u0442(\u041e\u0442\u0447\u0435\u0442) \r\n    \u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u041f\u043e\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439\u041f\u043e\u0447\u0442\u0435(\u041e\u0442\u0447\u0435\u0442);\r\n\u041a\u043e\u043d\u0435\u0446\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \r\n\r\n\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0420\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c\u041e\u0442\u0447\u0435\u0442(\u041e\u0442\u0447\u0435\u0442)\r\n    \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u041f\u0435\u0447\u0430\u0442\u044c\u044e(\u041e\u0442\u0447\u0435\u0442);  \r\n\u041a\u043e\u043d\u0435\u0446\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>d});var i=r(6540);const s={},l=i.createContext(s);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);