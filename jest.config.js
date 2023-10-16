module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ["server/lib/**/*.js", "server/features/**/*.js"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/utils/setupTests.js"],
};
