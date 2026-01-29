import React from "react";
import ReactPlayer from "react-player";

type ModalProps = {
  visible: boolean;
  minimized: boolean;
  isPlaying: boolean;
  onPause: () => void;
  onPlay: () => void;
  onMinimize: () => void;
  onRestore: () => void;
  onClose: () => void;
};

const VIDEO_URL =
  "https://cdn.flowplayer.com/d9cd469f-14fc-4b7b-a7f6-ccbfa755dcb8/hls/383f752a-cbd1-4691-a73f-a4e583391b3d/playlist.m3u8";

const Modal: React.FC<ModalProps> = ({
  visible,
  minimized,
  isPlaying,
  onPause,
  onPlay,
  onMinimize,
  onRestore,
  onClose,
}) => {
  if (!visible) return null;

  const handleClose = () => {
    onPause();
    onClose();
  };

  const playerStyle: React.CSSProperties = minimized
    ? {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 320,
        height: 180,
        zIndex: 9999,
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        borderRadius: 12,
        overflow: "hidden",
        background: "#000",
      }
    : {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 900,
        height: 500,
        zIndex: 9999,
        boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        borderRadius: 12,
        overflow: "hidden",
        background: "#000",
      };

  const controlsStyle: React.CSSProperties = {
    position: "absolute",
    bottom: 12,
    right: 12,
    display: "flex",
    gap: 8,
  };

  const closeStyle: React.CSSProperties = {
    position: "absolute",
    top: 8,
    right: 8,
    background: "rgba(0,0,0,0.6)",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: 4,
    padding: "2px 6px",
    fontSize: 16,
  };

  return (
    <div style={playerStyle}>
      <ReactPlayer
        src={VIDEO_URL}
        playing={isPlaying}
        controls={false}
        muted={true}
        width="100%"
        height="100%"
        config={{
          hls: {
            autoStartLoad: true,
            startPosition: 0,
            maxBufferLength: 30,
            lowLatencyMode: true,
          },
        }}
      />
      <div style={controlsStyle}>
        <button onClick={isPlaying ? onPause : onPlay}>
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        {minimized ? (
          <button onClick={onRestore}>⬆️</button>
        ) : (
          <button onClick={onMinimize}>⬇️</button>
        )}
      </div>
      <button onClick={handleClose} style={closeStyle}>
        ✕
      </button>
    </div>
  );
};

export default Modal;
