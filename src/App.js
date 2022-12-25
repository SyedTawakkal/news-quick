import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingBar from "react-top-loading-bar";
console.log(process.env.REACT_APP_API_KEY);

// console.log(state.country);
const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  // state = { progress: 0 };
  const [country, setcountry] = useState("us");
  const [progress, setProgress] = useState(0);
  const handlecountry = (childData) => {
    setcountry(childData);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar countryCallback={handlecountry} />
        <LoadingBar color="#9D00FF" progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"gen"}
                pageSize={6}
                country={country}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/United-states"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"us"}
                pageSize={6}
                country={country}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/India"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"in"}
                pageSize={6}
                country={"in"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/United-Kingdom"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"uk"}
                pageSize={6}
                country={"gb"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/China"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"cn"}
                pageSize={6}
                country={"cn"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/France"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"fr"}
                pageSize={6}
                country={"fr"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/Italy"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"it"}
                pageSize={6}
                country={"it"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/Japan"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"jp"}
                pageSize={6}
                country={"jp"}
                category={"General"}
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"Business"}
                pageSize={6}
                country={country}
                category={"Business"}
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"Entertainment"}
                pageSize={6}
                country={country}
                category={"Entertainment"}
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"Health"}
                pageSize={6}
                country={country}
                category={"Health"}
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"Science"}
                pageSize={6}
                country={country}
                category={"Science"}
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"sports"}
                pageSize={6}
                country={country}
                category={"Sports"}
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"Technology"}
                pageSize={6}
                country={country}
                category={"Technology"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
App.defaultProps = {
  country: "us",
};
App.propTypes = {
  country: PropTypes.string,
};
export default App;
