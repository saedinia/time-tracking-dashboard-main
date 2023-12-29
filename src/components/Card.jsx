import PropTypes from 'prop-types';
import icon_ellipsis from './../assets/images/icon-ellipsis.svg'
import icon_work from './../assets/images/icon-work.svg'
import icon_exercise from './../assets/images/icon-exercise.svg'
import icon_play from './../assets/images/icon-play.svg'
import icon_study from './../assets/images/icon-study.svg'
import icon_social from './../assets/images/icon-social.svg'
import icon_selfcare from './../assets/images/icon-self-care.svg'

function Card(props) {
    const data = props.data;
    const timeFrame = props.timeFrame
    
    const current = data.timeframes[timeFrame].current;
    const previous = data.timeframes[timeFrame].previous;
    let timeFrameShow = 'Day'

    switch (timeFrame) {
        case 'daily':
            timeFrameShow = 'Day'
            break;

        case 'weekly':
            timeFrameShow = 'Week'
            break;
        
        case 'monthly':
            timeFrameShow = 'Month'
            break;
    }

    const handleIcon = (title) => {
        
        switch (title.split(' ').join('-').toLowerCase()) {
            case 'work':
                return (
                    <img src={icon_work} alt="" />
                )
            case 'exercise':
                return (
                    <img src={icon_exercise} alt="" />
                )
            case 'play':
                return (
                    <img src={icon_play} alt="" />
                )
            case 'study':
                return (
                    <img src={icon_study} alt="" />
                )
            case 'social':
                return (
                    <img src={icon_social} alt="" />
                )
            case 'selfcare':
                return (
                    <img src={icon_selfcare} alt="" />
                )
        }
    }
    
    return (
        <div className={"dashboard__card card__" + data.title.split(' ').join('').toLowerCase()}>
            <div className="card__banner">            
                {handleIcon(data.title.split(' ').join('').toLowerCase())}
            </div>
            <div className="card__content">
                <div className="card__header">
                <div className="card__title">{data.title}</div>
                <img src={icon_ellipsis} alt="" />
                </div>
                <h1>{current}hrs</h1>
                <p>Last {timeFrameShow} - <span>{previous}hrs</span></p>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        timeframes: PropTypes.shape({
            daily: PropTypes.shape({
                current: PropTypes.number.isRequired,
                previous: PropTypes.number.isRequired,
            }).isRequired,
            weekly: PropTypes.shape({
                current: PropTypes.number.isRequired,
                previous: PropTypes.number.isRequired,
            }).isRequired,
            monthly: PropTypes.shape({
                current: PropTypes.number.isRequired,
                previous: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    timeFrame: PropTypes.oneOf(['daily', 'weekly', 'monthly']).isRequired,
};

export default Card