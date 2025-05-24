import './Confetti.css'; 

export default function Confetti({ show }) {
  if (!show) return null;

  return (
    <div className="confetti-container">
      {[...Array(30)].map((_, i) => {
        const left = Math.random() * 100;
        const delay = (Math.random() * 3).toFixed(2) + 's';
        const duration = (2 + Math.random() * 2).toFixed(2) + 's';

        return (
          <div
            key={i}
            className={`confetti confetti-${i % 5}`}
            style={{
              left: `${left}vw`,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        );
      })}
    </div>
  );
}
