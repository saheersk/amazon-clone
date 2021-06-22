import React from "react";
import "./Footer.css";

function Footer() {
    const ToTop = () => {
       
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  return (
    <div className="footer">
      <div className="back__to__top">
        <div className="button">
          <button onClick={ToTop}>Back to top</button>
        </div>
      </div>
      <div className="main__footer">
        <div className="left">
          <ul>
            <li>
              <h6>Get to Know Us</h6>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About Amazon</a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a>Amazon Devices</a>
            </li>
          </ul>
        </div>
        <div className="middle_one">
          <ul>
            <li>
              <h6>Make Money with Us</h6>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About Amazon</a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a>Amazon Devices</a>
            </li>
          </ul>
        </div>
        <div className="middle_two">
          <ul>
            <li>
              <h6>Amazon Payment Products</h6>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About Amazon</a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a>Amazon Devices</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <h6>Let Us Help You</h6>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About Amazon</a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a>Amazon Devices</a>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}

export default Footer;
