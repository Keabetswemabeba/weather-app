import React, { useEffect, useState } from "react";
import axios from "axios";

function News() {
  // efdf038ef7fa486ba3764e5885ea6b57
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=efdf038ef7fa486ba3764e5885ea6b57"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);
  return (
    <div className="my-5">

        <br></br>

        <div className="bg-gradient-to-br from-white to-slate-700 h-fit shadow-xl shadow-gray-300 my-12">
            <h1 className="items-center text-center justify-center text-black font-extrabold text-2xl my-12">News</h1>
        </div>

        <br></br>
      <div className="row text-center">
        {news.map((val) => {
          return (
            <div className="max-w-[768px] flex flex-col my-3">
              <div className=" w-26 ">
                <img className="card-img-top" src={val.urlToImage} />
                <div className="card-body">
                  <h5 className="card-title text-lg text-white bg-gradient-to-br from-white-700 to-whitesmoke-700 h-fit shadow-xl shadow-gray-400 my-12">{val.title}</h5>
                  <p className="card-text text-white">{val.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
