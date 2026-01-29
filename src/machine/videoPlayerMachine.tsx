import { createMachine } from "xstate";

export const videoPlayerMachine = createMachine({
  id: "videoPlayer",
  initial: "idle",
  states: {
    idle: {
      on: {
        OPEN: "playing",
        OPEN_PLAY: "playing",
      },
    },
    playing: {
      on: {
        PAUSE: "paused",
        MINIMIZE: "minimizedPlaying",
        CLOSE: "idle",
      },
    },
    paused: {
      on: {
        PLAY: "playing",
        CLOSE: "idle",
        MINIMIZE: "minimizedPaused",
      },
    },
    minimizedPlaying: {
      on: {
        PAUSE: "minimizedPaused",
        RESTORE: "playing",
        CLOSE: "idle",
      },
    },
    minimizedPaused: {
      on: {
        PLAY: "minimizedPlaying",
        RESTORE: "paused",
        CLOSE: "idle",
      },
    },
  },
});
