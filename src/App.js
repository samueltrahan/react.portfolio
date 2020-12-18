import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Pic01 from "./Assets/pic01.jpg";
import Pic02 from "./Assets/trippin.png";
import Pic03 from "./Assets/streamer-heading.png";
import Pic04 from "./Assets/ibeatlogan.png";
import Pic05 from "./Assets/Heart-page.png";
import Pic06 from './Assets/gamotivate.png';
import Templates from "./Pages/Templates/Templates";
import About from './Pages/About/About';

export default function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Route
          exact
          path="/templates"
          render={() => (
            <div>
              <Templates />
              <Footer />
            </div>
          )}
        ></Route>
        <Route exact path="/about" render={() => (
          <div>
            <About />
            <Footer />
          </div>
        )}>

        </Route>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Banner />
              <div className="project-section">
                <Projects
                  path="https://www.caddie-golf.com"
                  image={Pic01}
                  head="React"
                  title="Caddie Golf"
                  paragraph="Caddie is a React application made to search the globe for golf courses using the Google Place API.  This application also uses Netlify serverless functions to make the API calls."
                />
                <Projects
                  path="https://trippin-cwd.herokuapp.com/"
                  image={Pic02}
                  head="MERN"
                  title="Trippin'"
                  paragraph="Trippin' is a full MERN stack application for planning trips and searching for things to do on your vacation. This application was made by the team at Cinque Web Development."
                />
                <Projects 
                path="ga-motivate.herokuapp.com" 
                image={Pic06} 
                head="MERN"
                title="GA Motivate"
                paragraph="Ga Motivate is full MERN stack application made during a hackathon with a full team of engineers and designers.  This application was intended to help GA alumni stay connect and motivated during their job search."
                />
                <Projects
                  path="https://streamer-62w1q7j4l.vercel.app/"
                  image={Pic03}
                  head="React"
                  title="Streamer"
                  paragraph="Streamer is a React application that keeps track of my favorite streamers.  The application shows the streamers most recent youtube videos and their twitter feeds.  Using the YouTube API and the Twitter API."
                />
                <Projects
                  path="https://www.ibeatlogan.com"
                  image={Pic04}
                  title="iBeatLogan"
                  head="React"
                  paragraph="iBeatLogan is a React application made to keep track of games between friends.  A friend and I made this app so that when a new game is submitted it sends a text to Logan with a little trash talk using the Twilio API."
                />
                <Projects
                  path="https://createheart.herokuapp.com/"
                  image={Pic05}
                  title="HEART"
                  head="MERN"
                  paragraph="HEART is a full MERN stack application.  It is used to keep track of workouts, things to do, and healthy meals. I made this application as my final project in the coding boot camp that I attended at General Assembly."
                />
              </div>
              <form method="get" action="/templates" className="template-section">
                <h1 className="template-header">
                  Check out some templates I've made using React
                </h1>
                <button type="submit" className="template-btn">
                  React Templates
                </button>
              </form>
              <Contact />
              <Footer />
            </div>
          )}
        ></Route>
      </Router>
    </>
  );
}
