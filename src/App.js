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
    <div className=" w-100 min-vh-100 bg-light">
      <div className="container text-center pt-3 pb-3">
        <h1>Quick News</h1>
        <p>News in shorts</p>
      </div>
      <div className="container">
        <div className="flex flex-row">
          {categories.map((item, index) => (
            <button
              className={
                selected === item
                  ? "btn btn-primary me-2 mb-2"
                  : "btn btn-outline-primary me-2 mb-2"
              }
              key={index}
              onClick={() => setSelected(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
  );
}

export default App;
