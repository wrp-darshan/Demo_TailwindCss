import React from "react";

function Footerbottom() {
  const companyPrivacy = [
    "Terms & Conditions",
    "Privacy Policy",
    "Contact Us",
  ];

  return (
    <section className="bg-[#212121] font-rubik">
      <div className="container sm:py-[30px] py-5">
        <div className="flex md:justify-between md:flex-row flex-col justify-center items-center md:gap-4 gap-2 md:flex-wrap">
          {/* Site Info */}
          <p className="text-footerwhite leading-[30px] text-center sm:text-base text-sm">
            © Yoursitename 2023 |{" "}
            <a
              href="#"
              className="hover:text-white font-semibold duration-300 cursor-pointer"
              aria-label="Nocimon"
            >
              Nocimon
            </a>
            , All Rights Reserved.
          </p>

          {/* Company Privacy Links */}
          <div className="flex sm:gap-6 gap-2 flex-wrap xs:justify-start justify-center sm:text-base text-sm">
            {companyPrivacy.map((privacy, index) => (
              <a
                key={index}
                href="#"
                className="text-footerwhite hover:text-white duration-300"
              >
                {privacy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footerbottom;
