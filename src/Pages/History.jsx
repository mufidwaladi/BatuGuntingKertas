import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, History as HistoryIcon, Swords, Award } from 'lucide-react';

export default function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState(() => {
    try {
      const raw = localStorage.getItem('bgk_history');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const handleClearHistory = () => {
    if (window.confirm('Yakin ingin menghapus semua riwayat dan mereset skor pertandingan?')) {
      localStorage.removeItem('bgk_history');
      localStorage.removeItem('bgk_scores');
      setHistory([]);
    }
  };

  const totalMatches = history.length;
  const wins = history.filter((h) => h.result === 'Menang').length;
  const losses = history.filter((h) => h.result === 'Kalah').length;
  const draws = history.filter((h) => h.result === 'Seri').length;

  return (
    <div className="game-container history-page-container">
      {/* Header Navigasi */}
      <div className="nav-header">
        <button className="btn-back" onClick={() => navigate('/play')}>
          <ArrowLeft size={18} />
          <span>Kembali ke Game</span>
        </button>

        {history.length > 0 && (
          <button className="btn-clear-history" onClick={handleClearHistory}>
            <Trash2 size={16} />
            <span>Hapus Riwayat</span>
          </button>
        )}
      </div>

      {/* Judul & Ringkasan */}
      <div className="history-page-header">
        <div className="history-page-title">
          <HistoryIcon size={24} className="title-icon" />
          <h2>Riwayat Pertandingan</h2>
        </div>

        <div className="history-stats-pills">
          <div className="stat-pill">
            <Award size={16} />
            <span>Total: <strong>{totalMatches}</strong></span>
          </div>
          <div className="stat-pill win">
            <span>Menang: <strong>{wins}</strong></span>
          </div>
          <div className="stat-pill lose">
            <span>Kalah: <strong>{losses}</strong></span>
          </div>
          <div className="stat-pill draw">
            <span>Seri: <strong>{draws}</strong></span>
          </div>
        </div>
      </div>

      {/* Daftar Riwayat */}
      <div className="history-full-panel">
        {history.length === 0 ? (
          <div className="history-empty-box">
            <Swords size={48} className="empty-icon" />
            <p className="empty-title">Belum ada riwayat pertandingan</p>
            <p className="empty-desc">Mainkan game terlebih dahulu di arena!</p>
            <button className="btn-primary" onClick={() => navigate('/play')}>
              Mulai Main Sekarang
            </button>
          </div>
        ) : (
          <div className="history-cards-list">
            {history.map((item, index) => {
              const badgeClass =
                item.result === 'Menang'
                  ? 'badge-win'
                  : item.result === 'Kalah'
                  ? 'badge-lose'
                  : 'badge-draw';

              return (
                <div key={item.id || index} className="history-card-row">
                  <div className="history-card-info">
                    <span className="round-badge">Ronde #{item.roundNumber || totalMatches - index}</span>
                    <span className="round-time">{item.time}</span>
                  </div>

                  <div className="history-card-match">
                    <span className="match-fighter player">Kamu: <strong>{item.playerChoice}</strong></span>
                    <span className="match-vs">vs</span>
                    <span className="match-fighter bot">Komputer: <strong>{item.computerChoice}</strong></span>
                  </div>

                  <div className="history-card-result">
                    <span className={`result-pill ${badgeClass}`}>{item.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
