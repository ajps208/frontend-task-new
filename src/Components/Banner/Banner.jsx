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
    <div className="w-full min-h-screen bg-black text-white flex items-center">
      <div style={{ marginLeft: "15%"}} className="max-w-7xl grid grid-cols-1 gap-12">
        {/* company logo */}
        <div>
          <img
            src={logo}
            alt="Falconfeeds.io"
            className="w-[410px] h-[50px] object-contain"
          />
        </div>

        {/* Headline */}
        <div className="max-w-[628px]">
          <p className="font-publicSans font-extrabold text-[62px] leading-[84px] tracking-normal">
            Hunt, Identify and <br />{" "}
            <span className="text-green-500">Act</span> on{" "}
            <span className="text-red-600">threats</span> before <br /> they can
            harm you<span className="text-red-600">.</span>
          </p>
        </div>

        {/* features */}
        <div className="flex flex-col gap-8 max-w-[587px]">
          {features.map((feature, index) => (
            <p key={index} className="flex items-center gap-3">
              <img src={badge} alt="badge" className="w-5 h-5" />
              <span className="font-publicSans text-lg font-semibold leading-relaxed">
                {feature}
              </span>
            </p>
          ))}
        </div>

        {/* powered by */}
        <div>
          <img src={company} alt="company" className="w-[138px] h-[46px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
