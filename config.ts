export interface Config {
    [key: string]: {
      [key: string]: string
    }
  }
  export default {
    LOCK: {
      localhost: "0x0",
    },
  } as Config;