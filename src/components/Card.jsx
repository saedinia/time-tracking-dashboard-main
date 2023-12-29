import React, { useContext } from 'react'
import icon_ellipsis from './../assets/images/icon-ellipsis.svg'
import { SVGContext } from './../contexts/SVGContext'; // Import your SVG context file


function Card(props) {
    const data = props.data;
    const timeFrame = props.timeFrame
    
    const current = data.timeframes[timeFrame].current;
    const previous = data.timeframes[timeFrame].previous;
    let timeFrameShow = 'Day'

    const icons = useContext(SVGContext);
    console.log(icons);

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

    return (
    <div className={"dashboard__card card__" + data.title.split(' ').join('').toLowerCase()}>
        <div className="card__banner">
            <img src='' alt="" />
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
    // <>
    //     <div className="dashboard__card card__work">
    //         <div className="card__banner">
    //             <img src={icon_work} alt="" />
    //         </div>
    //         <div className="card__content">
    //             <div className="card__header">
    //             <div className="card__title">Work</div>
    //             <img src={icon_ellipsis} alt="" />
    //             </div>
    //             <h1>32hrs</h1>
    //             <p>Last Week - <span>36hrs</span></p>
    //         </div>
    //     </div>

    //     <div className="dashboard__card card__play">
    //         <div className="card__banner">
    //             <img src={icon_play} alt="" />
    //         </div>
    //         <div className="card__content">
    //             <div className="card__header">
    //             <div className="card__title">Play</div>
    //             <img src={icon_ellipsis} alt="" />
    //             </div>
    //             <h1>32hrs</h1>
    //             <p>Last Week - <span>36hrs</span></p>
    //         </div>
    //     </div>

    //     <div className="dashboard__card card__study">
    //         <div className="card__banner">
    //             <img src={icon_study} alt="" />
    //         </div>
    //         <div className="card__content">
    //             <div className="card__header">
    //             <div className="card__title">Study</div>
    //             <img src={icon_ellipsis} alt="" />
    //             </div>
    //             <h1>32hrs</h1>
    //             <p>Last Week - <span>36hrs</span></p>
    //         </div>
    //     </div>

    //     <div className="dashboard__card card__exercise">
    //         <div className="card__banner">
    //             <img className="no-margin-top" src={icon_exercise} alt="" />
    //         </div>
    //         <div className="card__content">
    //             <div className="card__header">
    //             <div className="card__title">Exercise</div>
    //             <img src={icon_ellipsis} alt="" />  
    //             </div>
    //             <h1>32hrs</h1>
    //             <p>Last Week - <span>36hrs</span></p>
    //         </div>
    //     </div>
        
    //     <div className="dashboard__card card__social">
    //         <div className="card__banner">
    //             <img src={icon_social} alt="" />
    //         </div>
    //         <div className="card__content">
    //             <div className="card__header">
    //             <div className="card__title">Social</div>
    //             <img src={icon_ellipsis} alt="" />
    //             </div>
    //             <h1>32hrs</h1>
    //             <p>Last Week - <span>36hrs</span></p>
    //         </div>
    //     </div>  

    //     <div className="dashboard__card card__selfcare">
    //         <div className="card__banner">
    //             <img src={icon_selfcare} alt="" />
    //         </div>
    //         <div className="card__content">
    //             <div className="card__header">
    //             <div className="card__title">Self Care</div>
    //             <img src={icon_ellipsis} alt="" />
    //             </div>
    //             <h1>32hrs</h1>
    //             <p>Last Week - <span>36hrs</span></p>
    //         </div>
    //     </div>
    // </>
  )
}

export default Card