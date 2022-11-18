import './Footer.css'
import {Link} from "react-router-dom";
import Logo from '../../images/logo.png'
import {FaLinkedin, FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className='container footer__container'>
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='Footer Logo'/>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consecrate radicalising
                        elite. Aliquot exception similitude eis option Doldrums, query.
                    </p>
                    <div className='footer__socials'>
                        <Link to='https://www.linkedin.com/' target='_blank' rel='noreferrer noopener'>
                            <FaLinkedin/>
                        </Link>
                        <Link to='https://web.facebook.com/' target='_blank' rel='noreferrer noopener'>
                            <FaFacebookF/>
                        </Link>
                        <Link to='https://twitter.com/' target='_blank' rel='noreferrer noopener'>
                            <AiOutlineTwitter/>
                        </Link>
                        <Link to='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
                            <AiFillInstagram/>
                        </Link>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
            </div>
            <div className='footer__copyright'>
                <small>2022 Adel Ahmed &copy; All Rights Reserved</small>
            </div>
        </footer>
    );
}

export default Footer;