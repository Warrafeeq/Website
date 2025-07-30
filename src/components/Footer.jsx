import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <div className="flex justify-center space-x-4 mb-2">
        <a href="https://twitter.com/rafedge" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex items-center space-x-2 hover:text-blue-500">
          <FaTwitter className="inline-block mr-2" />
          <span>Twitter</span>
        </a>
        <a href="https://linkedin.com/company/rafedge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center space-x-2 hover:text-blue-700">
          <FaLinkedin className="inline-block mr-2" />
          <span>LinkedIn</span>
        </a>
        <a href="https://facebook.com/rafedge" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center space-x-2 hover:text-blue-600">
          <FaFacebook className="inline-block mr-2" />
          <span>Facebook</span>
        </a>
      </div>
      <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rafedge Lab. All rights reserved.</p>
    </footer>
  );
}
