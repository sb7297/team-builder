import React, { useState } from 'react';

const Form = function({ addMember }) {
  const [ formMember, setFormMember ] = useState(
    {name: "", email: "", role: ""}
  );

  const handleChange = function(ev) {
    setFormMember({ ...formMember, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = function(ev) {
    ev.preventDefault();
    addMember({ ...formMember });
    setFormMember({name: "", email: "", role: ""});
  }

  return (
    <form
      onSubmit={ev => handleSubmit(ev)}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formMember.name}
          onChange={ev => handleChange(ev)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formMember.email}
          onChange={ev => handleChange(ev)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={formMember.role}
          onChange={ev => handleChange(ev)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;