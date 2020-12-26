import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    <ul>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="/help">How It Works</Link>
      </li>
      <li>
        <Link to="/terms">Terms</Link>
      </li>
    </ul>
  </div>
);

export default Footer;
