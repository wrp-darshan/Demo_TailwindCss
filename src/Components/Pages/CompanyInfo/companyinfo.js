import React from "react";

function Companyinfo() {
  const companyinfo = [
    {
      icon: "/img/express-delivery.png",
      number: "250+",
      text: "Team member",
    },
    {
      icon: "/img/package.png",
      number: "300+",
      text: "Complete projects",
    },
    {
      icon: "/img/boxes.png",
      number: "450+",
      text: "Winning award",
    },
    {
      icon: "/img/express-delivery.png",
      number: "1k+",
      text: "icon-delivery-truck",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companyinfo.map((companyinfo, index) => (
            <div
              key={index}
              className="flex lg:justify-normal sm:justify-center"
            >
              <div className="bg-blue hover:bg-yellow duration-300 h-[65px] w-[65px] flex justify-center items-center rounded-md">
                <img
                  src={companyinfo.icon}
                  alt={companyinfo.text}
                  className="h-10 w-10"
                />
              </div>
              <div className="pl-6">
                <h3 className="text-5xl font-bold">{companyinfo.number}</h3>
                <p className="font-rubik text-[#616670]">{companyinfo.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companyinfo;
