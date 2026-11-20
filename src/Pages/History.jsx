import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BackArrowIcon,
  TrashIcon,
  HistoryScrollIcon,
  BatuIcon,
  GuntingIcon,
  KertasIcon,
  HeroEmblemIcon,
} from '../components/CartoonIcons';

function renderWeaponThumb(choice) {
  if (choice === 'batu') return <BatuIcon size={20} />;
  if (choice === 'gunting') return <GuntingIcon size={20} />;
  if (choice === 'kertas') return <KertasIcon size={20} />;
  return null;
}

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
    <main className="game-container history-page-container">
      {/* Header Navigasi */}
      <nav className="nav-header" aria-label="Navigasi riwayat">
        <button type="button" className="btn-back" onClick={() => navigate('/play')}>
          <BackArrowIcon size={18} />
          <span>Kembali ke Arena</span>
        </button>

        {history.length > 0 && (
          <button
            type="button"
            className="btn-clear-history"
            onClick={handleClearHistory}
          >
            <TrashIcon size={16} />
            <span>Hapus Riwayat</span>
          </button>
        )}
      </nav>

      {/* Judul & Ringkasan */}
      <header className="history-page-header">
        <div className="history-page-title">
          <HistoryScrollIcon size={28} />
          <h1>Riwayat Pertandingan</h1>
        </div>

        <div className="history-stats-pills">
          <div className="stat-pill">
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
      </header>

      {/* Daftar Riwayat */}
      <section className="history-full-panel" aria-label="Daftar hasil ronde">
        {history.length === 0 ? (
          <div className="history-empty-box">
            <HeroEmblemIcon size={64} />
            <h2 className="empty-title">Belum ada duel yang tercatat</h2>
            <p className="empty-desc">
              Belum ada data karena kamu belum memainkan satu ronde pun. Masuk ke arena dan mulai duel pertamamu.
            </p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => navigate('/play')}
            >
              Main di Arena
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
                    <span className="round-badge">
                      Ronde #{item.roundNumber || totalMatches - index}
                    </span>
                    <span className="round-time">{item.time}</span>
                  </div>

                  <div className="history-card-match">
                    <span className="match-fighter player">
                      {renderWeaponThumb(item.playerChoice)}
                      <span>Kamu: <strong>{item.playerChoice}</strong></span>
                    </span>
                    <span className="match-vs">vs</span>
                    <span className="match-fighter bot">
                      {renderWeaponThumb(item.computerChoice)}
                      <span>Komputer: <strong>{item.computerChoice}</strong></span>
                    </span>
                  </div>

                  <div className="history-card-result">
                    <span className={`result-pill ${badgeClass}`}>{item.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
