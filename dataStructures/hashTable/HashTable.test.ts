// test/HashTable.test.ts

import HashTable from "./HashTable";

describe("HashTable", () => {
  let table: HashTable;

  beforeEach(() => {
    table = new HashTable(10);
  });

  describe("set()", () => {
    it("should insert a key-value pair", () => {
      table.set("name", "Alice");
      expect(table.get("name")).toBe("Alice");
    });

    it("should overwrite value for an existing key", () => {
      table.set("name", "Alice");
      table.set("name", "Bob");
      expect(table.get("name")).toBe("Bob");
    });

    it("should handle different value types", () => {
      table.set("number", 42);
      table.set("bool", true);
      table.set("object", { id: 1 });

      expect(table.get("number")).toBe(42);
      expect(table.get("bool")).toBe(true);
      expect(table.get("object")).toEqual({ id: 1 });
    });
  });

  describe("get()", () => {
    it("should return undefined for missing keys", () => {
      expect(table.get("missing")).toBe(undefined);
    });

    it("should retrieve correct value after multiple insertions", () => {
      table.set("x", 1);
      table.set("y", 2);
      expect(table.get("x")).toBe(1);
      expect(table.get("y")).toBe(2);
    });

    it("should not return a value from a colliding bucket unless key matches", () => {
      // Force a collision by inserting multiple keys that map to same index
      table.set("abc", "first");
      table.set("acb", "second"); // Assume these hash to same index

      expect(table.get("abc")).toBe("first");
      expect(table.get("acb")).toBe("second");
    });
  });

  describe("keys()", () => {
    it("should return all keys in the hash table", () => {
      table.set("a", 1);
      table.set("b", 2);
      table.set("c", 3);

      const keys = table.keys();
      expect(keys).toEqual(expect.arrayContaining(["a", "b", "c"]));
    });

    it("should return updated keys after overwriting", () => {
      table.set("k", "v1");
      table.set("k", "v2");

      const keys = table.keys();
      expect(keys).toEqual(["k"]);
    });

    it("should return an empty array if no keys exist", () => {
      expect(table.keys()).toEqual([]);
    });
  });

  describe("integration", () => {
    it("should support full set/get/keys workflow", () => {
      table.set("x", 10);
      table.set("y", 20);
      table.set("x", 15); // overwrite

      expect(table.get("x")).toBe(15);
      expect(table.get("y")).toBe(20);
      expect(table.keys()).toEqual(expect.arrayContaining(["x", "y"]));
    });
  });
});
