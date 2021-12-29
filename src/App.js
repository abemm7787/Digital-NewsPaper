import './App.css';
import React from 'react';
import ReactDom from "react-dom";
import Ticker from 'react-ticker'
import axios from "axios"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PlantList from './components.js/PlantList';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Slide from 'react-reveal/Slide';






import pic from "./bitcoin.jpg";
//<img src={pic} />  
const myComponent = {
  width: '850px',
  height: '550px',
  overflow: "scroll",



};






function App() {
  return (
    <div className="App">



      <div className="App-header">
        <div className="leftbox">
          Hello





        </div>-


        <div>
          <div className="title-Name"> The New York Times </div>
        </div>




        <div className="rightbox">
          Hello
        </div>



      </div>



      <div>
        <Ticker speed={10} height={55} >
          {({ }) => (
            <>
              <h2 className='ticker' >
                This is the Headline of element.
              </h2>
            </>
          )}
        </Ticker>
      </div>



      <div className="right" >
        <div>

          <h1>Hellowwww </h1>



        </div>






        <body className='body-page' >
          <div className="line-page" >


            <div style={{ height: '300px', width: "300px" }}>



              <div className='Scroll' style={myComponent}>
                <ul className="left-article"   >
                  <div className="self-Title">Self</div>
                  <div style={{ width: "260px", borderTop: "1px solid black ", marginLeft: 20, marginRight: 60 }}></div>


                </ul>



              </div>
            </div>
          </div>


          <div style={{ height: '300px', width: "300px" }}>

            <div class="seperator">
            </div>

            <div className='Scroll' style={myComponent}>
              <ul className="article"   >
                <div className="title">


                  <div className="love-Title"> Love        </div>
                  <h4> 12.06.2021  </h4>
                </div>


                <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>

                <div style={{}}>




                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                          <img className="image-page" src={pic} />
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>

                  <div className="title">


                    <div className="love-Title"> Love        </div>
                    <h4> 12.06.2021  </h4>
                  </div>


                  <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>


                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                          <img className="image-page" src={pic} />
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>



                  <div className="title">


                    <div className="love-Title"> Love        </div>
                    <h4> 12.06.2021  </h4>
                  </div>


                  <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>


                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                          <img className="image-page" src={pic} />
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>


                  <div className="title">


                    <div className="love-Title"> Love        </div>
                    <h4> 12.06.2021  </h4>
                  </div>


                  <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>


                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                          <img className="image-page" src={pic} />
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>


                </div>
              </ul>
            </div>
          </div>
        </body>
        <div>

          <div className="left"  >Hellow </div>

          
          <div className="left-box">
            Hello again


Here is the 2nd scroll

            <div className='Scroll' style={myComponent}>
              <ul className="article"   >
                <div className="title">


                  <div className="love-Title"> Love        </div>
                  <h4> 12.06.2021  </h4>
                </div>


                <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>

                <div style={{}}>




                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                      
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>

                  <div className="title">


                    <div className="love-Title"> Love        </div>
                    <h4> 12.06.2021  </h4>
                  </div>


                  <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>


                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                    
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>



                  <div className="title">


                    <div className="love-Title"> Love        </div>
                    <h4> 12.06.2021  </h4>
                  </div>


                  <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>


                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
         
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>


                  <div className="title">


                    <div className="love-Title"> Love        </div>
                    <h4> 12.06.2021  </h4>
                  </div>


                  <div style={{ borderBottom: " 1px solid black ", width: 650, marginRight: 20 }}></div>


                  <Card className="cards"
                    style={{
                      width: 650,
                      height: 570,
                      backgroundColor: "white",
                      marginTop: 40
                    }}
                  >
                    <CardContent className="center-cards"  >
                      <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                      >
                        <Slide right>
                     
                        </Slide>
                      </Typography>
                      <Typography variant="h5" component="h2" className="typo-width"   >

                        <Slide right>
                          Sharing The Widespread Acclaim About Motivation
                        </Slide>
                      </Typography>
                      <Typography className=" typo-width  "
                        style={{
                          marginBottom: 12,
                          fontSize: 14,
                          width: 150

                        }}
                        color="textSecondary"
                      >

                        <Slide right>
                          By Richard Carnation

                        </Slide>
                      </Typography>


                      <Typography style={{ width: 500 }} variant="body2" component="p">
                        <Slide right>
                          Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional

                        </Slide>
                      </Typography>
                    </CardContent>

                    <Slide right>
                      <CardActions>
                        <Button size="small">Stay Safe.....</Button>
                      </CardActions>
                    </Slide>



                  </Card>


                </div>
              </ul>
            </div>

            

          </div>
        </div>


      </div>

    </div>
  );
}

export default App;
