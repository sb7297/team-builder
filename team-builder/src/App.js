import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TeamMembersList from './components/TeamMembersList';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {name: "Harry Potter", email: "hp102@hogwarts.edu", role: "Wizard"},
    {name: "Mycroft Canner", email: "anonymous@anonymous.org", role: "Rogue"},
    {name: "Breq Mianaai", email: "breq@mianaai.gov", role: "Ship"},
    {name: "Taylor Hebert", email: "weaver@chicago.prt.gov", role: "Hero"}
  ]);

  const addMember = function(member) {
    setTeamMembers([ ...teamMembers, member ]);
  };

  return (
    <div className="App">
      <TeamMembersList teamMembers={teamMembers} />
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
