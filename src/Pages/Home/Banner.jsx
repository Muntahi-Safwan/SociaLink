import "./Banner.css";
import banner from "../../assets/banner.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div className="banner">
            <div className="container mx-auto pt-12 pb-40">
                <div className="grid lg:grid-cols-2 items-center my-6 justify-between lg:flex-row-reverse ">
                    <div data-aos="fade-right">
                        <h1 className="banner-txt">
                            Connecting{" "}
                            <span className="text-[#BC246F]">Moments</span>,
                            <br />
                            Creating{" "}
                            <span className="text-[#BC246F]">Memories</span> :
                            <br />
                            Your{" "}
                            <span className="text-[#39ACFF]">
                                Social Events
                            </span>
                            ,
                            <br />
                            Our Expertise
                        </h1>
                    </div>
                    <div data-aos="fade-left">
                        <img src={banner} className=" rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
