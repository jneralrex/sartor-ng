import { useState } from "react";
import { Link } from "react-router-dom";
import chat from "../assets/images/chat.png";
import pippics from "../assets/images/pippics.png";
import sci from "../assets/images/sci.png";
import industry from "../assets/images/industry.png";
import founders from "../assets/images/founders.webp";
import company from "../assets/images/company.webp";
import cream from "../assets/images/cream.png";
import tab from "../assets/images/tab.png";
import phone from "../assets/images/phone.png";
import qoute from "../assets/images/qoute.png";
import { Slide } from "react-awesome-reveal";


const LandingPage = () => {
    const testimonials = [
        {
            quote: "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
            name: "Diego Montes",
            role: "Web Developer",
        },
        {
            quote: "Working with Omega has transformed my workflow. The components are intuitive and allow for rapid prototyping!",
            name: "Sofia Chen",
            role: "UI/UX Designer",
        },
        {
            quote: "Omega has simplified our product management. Total game changer.",
            name: "Liam Patel",
            role: "Product Manager",
        },
    ];

    const blogPosts = [
        { title: "How Smart CRM Tools Can Transform Sales in Product-Based Businesses", image: cream },
        { title: "Fighting Fakes: How AI and Blockchain Are Securing Product Authenticity", image: phone },
        { title: "Building a Smarter Workforce with Digital Training Tools", image: tab },
    ];

    // Partner Tabs Logic
    const partners = [
        { name: "Pharmaceutical Brands", image: sci },
        { name: "CPG Manufacturers", image: industry },
        { name: "CPG Distributors/wholesalers", image: company },
        { name: "Founders Scaling Distributed Teams", image: founders },
    ];

    const items = [
        {
            title: 'Sartor LMS',
            content: 'A learning platform for team onboarding, training, and building workforce excellence.',
            buttonText: 'Learn More',
            link: ""
        },
        {
            title: 'Sartor Chain',
            content: 'A learning platform for team onboarding, training, and building workforce excellence.',
            buttonText: 'Learn More',
            link: "https://crm.sartor.ng/sartor-chain"
        },
        {
            title: 'Business Consulting',
            content: 'One-on-one support to help founders build brands, boost sales, and lead operations effectively.',
            buttonText: 'Learn More',
        },
        {
            title: 'Sartor CRM',
            content: 'Our CRM boosts sales, streamlines LPOs, maps retail, and prevents counterfeiting with AI + Blockchain.',
            buttonText: 'Learn More',
            link: "https://crm.sartor.ng"
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);


    return (
        <div className=" md:px-0 pt-[50px] md:pt-[80px] min-h-screen font-[sfpro] max-w-[1444px]">

            {/* Hero Section */}
            <section className=" min-h-screen bg-gradient-to-tl from-[#d4d6e3] via-[#eaecf0] to-[#d4d6e3]">

                <div className="text-center flex flex-col justify-center items-center w-full max-w-[830px] mx-auto p-10">

                    <h1 className=" w-full max-w-[500px] mx-auto text-[27px] sm:text-[35px] md:text-5xl font-bold text-[#000068]">
                        Custom Tech and Advice To Start And Grow Your Business.
                    </h1>
                    <p className="mt-3 w-full max-w-[590px] sm:mt-6 sm:text-[20px] text-gray-600 mx-auto">
                        You can’t grow what you can’t control. Without the right systems, starting, branding, growing, and leading a product-based business feel like guesswork.
                    </p>
                    <div className="mt-3 sm:mt-8 flex flex-col border-2 md:flex-row justify-center items-center gap-4 w-full">
                        <Link
                            to="https://calendly.com/sartorlimited/1-on-1-free-30mins-introductory-consulting-call-official"
                            className=" w-full md:w-48 text-center bg-[#00A859] text-white px-5 rounded-xl md:text-sm py-[15px]"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book a Consultation
                        </Link>

                        <Link
                            className=" w-full md:w-48 text-center bg-white text-[#000068] md:text-sm px-5 rounded-xl py-[15px]"
                        >
                            Learn More
                        </Link>
                    </div>


                </div>
            </section>


            {/* About Us */}
            <section className="bg-white py-20 px-6 md:px-20 max-w-[1199px] mx-auto w-full">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={pippics}
                        alt="Team meeting"
                        className="rounded-lg object-cover w-full h-full"
                    />
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-900 mb-4 lg:leading-[100px]">
                            About Us / Our Mission
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed md:text-[18px] lg:leading-[160%] max-w-[680px] mx-auto w-full">
                            Sartor Limited is dedicated to transforming businesses in frontier, emerging, and developed markets through innovative technology and expert guidance.
                            We understand the unique complexities faced by product-based companies and offer tailored solutions that build confidence, optimise operations, and secure market leadership.
                            Our commitment is to partner with you from inception to scale, ensuring you achieve the success you have imagined.
                        </p>
                    </div>
                </div>
            </section>



            {/* Services */}
            <section className=" max-w-[1199px] mx-auto w-full px-6">
                <div className="mb-12 md:text-start text-center">
                    <h2 className="text-3xl md:text-[42px] font-bold text-gray-900">Our Services</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto md:mx-0 md:w-[600px]">
                        We combine deep industry knowledge with cutting-edge technology to offer solutions that
                        are built with your unique risks and growth ambitions in mind. Explore how we can transform your operations.
                    </p>
                </div>

                <div className="flex md:flex-col gap-8 justify-center items-center">

                    <div className="flex flex-col md:flex-row bg-white p-4 rounded-md gap-4">
                        {/* Image Section */}
                        <div className="">
                            <img
                                src={chat}
                                alt="Meeting"
                                className="rounded-md object-cover h-full  w-full"
                            />
                        </div>

                        {/* Accordion Section */}
                        <div className="max-w-[1199px] flex flex-col justify-around gap-3 mx-auto">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-xl p-4 cursor-pointer transition-all ${openIndex === index ? 'border-green-500 shadow-md' : 'border-gray-200'
                                        }`}
                                    // onClick={() => setOpenIndex(index)}
                                    onMouseEnter={() => setOpenIndex(index)}
                                >
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    {openIndex === index && item.content && (
                                        <div className="mt-2 text-[18px] text-gray-600 max-w-[485px]">
                                            <p>{item.content}</p>
                                            {item.buttonText && (
                                                <button className="mt-3 px-4 py-2 bg-[#00A859] text-white text-sm  hover:bg-green-600 rounded-xl">
                                                    <Link to={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.buttonText}
                                                    </Link>
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Who We Partner With */}
            <section className="bg-black text-white py-8 md:py-16">
                <div className="max-w-[1199px]  mx-auto w-full items-center">
                    <h2 className="text-center text-3xl md:text-[42px] font-semibold mb-2 md:mb-12">Who We Partner With</h2>
                    <div className="flex flex-col gap-[5px] md:grid md:grid-flow-col md:gap-10 mx-auto items-center justify-center p-5 ">
                        {/* Tabs List */}
                        <div className="flex flex-col justify-center h-full">
                            <p className="mb-3 md:mb-6 text-sm text-gray-300 text-center md:text-[28px] md:text-left">
                                We are the trusted partner for:
                            </p>
                            <ul className=" flex flex-col h-full w-full justify-around gap-5 ">
                                {partners.map((partner, index) => (
                                    <li
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer px-5 py-2 md:px-5 md:py-3 text-center items-center flex text-[14px] md:text-[24px] border rounded-md transition-all duration-200 ${index === activeIndex
                                            ? "bg-[#000068] text-white border-[#00A859]"
                                            : "border-gray-500 text-white hover:bg-gray-800"
                                            }`}
                                    >
                                        {partner.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">

                            <img
                                src={partners[activeIndex].image}
                                alt={partners[activeIndex].name}
                                className="rounded-lg object-cover w-[250px] md:h-[400px] md:w-[400px]"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white px-6 py-5 md:py-10 max-w-[1199px] mx-auto mt-10">
                <h2 className="text-center text-2xl md:text-[40px] font-semibold text-gray-900 mb-12">
                    Client Success Stories
                </h2>
                <div className="grid md:grid-cols-3 gap-10 mb-10 md:mb-20">
                    {testimonials.map((t, idx) => (
                        <Slide key={idx} direction="left" delay={idx * 100} triggerOnce>

                            <div key={idx} className="text-sm">
                                <img src={qoute} alt="Qoute" srcset="" className="mb-5" />
                                <p className="text-gray-700 md:mb-4">"{t.quote}"</p>
                                <p className="text-gray-600 font-medium">{t.name}</p>
                                <p className="text-gray-400">{t.role}</p>
                            </div>
                        </Slide>
                    ))}
                </div>

                {/* Blog */}
                <h2 className="text-center text-2xl md:text-[40px] font-semibold text-gray-900 mb-12">
                    The Entrepreneur&apos;s Blueprint  Newsletter
                </h2>
                <div className="grid md:grid-cols-3 mb-8">
                    {blogPosts.map((post, idx) => (

                        <div key={idx} className=" p-4 rounded-lg shadow-sm w-full flex flex-col max-w-[388px] mx-auto">
                            <img src={post.image} className="rounded-md mb-3" />
                            <Link className="text-[22px] md:text-[24px] text-gray-800 font-medium underline md:leading-[30px]">{post.title}</Link>
                        </div>

                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-[#00A859] hover:bg-green-600 text-[white] font-semibold py-3 rounded-xl shadow max-w-[254px] w-full">

                        View All Posts
                    </button>
                </div>
            </section>

            {/* Checklist */}
            <section className="py-10 px-4 text-center w-full mx-auto space-y-2 bg-[#F5F5F5] rounded-xl mb-20">
                <h2 className="text-[25px] md:max-w-[558px] mx-auto md:text-[42px] font-semibold leading-10">
                    Want To Start A Business, But Don’t Know How?
                </h2>
                <p className="text-[#767676] text-[18px] max-w-[566px] md:text-[20px] mx-auto font-medium">
                    Download our exclusive Free Startup Checklist a comprehensive
                    guide to navigating the early stages of building a successful product-based business in emerging markets.
                </p>
                <button className="bg-[#00A859] hover:bg-green-600 text-[white] font-semibold py-3 rounded-xl shadow max-w-[254px] w-full">
                    <Link to="/checklist">
                    Get the Free Checklist
                    </Link>
                </button>
            </section>
        </div>
    );
};

export default LandingPage;
