"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[841],{23939:(n,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(27875);const o=(0,s._)("h1",{id:"throttle",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#throttle","aria-hidden":"true"},"#"),(0,s.Uk)(" Throttle")],-1),e=(0,s.Uk)("An explanation of throttling can be found in "),p={href:"https://css-tricks.com/debouncing-throttling-explained-examples/#throttle",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("here"),u=(0,s.Uk)("."),k=(0,s.Uk)("Simply put, it is guaranteed to execute the function every N milliseconds. For example, for input events, the "),l=(0,s._)("code",null,"throttle",-1),i=(0,s.Uk)(" function will execute the function at a set time interval during the user "),_=(0,s._)("strong",null,"input process",-1),r=(0,s.Uk)(". This is very different from the "),U=(0,s._)("code",null,"debounce",-1),d=(0,s.Uk)(" mentioned in the previous section."),m=(0,s.Uk)("The throttling of VueRequest is implemented using "),g={href:"https://lodash.com/docs/4.17.15#throttle",target:"_blank",rel:"noopener noreferrer"},h=(0,s._)("code",null,"throttle",-1),f=(0,s.Uk)(" provided by "),v={href:"https://lodash.com",target:"_blank",rel:"noopener noreferrer"},y=(0,s._)("strong",null,"lodash",-1),w=(0,s.Uk)(", "),b=(0,s._)("code",null,"The leading",-1),q=(0,s.Uk)(" and "),x=(0,s._)("code",null,"trailing",-1),T=(0,s.Uk)(" options default to true. Therefore, "),S=(0,s._)("strong",null,"two requests may be triggered during the execution interval of the first throttle",-1),I=(0,s._)("code",null,"throttleOptions",-1),N=(0,s.Uk)(" is provided after version 1.2.2 to customize the behavior of "),R=(0,s._)("code",null,"throttle",-1),W=(0,s.Uk)("As shown below, you only need to provide a "),A=(0,s._)("code",null,"throttleInterval",-1),C=(0,s.Uk)(" to tell us the execution interval of throttling. So when the user enters information, we will initiate a request every 1000 milliseconds."),F=(0,s._)("blockquote",null,[(0,s._)("p",null,"You can open the console to view the interval of the console printing information")],-1),D=(0,s._)("div",{class:"language-vue ext-vue"},[(0,s._)("pre",{class:"language-vue"},[(0,s._)("code",null,[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("template")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("NInput")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},":loading"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("loading"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"placeholder"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("Enter you email"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"@input"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("handleInput"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"/>")]),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("NSpin")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},":show"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("loading"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("ul")]),(0,s.Uk)(),(0,s._)("span",{class:"token special-attr"},[(0,s._)("span",{class:"token attr-name"},"style"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s._)("span",{class:"token value css language-css"},[(0,s._)("span",{class:"token property"},"height"),(0,s._)("span",{class:"token punctuation"},":"),(0,s.Uk)(" 100px")]),(0,s._)("span",{class:"token punctuation"},'"')])]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n        "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("li")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"v-for"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("{ id, email } in emails"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},":key"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("id"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("{{ email }}"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("li")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("ul")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("NSpin")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("div")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("template")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("script")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"lang"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("ts"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token script"},[(0,s._)("span",{class:"token language-javascript"},[(0,s.Uk)("\n"),(0,s._)("span",{class:"token keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"*"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"as"),(0,s.Uk)(" Faker "),(0,s._)("span",{class:"token keyword"},"from"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},"'faker'"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)(" NInput"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(" NSpin "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"from"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},"'naive-ui'"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)(" computed"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(" defineComponent "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"from"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},"'vue'"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token keyword"},"import"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)(" useRequest "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"from"),(0,s.Uk)(),(0,s._)("span",{class:"token string"},"'vue-request'"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n\ntype EmailType "),(0,s._)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  email"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" string"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  id"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" number"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token keyword"},"function"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"testService"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token keyword"},"return"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"new"),(0,s.Uk)(),(0,s._)("span",{class:"token class-name"},"Promise"),(0,s._)("span",{class:"token operator"},"<"),(0,s.Uk)("EmailType"),(0,s._)("span",{class:"token punctuation"},"["),(0,s._)("span",{class:"token punctuation"},"]"),(0,s._)("span",{class:"token operator"},">"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token parameter"},"resolve"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"=>"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token function"},"setTimeout"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"=>"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n      console"),(0,s._)("span",{class:"token punctuation"},"."),(0,s._)("span",{class:"token function"},"log"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token string"},"'[vue-request] fetching data...'"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token function"},"resolve"),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("\n        "),(0,s._)("span",{class:"token keyword"},"new"),(0,s.Uk)(),(0,s._)("span",{class:"token class-name"},"Array"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token number"},"5"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},"."),(0,s._)("span",{class:"token function"},"fill"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token keyword"},"null"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},"."),(0,s._)("span",{class:"token function"},"map"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"=>"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n          email"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" Faker"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("internet"),(0,s._)("span",{class:"token punctuation"},"."),(0,s._)("span",{class:"token function"},"email"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n          id"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(" Faker"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("datatype"),(0,s._)("span",{class:"token punctuation"},"."),(0,s._)("span",{class:"token function"},"number"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n        "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(),(0,s._)("span",{class:"token number"},"700"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token keyword"},"export"),(0,s.Uk)(),(0,s._)("span",{class:"token keyword"},"default"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"defineComponent"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n  components"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n    NInput"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n    NSpin"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token function"},"setup"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token keyword"},"const"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)(" data"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(" loading"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(" run "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"useRequest"),(0,s._)("span",{class:"token punctuation"},"("),(0,s.Uk)("testService"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n      throttleInterval"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token number"},"1000"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n      manual"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token boolean"},"true"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n\n    "),(0,s._)("span",{class:"token keyword"},"const"),(0,s.Uk)(),(0,s._)("span",{class:"token function-variable function"},"handleInput"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"="),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"=>"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token function"},"run"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n\n    "),(0,s._)("span",{class:"token keyword"},"return"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n      loading"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n      handleInput"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n      emails"),(0,s._)("span",{class:"token operator"},":"),(0,s.Uk)(),(0,s._)("span",{class:"token function"},"computed"),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},"("),(0,s._)("span",{class:"token punctuation"},")"),(0,s.Uk)(),(0,s._)("span",{class:"token operator"},"=>"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"{"),(0,s.Uk)("\n        "),(0,s._)("span",{class:"token keyword"},"return"),(0,s.Uk)(" data"),(0,s._)("span",{class:"token punctuation"},"."),(0,s.Uk)("value "),(0,s._)("span",{class:"token operator"},"||"),(0,s.Uk)(),(0,s._)("span",{class:"token punctuation"},"["),(0,s._)("span",{class:"token punctuation"},"]"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n      "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n    "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n  "),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},","),(0,s.Uk)("\n"),(0,s._)("span",{class:"token punctuation"},"}"),(0,s._)("span",{class:"token punctuation"},")"),(0,s._)("span",{class:"token punctuation"},";"),(0,s.Uk)("\n")])]),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("script")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n\n"),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"<"),(0,s.Uk)("style")]),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"scoped"),(0,s.Uk)(),(0,s._)("span",{class:"token attr-name"},"lang"),(0,s._)("span",{class:"token attr-value"},[(0,s._)("span",{class:"token punctuation attr-equals"},"="),(0,s._)("span",{class:"token punctuation"},'"'),(0,s.Uk)("scss"),(0,s._)("span",{class:"token punctuation"},'"')]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s._)("span",{class:"token style"}),(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token tag"},[(0,s._)("span",{class:"token punctuation"},"</"),(0,s.Uk)("style")]),(0,s._)("span",{class:"token punctuation"},">")]),(0,s.Uk)("\n")])])],-1),E={render:function(n,t){const a=(0,s.up)("OutboundLink"),E=(0,s.up)("RouterLink"),J=(0,s.up)("Demo");return(0,s.wg)(),(0,s.iD)(s.HY,null,[o,(0,s._)("blockquote",null,[(0,s._)("p",null,[e,(0,s._)("a",p,[c,(0,s.Wm)(a)]),u])]),(0,s._)("p",null,[k,l,i,_,r,(0,s.Wm)(E,{to:"/guide/documentation/debounce.html"},{default:(0,s.w5)((()=>[U])),_:1}),d]),(0,s._)("p",null,[m,(0,s._)("a",g,[h,(0,s.Wm)(a)]),f,(0,s._)("a",v,[y,(0,s.Wm)(a)]),w,b,q,x,T,S]),(0,s._)("blockquote",null,[(0,s._)("p",null,[(0,s._)("strong",null,[(0,s.Wm)(E,{to:"/api/#throttleoptions"},{default:(0,s.w5)((()=>[I])),_:1}),N,R])])]),(0,s._)("p",null,[W,(0,s.Wm)(E,{to:"/api/#throttleinterval"},{default:(0,s.w5)((()=>[A])),_:1}),C]),F,(0,s.Wm)(J,{name:"ThrottleDemo",title:"Throttle demo"},{default:(0,s.w5)((()=>[D])),_:1})],64)}}},78257:(n,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s={key:"v-74534cee",path:"/guide/documentation/throttle.html",title:"Throttle",lang:"en-US",frontmatter:{head:[["meta",{name:"og:title",content:"Throttle Api Request - VueRequest"}]]},excerpt:"",headers:[],filePathRelative:"guide/documentation/throttle.md",git:{updatedTime:168602431e4,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);