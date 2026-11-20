import PropTypes from 'prop-types';

export default function GameButton({ choice, icon: Icon, onClick, isSelected = false }) {
  return (
    <button
      type="button"
      className={`weapon-btn weapon-${choice} ${isSelected ? 'is-selected' : ''}`}
      onClick={() => onClick(choice)}
      aria-label={`Pilih ${choice}`}
    >
      <div className="weapon-icon-box">
        <Icon size={52} className="weapon-icon" />
      </div>
      <span className="weapon-label">{choice}</span>
    </button>
  );
}

GameButton.propTypes = {
  choice: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};
