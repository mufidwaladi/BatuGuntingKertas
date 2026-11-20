import PropTypes from 'prop-types';
import { PlayerAvatarIcon, BotAvatarIcon } from './CartoonIcons';

export default function ScoreBoard({ playerScore, computerScore }) {
  return (
    <section className="scoreboard-container scoreboard-compact" aria-label="Papan Skor">
      <div className="score-header">
        <div className="score-box player-box">
          <div className="avatar-icon">
            <PlayerAvatarIcon size={28} />
          </div>
          <div>
            <p className="score-label">Pemain Menang</p>
            <p className="score-value player-score">{playerScore}</p>
          </div>
        </div>

        <div className="score-vs" aria-hidden="true">VS</div>

        <div className="score-box computer-box">
          <div className="avatar-icon">
            <BotAvatarIcon size={28} />
          </div>
          <div>
            <p className="score-label">Komputer Menang</p>
            <p className="score-value computer-score">{computerScore}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

ScoreBoard.propTypes = {
  playerScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
};
