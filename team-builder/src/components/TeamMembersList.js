import React from 'react';

const TeamMembersList = function({ teamMembers }) {
  return (
    teamMembers.map(member => {
      return (
        <ul key={member.id}>
          <li>{member.name}</li>
          <li>{member.email}</li>
          <li>{member.role}</li>
        </ul>
      );
    })
  );
}

export default TeamMembersList;