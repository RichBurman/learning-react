import React, { useState } from "react";

function SchoolForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [studentId, setStudentId] = useState("");

  return (
    <>
      <div>
        <h1>Welcome to the School Form </h1>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
          <label htmlFor="age">Age</label>
          <input onChange={(e) => setAge(e.target.value)} value={age}></input>
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
          <label htmlFor="classNumber">Homeroom Class Number</label>
          <input
            onChange={(e) => setClassNumber(e.target.value)}
            value={classNumber}
          ></input>
          <label htmlFor="studentId">Student ID</label>
          <input
            onChange={(e) => setStudentId(e.target.value)}
            value={studentId}
          ></input>
        </form>
        <div>
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
          <h2>{age}</h2>
          <h2>{address}</h2>
          <h2>{classNumber}</h2>
          <h2>{studentId}</h2>
        </div>
      </div>
    </>
  );
}

export default SchoolForm;
