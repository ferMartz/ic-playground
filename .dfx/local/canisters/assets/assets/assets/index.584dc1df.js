import{r as e,R as t}from"./vendor.b560c978.js";import{p as r}from"./agent.23c116ed.js";function a(){const[a,o]=e.exports.useState(""),[n,l]=e.exports.useState(""),[s,i]=e.exports.useState(""),[u,c]=e.exports.useState(""),d=e.exports.useCallback((async(e,t)=>{""!==e&&""!==t?(console.log("handle insert",e,t),await r.insert(e,t)):console.log("bad insert")})),m=e.exports.useCallback((async e=>{console.log("lookup for",e),c("...in progress");let t=await r.lookup(e);c(t)}));return t.createElement("div",{className:"flex flex-col"},t.createElement("div",{className:"mx-auto my-6  w-9/12 border border-gray-400 rounded"},t.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 p-6"},t.createElement("div",{className:"flex justify-center"},t.createElement("input",{className:"px-3 py-3 w-9/12 md:w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 ",value:a,onChange:e=>{o(e.target.value)},placeholder:"name"})),t.createElement("div",{className:"flex justify-center"},t.createElement("input",{className:"px-3 py-3  w-9/12 md:w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 ",value:n,onChange:e=>{l(e.target.value)},placeholder:"phone"}))),t.createElement("button",{className:"px-8 py-2 mb-6 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500","aria-label":"Increment value",onClick:()=>d(a,n)},"Insert")),t.createElement("div",{className:"mx-auto my-6  w-9/12 border border-gray-400 rounded"},t.createElement("div",{className:"grid grid-cols-1 gap-8 p-6"},t.createElement("div",{className:"flex justify-center"},t.createElement("input",{className:"px-3 py-3 w-9/12 md:w-1/2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm transition duration-200 focus:shadow-md focus:outline-none ring-offset-2 border border-gray-400 focus:ring-2 focus:ring-purple-300 ",value:s,onChange:e=>{i(e.target.value)},placeholder:"enter name to query phone number"})),t.createElement("div",{className:"flex justify-center"},t.createElement("button",{className:"px-8 py-2 mb-6 rounded-full text-lg focus:outline-none font-medium text-white bg-gradient-to-r from-indigo-600 to-pink-500","aria-label":"Increment value",onClick:()=>m(s)},"Query")),t.createElement("div",{className:"flex justify-center"},t.createElement("p",{className:"text-base text-purple-700 mr-11"},`${u}`)))))}export default a;
