import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <aside>
          <img src="/logo.png" alt="Group Study Logo" className="w-24 mb-3" />
          <p className="text-sm">
            <strong>Group Study</strong>
            <br />
            Providing reliable education tools since 1992
          </p>
        </aside>

        <div>
          <h6 className="footer-title text-lg mb-2 font-semibold">Services</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Branding</a></li>
            <li><a className="link link-hover">Design</a></li>
            <li><a className="link link-hover">Marketing</a></li>
            <li><a className="link link-hover">Advertisement</a></li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title text-lg mb-2 font-semibold">Company</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">About us</a></li>
            <li><a className="link link-hover">Contact</a></li>
            <li><a className="link link-hover">Jobs</a></li>
            <li><a className="link link-hover">Press kit</a></li>
          </ul>
        </div>

        <div>
          <h6 className="footer-title text-lg mb-2 font-semibold">Legal</h6>
          <ul className="space-y-1">
            <li><a className="link link-hover">Terms of use</a></li>
            <li><a className="link link-hover">Privacy policy</a></li>
            <li><a className="link link-hover">Cookie policy</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 border-t pt-4 text-sm">
        © {new Date().getFullYear()} Group Study — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
