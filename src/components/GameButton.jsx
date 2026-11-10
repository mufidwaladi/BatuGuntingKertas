import PropTypes from 'prop-types';

export default function GameButton({ choice, icon: Icon, onClick }) {
  return (
    <button className="weapon-btn" onClick={() => onClick(choice)} title={`Pilih ${choice}`}>
      <div className="weapon-icon-box">
        <Icon size={38} className="weapon-icon" />
      </div>
      <span className="weapon-label">{choice}</span>
    </button>
  );
}

GameButton.propTypes = {
  choice: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
};
