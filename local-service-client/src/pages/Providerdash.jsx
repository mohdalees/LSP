export default function Providerdash() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Provider Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Bookings" value="12" />
        <StatCard title="Pending Requests" value="3" />
        <StatCard title="Total Earnings" value="₹8,500" />
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AvailabilityCard />
        <BookingRequests />
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function AvailabilityCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold mb-4">Availability</h2>

      <input
        type="date"
        className="border p-2 rounded w-full mb-3"
      />

      <select className="border p-2 rounded w-full mb-3">
        <option>Select Time Slot</option>
        <option>9:00 AM - 11:00 AM</option>
        <option>12:00 PM - 2:00 PM</option>
        <option>3:00 PM - 5:00 PM</option>
      </select>

      <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
        Add Slot
      </button>
    </div>
  );
}

function BookingRequests() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-bold mb-4">Booking Requests</h2>

      <BookingItem
        name="Amit Sharma"
        service="Plumber"
        time="10:00 AM"
      />
      <BookingItem
        name="Rahul Verma"
        service="Electrician"
        time="1:00 PM"
      />
    </div>
  );
}

function BookingItem({ name, service, time }) {
  return (
    <div className="border rounded p-3 mb-3 flex justify-between items-center">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">
          {service} • {time}
        </p>
      </div>

      <div className="space-x-2">
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          Accept
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Reject
        </button>
      </div>
    </div>
  );
}
