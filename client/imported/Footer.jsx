import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedinIn,
  FaCodepen,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

// Renders the site footer with branding, navigation, social icons, and contact info
export default function FooterFull() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding & Social */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-lg font-bold flex items-center gap-2 mb-3"
            >
              <span className="bg-primary h-8 w-8 rounded-md flex items-center justify-center text-white">
                SB
              </span>
              <span>Sean Berg</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4 max-w-md">
              Developer focused on meaningful learning tools, gamified education,
              and performance-driven web applications.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://codepen.io"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <FaCodepen />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['about', 'projects', 'contact'].map((page) => (
                <li key={page}>
                  <Link
                    to={`/${page}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-slate-500" />
                <a
                  href="mailto:sbergitconsultant@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  sbergitconsultant@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-slate-500" />
                <span className="text-slate-400">(610) 674-0194</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-slate-500" />
                <span className="text-slate-400">Remote / Global</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-3 md:mb-0">
            © {currentYear} Sean Berg. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Japanese Thank You */}
        <p className="text-slate-500 text-sm mt-4 text-center">
          ありがとうございます
        </p>
      </div>
    </footer>
  );
}
