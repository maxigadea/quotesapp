export default {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Asegura la carga de jest-dom
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
  };
  