import './Contact.css';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";

const Contact = () => {
    return (
        <>
            <Header title='Get In Touch' image={HeaderImage}>
                Lorem ipsum dolor sit amet, consecrate radicalising elite.
                Aliquot exception similitude eis option Doldrums, query.
            </Header>
            <section className='contact'>
                <div className='container contact__container'>
                    <div className='contact__wrapper'>
                        <Link to="mailto:support@egattor.com" target='_blank' rel='noreferrer'>
                            <MdEmail/>
                        </Link>
                        <Link to="https://m.me/ernest_achiver" target='_blank' rel='noreferrer'>
                            <BsMessenger/>
                        </Link>
                        <Link to="https://wa.me/+201159248310" target='_blank' rel='noreferrer'>
                            <IoLogoWhatsapp/>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;