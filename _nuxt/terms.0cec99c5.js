import{W as h,J as y,h as o,a9 as x,w as v,o as w,a as b,b as g,A as c,B,V as D,u as _,a8 as k}from"./entry.af7cc239.js";import{u as U,b as q,r as A}from"./useGraphQL.cd467d16.js";import{_ as C}from"./_plugin-vue_export-helper.a1a6add7.js";const N=()=>e=>{try{const{data:{termsOfUsePage:{data:{attributes:{terms_content:t}}}}}=e;return{content:t}}catch{return{}}},O=(e="en")=>`
    query {
      termsOfUsePage(locale: "en") {
        data {
          attributes {
            terms_content
          }
        }
      }
    }
  `;const P={class:"container py-[80px] font-relative"},T={class:"terms-wrapper"},V={__name:"terms",async setup(e){let t,a;h({title:"Terms of Use"});const u=U(),l=N(),{localeProperties:m}=y(),r=o(()=>m.value.iso),{data:p}=([t,a]=x(()=>q("termsData",()=>u(O(r.value)),"$19MKhqxUnB")),t=await t,a(),t),i=()=>A("termsData");v(r,(s,n)=>{s!==n&&i()});const d=o(()=>l(p.value).content);return(s,n)=>{const f=D;return w(),b("section",P,[g("div",T,[c(f,null,{default:B(()=>[c(_(k),{source:_(d),linkify:""},null,8,["source"])]),_:1})])])}}},E=C(V,[["__scopeId","data-v-0b53345f"]]);export{E as default};
