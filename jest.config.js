module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["lib/**/*.js"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/utils/setupTests.js"],
};
