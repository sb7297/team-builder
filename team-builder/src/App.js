import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {name: "Harry Potter", email: "hp102@hogwarts.edu", role: "Wizard"},
    {name: "Mycroft Canner", email: "anonymous@anonymous.org", role: "Rogue"},
    {name: "Breq Mianaai", email: "breq@mianaai.gov", role: "Ship"}
  ]);

  return (
    <div className="App">
    {teamMembers.map(member => {
      return (<ul>
        <li>{member.name}</li>
        <li>{member.email}</li>
        <li>{member.role}</li>
      </ul>);
    })}
    </div>
  );
}

export default App;
