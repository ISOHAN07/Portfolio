import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "..";
import { profile } from "console";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="w-full left-0 absolute -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-[#CBACF9]">your</span> ideas to
          the next level?
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
          Let’s collaborate on exciting projects, build products, and make your
          ideas a reality.
        </p>

        <a href="mailto:isohan2007@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2025 Sohan</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center bg-black/20 backdrop-blur-3xl border border-white/20 rounded-lg">
                    <img src={profile.img} alt={profile.id} width={20} height={20}/>
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
