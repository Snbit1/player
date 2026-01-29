import { createMachine } from "xstate";

export const videoPlayerMachine = createMachine({
  id: "videoPlayer",
  initial: "closed",
  states: {
    closed: {
      on: { OPEN: "open" },
    },
    open: {
      initial: "playing",
      states: {
        playing: {
          on: { PAUSE: "paused" },
        },
        paused: {
          on: { PLAY: "playing" },
        },
      },
      on: {
        CLOSE: "closed",
        MINIMIZE: "minimized",
      },
    },
    minimized: {
      initial: "playing",
      states: {
        playing: {
          on: { PAUSE: "paused" },
        },
        paused: {
          on: { PLAY: "playing" },
        },
      },
      on: {
        RESTORE: "open",
        CLOSE: "closed",
      },
    },
  },
});
