import React from 'react';

const TeamMembersList = function({ teamMembers, setEditingId }) {
  const handleEdit = function(id) {
    setEditingId(id);
  }

  return (
    teamMembers.map(member => {
      return (
        <ul key={member.id}>
          <li>{member.name}</li>
          <li>{member.email}</li>
          <li>{member.role}</li>
          <li><button onClick={() => handleEdit(member.id)}>Edit</button></li>
        </ul>
      );
    })
  );
}

export default TeamMembersList;