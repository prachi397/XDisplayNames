import React, { useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    const validName = /^[A-Za-z\s]+$/
    if(firstName && lastName && validName.test(firstName) && validName.test(lastName)){
        setFullName(`${firstName} ${lastName}`);
    }else{
        setFullName('');
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isButtonClicked && fullName &&(
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
};
export default FullName;
