import Card from "../../UI/card/Card";
import {Link} from "react-router-dom";

const Trainer = ({image, name, jop, socials}) => {
    return (
        <Card className='trainer'>
            <div className='trainer'>
                <div className='trainer__img'>
                    <img src={image} alt={name}/>
                </div>
                <h3>{name}</h3>
                <p>{jop}</p>
                <div className='trainer__socials'>
                    {
                        socials.map(({icon, link}, index) => {
                            return <Link to={link} key={index} target='_blank' rel='noreferrer'>
                                {icon}
                            </Link>
                        })
                    }
                </div>
            </div>
        </Card>
    )
}
export default Trainer;
