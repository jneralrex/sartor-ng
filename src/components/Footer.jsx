import sartorwhite from '../assets/images/sartorwhite.png';
import x from '../assets/images/x.png';
import insta from '../assets/images/insta.png';
import linkedin from '../assets/images/linkedin.png';


const Footer = () => {
  return (
    <footer className="bg-[#000068] text-white pt-12 pb-6 px-6 md:px-20 font-[sfpro]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-10">
        <div>
          <h4 className="font-semibold mb-4 leading-[1.6] text-[18px]">Quick Links</h4>
          <ul className="space-y-6">
            <li>About Us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 leading-[1.6] text-[18px]">Help Center</h4>
          <ul className="space-y-6">
            <li>Customer Support</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
           <h4 className="font-semibold mb-4 leading-[1.6] text-[18px]">Resources</h4>
          <ul className="space-y-6">
            <li>Checklist</li>
            <li>Report</li>
            <li>Blueprint</li>
            <li>Playbook</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 leading-[1.6] text-[18px]">Legal</h4>
          <ul className="space-y-6">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 pt-4 flex flex-col gap-4 md:flex-row items-start md:justify-between md:items-center text-xs text-gray-300">
          <img src={sartorwhite} alt="logo" />
        <span className='text-[15px] md:text-[18px] leading-[1.6]'>@ Copyright 2021, All rights reserved by SartorLimited</span>
        <div className="flex items-center space-x-4 md:mt-0">
         <img src={x} alt="" className='h-full'/>
         <img src={insta} alt="" className='h-full'/>
         <img src={linkedin} alt="" className='h-full'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
