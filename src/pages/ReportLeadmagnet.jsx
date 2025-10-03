import bookTwo from '../assets/images/bookTwo.png';
import tabTwo from '../assets/images/tabTwo.png';
import EmailForm from '../components/EmailForm';
import ZohoOptinForm from '../components/ZohoOptinForm';


export default function ReportLeadmagnet() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Discover How Leading Brands Are Protecting Billions in Revenue From Counterfeiting in 2025
          </h1>
          <p className="mb-6 text-lg">
            Discover the trends, technologies, and strategies that are shaping the future of secure product distribution          </p>
          <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md font-semibold">
            Download Free Report          </button>
        </div>
        <img
          src={bookTwo}
          alt="AI & Automation Readiness Checklist"
          className="mt-10 md:mt-0 w-60 md:w-72"
        />
      </header>

      {/* This Checklist Section */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">This Report</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Counterfeiting is costing global businesses billions and damaging trust. This exclusive report gives you the insights, frameworks, and case studies to stay ahead. If you're in the Pharmaceutical, FMCG, or B2B distribution industry, you need this blueprint.        </p>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">What's Inside the Report</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> The Hidden Cost of Counterfeiting (2025 Data)
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Real Case Studies: Who's winning—and how
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> How AI & Blockchain protect your margins
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> ROI benchmarks for product verification
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> A 12-month strategic action plan
            </li>
          </ul>
          <p className="mt-4 font-semibold">For: Founders, COOs, Growth Teams</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={tabTwo}
            alt="Assessing Your Data Readiness"
            className="w-72 rounded-md shadow-md"
          />
        </div>
      </section>


      <div>
        <ZohoOptinForm />
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p>2025 © Sartor Limited – All rights reserved</p>
      </footer>

    </div>
  );
}
