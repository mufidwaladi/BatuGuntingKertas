import { useNavigate } from 'react-router-dom';
import {
  HeroEmblemIcon,
  BatuIcon,
  GuntingIcon,
  KertasIcon,
  HistoryScrollIcon,
} from '../components/CartoonIcons';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <div className="hero-card">
        <div className="hero-emblem-wrap">
          <HeroEmblemIcon size={88} />
        </div>

        <h1 className="home-title">Batu Gunting Kertas</h1>
        <p className="home-subtitle">
          Duel cepat melawan komputer. Pilih jagoanmu dan kumpulkan poin kemenangan sebanyak mungkin.
        </p>

        <div className="weapon-preview-row" aria-label="Aturan menang">
          <span className="preview-tag">
            <BatuIcon size={20} />
            <span>Batu</span>
          </span>
          <span className="preview-arrow" aria-hidden="true">&gt;</span>
          <span className="preview-tag">
            <GuntingIcon size={20} />
            <span>Gunting</span>
          </span>
          <span className="preview-arrow" aria-hidden="true">&gt;</span>
          <span className="preview-tag">
            <KertasIcon size={20} />
            <span>Kertas</span>
          </span>
          <span className="preview-arrow" aria-hidden="true">&gt;</span>
          <span className="preview-tag">
            <BatuIcon size={20} />
            <span>Batu</span>
          </span>
        </div>

        <div className="home-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate('/play')}
          >
            Main Sekarang
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate('/history')}
          >
            <HistoryScrollIcon size={18} />
            <span>Lihat Riwayat</span>
          </button>
        </div>
      </div>
    </main>
  );
}
