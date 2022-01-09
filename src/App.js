import "./App.css";
import React from "react";
import ReactDom from "react-dom";
import Ticker from "react-ticker";
import axios from "axios";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Slide from "react-reveal/Slide";

import pic from "./bitcoin.jpg";
//<img src={pic} />
const myComponent = {
  width: "850px",
  height: "590px",
  overflow: "scroll",
};

function App() {
  return (
    <div>
      <body>
        <header>
          <nav className="links">
            <div className="leftbox">
              "Neque porro quisquam est qui dolorem ipsum quia dolor " "
            </div>
            <div className="title-Name"> The New York Times </div>
            <div className="rightbox">
              "Neque porro quisquam est qui dolorem ipsum quia dolor , .
            </div>
          </nav>
          <div>
            <Ticker speed={10} height={55}>
              {({}) => (
                <>
                  <h2 className="ticker">This is the Headline of element.</h2>
                </>
              )}
            </Ticker>

            <div className="bottom-border-right"></div>
          </div>
        </header>

        <section>
          <div class="wrapper">
            <div>
              <div className="left-side-border"></div>
              <div className="left-side"> NO2 </div>
              <div className="left-side"> NO2 </div>
              <div className="left-side"> NO2 </div>
              <div className="no-border-right"></div>
            </div>

            <div>
              <div className="self-Title">
                Self
                <div className="bottom-self-border-right"></div>{" "}
                <li className="pinnedone"> Pinned Issue </li>
              </div>
              <h1 className="pinned"> </h1>
              <div className="self-sentence"> NO.O1 </div>
            </div>

            <div className="Scroll" style={myComponent}>
              <ul className="article">
                <div className="title">
                  <div className="secound-Title"> Esteem</div>
                  <div className="date"> 01/08/2022 </div>
                  <div className="borderTitle"> </div>

                  <div style={{}}>
                    <Slide right>
                      <img className="image-page" src={pic} />
                    </Slide>

                    <Slide right>
                      <div className="card-header">
                        {" "}
                        Sharing The Widespread Acclaim About Motivation{" "}
                      </div>
                    </Slide>

                    <Slide right>
                      <div className="card-author"> </div>By Richard Carnation
                    </Slide>

                    <Slide right>
                      Blonde received widespread acclaim, with critics praising
                      Ocean's introspective lyrics and the album's
                      unconventional
                    </Slide>

                    <Slide right>
                      <Button size="small">Stay Safe.....</Button>
                    </Slide>
                  </div>

                  <div className="secound-Title"> Esteem</div>

                  <div className="borderTitle"> </div>

                  <div style={{}}>
                    <Slide right>
                      <img className="image-page" src={pic} />
                    </Slide>

                    <Slide right>
                      <p> Sharing The Widespread Acclaim About Motivation </p>
                    </Slide>

                    <Slide right>By Richard Carnation</Slide>

                    <Slide right>
                      Blonde received widespread acclaim, with critics praising
                      Ocean's introspective lyrics and the album's
                      unconventional
                    </Slide>

                    <Slide right>
                      <Button size="small">Stay Safe.....</Button>
                    </Slide>
                  </div>
                </div>
              </ul>
            </div>

            <div className="right-box">
              <div className="inner-box">
                "Neque porro quisquam est qui dolorem ipsum quia dolor " #3 "
              </div>
            </div>

            <div>
              <div className="left-side-border"></div>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
