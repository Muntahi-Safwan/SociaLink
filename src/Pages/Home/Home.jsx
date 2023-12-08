import { useLoaderData } from "react-router-dom";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Marquee from "react-fast-marquee";

const Home = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    return (
        <>
            <div className="overflow-x-hidden">
                <Banner></Banner>
                <AboutUs></AboutUs>
                <Services loaderData={loaderData}></Services>
                <div>
                    <h1 className="text-3xl font-semibold text-center mb-6">
                        What our Customer Says about us
                    </h1>
                    <Marquee pauseOnHover={true}>
                        <Testimonials
                            name={"Mosh Hamedani"}
                            details={
                                "Found the go to guy for managing all my events.Excellent Management skills and Flawless integration of every service."
                            }
                        ></Testimonials>
                        <Testimonials
                            name={"Elon Musk"}
                            details={
                                "Great team. All my Girlfriends suprise birthday party are managed by SociaLink. Loved their Energy"
                            }
                        ></Testimonials>
                        <Testimonials
                            name={"Shakib Al Hasan"}
                            details={
                                "One of the best in the town. My marriage and all the anniversary parties are arranged by them. Finest work ethics."
                            }
                        ></Testimonials>
                        <Testimonials
                            name={"Lionel Messi"}
                            details={
                                "All my kids birthday parties are arranged by them every year. The GOAT of event management. They know what they do"
                            }
                        ></Testimonials>
                    </Marquee>
                </div>
            </div>
        </>
    );
};

export default Home;
