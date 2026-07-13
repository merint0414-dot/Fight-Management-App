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

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://host-demo-app.onrender.com/api/add-flight",
        {
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
        }
      );

      setMessage(response.data.message || "Flight added successfully.");
      setMessageType("success");

      setInput({
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
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong."
      );
      setMessageType("danger");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3 className="text-center">Add Flight</h3>
        </div>

        <div className="card-body">

          {message && (
            <div className={`alert alert-${messageType}`}>
              {message}
            </div>
          )}

          <form onSubmit={submitHandler}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Flight Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="flight_number"
                  value={input.flight_number}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Airline</label>
                <input
                  type="text"
                  className="form-control"
                  name="airline"
                  value={input.airline}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Origin</label>
                <input
                  type="text"
                  className="form-control"
                  name="origin"
                  value={input.origin}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={input.destination}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Departure Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="departure_date"
                  value={input.departure_date}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Departure Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="departure_time"
                  value={input.departure_time}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Arrival Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="arrival_time"
                  value={input.arrival_time}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Fare (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  name="fare"
                  value={input.fare}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Total Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="total_seats"
                  value={input.total_seats}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Available Seats</label>
                <input
                  type="number"
                  className="form-control"
                  name="available_seats"
                  value={input.available_seats}
                  onChange={inputHandler}
                  required
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={input.status}
                  onChange={inputHandler}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Add Flight
              </button>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default AddFlight;