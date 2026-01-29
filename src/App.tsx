import { useMachine } from "@xstate/react";
import { videoPlayerMachine } from "./machine/videoPlayerMachine";
import Modal from "./components/Modal";
import Poster from "./components/Poster";

function App() {
  const [state, send] = useMachine(videoPlayerMachine);

  const isPlaying =
    state.matches("playing") || state.matches("minimizedPlaying");

  const minimized =
    state.matches("minimizedPlaying") || state.matches("minimizedPaused");

  return (
    <>
      {/* Постер/иконка видео */}
      {!state.matches("playing") &&
        !state.matches("paused") &&
        !state.matches("minimizedPlaying") &&
        !state.matches("minimizedPaused") && (
          <Poster
            onClick={() => {
              send({ type: "OPEN_PLAY" });
            }}
          />
        )}

      {/* Видео-плеер */}
      <Modal
        visible={
          state.matches("playing") ||
          state.matches("paused") ||
          state.matches("minimizedPlaying") ||
          state.matches("minimizedPaused")
        }
        minimized={minimized}
        isPlaying={isPlaying}
        onPause={() => send({ type: "PAUSE" })}
        onPlay={() => send({ type: "PLAY" })}
        onMinimize={() => send({ type: "MINIMIZE" })}
        onRestore={() => send({ type: "RESTORE" })}
        onClose={() => send({ type: "CLOSE" })}
      />
    </>
  );
}

export default App;
