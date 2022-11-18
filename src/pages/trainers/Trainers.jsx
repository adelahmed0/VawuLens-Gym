import './Trainers.css';
import {trainers} from "../../data";
import Header from "../../components/header/Header";
import HeaderImage from '../../images/header_bg_5.jpg';
import {BsInstagram} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaFacebookF, FaLinkedin} from "react-icons/fa";
import Trainer from "./Trainer";

const Trainers = () => {
    return (
        <>
            <Header title='Our Trainers' image={HeaderImage}>
                Lorem ipsum dolor sit amet, consecrate radicalising elite.
                Aliquot exception similitude eis option Doldrums, query.
            </Header>
            <section className='trainers'>
                <div className='container trainers__container'>
                    {
                        trainers.map(({id, image, name, jop, socials}) => {
                            return <Trainer key={id} image={image} jop={jop} socials={
                                [
                                    {icon: <BsInstagram/>, link: socials[0]},
                                    {icon: <AiOutlineTwitter/>, link: socials[1]},
                                    {icon: <FaFacebookF/>, link: socials[2]},
                                    {icon: <FaLinkedin/>, link: socials[3]},
                                ]}/>
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default Trainers;
