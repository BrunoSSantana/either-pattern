import { describe, expect, it } from "vitest";
import { fromPromise } from "./utils";

describe("Utils", () => {
  describe("fromPromise", () => {
    it("should handle resolved promises", async () => {
      const promise = Promise.resolve(42);
      const result = await fromPromise(promise);

      expect(result.isRight()).toBe(true);
      expect(result.unwrap()).toBe(42);
    });

    it("should handle rejected promises with Error objects", async () => {
      const error = new Error("Test error");
      const promise = Promise.reject(error);
      const result = await fromPromise(promise);

      expect(result.isLeft()).toBe(true);
      expect(result.unwrapError()).toBe(error);
    });

    it("should convert non-Error rejections to Error objects", async () => {
      const promise = Promise.reject("string error");
      const result = await fromPromise(promise);

      expect(result.isLeft()).toBe(true);
      expect(result.unwrapError()).toBeInstanceOf(Error);
      expect(result.unwrapError().message).toBe("string error");
    });

    it("should handle async errors", async () => {
      const promise = Promise.resolve().then(() => {
        throw new Error("async error");
      });
      const result = await fromPromise(promise);

      expect(result.isLeft()).toBe(true);
      expect(result.unwrapError()).toBeInstanceOf(Error);
      expect(result.unwrapError().message).toBe("async error");
    });
  });
});
