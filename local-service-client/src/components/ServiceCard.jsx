export default function ServiceCard({ provider }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{provider.name}</h2>
      <p>{provider.service}</p>
      <p>₹{provider.price}/hr</p>
      <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">
        Book Now
      </button>
    </div>
  );
}
