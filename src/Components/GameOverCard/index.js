import './index.css'

const GameOverCard = () => (
  <div className="game-over-card-main-container">
    <div className="game-over-container">
      <img
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
        alt="trophy"
      />
      <h1 className="your-score-text">YOUR SCORE</h1>
      <p className="score-count">5</p>
      <button type="button" className="play-again-btn">
        <img
          className="reset-btn"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  </div>
)

export default GameOverCard
