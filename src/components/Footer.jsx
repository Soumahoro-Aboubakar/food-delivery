import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-white">Food Delivery</h2>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-neutral-300 hover:text-white text-xl" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-neutral-300 hover:text-white text-xl" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-neutral-300 hover:text-white text-xl" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Food Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
