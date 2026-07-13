
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const API_URL = "https://host-demo-app.onrender.com/api/flights"

const ViewFlights = () => {

    const [data, changeData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        axios.get(API_URL)
            .then((response) => {
                changeData(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
           

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>View All Flights</h3>
                    </div>

                    <div className="card-body">

                        {loading ? (

                            <h4 className="text-center">Loading...</h4>

                        ) : (

                            <div className="table-responsive">

                                <table className="table table-bordered table-striped table-hover">

                                    <thead className="table-dark">

                                        <tr>
                                            <th>Flight No</th>
                                            <th>Airline</th>
                                            <th>Origin</th>
                                            <th>Destination</th>
                                            <th>Date</th>
                                            <th>Departure</th>
                                            <th>Arrival</th>
                                            <th>Fare</th>
                                            <th>Available Seats</th>
                                            <th>Status</th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        {data.map((value, index) => (

                                            <tr key={index}>
                                                <td>{value.flight_number}</td>
                                                <td>{value.airline}</td>
                                                <td>{value.origin}</td>
                                                <td>{value.destination}</td>
                                                <td>{value.departure_date}</td>
                                                <td>{value.departure_time}</td>
                                                <td>{value.arrival_time}</td>
                                                <td>₹ {value.fare}</td>
                                                <td>{value.available_seats}</td>
                                                <td>
                                                    <span
                                                        className={
                                                            value.status === "Scheduled"
                                                                ? "badge bg-primary"
                                                                : value.status === "On Time"
                                                                ? "badge bg-success"
                                                                : value.status === "Delayed"
                                                                ? "badge bg-warning text-dark"
                                                                : "badge bg-danger"
                                                        }
                                                    >
                                                        {value.status}
                                                    </span>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewFlights