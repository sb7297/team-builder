import React, { useEffect, useState } from 'react';

const Form = function({ addMember, editingMember, editMyMember }) {
  const [ formMember, setFormMember ] = useState(
    {name: "", email: "", role: ""}
  );

  const handleChange = function(ev) {
    setFormMember({ ...formMember, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = function(ev) {
    ev.preventDefault();
    if (!editingMember) {
      addMember({ ...formMember });
    }
    else {
      editMyMember({ ...formMember });
    }
    setFormMember({name: "", email: "", role: ""});
  }

  useEffect(() => {
    if (editingMember) setFormMember({ ...editingMember });
  }, [editingMember]);

  return (
    <div class="Form">
    <h2>{editingMember ? `editing ${editingMember.name}` : 'add new member'}</h2>
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
    </div>
  );
}

export default Form;