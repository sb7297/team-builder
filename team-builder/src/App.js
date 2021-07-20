import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TeamMembersList from './components/TeamMembersList';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {name: "Harry Potter", email: "hp102@hogwarts.edu", role: "Wizard", id: 0},
    {name: "Mycroft Canner", email: "anonymous@anonymous.org", role: "Rogue", id: 1},
    {name: "Breq Mianaai", email: "breq@mianaai.gov", role: "Ship", id: 2},
    {name: "Taylor Hebert", email: "weaver@chicago.prt.gov", role: "Hero", id: 3}
  ]);

  const [nextId, setNextId] = useState(
    teamMembers.reduce( (acc, current) => acc <= current.id ? current.id+1 : acc, 0 )
  );

  const addMember = function(memberNoId) {
    let newMember = { ...memberNoId, id: nextId};
    setNextId(nextId+1);
    setTeamMembers([ ...teamMembers, newMember ]);
  };

  return (
    <div className="App">
      <TeamMembersList teamMembers={teamMembers} />
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
