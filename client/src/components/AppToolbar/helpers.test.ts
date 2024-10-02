import { describe, it, expect } from "vitest";

// ===== Helpers ===== //
import { getFirstCharacterInWord, generateAvatarName } from "./helpers";

describe("helpers", () => {
  describe("getFirstCharacterInWord", () => {
    it("successfully gets first character of word", () => {
      expect(getFirstCharacterInWord("John")).toBe("J");
    });
  });

  describe("generateAvatarName", () => {
    it("successfully generates avatar name", () => {
      expect(generateAvatarName("John", "Doe")).toBe("JD");
    });
  });
});
