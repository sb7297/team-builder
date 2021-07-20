import React, { useState } from 'react';
import './App.css';
import TeamMembersList from './components/TeamMembersList';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {name: "Harry Potter", email: "hp102@hogwarts.edu", role: "Wizard"},
    {name: "Mycroft Canner", email: "anonymous@anonymous.org", role: "Rogue"},
    {name: "Breq Mianaai", email: "breq@mianaai.gov", role: "Ship"}
  ]);

  return (
    <div className="App">
      <TeamMembersList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
