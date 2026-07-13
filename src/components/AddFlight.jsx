import { useState } from "react";
import axios from "axios";

const AddFlight = () => {
  const [input, setInput] = useState({
    flight_number: "",
    airline: "",
    origin: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_time: "",
    fare: "",
    total_seats: "",
    available_seats: "",
    status: "Scheduled",
  });

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://host-demo-app.onrender.com/api/add-flight", {
        flight_number: input.flight_number,
        airline: input.airline,
        origin: input.origin,
        destination: input.destination,
        departure_date: input.departure_date,
        departure_time: input.departure_time,
        arrival_time: input.arrival_time,
        fare: Number(input.fare),
        total_seats: Number(input.total_seats),
        available_seats: Number(input.available_seats),
        status: input.status,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response?.data || error.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="text-center">Add Flight</h3>
        </div>

        <div className="card-body">

          <form onSubmit={submitHandler}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Flight Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="flight_number"
                  value={input.flight_number}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Airline</label>
                <input
                  type="text"
                  className="form-control"
                  name="airline"
                  value={input.airline}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Origin</label>
                <input
                  type="text"
                  className="form-control"
                  name="origin"
                  value={input.origin}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Destination</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={input.destination}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="departure_date"
                  value={input.departure_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Departure Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="departure_time"
                  value={input.departure_time}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Arrival Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="arrival_time"
                  value={input.arrival_time}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Fare</label>
                <input
                  type="number"
                  className="form-control"
                  name="fare"
                  value={input.fare}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Total Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="total_seats"
                  value={input.total_seats}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Available Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="available_seats"
                  value={input.available_seats}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={input.status}
                  onChange={inputHandler}
                >
                  <option>Scheduled</option>
                  <option>On Time</option>
                  <option>Delayed</option>
                  <option>Cancelled</option>
                </select>
              </div>

            </div>

            <button type="submit" className="btn btn-primary">
              Add Flight
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default AddFlight;