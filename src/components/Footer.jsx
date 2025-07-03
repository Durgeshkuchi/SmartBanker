import React from 'react'
import '../styles/Footer.scss'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span>Follow us: </span>
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className="footer-text">
        Empowering Your Finances with Secure and Seamless Banking
      </div>
    </footer>
  )
}

export default Footer
