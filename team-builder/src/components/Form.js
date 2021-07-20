import React, { useState } from 'react';

const Form = function({ addMember }) {
  const [ formMember, setFormMember ] = useState({});
  return (
    <form
      // onSubmit={}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          // value={}
          // onChange={}
        />
      <label>
        Email:
        <input
          type="text"
          name="email"
          // value={}
          // onChange={}
        />
      </label>
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          // value={}
          // onChange={}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;