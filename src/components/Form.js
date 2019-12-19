import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                name="name"
                id="name"
                type="text"
                placeholder="name"
                onChange={changeHandler}
                value={member.name}
                className = "input"
            />
            <label htmlFor="email">Email Adress</label>
            <input
                name="email"
                id="email"
                type="text"
                placeholder="email"
                onChange={changeHandler}
                value={member.email}
                className = "input"
            />
            <label htmlFor="role">Role</label>
            <input
                name="role"
                id="role"
                type="text"
                placeholder="role"
                onChange={changeHandler}
                value={member.role}
                className = "input"
            />
        <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;