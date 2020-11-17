import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';
import Pic01 from './Assets/pic01.jpg';
import Pic02 from "./Assets/trippin.png";
import Pic03 from './Assets/streamer-heading.png';
import Pic04 from './Assets/ibeatlogan.png';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Banner />
      <div  className="project-section">
      <Projects path="https://www.caddie-golf.com" image={Pic01} head="React" title="Caddie Golf" paragraph="Caddie is a React application made to search the globe for golf courses using the Google Place API.  This application also uses Netlify serverless functions to make the API calls."/>
      <Projects path="https://www.trippincwd.herokuapp.com" image={Pic02} head="React" title="Trippin'" paragraph="Trippin' is a full MERN stack application for planning trips and searching for things to do on your vacation. This application was made by the team at Cinque Web Development." />
      <Projects path="https://streamer-62w1q7j4l.vercel.app/" image={Pic03} head="React" title="Streamer" paragraph="Streamer is a React application that keeps track of my favorite streamers.  The application shows the streamers most recent youtube videos and their twitter feeds.  Using the YouTube API and the Twitter API."/>
      <Projects path="https://www.ibeatlogan.com" image={Pic04} title="iBeatLogan" head="React" paragraph="iBeatLogan is a React application made to keep track of games between friends.  A friend and I made this app so that when a new game is submitted it sends a text to Logan with a little trash talk using the Twilio API." />
      </div>
    </Router>
  )
}
