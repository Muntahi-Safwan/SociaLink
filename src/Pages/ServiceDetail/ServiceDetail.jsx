import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = services.find((service) => service.id == id);
    console.log(service);
    return (
        <div className="container mx-auto mt-12">
            <div className="container">
                <div className="flex justify-center items-center">
                    <img src={service.image} alt="" className="w-[600px]" />
                </div>

                <div className=" md:ml-12 mt-3">
                    <h1 className="text-4xl font-semibold ">{service.title}</h1>
                    <p className="mt-1 text-gray-700">
                        {service.short_description}
                    </p>
                    <p className="my-3 p-3 border bg-[#BC246F] rounded-lg text-white inline-block">
                        {service.price}
                    </p>
                    <p className="text-lg">{service.long_description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
