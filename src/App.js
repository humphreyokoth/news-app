import React from "react";
import Card from "./Components/Card";
import "./App.css";

const categories = [
  "breaking-news",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment", 
  "sports", 
  "science",
  "health",
];

function App() {

async function   getNews(){
  const res = await fetch("https://github.com/cyberboysumanjay/Inshorts-News-API");
const response = res.json();
setData()
console.log(response.data);
}
  useEffect(()=>{
    getNews()
  },[])


  return (
    <div className="App">
      <div className="container pb-5 text-center pt-5">
        <h1>Quick News App</h1>
        <button className="btn " onClick={()=>getNews()}>FetchNews</button>
      </div>
      <div className="container">
        <button className="btn btn-success me-2">all</button>
        <button className="btn btn-success  me-2">all</button>
        <button className="btn btn-success  me-2">all</button>
        <button className="btn btn-success ">all</button>
      </div>
      {data == []? (<div></div>)}
      <div className="container">
        <Card  />
      </div>

     
    </div>
  );
}

export default App;
