import avater from './assets/images/image-jeremy.png'
import icon_ellipsis from './assets/images/icon-ellipsis.svg'
import icon_work from './assets/images/icon-work.svg'
import icon_exercise from './assets/images/icon-exercise.svg'
import icon_play from './assets/images/icon-play.svg'
import icon_study from './assets/images/icon-study.svg'
import icon_social from './assets/images/icon-social.svg'
import icon_selfcare from './assets/images/icon-self-care.svg'


function App() {

  return (
    <>
      <main>
        <div className="wrapper">
          <div className="layout-grid">
            <div className="col">
              <div className="dashboard__card">
                <div className="profile">
                  <img src={avater} alt="" />
                  <label>Report for</label>
                  <h2>Jeremy Robson</h2>
                </div>
                <div className="time">
                  <ul>
                    <li>Daily</li>
                    <li className='active'>Weekly</li>
                    <li>Monthly</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="dashboard__card card__work">
                <div className="card__banner">
                  <img src={icon_work} alt="" />
                </div>
                <div className="card__content">
                  <div className="card__header">
                    <div className="card_title">Work</div>
                    <img src={icon_ellipsis} alt="" />
                  </div>
                  <h1>32hrs</h1>
                  <p>Last Week - <span>36hrs</span></p>
                </div>
              </div>
              <div className="dashboard__card card__exercise">
                <div className="card__banner">
                  <img src={icon_exercise} alt="" />
                </div>
                <div className="card__content">
                  <div className="card__header">
                    <div className="card_title">Exercise</div>
                    <img src={icon_ellipsis} alt="" />
                  </div>
                  <h1>32hrs</h1>
                  <p>Last Week - <span>36hrs</span></p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="dashboard__card card__play">
                <div className="card__banner">
                  <img src={icon_play} alt="" />
                </div>
                <div className="card__content">
                  <div className="card__header">
                    <div className="card_title">Play</div>
                    <img src={icon_ellipsis} alt="" />
                  </div>
                  <h1>32hrs</h1>
                  <p>Last Week - <span>36hrs</span></p>
                </div>
              </div>
              <div className="dashboard__card card__social">
                <div className="card__banner">
                  <img src={icon_social} alt="" />
                </div>
                <div className="card__content">
                  <div className="card__header">
                    <div className="card_title">Social</div>
                    <img src={icon_ellipsis} alt="" />
                  </div>
                  <h1>32hrs</h1>
                  <p>Last Week - <span>36hrs</span></p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="dashboard__card card__study">
                <div className="card__banner">
                  <img src={icon_study} alt="" />
                </div>
                <div className="card__content">
                  <div className="card__header">
                    <div className="card_title">Study</div>
                    <img src={icon_ellipsis} alt="" />
                  </div>
                  <h1>32hrs</h1>
                  <p>Last Week - <span>36hrs</span></p>
                </div>
              </div>
              <div className="dashboard__card card__selfcare">
                <div className="card__banner">
                  <img src={icon_selfcare} alt="" />
                </div>
                <div className="card__content">
                  <div className="card__header">
                    <div className="card_title">Self Care</div>
                    <img src={icon_ellipsis} alt="" />
                  </div>
                  <h1>32hrs</h1>
                  <p>Last Week - <span>36hrs</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </main>
    </>
  )
}

export default App
