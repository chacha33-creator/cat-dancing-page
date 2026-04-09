import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat({ isPlaying, danceStyle }) {
  const animationClass = isPlaying ? `dance-${danceStyle}` : 'dance-idle';

  return (
    <div className="dancing-cat-wrapper">
      <div className={`dancing-cat ${animationClass}`}>
        <img src={catSvg} alt="춤추는 고양이" className="cat-image" />
      </div>
      <div className="stage-shadow" />
      <div className="sparkles">
        <span className="sparkle s1">✨</span>
        <span className="sparkle s2">⭐</span>
        <span className="sparkle s3">✨</span>
        <span className="sparkle s4">💫</span>
        <span className="sparkle s5">⭐</span>
      </div>
    </div>
  );
}

export default DancingCat;
