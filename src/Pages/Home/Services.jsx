import ServiceCard from "../../Components/ServiceCard";
import "../../index.css";

export default function Services({ loaderData }) {
    console.log(loaderData);

    return (
        <div className="services-bg mt-16 rounded-lg container mx-auto mb-10 py-2 md:px-2 md:py-10 ">
            <div className="container mx-auto grid lg:grid-cols-2 gap-3 px-14">
                {loaderData?.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
}
