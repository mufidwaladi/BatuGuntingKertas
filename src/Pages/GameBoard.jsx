import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BatuIcon,
  GuntingIcon,
  KertasIcon,
  BackArrowIcon,
  HistoryScrollIcon,
  ResetIcon,
} from '../components/CartoonIcons';
import GameButton from '../components/GameButton';
import ScoreBoard from '../components/ScoreBoard';

const WEAPONS = [
  { name: 'batu', icon: BatuIcon },
  { name: 'gunting', icon: GuntingIcon },
  { name: 'kertas', icon: KertasIcon },
];

export default function GameBoard() {
  const navigate = useNavigate();

  // Ambil skor tersimpan agar tidak hilang saat navigasi
  const [playerScore, setPlayerScore] = useState(() => {
    try {
      const saved = localStorage.getItem('bgk_scores');
      return saved ? JSON.parse(saved).player || 0 : 0;
    } catch {
      return 0;
    }
  });

  const [computerScore, setComputerScore] = useState(() => {
    try {
      const saved = localStorage.getItem('bgk_scores');
      return saved ? JSON.parse(saved).computer || 0 : 0;
    } catch {
      return 0;
    }
  });

  const [statusText, setStatusText] = useState('Pilih senjatamu untuk mulai!');
  const [lastResult, setLastResult] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [lastComputerChoice, setLastComputerChoice] = useState(null);

  const playRound = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * WEAPONS.length);
    const computerChoice = WEAPONS[randomIndex].name;

    let roundResult;
    let statusMessage;
    let nextPlayerScore = playerScore;
    let nextComputerScore = computerScore;

    if (playerChoice === computerChoice) {
      roundResult = 'Seri';
      statusMessage = `Kalian berdua memilih ${playerChoice}. Seri!`;
    } else if (
      (playerChoice === 'batu' && computerChoice === 'gunting') ||
      (playerChoice === 'gunting' && computerChoice === 'kertas') ||
      (playerChoice === 'kertas' && computerChoice === 'batu')
    ) {
      roundResult = 'Menang';
      statusMessage = `Kamu menang! ${playerChoice} mengalahkan ${computerChoice}.`;
      nextPlayerScore = playerScore + 1;
      setPlayerScore(nextPlayerScore);
    } else {
      roundResult = 'Kalah';
      statusMessage = `Kamu kalah! ${computerChoice} mengalahkan ${playerChoice}.`;
      nextComputerScore = computerScore + 1;
      setComputerScore(nextComputerScore);
    }

    // Simpan skor terbaru
    localStorage.setItem(
      'bgk_scores',
      JSON.stringify({ player: nextPlayerScore, computer: nextComputerScore })
    );

    setStatusText(statusMessage);
    setLastResult(roundResult.toLowerCase());
    setSelectedWeapon(playerChoice);
    setLastComputerChoice(computerChoice);

    // Simpan riwayat pertandingan ke localStorage
    try {
      const historyRaw = localStorage.getItem('bgk_history');
      const historyList = historyRaw ? JSON.parse(historyRaw) : [];
      const time = new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const newEntry = {
        id: Date.now(),
        roundNumber: historyList.length + 1,
        playerChoice,
        computerChoice,
        result: roundResult,
        time,
      };

      localStorage.setItem('bgk_history', JSON.stringify([newEntry, ...historyList]));
    } catch {
      // Fallback jika storage bermasalah
    }
  };

  const handleResetScores = () => {
    if (window.confirm('Reset skor Pemain dan Komputer menjadi 0?')) {
      localStorage.removeItem('bgk_scores');
      setPlayerScore(0);
      setComputerScore(0);
      setLastResult(null);
      setSelectedWeapon(null);
      setLastComputerChoice(null);
      setStatusText('Skor telah di-reset. Pilih senjata untuk mulai!');
    }
  };

  return (
    <main className="game-container">
      {/* Navigasi Atas */}
      <nav className="nav-header" aria-label="Navigasi arena">
        <button type="button" className="btn-back" onClick={() => navigate('/')}>
          <BackArrowIcon size={18} />
          <span>Menu</span>
        </button>

        <div className="nav-header-actions">
          <button
            type="button"
            className="btn-reset-link"
            onClick={handleResetScores}
          >
            <ResetIcon size={16} />
            <span>Reset Skor</span>
          </button>
          <button
            type="button"
            className="btn-history-link"
            onClick={() => navigate('/history')}
          >
            <HistoryScrollIcon size={18} />
            <span>Riwayat</span>
          </button>
        </div>
      </nav>

      <h1 className="page-heading">Arena Pertarungan</h1>

      {/* Hanya Jumlah Menang Pemain vs Komputer */}
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} />

      {/* Pilihan Batu, Gunting, Kertas */}
      <section className="game-panel" aria-label="Area pilih senjata">
        {/* Tampilan Hasil Pilihan Pemain vs Komputer */}
        <div className="duel-showcase" aria-label="Hasil pilihan ronde">
          {[
            { label: 'Pilihan Kamu', choice: selectedWeapon, side: 'player', emptyText: 'Belum pilih' },
            { label: 'Pilihan Komputer', choice: lastComputerChoice, side: 'computer', emptyText: 'Menunggu' },
          ].map((slot, index) => {
            const matchedWeapon = WEAPONS.find((w) => w.name === slot.choice);
            const SlotIcon = matchedWeapon ? matchedWeapon.icon : null;
            return (
              <Fragment key={slot.side}>
                {index === 1 && (
                  <span className="duel-vs-tag" aria-hidden="true">VS</span>
                )}
                <div className={`duel-card duel-${slot.side} ${slot.choice ? 'has-choice' : ''}`}>
                  <span className="duel-card-label">{slot.label}</span>
                  <div className="duel-icon-frame">
                    {SlotIcon ? (
                      <SlotIcon size={44} />
                    ) : (
                      <span className="duel-question" aria-hidden="true">?</span>
                    )}
                  </div>
                  <span className="duel-choice-name">
                    {slot.choice || slot.emptyText}
                  </span>
                </div>
              </Fragment>
            );
          })}
        </div>

        <div className="status-badge-container">
          <p
            className={`status-text ${lastResult ? `status-${lastResult}` : ''}`}
            aria-live="polite"
          >
            {statusText}
          </p>
        </div>

        <h2 className="panel-subtitle">Tentukan Senjatamu</h2>

        <div className="weapon-buttons">
          {WEAPONS.map((weapon) => (
            <GameButton
              key={weapon.name}
              choice={weapon.name}
              icon={weapon.icon}
              isSelected={selectedWeapon === weapon.name}
              onClick={playRound}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
