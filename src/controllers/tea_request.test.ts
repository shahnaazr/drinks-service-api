import request from "supertest";
import { app } from "../app";

describe("Test tea endpoint request", () => {
  test("GET tea endpoint without query parameter should return the correct response", async () => {
    const res = await request(app).get("/tea");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Tea", name: "Strong" });
  });
  test("GET tea endpoint with query parameter, Light should return the correct json response", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Light" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Tea", name: "Light" });
  });

  test("GET coffee endpoint without query parameter, Strong should return the correct json response", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Strong" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Tea", name: "Strong" });
  });
});
