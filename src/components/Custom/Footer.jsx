import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/destinations" className="hover:text-orange-400 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-orange-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
             <FontAwesomeIcon icon={faInstagram} className="text-xl"/>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
               <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
             <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                <span> Kolaka, India</span>
              </li>
              <li className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
                <span>+123 467 989</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl"/>
                <span>info@ROAMAI.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">
              Subscribe to Our Newsletter
            </h4>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <button
                type="submit"
                className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 ROAMAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

