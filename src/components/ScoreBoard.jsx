import PropTypes from 'prop-types';
import { User, Bot } from 'lucide-react';

export default function ScoreBoard({ playerScore, computerScore }) {
  return (
    <div className="scoreboard-container scoreboard-compact">
      <div className="score-header">
        <div className="score-box player-box">
          <div className="avatar-icon">
            <User size={22} />
          </div>
          <div>
            <p className="score-label">Pemain Menang</p>
            <p className="score-value player-score">{playerScore}</p>
          </div>
        </div>

        <div className="score-vs">VS</div>

        <div className="score-box computer-box">
          <div className="avatar-icon">
            <Bot size={22} />
          </div>
          <div>
            <p className="score-label">Komputer Menang</p>
            <p className="score-value computer-score">{computerScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ScoreBoard.propTypes = {
  playerScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
};
