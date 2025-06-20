import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaShieldAlt, FaArrowLeft } from "react-icons/fa";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="relative bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg overflow-hidden gaming-card">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600"></div>
          
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-gray-700/50 p-4 border border-emerald-600/30">
              <FaShieldAlt className="w-10 h-10 text-emerald-400" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-8 text-center text-emerald-400 pixelated">
            Privacy Policy
          </h1>
          
          <p className="mb-8 text-gray-300 text-lg text-center max-w-2xl mx-auto">
            At <span className="text-emerald-400 font-medium">NetherLink</span>, we are committed to protecting your privacy. 
            This policy outlines what information we collect and how we use it.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                1. Account Data
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  When you create an account on NetherLink, we collect and store certain information:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 space-y-1">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Server information (IP addresses, ports)</li>
                  <li>Server banner images you upload</li>
                </ul>
                <p className="mt-2 text-gray-300">
                  This information is necessary for account functionality and managing your featured servers.
                  We do not sell or share this data with third parties except as described in this policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                2. Server Information
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  Server details submitted for advertisement (IP addresses, ports, banners) are publicly shown
                  in our featured servers list. You should only submit server information that you are
                  comfortable being publicly displayed. We do not verify or store player information
                  from connected servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                3. Data Security
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  We implement reasonable security measures to protect your personal information.
                  User authentication is handled through secure third-party services.
                  However, please be aware that no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                4. Third-Party Services
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  We use platforms like <a href="https://github.com" className="text-emerald-400 hover:underline">GitHub</a> for development, 
                  <a href="https://firebase.google.com" className="text-emerald-400 hover:underline"> Firebase</a> for authentication,
                  and <a href="https://discord.com" className="text-emerald-400 hover:underline"> Discord</a> for communication. 
                  These services may have their own tracking or logging; we encourage you to read their privacy policies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                5. Cookies & Analytics
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  NetherLink does not use cookies, tracking pixels, or analytics tools that collect identifiable information
                  beyond what is necessary for basic site functionality and authentication.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                6. Children's Privacy
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  Our services are not directed to children under the age of 13. We do not knowingly collect information from children.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-3 border-l-4 border-blue-500 pl-3">
                7. Data Removal
              </h2>
              <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-300">
                  You may request deletion of your account and associated data at any time by contacting us.
                  Server information will be removed from our public listings when deleted through your dashboard
                  or upon account deletion.
                </p>
              </div>
            </section>
          </div>

          <p className="mt-10 text-sm text-gray-400 text-right">
            Last updated: June 2025
          </p>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition gaming-button"
            >
              <FaArrowLeft className="mr-2" /> Back to Home
            </Link>
          </div>
          
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-emerald-500/30 -mb-2 -mr-2 z-0"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/30 -mt-2 -ml-2 z-0"></div>
        </div>
      </div>
      
      <Footer />
      
      <style jsx>{`
        /* Gaming-style elements */
        .gaming-card {
          position: relative;
          transition: all 0.3s ease;
        }
        .gaming-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.15);
        }
        .gaming-button {
          position: relative;
          overflow: hidden;
        }
        .gaming-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.5s;
        }
        .gaming-button:hover::after {
          left: 100%;
        }
        
        /* Pixelated text effect */
        .pixelated {
          text-shadow: 2px 2px 0px #003b25;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
}