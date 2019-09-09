import React from 'react';
import logo from './logo.svg';
import './App.css';
//denna e till för router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Index() {
  return App();
}

function About() {
  return <h2>About</h2>;
}

function Reports() {
  return whatweek();
}

function Week() {
    return (
       <div className="Apptext">
       <p>1 Installera -    npm create-react-app demo-app -     i kursreport jsramverk.</p>
       <p>2 Lagt till Route -    import  BrowserRouter as Router, Route, Link  from "react-router-dom"; i App.js samt funktionen function AppRouter().</p>
       <p>3 .env fil -  Skapat en fil för att applikationen skall gå igenom PORT=3002 istället för 3000 default.</p>
       <p>4 Kör igång - Npm start</p>

       <a href="">Github</a>
       </div>
    )
 }





function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/reports/">Reports</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/reports" component={Reports} />
        <Route path="/reports/week" component={Week} />
      </div>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

<p>Min me-sida i kursen jsramverk</p>

<p>Detta är min me-sida i kursen jsramverk. Denna sidan innehåller en presentation av mig själv. Denna sida underhålls under hela kursen och jag uppdaterar den efter hand och behov.</p>

<p>Så, en presentation av mig själv är en bra början.</p>

<p>Mitt namn är Alex Lopez Olavarria. Jag är född och uppvuxen i Uddevalla, Bohuslän, som tillhör de västliga delarna av Sverige. Jag är intresserad av det mesta och har i yngre dagar spelat fotboll, numera håller jag mig i form i gymmet speciellt intresserad av övningar såsom marklyft, knäböj och bänkpress. Jag har jobbat i de flesta delarna inom vården och jobbar i nuläget som ledsagare samt i Kungshamn åt sammhällsbyggnadsförvaltningen. Programmering har intresserat mig sen jag gick i gymnasiet.</p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hehe
        </a>
      </header>
    </div>
  );
}

function whatweek() {
  return (
    <div className="Apptext">
        <a
          className="App-link"
          href="/reports/week/1"
          target="_blank"
          rel="noopener noreferrer"
        >
        1
        </a>
        </div>
  );
}


export default AppRouter;
