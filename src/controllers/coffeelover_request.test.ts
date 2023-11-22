import request from "supertest";
import { app } from "../app";

describe("Test the coffeelover endpoint request", () => {
  test("GET coffeelover endpoint should return correct response", async () => {
    const res = await request(app).get("/coffeelover");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("I love coffee!");
  });
});
