(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6647:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c});var s=a(482),r=a(9108),i=a(2563),n=a.n(i),l=a(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,1136)),"C:\\Users\\ticof\\OneDrive\\\xc1rea de Trabalho\\ReactNext\\web-response\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(a.bind(a,1342)),"C:\\Users\\ticof\\OneDrive\\\xc1rea de Trabalho\\ReactNext\\web-response\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\ticof\\OneDrive\\\xc1rea de Trabalho\\ReactNext\\web-response\\src\\app\\page.tsx"],p="/page",x={require:a,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3634:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,6840,23)),Promise.resolve().then(a.t.bind(a,8771,23)),Promise.resolve().then(a.t.bind(a,3225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,3982,23))},3034:()=>{},8301:(e,t,a)=>{Promise.resolve().then(a.bind(a,6950))},6950:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var s=a(5344),r=a(3729);let i=({rating:e})=>{let t={fontSize:"20px"};return s.jsx("div",{children:(()=>{let a=[];for(let r=1;r<=5;r++){let i=r<=e?"text-yellow-500":"text-black";a.push(s.jsx("span",{className:`${i}`,style:t,children:"&#9733;"},r))}return a})()})},n=({carData:e,car:t,reservationData:a,statusData:r,ratingData:n})=>s.jsx("tr",{className:"tr-adjust-phone border-b",children:(0,s.jsxs)("div",{className:"car-list-phone",children:[(0,s.jsxs)("div",{className:"bloco-car-img-phone w-fixed",children:[s.jsx("img",{src:"Available"==r?"../../assets/sucess.png":"../../assets/fail.png",className:"img-available-phone",alt:"status"}),s.jsx("img",{src:t,className:"car-img-phone",alt:"Car"})]}),(0,s.jsxs)("div",{className:"bloco-td-dados-phone w-fill h-fixed",children:[(0,s.jsxs)("div",{className:"car-name-reserva-name w-fill",children:[s.jsx("span",{className:"car-name-phone",children:e}),(0,s.jsxs)("td",{className:"car-reserva-phone",children:["Next reservation: ",a]})]}),s.jsx("td",{className:"py-2 px-4 star-adjust-phone",children:s.jsx(i,{rating:n})}),s.jsx("div",{className:"cursor-pointer h-fixed pointer-adjust-phone",children:(0,s.jsxs)("div",{className:"pointer-phone",children:[" ","&#8942;"]})})]})]})}),l=()=>s.jsx("div",{className:"body-adjust-phone",children:s.jsx("table",{className:" min-w-full bg-white border border-gray-300 table-shadow table-adjust-phone ",children:s.jsx("tbody",{children:[{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0}].map((e,t)=>s.jsx(n,{...e},t))})})}),o=({rating:e})=>{let t={fontSize:"20px"};return s.jsx("div",{children:(()=>{let a=[];for(let r=1;r<=5;r++){let i=r<=e?"text-yellow-500":"text-black";a.push(s.jsx("span",{className:`${i}`,style:t,children:"&#9733;"},r))}return a})()})},c=({carData:e,car:t,reservationData:a,statusData:r,ratingData:i})=>{let n="Available"===r?"text-green-800  text-center ":"bg-red-300 text-red-800",l="Available"===r?" bg-green-300 rounded-md pt-0.5  px-px-0.5 pb-0.5 w-20":"bg-red-300 rounded-md pt-0.5  px-px-0.5 pb-0.5";return(0,s.jsxs)("tr",{children:[s.jsx("td",{className:"py-2 px-4 border-b font-weight-400 text-size-14 line-height-21 ",children:(0,s.jsxs)("div",{className:"flex items-center  py-px px-1",children:[s.jsx("img",{src:t,className:"car-img",alt:"Car"}),s.jsx("span",{className:"ml-2 text-gray-900 ",children:e})]})}),s.jsx("td",{className:"py-2 px-4 border-b text-start font-weight-400 text-size-14 line-height-21 ",children:a}),s.jsx("td",{className:`py-2 px-4 border-b font-weight-400 text-size-14 line-height-21  ${n} `,children:s.jsx("div",{className:`  ${l}`,children:r})}),s.jsx("td",{className:"py-2 px-4 border-b ",children:s.jsx(o,{rating:i})}),s.jsx("td",{className:"py-2 px-12 border-b cursor-pointer ",children:s.jsx("span",{children:"&#8942;"})})]})},d=()=>s.jsx("div",{children:(0,s.jsxs)("table",{className:" bg-white border border-gray-300 table-adjust-desk w-fixed",style:{width:"1376px"},children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("th",{className:"py-2 px-4 border-b w-fixed text-start font-weight-600 text-size-12 line-height-18 ",children:"CAR"}),s.jsx("th",{className:"py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18",children:"NEXT RESERVATION"}),s.jsx("th",{className:"py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18 ",children:"STATUS"}),s.jsx("th",{className:"py-2 px-4 border-b w-fill text-start font-weight-600 text-size-12 line-height-18 ",children:"RATING"}),s.jsx("th",{className:"py-2 px-4 border-b w-fixed text-size-12 font-weight-600 line-height-18 collun-actions",children:"ACTIONS"})]})}),s.jsx("tbody",{children:[{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0},{carData:"Mini Cooper 2020",reservationData:"11/07",car:"../../assets/car.png",statusData:"Available",ratingData:0}].map((e,t)=>s.jsx(c,{...e},t))})]})}),p=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),s.jsx(s.Fragment,{children:e?s.jsx(l,{}):s.jsx(d,{})})}},1342:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,metadata:()=>n});var s=a(5036),r=a(3640),i=a.n(r);a(5023);let n={title:"Create Next App",description:"Generated by create next app"};function l({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:e})})}},1136:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let s=(0,a(6843).createProxy)(String.raw`C:\Users\ticof\OneDrive\Área de Trabalho\ReactNext\web-response\src\app\page.tsx`),{__esModule:r,$$typeof:i}=s,n=s.default},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[198],()=>a(6647));module.exports=s})();