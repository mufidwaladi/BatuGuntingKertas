import PropTypes from 'prop-types';

export function BatuIcon({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Bayangan dasar batu kartun */}
      <path
        d="M15 49C10 47 8 39 10 31L14 19C16 14 23 11 31 11L44 13C51 15 56 22 55 31L53 43C51 50 43 53 33 53C26 53 19 51 15 49Z"
        fill="#94A3B8"
        stroke="#1E1B18"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Sisi atas batu lebih terang (cel-shading kartun) */}
      <path
        d="M14 29L17 19C19 15 25 13 32 13L42 15C48 16 51 22 50 28L41 33L26 32L14 29Z"
        fill="#CBD5E1"
      />
      {/* Garis retakan & kilau kartun */}
      <path
        d="M23 20C25 18 29 17 33 17"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 33L42 40L39 45"
        stroke="#1E1B18"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 37L25 41"
        stroke="#1E1B18"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

BatuIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export function GuntingIcon({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Bilah gunting */}
      <path
        d="M27 33L52 14C54 17 53 21 49 24L32 37Z"
        fill="#E2E8F0"
        stroke="#1E1B18"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M27 31L52 50C54 47 53 43 49 40L32 27Z"
        fill="#CBD5E1"
        stroke="#1E1B18"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Baut tengah */}
      <circle cx="32" cy="32" r="3.5" fill="#FFD23F" stroke="#1E1B18" strokeWidth="2.5" />
      {/* Gagang atas */}
      <circle cx="17" cy="20" r="8.5" fill="#FF6B6B" stroke="#1E1B18" strokeWidth="3.5" />
      <circle cx="17" cy="20" r="3.5" fill="#FFF9EC" stroke="#1E1B18" strokeWidth="2.5" />
      {/* Gagang bawah */}
      <circle cx="17" cy="44" r="8.5" fill="#FF6B6B" stroke="#1E1B18" strokeWidth="3.5" />
      <circle cx="17" cy="44" r="3.5" fill="#FFF9EC" stroke="#1E1B18" strokeWidth="2.5" />
    </svg>
  );
}

GuntingIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export function KertasIcon({ size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Lembar kertas sedikit miring bergaya komik */}
      <path
        d="M16 12H39L50 23V52C50 53.5 48.8 55 47 55H16C14.3 55 13 53.7 13 52V15C13 13.3 14.3 12 16 12Z"
        fill="#FFFFFF"
        stroke="#1E1B18"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Lipatan pojok kertas */}
      <path
        d="M39 12V23H50L39 12Z"
        fill="#FFD23F"
        stroke="#1E1B18"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      {/* Garis tulisan komik */}
      <path
        d="M21 29H35M21 37H42M21 45H38"
        stroke="#1E1B18"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

KertasIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export function HeroEmblemIcon({ size = 84, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Latar ledakan komik (comic burst) */}
      <path
        d="M44 6L52 16L65 11L66 24L79 26L73 38L83 47L72 55L76 68L63 69L59 81L47 75L37 83L32 71L19 74L21 61L9 57L16 46L9 34L22 30L20 17L33 19L44 6Z"
        fill="#FFD23F"
        stroke="#1E1B18"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Mini ikon Batu, Gunting, Kertas di dalam emblem */}
      <circle cx="30" cy="48" r="10" fill="#CBD5E1" stroke="#1E1B18" strokeWidth="3" />
      <rect x="37" y="24" width="16" height="22" rx="3" fill="#FFFFFF" stroke="#1E1B18" strokeWidth="3" />
      <circle cx="58" cy="52" r="9" fill="#FF6B6B" stroke="#1E1B18" strokeWidth="3" />
      <path d="M54 48L63 40M54 56L63 48" stroke="#1E1B18" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

HeroEmblemIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export function PlayerAvatarIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="11" r="6" fill="#7DD3FC" stroke="#1E1B18" strokeWidth="2.6" />
      <path
        d="M6 27C6 21.5 10.5 18 16 18C21.5 18 26 21.5 26 27"
        fill="#7DD3FC"
        stroke="#1E1B18"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

PlayerAvatarIcon.propTypes = {
  size: PropTypes.number,
};

export function BotAvatarIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4V8" stroke="#1E1B18" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="16" cy="4" r="2" fill="#FFD23F" stroke="#1E1B18" strokeWidth="2" />
      <rect x="6" y="8" width="20" height="17" rx="4" fill="#FCA5A5" stroke="#1E1B18" strokeWidth="2.6" />
      <circle cx="12" cy="15" r="2" fill="#1E1B18" />
      <circle cx="20" cy="15" r="2" fill="#1E1B18" />
      <path d="M12 20H20" stroke="#1E1B18" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

BotAvatarIcon.propTypes = {
  size: PropTypes.number,
};

export function BackArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 12H6M12 6L6 12L12 18"
        stroke="#1E1B18"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

BackArrowIcon.propTypes = {
  size: PropTypes.number,
};

export function ResetIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 12A8 8 0 1 1 6.5 17.8M4 7V12H9"
        stroke="#1E1B18"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ResetIcon.propTypes = {
  size: PropTypes.number,
};

export function HistoryScrollIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#FFF9EC" stroke="#1E1B18" strokeWidth="2.6" />
      <path d="M8 9H16M8 13H16M8 17H12" stroke="#1E1B18" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

HistoryScrollIcon.propTypes = {
  size: PropTypes.number,
};

export function TrashIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7H20M9 4H15M7 7L8 20H16L17 7"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

TrashIcon.propTypes = {
  size: PropTypes.number,
};
