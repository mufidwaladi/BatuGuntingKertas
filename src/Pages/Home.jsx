import { useNavigate } from 'react-router-dom';
import { Gamepad2, Swords, Sparkles, History } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-card">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Player vs Computer Mode</span>
        </div>
        
        <div className="icon-glow-wrapper">
          <Gamepad2 size={64} className="home-icon" />
        </div>

        <h1 className="home-title">Batu Gunting Kertas</h1>
        <p className="home-subtitle">
          Tantang komputer dalam pertarungan taktik klasik dan raih skor tertinggi!
        </p>

        <div className="weapon-preview-row">
          <span className="preview-tag">Batu</span>
          <span className="preview-arrow">&gt;</span>
          <span className="preview-tag">Gunting</span>
          <span className="preview-arrow">&gt;</span>
          <span className="preview-tag">Kertas</span>
          <span className="preview-arrow">&gt;</span>
          <span className="preview-tag">Batu</span>
        </div>
        
        <div className="home-actions">
          <button className="btn-primary" onClick={() => navigate('/play')}>
            <Swords size={20} />
            <span>Mulai Pertarungan</span>
          </button>
          
          <button className="btn-secondary" onClick={() => navigate('/history')}>
            <History size={18} />
            <span>Lihat Riwayat</span>
          </button>
        </div>
      </div>
    </div>
  );
}
