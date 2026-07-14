import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const AddData = () => {
  const [input, changeInput] = useState({
    bookingId: "",
    petName: "",
    petType: "",
    breed: "",
    age: "",
    weight: "",
    vaccinationStatus: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    checkInDate: "",
    checkOutDate: "",
    kennelNumber: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://localhost:3000/add-data", input)
      .then((response) => {
        alert(response.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Add Pet</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Booking ID</label>
            <input
              type="text"
              className="form-control"
              name="bookingId"
              value={input.bookingId}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Pet Name</label>
            <input
              type="text"
              className="form-control"
              name="petName"
              value={input.petName}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Pet Type</label>
            <input
              type="text"
              className="form-control"
              name="petType"
              value={input.petType}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Breed</label>
            <input
              type="text"
              className="form-control"
              name="breed"
              value={input.breed}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={input.age}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Weight (kg)</label>
            <input
              type="text"
              className="form-control"
              name="weight"
              value={input.weight}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Vaccination Status</label>
            <input
              type="text"
              className="form-control"
              name="vaccinationStatus"
              value={input.vaccinationStatus}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              name="ownerName"
              value={input.ownerName}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Owner Phone</label>
            <input
              type="text"
              className="form-control"
              name="ownerPhone"
              value={input.ownerPhone}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Owner Email</label>
            <input
              type="email"
              className="form-control"
              name="ownerEmail"
              value={input.ownerEmail}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Check-in Date</label>
            <input
              type="date"
              className="form-control"
              name="checkInDate"
              value={input.checkInDate}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Check-out Date</label>
            <input
              type="date"
              className="form-control"
              name="checkOutDate"
              value={input.checkOutDate}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Kennel Number</label>
            <input
              type="text"
              className="form-control"
              name="kennelNumber"
              value={input.kennelNumber}
              onChange={inputHandler}
            />
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary" onClick={readValue}>
              Add Pet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;