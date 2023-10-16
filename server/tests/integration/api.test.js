const express = require("express");
const request = require("supertest");

const apiRoutes = require("../../features/api/routes");

const app = express();
app.use("/api", apiRoutes);

describe("testing api routes", () => {
  test("GET /api - success", async () => {
    const { body } = await request(app).get("/api");
    const { quotes, timestamp } = body;

    expect(quotes).toBeDefined();
    expect(quotes instanceof Array).toBe(true);
    expect(quotes.length).toBe(1);
    quotes.forEach((q) => {
      expect(typeof q).toBe("string");
    });

    expect(body).toEqual({
      timestamp, // always new date
      status: 200,
      quotes, // quotes are always random
      length: 1,
      path: "/api",
    });
  });

  test("GET /api?qt=10 - success", async () => {
    const { body } = await request(app).get("/api?qt=10");
    const { quotes, timestamp } = body;

    expect(quotes).toBeDefined();
    expect(quotes instanceof Array).toBe(true);
    expect(quotes.length).toBe(10);
    quotes.forEach((q) => {
      expect(typeof q).toBe("string");
    });

    expect(body).toEqual({
      timestamp, // always new date
      status: 200,
      quotes, // quotes are always random
      length: 10,
      path: "/api?qt=10",
    });
  });

  test("GET /api/invalid - error", async () => {
    const { body } = await request(app).get("/api/invalid");
    const { timestamp } = body;

    expect(body).toEqual({
      timestamp, // always new date
      status: 404,
      error: "Page not found",
      path: "/api/invalid",
    });
  });
});
