import { useState } from "react";
import "../App.css";
import playIcon from "../assets/images/icon-play.svg";
import playIconHover from "../assets/images/icon-play-hover.svg";

function PlayIcon({ audioFile }) {
  const [icon, setIcon] = useState(playIcon);

  const playAudio = () => {
    new Audio(audioFile).play();
  };

  return (
    <div className="play-sound">
      <img
        onMouseEnter={(e) => setIcon(playIconHover)}
        onMouseLeave={(e) => setIcon(playIcon)}
        onClick={playAudio}
        className="play-icon"
        src={icon}
        alt="play icon"
      />
    </div>
  );
}

export default PlayIcon;
