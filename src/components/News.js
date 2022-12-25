import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import LoadingScreen from "./LoadingScreen";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  console.log(loading);
  const [pageNum, setpageNum] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const updateNewsFunc = async () => {
    props.setProgress(10);
    setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${pageNum}&pageSize=${props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedObj = await data.json();
    console.log(parsedObj);
    props.setProgress(70);
    setarticles(parsedObj.articles);
    setloading(false);
    settotalResults(parsedObj.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${props.category}-NewsQuick`;
    updateNewsFunc();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setpageNum(pageNum + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&apiKey=${props.apiKey}&category=${props.category}&page=${
      pageNum + 1
    }&pageSize=${props.pageSize}`;
    console.log(url);
    let data = await fetch(url);
    let parsedObj = await data.json();
    console.log(parsedObj);
    setarticles(articles.concat(parsedObj.articles));
    settotalResults(parsedObj.totalResults);
  };
  return (
    <div className="container my-1">
      <h2
        className="text-center"
        style={{ margin: "20px 0px", marginTop: "65px" }}
      >
        Quick {props.category} Headlines
      </h2>
      {/* {loading && <LoadingScreen />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<LoadingScreen />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg"
                    }
                    title={element.title ? element.title : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    newsUrl={element.url}
                    newsDate={new Date(element.publishedAt).toGMTString()}
                    author={element.author ? element.author : "Source"}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "us",
  pageSize: 6,
  totalResults: 0,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
