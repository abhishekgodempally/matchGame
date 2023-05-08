import { Component } from 'react'
import './index.css'
import TabItem from '../TabItem'
import GameItem from '../GameItem'
import GameOverCard from '../GameOverCard'

class MatchGame extends Component {
    const {tabsList, imagesList } = this.props    
state = { remainingTime: 60 }

componentDidMount() {
    const remainingTimeClicks = setInterval(this.onGetTimeStarts, 1000)
}

onGetTimeStarts = () => {
    this.setState(prevState => {
        const { remainingTime } = prevState
        return {
            remainingTime: remainingTime - 1,
        }
    })
}

render() {

    const { remainingTime } = this.state

    return (
        <div>
            <div className="navbar-container">
                <nav className="nav-items-container">
                    <img
                        className="game-logo"
                        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
                        alt="website logo"
                    />
                    <div className="score-timer-container">
                        <p className="score-text-styles">Score:</p>
                        <p className="score-styles">0</p>
                        <img
                            className="clock-img"
                            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                            alt="timer"
                        />
                        <p className="timer-seconds">{remainingTime} sec</p>
                    </div>
                </nav>
            </div>

            <div className="main-container">
                <div className="display-img-container">
                    <img
                        className="display-image-styles"
                        src="https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png"
                        alt="dog"
                    />
                </div>
                <ul className="tab-items-container">
                    {tabsList.map(eachTab => (
                        <TabItem tabItems={eachTab} key={eachTab.tabId} />
                    ))}
                </ul>
                <ul className="game-items-container">
                    {imagesList.map(eachItem => (
                        <GameItem imageItems={eachItem} key={eachItem.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}
}

export default MatchGame
