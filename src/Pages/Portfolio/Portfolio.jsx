import portfolio from "../../assets/portfolio.svg";

const Portfolio = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-center mt-3">
                <img src={portfolio} alt="" />
            </div>
            <h1 className="text-center text-4xl font-semibold mt-4">
                This is the portfolio page
            </h1>
            <p className="text-center text-[#65AFE0] bg-slate-900 p-3 mt-2">
                Coming soon ...{" "}
            </p>
        </div>
    );
};

export default Portfolio;
