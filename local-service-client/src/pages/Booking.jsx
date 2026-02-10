import { useEffect, useState } from "react";
import axios from "axios";

export default function Booking() {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/provider/all")
      .then(res => setProviders(res.data))
      .catch(err => console.error(err));
  }, []);

  const bookService = async (providerId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/booking/create",
        { providerId, date, time, address },
        {
          headers: { Authorization: token },
        }
      );

      alert("Congratulation");
    } catch (error) {
      alert("Fill All Field ❌");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book a Service</h1>

      <div className="grid grid-cols-3 gap-4">
        {providers.map((p) => (
          <div key={p._id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{p.name}</h2>
            <p>Profession: {p.prof}</p>
            <p>Price: ₹{p.price}</p>
            <p>Phone: {p.phone}</p>

            <button
              onClick={() => setSelectedProvider(p._id)}
              className="bg-blue-600 text-white px-3 py-1 mt-2"
            >
              Select
            </button>
          </div>
        ))}
      </div>

      {selectedProvider && (
        <div className="mt-6 border p-4">
          <h2 className="text-xl font-bold mb-2">Confirm Booking</h2>

          <input
            type="date"
            className="border p-2 w-full mb-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="time"
            className="border p-2 w-full mb-2"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <input
            type="text"
            placeholder="Your Address"
            className="border p-2 w-full mb-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            onClick={() => bookService(selectedProvider)}
            className="bg-green-600 text-white px-4 py-2"
          >
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}
