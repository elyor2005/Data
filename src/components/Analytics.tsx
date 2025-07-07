import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 ">
      <div className="max-w[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="text-[#00fd9a font-bold] flex flex-col justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            ANALYTICS DASHBOARD
          </p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Data Analytics is the science of examining raw data to uncover
            patterns, draw conclusions, and support decision-making. It helps
            organizations understand what is happening, why it's happening, and
            what could happen next. Businesses use data analytics to improve
            performance, reduce costs, and enhance customer satisfaction. There
            are four main types: descriptive, diagnostic, predictive, and
            prescriptive. Tools like Excel, SQL, Python, and Power BI are
            commonly used. Data analysts also visualize data using graphs and
            dashboards. In today's digital world, data analytics is essential in
            industries like finance, healthcare, e-commerce, and more.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:-translate-y-1 hover:scale-110 ...">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
