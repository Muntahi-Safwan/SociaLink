import AwesomeSlider from "react-awesome-slider";
import styles from "react-awesome-slider/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import anniversary from "../../assets/anniversary.jpeg"; // You can also use <link> for styles
import birthday from "../../assets/birthday.jpg"; // You can also use <link> for styles
import wedding from "../../assets/wedding.jpg"; // You can also use <link> for styles
// ..
AOS.init();

const AboutUs = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-4 mt-20 items-center container mx-auto">
            <div data-aos="fade-right">
                <h1 className="text-3xl font-bold text-[#BC246F]">
                    {" "}
                    The SociaLink Experience
                </h1>
                <p className="text-lg mt-4">
                    SociaLink is a premier event management company dedicated to
                    crafting unforgettable social experiences. With a passion
                    for creativity and a commitment to excellence, we specialize
                    in curating and coordinating a wide range of social events,
                    from weddings and milestone celebrations to corporate
                    gatherings and community festivals. Our seasoned team of
                    event professionals prides itself on attention to detail,
                    innovation, and personalized service, ensuring that every
                    event we touch is a seamless and joyous occasion. At
                    SociaLink, we believe in the power of connections and are
                    dedicated to transforming your moments into cherished
                    memories.
                </p>
            </div>
            <div data-aos="fade-left">
                <AwesomeSlider cssModule={styles} infinite>
                    <div data-src={anniversary}>
                        <p className="text-white">Anniversary Event</p>
                    </div>
                    <div data-src={birthday}>
                        <p>Birthday Event</p>
                    </div>
                    <div data-src={wedding}>
                        <p>Wedding Event</p>
                    </div>
                </AwesomeSlider>
            </div>
        </div>
    );
};

export default AboutUs;
