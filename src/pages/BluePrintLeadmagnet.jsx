import bookFour from '../assets/images/bookThree.png';
import tabFour from '../assets/images/tabThree.png';
import EmailForm from '../components/EmailForm';
import ScrollToTop from '../components/ScrollToTop';
import ZohoOptinForm from '../components/ZohoOptinForm';


export default function BluePrintLeadmagnet() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <ScrollToTop />

            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4">
                        The Proven Blueprint to Build Systems That Scale
                    </h1>
                    <p className="mb-6 text-lg">
                        Discover the frameworks successful companies use to optimise operations and accelerate growth.                    </p>
                    
                </div>
                <img
                    src={bookFour}
                    alt="AI & Automation Readiness Checklist"
                    className="mt-10 md:mt-0 w-60 md:w-72"
                />
            </header>

            {/* This Checklist Section */}
            <section className="max-w-4xl mx-auto my-12 px-6 text-center">
                <h2 className="text-2xl font-semibold mb-3">This Blueprint</h2>
                <p className="text-gray-700 max-w-xl mx-auto">
                    If you're growing fast or trying to this guide gives you the structure to support scale. Learn how to map, measure, and optimize your systems across sales, training, delivery, and product security.</p>
            </section>

            {/* What You'll Get */}
            <section className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between space-y-8 md:space-y-0">
                <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">What You’ll Get:</h3>
                    <ul className="space-y-3 text-gray-800">
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Core system mapping frameworks
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> The right tech stack for FMCG & Pharma
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Metrics that matter (per system)
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> Real-world examples of what works and doesn’t
                        </li>
                        <li className="flex items-center">
                            <span className="inline-block mr-2 text-green-600 font-bold">✓</span> A 12-month roadmap to streamline operations
                        </li>
                    </ul>
                    <p className="mt-4 font-semibold">For: CEOs, COOs, Operational Leaders</p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={tabFour}
                        alt="Assessing Your Data Readiness"
                        className="w-72 rounded-md shadow-md"
                    />
                </div>
            </section>


            <div>
                        <ZohoOptinForm/>

            </div>

            {/* Footer */}
            <footer className="bg-blue-900 text-white text-center py-6 mt-12">
                <p>2025 © Sartor Limited – All rights reserved</p>
            </footer>

        </div>
    );
}
