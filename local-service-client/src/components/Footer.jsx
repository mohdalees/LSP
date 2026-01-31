export default function Footer() {
  return (
    <footer className="bg-green-700 text-gray-400 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            LocalEase
          </h2>
          <p className="mt-2 text-m text-white">
            Find trusted local service providers near you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-m">
            <li className="hover:text-teal-700 cursor-pointer font-bold transition delay-150 duration-150 ease-in-out text-white">Home</li>
            <li className="hover:text-teal-700 cursor-pointer font-bold transition delay-150 duration-150 ease-in-out text-white">Services</li>
            <li className="hover:text-teal-700 cursor-pointer font-bold transition delay-150 duration-150 ease-in-out text-white">Login</li>
            <li className="hover:text-teal-700 cursor-pointer font-bold transition delay-150 duration-150 ease-in-out text-white">Register</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Popular Services
          </h3>
          <ul className="space-y-2 text-m text-white">
            <li>Plumber</li>
            <li>Electrician</li>
            <li>Carpenter</li>
            <li>Tutor</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-white text-m">
            <li>Email: support@localease.com</li>
            <li>Phone: +91 7217xxxx19</li>
            <li>India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-m text-white">
        © {new Date().getFullYear()} LocalEase. All rights reserved.
      </div>
    </footer>
  );
}
