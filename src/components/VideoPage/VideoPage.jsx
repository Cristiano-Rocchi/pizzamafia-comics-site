import videoFinale from "../../assets/vid/video-finale.mp4";
import "./VideoPage.css";

const VideoPage = () => {
  return (
    <div className="video-page-container">
      <div className="video-wrapper">
        <video className="video-player" src={videoFinale} controls></video>
      </div>
      <p className="credit-text">Finale di Viaggio Interstelare</p>
      <p className="disclaimer-text">
        ⚠️ Attenzione: contiene immagini sensibili
      </p>
    </div>
  );
};

export default VideoPage;
