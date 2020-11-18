import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="copy-right">
        <p className="copy">React &copy; 2020</p>
        <p className="copy">Theme and Design by Samuel Trahan</p>
      </div>
      <div className="social-links">
        <a className="social" target="_blank" rel="noreferrer" href="https://github.com/samueltrahan"><i className="github fab fa-github fa-3x"></i></a>
        <a className="social" target="_blank" rel="noreferrer" href="https://github.com/samueltrahan"><i className="linked fab fa-linkedin fa-3x"></i></a>
        <a className="social" target="_blank" rel="noreferrer" href="https://twitter.com/samueltrahan4"><i className="twitter fab fa-twitter fa-3x"></i></a>
      </div>
    </div>
  )
}
