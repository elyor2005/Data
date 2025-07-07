import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4  hover:bg-teal-500 hover:text-black rounded-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            className="hover:text-teal-500 hover:scale-150"
            size={30}
          />
          <FaInstagram
            className="hover:text-teal-500 hover:scale-150"
            size={30}
          />
          <FaTwitterSquare
            className="hover:text-teal-500 hover:scale-150"
            size={30}
          />
          <FaGithubSquare
            className="hover:text-teal-500 hover:scale-150"
            size={30}
          />
          <FaDribbbleSquare
            className="hover:text-teal-500 hover:scale-150"
            size={30}
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 ">
        <div>
          <h6 className="font-medium text-gray-400 hover:text-teal-500 hover:scale-150">
            Solutions
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Analytics
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Marketing
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Commerce
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 hover:text-teal-500 hover:scale-150">
            Support
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Pricing
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Documentation
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Guides
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 hover:text-teal-500 hover:scale-150">
            Company
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              About
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Blog
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Jobs
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Press
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 hover:text-teal-500 hover:scale-150">
            Legal
          </h6>
          <ul>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Claim
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Policy
            </li>
            <li className="py-2 text-sm hover:text-teal-500 hover:scale-150">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
