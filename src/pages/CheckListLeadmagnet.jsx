import bookOne from '../assets/images/list.png';
import tabOne from '../assets/images/listTwo.png';
import log from '../assets/images/log.png';
import EmailForm from '../components/EmailForm';
import ScrollToTop from '../components/ScrollToTop';
import ZohoOptinForm from '../components/ZohoOptinForm';


export default function CheckListLeadmagnet() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <ScrollToTop />

      {/* Header */}
      <header className="bg-gradient-to-r from-[#000068] to-blue-700 text-white py-16 px-6 md:px-20 ">
        <img src={log} alt="" srcset="" className='mb-5' />
        <div className='flex flex-col md:flex-row items-center justify-between max-w-[1444px] mx-auto'>

          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-[20px] md:text-[25px] font-bold mb-4 max-w-[353px] md:max-w-[702px] mx-auto">
              Starting a business is hard especially when you're not sure <span className='underline italic'>where</span> or <span className='underline italic'>how</span> to start
            </h1>
            <p className="mb-6 text-[13px] max-w-[220px] md:max-w-full  md:text-lg mx-auto md:mx-0">
              Launch your business the right way with a proven startup checklist
            </p>
             <a href="/checklistpdf.pdf" download>
            <button className='bg-[#01A85A] rounded-lg h-[44px] p-2 text-[11px] lg:text-[14px] my-5 hidden md:block lg'>Download the Free Business Startup Checklist</button>
          </a>
          </div>
          <img
            src={bookOne}
            alt="AI & Automation Readiness Checklist"
            className="mt-10 md:mt-0 w-60 md:w-72"
          />
          <a href="/checklistpdf.pdf" download>
            <button className='bg-[#01A85A] rounded-lg h-[44px] p-2 text-[11px] my-5 md:hidden'>Download the Free Business Startup Checklist</button>
          </a>
        </div>

      </header>

      {/* This Checklist Section */}
      <section className="max-w-4xl mx-auto my-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-[#000068]">This Checklist</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          You'll get the Business Startup Checklist-a step-by-step guide to help you start, register, and structure your business for real growth. Whether you're starting from scratch or refining your setup, this resource gives you a clear path to follow with zero guesswork
        </p>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-[#000068]">This checklist will help you:</h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Turn your idea into a viable business
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Avoid costly registration & compliance mistakes
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Build with clarity and focus
            </li>
            <li className="flex items-center">
              <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Set the right legal, financial, and brand foundations
            </li>
          </ul>
          <p className="mt-4 font-semibold"> Perfect for anyone starting out in Retail, E-commerce, Tech, FMCG, or Consulting</p>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center ">
          <img
            src={tabOne}
            alt="Assessing Your Data Readiness"
            className="w-72 rounded-md shadow-md"
          />
          <button className='text-white bg-[#01A85A] w-[126.91px] h-[36px] my-5 rounded-lg'>Get it Now</button>
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
