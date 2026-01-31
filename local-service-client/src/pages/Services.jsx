import ServiceCard from "../components/ServiceCard";

const dummyProviders = [
  { name: "Rahul", service: "Plumber", price: 300 },
  { name: "Amit", service: "Electrician", price: 400 },
];

export default function Services() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {dummyProviders.map((p, i) => (
        <ServiceCard key={i} provider={p} />
      ))}
    </div>
  );
}
