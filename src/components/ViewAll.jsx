import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAll = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-data")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">View All Pets</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Vaccination Status</th>
              <th>Owner Name</th>
              <th>Owner Phone</th>
              <th>Owner Email</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Kennel Number</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value) => (
              <tr key={value._id}>
                <td>{value.bookingId}</td>
                <td>{value.petName}</td>
                <td>{value.petType}</td>
                <td>{value.breed}</td>
                <td>{value.age}</td>
                <td>{value.weight}</td>
                <td>{value.vaccinationStatus}</td>
                <td>{value.ownerName}</td>
                <td>{value.ownerPhone}</td>
                <td>{value.ownerEmail}</td>
                <td>{value.checkInDate}</td>
                <td>{value.checkOutDate}</td>
                <td>{value.kennelNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAll;