import bookOne from '../assets/images/bookOne.png';
import tabOne from '../assets/images/tabOne.png';


export default function Leadmagnet() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Is Your Business Ready to Harness AI & Automation?
          </h1>
          <p className="mb-6 text-lg">
            Use this proven checklist to uncover gaps, identify opportunities, and plan your next steps
          </p>
          <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md font-semibold">
            Download Free Checklist
          </button>
        </div>
        <img
          src={bookOne}
          alt="AI & Automation Readiness Checklist"
          className="mt-10 md:mt-0 w-60 md:w-72"
        />
      </header>

      {/* This Checklist Section */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">This Checklist</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          AI and automation are no longer optional—they’re competitive advantages. This checklist will help you assess your current readiness and identify the next steps to modernise your business.
        </p>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">What You’ll Get:</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Data readiness & team skills checklist
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Top 5 automation misconceptions (and facts)
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Immediate quick wins to implement
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> A readiness scorecard to benchmark progress
            </li>
          </ul>
          <p className="mt-4 font-semibold">For: Ops Directors, IT Managers, C-suite</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={tabOne}
            alt="Assessing Your Data Readiness"
            className="w-72 rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Download Form */}
      <section className="max-w-4xl mx-auto my-12 px-6">
        <h2 className="text-center text-2xl font-semibold mb-3">Download Your Free Checklist</h2>
        <p className="text-center mb-8 text-gray-700">
          Fill out the form below to get instant access to our exclusive business research report.
        </p>
        <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name *"
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Last Name *"
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Job Title"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Industry"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <select
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue=""
            >
              <option value="" disabled>
                Country
              </option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="marketingConsent"
              required
              className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="marketingConsent" className="text-gray-700 text-sm">
              I agree to receive marketing communications and understand I can unsubscribe at any time.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
          >
            Download Free Checklist Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>2025 © Sartor Limited – All rights reserved</p>
      </footer>

    </div>
  );
}
