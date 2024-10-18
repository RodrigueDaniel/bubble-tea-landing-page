import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Contact Section demo*/}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiPhone className="mr-3 text-orange-300" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-orange-300" />
                <span>contact@bubbletea.com</span>
              </li>
              <li className="flex items-center">
                <FiMapPin className="mr-3 text-orange-300" />
                <span>123 Tea Street, Bobaland, CA</span>
              </li>
            </ul>
          </div>

          {/* About Section temporaey paragraph */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              At BubbleTea Heaven, we are passionate about delivering the best bubble tea experience with high-quality ingredients and a cozy environment. Our story began in 2010 with a mission to bring a refreshing taste to your life.
            </p>
          </div>

          {/* Useful Links demo links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-orange-300">Our Menu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-300">Order Online</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-300">Franchise Opportunities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links demo links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <p className="text-gray-300 mb-4">Stay connected with us on social media:</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-orange-300 transition-colors">
                <FaFacebookF size={24} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-orange-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-orange-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://tiktok.com" className="text-white hover:text-orange-300 transition-colors">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 BubbleTea Heaven. All Rights Reserved.</p>
            <ul className="flex space-x-4 text-sm mt-4 md:mt-0">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
