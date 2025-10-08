import bookThree from '../assets/images/bookThree.png';
import tabThree from '../assets/images/tabThree.png';
import EmailForm from '../components/EmailForm';
import ScrollToTop from '../components/ScrollToTop';
import ZohoOptinForm from '../components/ZohoOptinForm';


export default function PlaybookLeadMagnet() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <ScrollToTop />

            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-20 ">
                <div className='flex flex-col md:flex-row items-center justify-between max-w-[1444px] mx-auto'>
                    <div className="max-w-xl text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4">
                            Your Roadmap to Building a Resilient, Profitable Product Business          </h1>
                        <p className="mb-6 text-lg">
                            Learn the strategies, systems, and tools successful companies use to scale confidently.
                        </p>

                    </div>
                    <img
                        src={bookThree}
                        alt="AI & Automation Readiness Checklist"
                        className="mt-10 md:mt-0 w-60 md:w-72"
                    />
                </div>
            </header>

            {/* This Checklist Section */}
            <section className="max-w-4xl mx-auto my-12 px-6 text-center">
                <h2 className="text-2xl font-semibold mb-3">This Playbook</h2>
                <p className="text-gray-700 max-w-xl mx-auto">
                    This playbook is your step-by-step guide to go from surviving to thriving. If you're a founder building a product brand—especially in FMCG, pharma, or distribution—this is for you.                 </p>
            </section>

            {/* What You'll Get */}
            <section className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between space-y-8 md:space-y-0">
                <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">What You’ll Learn:</h3>
                    <ul className="space-y-3 text-gray-800">
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Clarify your brand and positioning
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Build a sales system that converts
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Train and lead a high-performing remote team
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Avoid common growth-stage mistakes
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Execute a 90-day growth plan
                        </li>
                    </ul>
                    <p className="mt-4 font-semibold">For: Founders, COOs, Growth Teams</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={tabThree}
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
