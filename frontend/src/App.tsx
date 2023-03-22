import React from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './teams'//File with data

//Component for heading and description
function Welcome() {
  return (
    <div>
      <h1>Welcome to March Madness</h1>
      <p>This is a list of basketball teams in the NCAA March Madness Tournament!</p>
    </div>
  )
}

//Render out individual team info (data comes from separate js file)
class Team extends React.Component<{school:string, name:string, city:string, state:string},{}>{
  render() {
    
    const oneTeam = this.props;
    
    return(
    <div>
        <h4>School: {oneTeam.school}</h4>
        <p>Mascot: {oneTeam.name}</p>
        <p>Location: {oneTeam.city}, {oneTeam.state}</p>
        <br/>
    </div>
    );
  }
}

//Build the list component for all teams
function TeamList() {
  return (
    <div>
      {data.map(oneTeam => <Team {...oneTeam}/>)}
    </div>
  );
}

//Render all components (left react logo for fun)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
        <TeamList/>
      </header>
    </div>
  );
}

export default App;
