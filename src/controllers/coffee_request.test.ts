import request from "supertest";
import { app } from "../app";

describe("Test coffee endpoint request", () => {
  test("GET coffee endpoint with query parameter, Latte should return the correct json response", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Latte" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Coffee", name: "Latte" });
  });

  test("GET coffee endpoint with query parameter, Cappacino should return the correct json response", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Cappacino" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Coffee", name: "Cappacino" });
  });

  test("GET coffee endpoint without query parameter should return the correct json response", async () => {
    const res = await request(app).get("/coffee");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ drinkType: "Coffee", name: "Latte" });
  });
});
