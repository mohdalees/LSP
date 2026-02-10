import { useEffect, useState } from "react";
import axios from "axios";

export default function ProviderDashboard() {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/provider/me",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setProvider(res.data);
      } catch (error) {
        console.error(error);
        alert("Failed to load provider data");
      }
    };

    fetchProvider();
  }, []);

  if (!provider) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Provider Dashboard</h1>

      <p><strong>Name:</strong> {provider.name}</p>
      <p><strong>Email:</strong> {provider.email}</p>
      <p><strong>Profession:</strong> {provider.prof}</p>
      <p><strong>Price:</strong> ₹{provider.price}</p>
      {/* <p><strong>Phone:</strong> {provider.phone}</p> */}
    </div>
  );
}
