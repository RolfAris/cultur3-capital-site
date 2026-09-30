import{W as d,J as v,h as s,w as f,o as m,a as h,b as P,A as n,B as b,V as x,u as r,a8 as w}from"./entry.af7cc239.js";import{u as D,b as k,r as q}from"./useGraphQL.cd467d16.js";import{_ as B}from"./_plugin-vue_export-helper.a1a6add7.js";const g=()=>e=>{try{const{data:{privacyPolicy:{data:{attributes:{policy_content:t}}}}}=e;return{content:t}}catch{return{}}},N=(e="en")=>`
    query {
      privacyPolicy(locale: "en") {
        data {
          attributes {
            policy_content
          }
        }
      }
    }
  `;const V={class:"container py-[80px] font-relative"},A={class:"police-wrapper"},C={__name:"privacy-policy",setup(e){d({title:"Privacy Policy"});const t=D(),l=g(),{localeProperties:i}=v(),o=s(()=>i.value.iso),{data:p}=k("policyData",()=>t(N(o.value)),"$G7cH3qFq90"),_=()=>q("policyData");f(o,(a,c)=>{a!==c&&_()});const u=s(()=>l(p.value).content||"");return(a,c)=>{const y=x;return m(),h("section",V,[P("div",A,[n(y,null,{default:b(()=>[n(r(w),{source:r(u),linkify:""},null,8,["source"])]),_:1})])])}}},L=B(C,[["__scopeId","data-v-b4916b54"]]);export{L as default};
