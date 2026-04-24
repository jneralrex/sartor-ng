import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInDown = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -40 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 40 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

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
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    // Auto-slide testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); 

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Get visible testimonials (3 at a time, cycling)
    const getVisibleTestimonials = () => {
        return [
            testimonials[testimonialIndex % testimonials.length],
            testimonials[(testimonialIndex + 1) % testimonials.length],
            testimonials[(testimonialIndex + 2) % testimonials.length],
        ];
    };


    return (
        <div className="md:px-0  font-[sfpro]">

            {/* Hero Section */}
            <section className=" bg-gradient-to-r from-[#d4d6e3] via-[#eaecf0] to-[#d4d6e3] md:py-28 min-h-screen flex flex-col justify-center items-center px-4">

                <motion.div 
                    className="flex flex-col gap-1 items-center w-full max-w-[1440px] mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >

                    <motion.h1 
                        className="text-center w-full  sm:max-w-[480px] lg:max-w-[650px] mx-auto text-[35px] sm:text-[35px] md:text-5xl lg:text-[60px] font-semibold text-[#000068] leading-[1.2] lg:leading-[1.3] "
                        variants={fadeInUp}
                    >
                        Custom Tech And Advice To Start And Grow Your Business.
                    </motion.h1>
                    <motion.p 
                        className=" text-center w-full sm:max-w-[480px] md:max-w-[500px] sm:mt-6 sm:text-[20px] text-gray-600 mx-auto"
                        variants={fadeInUp}
                    >
                        Control drives growth. Without the right systems, launching and growing a product business is a guessing game.                    </motion.p>
                    <motion.div 
                        className="mt-3 sm:mt-8 md:mt-2 flex flex-col md:flex-row justify-center items-center gap-4 w-full"
                        variants={fadeInUp}
                    >
                        <Link
                            to="https://calendly.com/sartorlimited/1-on-1-free-30mins-introductory-consulting-call-official"
                            className=" w-full md:w-48 lg:w-[205px] text-center bg-[#00A859] text-white rounded-xl md:text-[16px] lg:py-[10px] px-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book a Free Consultation
                        </Link>

                        <Link
                            className=" w-full md:w-48 lg:w-[205px] text-center bg-white text-[#000068] rounded-xl md:text-[16px] lg:py-[10px] px-2"
                        >
                            Learn More
                        </Link>
                    </motion.div>


                </motion.div>

            </section>


            {/* About Us */}
            <section className="py-8  px-6 md:px-20 md:py-20 max-w-[1440px] mx-auto">

                <motion.div 
                    className="grid md:grid-cols-2 gap-8 lg:gap-0 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.img
                        src={pippics}
                        alt="Team meeting"
                        className="rounded-lg "
                        variants={fadeInLeft}
                    />
                    <motion.div variants={fadeInRight}>
                        <motion.h2 
                            className=" text-left text-2xl md:text-3xl lg:text-[42px] font-semibold text-[#1A1A1A] mb-4 lg:leading-[1]"
                            variants={fadeInUp}
                        >
                            About Us / Our Mission
                        </motion.h2>
                        <motion.p 
                            className="text-[#767676] text-[15px] leading-relaxed lg:leading-[1.6] w-full text-left font-medium font-[sfpro] tracking-[1.1px]"
                            variants={fadeInUp}
                        >
                            Sartor Limited is dedicated to transforming businesses in frontier, emerging, and developed markets through innovative technology and expert guidance.
                            We understand the unique complexities faced by product-based companies and offer tailored solutions that build confidence, optimise operations, and secure market leadership.
                            Our commitment is to partner with you from inception to scale, ensuring you achieve the success you have imagined.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </section>



            {/* Services */}
            <section className=" px-6 pb-8 md:px-20 md:pb-20 max-w-[1440px] mx-auto">
                <motion.div 
                    className="mb-10 text-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2 
                        className=" text-left text-2xl md:text-3xl lg:text-[42px] font-semibold text-[#1A1A1A] mb-4 lg:leading-[1]"
                        variants={fadeInUp}
                    >Our Services</motion.h2>
                    <motion.p 
                        className="text-[#767676] text-[15px] leading-relaxed lg:leading-[1.6] text-left font-medium font-[sfpro] tracking-[1.1px]"
                        variants={fadeInUp}
                    >
                        We combine deep industry knowledge with cutting-edge technology to offer solutions that
                        are built with your unique risks and growth ambitions in mind. Explore how we can transform your operations.
                    </motion.p>
                </motion.div>

                <div className="">

                    <motion.div 
                        className="flex flex-col md:flex-row bg-white rounded-md gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {/* Image Section */}
                        <motion.div 
                            className=""
                            variants={fadeInLeft}
                        >
                            <img
                                src={chat}
                                alt="Meeting"
                                className="rounded-md object-cover h-full  w-full"
                            />
                        </motion.div>

                        {/* Accordion Section */}
                        <div className="flex flex-col justify-around gap-3 mx-auto">
                            {items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`border rounded-xl p-4 cursor-pointer transition-all ${openIndex === index ? 'border-green-500 shadow-md' : 'border-gray-200'
                                        }`}
                                    onMouseEnter={() => setOpenIndex(index)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    {openIndex === index && item.content && (
                                        <motion.div 
                                            className="mt-2 text-[18px] text-gray-600 max-w-[485px]"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
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
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Who We Partner With */}
            <section className="bg-black text-[#F9F9F9] py-8 md:py-20">
                <div className=" max-w-[1440px] mx-auto px-6 md:px-20">
                    <motion.h2 
                        className="text-center text-[32px] font-semibold mb-2 md:mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInDown}
                    >Who We Partner With</motion.h2>
                    <motion.div 
                        className="flex flex-col gap-[20px] md:grid md:grid-flow-col md:gap-10 lg:gap-28 items-center md:px-20 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        {/* Tabs List */}
                        <div className="flex flex-col justify-center h-full">
                            <motion.p 
                                className="mb-3 md:mb-6 text-[22px] text-[#F9F9F9] text-center md:text-[24px] md:text-left"
                                variants={fadeInLeft}
                            >
                                We are the trusted partner for:
                            </motion.p>
                            <ul className=" flex flex-col h-full w-full justify-around gap-5 ">
                                {partners.map((partner, index) => (
                                    <motion.li
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer px-5 py-2 md:px-5 md:py-3 text-center items-center flex text-[14px] md:text-[24px] border rounded-md transition-all duration-200 ${index === activeIndex
                                            ? "bg-[#000068] text-white border-[#00A859]"
                                            : "border-gray-500 text-white hover:bg-gray-800"
                                            }`}
                                        variants={itemVariants}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {partner.name}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <motion.div 
                            className=""
                            variants={fadeInRight}
                        >

                            <motion.img
                                src={partners[activeIndex].image}
                                alt={partners[activeIndex].name}
                                className="rounded-lg object-cover w-[250px] md:h-[420px] md:w-[350px] lg:w-[450px]"
                                layoutId="partner-image"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-6 md:px-20 md:py-20 py-5 mt-10 overflow-hidden max-w-[1440px] mx-auto">
                <motion.h2 
                    className="text-center text-2xl md:text-[40px] font-semibold text-[#161C2D] mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    Client Success Stories
                </motion.h2>
                <div className="w-full overflow-hidden">
                    <motion.div 
                        className="flex gap-10 md:gap-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <AnimatePresence mode="wait">
                            {getVisibleTestimonials().map((t, idx) => (
                                <motion.div
                                    key={`${testimonialIndex}-${idx}`}
                                    className="text-sm flex-shrink-0 md:w-[calc(50%-20px)] lg:w-[calc(40%-20px)]"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 10, x: 20 }}
                                     exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 1, }}
                                >
                                    <img src={qoute} alt="Quote" className="mb-5" />
                                    <p className="text-[#161C2D] mb-2 font-medium text-[18px] leading-[1.6] max-w-[350px]">"{t.quote}"</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#161C2D] text-[17px] leading-[0.29] tracking-[-0.2px]">{t.name}</p>
                                        <p className="text-gray-600 text-[17px] leading-[29px] tracking-[-0.2px]">{t.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
                <div className="mb-10 md:mb-20"></div>

                {/* Blog */}
                <motion.div 
                    className="py-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.h2 
                        className="text-center text-2xl md:text-[40px] font-semibold text-[#161C2D] mb-12"
                        variants={fadeInUp}
                    >
                        The Entrepreneur&apos;s Blueprint  Newsletter
                    </motion.h2>

                    <div className="grid md:grid-cols-3 mb-8 ">
                        {blogPosts.map((post, idx) => (

                            <motion.div 
                                key={idx} 
                                className=" p-4 rounded-lg shadow-sm w-full flex flex-col max-w-[388px] mx-auto"
                                variants={scaleIn}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <img src={post.image} className="rounded-md mb-3" />
                                <Link className="max-w-[300px] text-[22px] md:text-[20px] text-[#161C2D] font-medium underline md:leading-[1.6]">{post.title}</Link>
                            </motion.div>

                        ))}
                    </div>
                </motion.div>
                <motion.div 
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <button 
                         className=" w-full md:w-44 text-center bg-[#00A859] text-white  rounded-lg text-[12px] py-[6px] md:text-[13.8px] lg:py-[10px] px-2"
                    >

                        View All Posts
                    </button>
                </motion.div>
            </section>
            
            <motion.section 
                className="px-20 text-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div 
                    className="bg-[#F5F5F5] rounded-xl py-20"
                    variants={scaleIn}
                >
                    <motion.h2 
                        className="text-[25px] md:max-w-[558px] mx-auto md:text-[42px] font-semibold leading-[1.2] text-[#1A1A1A] tracking-wide"
                        variants={fadeInUp}
                    >
                        Want To Start A Business, But Don't Know How?
                    </motion.h2>
                    <motion.p 
                        className="text-[#767676] text-[18px] max-w-[423px] md:text-[20px] mx-auto font-medium leading-[1.6] mt-4"
                        variants={fadeInUp}
                    >
                        Free Startup Checklist to launch your product in emerging markets.
                    </motion.p>
                    <motion.button 
                        className=" w-full md:w-44 text-center bg-[#00A859] text-white  rounded-lg text-[12px] py-[6px] md:text-[13.8px] lg:py-[10px] px-2 mt-4"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/checklist">
                            Get the Free Checklist
                        </Link>
                    </motion.button>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default LandingPage;
