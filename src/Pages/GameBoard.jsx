import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleDot, Scissors, Hand, ArrowLeft, History, RotateCcw } from 'lucide-react';
import GameButton from '../components/GameButton';
import ScoreBoard from '../components/ScoreBoard';

const WEAPONS = [
  { name: 'batu', icon: CircleDot },
  { name: 'gunting', icon: Scissors },
  { name: 'kertas', icon: Hand }
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

  const playRound = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * WEAPONS.length);
    const computerChoice = WEAPONS[randomIndex].name;

    let roundResult;
    let statusMessage;
    let nextPlayerScore = playerScore;
    let nextComputerScore = computerScore;

    if (playerChoice === computerChoice) {
      roundResult = "Seri";
      statusMessage = `Kalian berdua memilih ${playerChoice}. Seri!`;
    } else if (
      (playerChoice === 'batu' && computerChoice === 'gunting') ||
      (playerChoice === 'gunting' && computerChoice === 'kertas') ||
      (playerChoice === 'kertas' && computerChoice === 'batu')
    ) {
      roundResult = "Menang";
      statusMessage = `Kamu menang! ${playerChoice} mengalahkan ${computerChoice}.`;
      nextPlayerScore = playerScore + 1;
      setPlayerScore(nextPlayerScore);
    } else {
      roundResult = "Kalah";
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
      setStatusText('Skor telah di-reset. Pilih senjata untuk mulai!');
    }
  };

  return (
    <div className="game-container">
      {/* Navigasi Atas */}
      <div className="nav-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Kembali ke Menu</span>
        </button>

        <div className="nav-header-actions">
          <button className="btn-reset-link" onClick={handleResetScores} title="Reset Skor">
            <RotateCcw size={16} />
            <span>Reset Skor</span>
          </button>
          <button className="btn-history-link" onClick={() => navigate('/history')}>
            <History size={18} />
            <span>Lihat Riwayat</span>
          </button>
        </div>
      </div>

      {/* Hanya Jumlah Menang Pemain vs Komputer */}
      <ScoreBoard 
        playerScore={playerScore} 
        computerScore={computerScore} 
      />

      {/* Pilihan Batu, Gunting, Kertas */}
      <div className="game-panel">
        <div className="status-badge-container">
          <p className="status-text">{statusText}</p>
        </div>
        
        <p className="panel-subtitle">Tentukan Senjatamu:</p>
        
        <div className="weapon-buttons">
          {WEAPONS.map((weapon) => (
            <GameButton 
              key={weapon.name}
              choice={weapon.name}
              icon={weapon.icon}
              onClick={playRound} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
