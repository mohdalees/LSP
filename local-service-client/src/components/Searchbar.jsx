import { useState } from "react";

export default function Searchbar() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Service:", service);
    console.log("Location:", location);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-3 max-w-3xl mx-auto"
    >
      {/* Service Input */}
      <input
        type="text"
        placeholder="What service do you need?"
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-800"
      />

      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-800"
      />

      {/* Button */}
      <button
        type="submit"
        className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 cursor-pointer transition duration-300 ease-in-out"
      >
        Search
      </button>
    </form>
  );
}
