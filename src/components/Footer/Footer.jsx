import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 whitespace-nowrap">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              QADRI Surface Solutions
            </h1>
            <p className="text-center sm:text-left sm:ml-2">
              Beside Basmati Rice Mill, P. O Barbilla <br />
              P. S Goalpokher, Uttar Dinajpur.
            </p>
          </div>

          {/* Social and contact info moved to the right and properly aligned */}
          <div className="flex flex-col justify-between items-end py-8 px-4 md:pl-10 col-span-2">
            {/* Social Icons */}
            <div className="flex gap-6 mb-6">
              <a href="#" className="text-3xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl">
                <FaLinkedin />
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Mohammed Moyeen</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+91 9932201773</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
