import avater from './assets/images/image-jeremy.png'
import Card from './components/Card'
import data from './../data.json'
import { useState } from 'react'

function App() {
  const [timeFrame, setTimeFrame] = useState('weekly');

  const handleTimeFrame = (e) => {
    const timeFramesItems = document.querySelectorAll('.time li')
    timeFramesItems.forEach(item => item.classList.remove('active'))
    
    e.target.classList.add('active');

    setTimeFrame(e.target.innerText.toLowerCase())
  }
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="layout-grid">
            <div className="col col-profile">
              <div className="dashboard__card card__profile">
                <div className="profile">
                  <img src={avater} alt="" />
                  <div>
                    <label>Report for</label>
                    <h2>Jeremy Robson</h2>
                  </div>
                </div>
                <div className="time">
                  <ul>
                    <li onClick={handleTimeFrame}>Daily</li>
                    <li className='active' onClick={handleTimeFrame}>Weekly</li>
                    <li onClick={handleTimeFrame}>Monthly</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-card-other">
              {
                data.map(card => {
                  return (
                    <Card key={card.title} data={card} timeFrame={timeFrame}/>
                  )
                })
              }
            </div>
          </div>
        </div>        
      </main>
    </>
  )
}

export default App
