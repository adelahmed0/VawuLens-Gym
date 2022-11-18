import './Faqs.css';
import SectionHead from "../sectionHeader/SectionHead";
import {FaQuestion} from "react-icons/fa";
import {faqs} from "../../data";
import FAQ from "./FAQ";

const Faqs = () => {
    return (
        <section className='faqs'>
            <div className='container faqs__container'>
                <SectionHead icon={<FaQuestion/>} title='FAQs'/>
                <div className='faqs__wrapper'>
                    {
                        faqs.map(({id, question, answer}) => {
                            return <FAQ key={id} question={question} answer={answer}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Faqs;