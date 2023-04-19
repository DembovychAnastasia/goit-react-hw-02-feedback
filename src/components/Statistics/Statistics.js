import propTypes from 'prop-types';
import { StaticList } from './Statistics.styled';

export function Statistics ({ good, bad, neutral,title, total,positivePercentage

}) {
return (
    <div>
        <h3> {title}</h3>
        <StaticList>
            <li>Good {good}</li>
            <li>Neutral {neutral}</li>
            <li>Bad {bad}</li>
            <li>Total {total}</li>
            <li>Positive feedback: {positivePercentage} %</li>
            
        </StaticList>
    </div>

)
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    title: propTypes.string,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
  };
