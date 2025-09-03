import logo from "../../assets/logo.png";
import badge from "../../assets/badge.png";
import company from "../../assets/company_logo.png";

const features = [
  "Comprehensive threat actor directory",
  "Constantly updated threat feeds",
  "Safe source for tracking threat actors and campaigns",
  "Data funnelled from all parts of the internet",
];

const Banner = () => {
  return (
    <div className="w-full h-full bg-black text-white flex items-center">
      <div style={{ marginLeft: "12%" }} className="max-w-6xl grid grid-cols-1 gap-10">
        {/* company logo */}
        <div>
          <img
            src={logo}
            alt="Falconfeeds.io"
            className="w-[328px] h-[40px] object-contain"
          />
        </div>

        {/* Headline */}
        <div className="max-w-[552px]">
          <p className="font-publicSans font-extrabold text-[50px] leading-[67px] tracking-normal">
            Hunt, Identify and <br />{" "}
            <span className="text-green-500">Act</span> on{" "}
            <span className="text-red-600">threats</span> before <br /> they can
            harm you<span className="text-red-600">.</span>
          </p>
        </div>

        {/* features */}
        <div className="flex flex-col gap-6 max-w-[470px]">
          {features.map((feature, index) => (
            <p key={index} className="flex items-center gap-2">
              <img src={badge} alt="badge" className="w-4 h-4" />
              <span className="font-publicSans text-base font-semibold leading-relaxed">
                {feature}
              </span>
            </p>
          ))}
        </div>

        {/* powered by */}
        <div>
          <img src={company} alt="company" className="w-[110px] h-[37px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;