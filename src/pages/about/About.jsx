import './About.css';
import Header from "../../components/header/Header";
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg'

const About = () => {
    return (
        <>
            <Header title='About Us' image={HeaderImage}>
                Lorem ipsum dolor sit amet, consecrate radicalising elite.
                Aliquot exception similitude eis option Doldrums, query.
            </Header>
            <section className='about__story'>
                <div className='container about__story-container'>
                    <div className='about__section-image'>
                        <img src={StoryImage} alt='Our Story'/>
                    </div>
                    <div className='about__section-content'>
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query?
                        </p>
                    </div>
                </div>
            </section>
            <section className='about__vision'>
                <div className='container about__vision-container'>
                    <div className='about__section-content'>
                        <h1>Our Vision</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                    </div>
                    <div className='about__section-image'>
                        <img src={VisionImage} alt='Our vision'/>
                    </div>
                </div>
            </section>
            <section className='about__mission'>
                <div className='container about__mission-container'>
                    <div className='about__section-image'>
                        <img src={MissionImage} alt='Our Mission'/>
                    </div>
                    <div className='about__section-content'>
                        <h1>Our Mission</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consecrate radicalising elite.
                            Aliquot exception similitude eis option Doldrums, query?
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
