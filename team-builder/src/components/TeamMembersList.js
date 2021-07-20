import React from 'react';

const TeamMembersList = function({ teamMembers, setEditingId, deleteMember }) {
  const handleEdit = function(id) {
    setEditingId(id);
  }

  const handleDelete = function(id) {
    deleteMember(id);
  }

  return (
    teamMembers.map(member => {
      return (
        <ul key={member.id}>
          <li>{member.name}</li>
          <li>{member.email}</li>
          <li>{member.role}</li>
          <li><button onClick={() => handleEdit(member.id)}>Edit</button></li>
          <li><button onClick={() => handleDelete(member.id)}>Delete</button></li>
        </ul>
      );
    })
  );
}

export default TeamMembersList;