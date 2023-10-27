import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    ".(scss|css|sass)$": "identity-obj-proxy",
  },
};

export default config;
