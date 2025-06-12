// test/HashTable.test.ts

import { expect } from "chai";
import HashTable from "./HashTable";

describe("HashTable", () => {
    let table: HashTable;

    beforeEach(() => {
        table = new HashTable(10);
    });

    describe("set()", () => {
        it("should insert a key-value pair", () => {
            table.set("name", "Alice");
            expect(table.get("name")).to.equal("Alice");
        });

        it("should overwrite value for an existing key", () => {
            table.set("name", "Alice");
            table.set("name", "Bob");
            expect(table.get("name")).to.equal("Bob");
        });

        it("should handle different value types", () => {
            table.set("number", 42);
            table.set("bool", true);
            table.set("object", { id: 1 });

            expect(table.get("number")).to.equal(42);
            expect(table.get("bool")).to.equal(true);
            expect(table.get("object")).to.deep.equal({ id: 1 });
        });
    });

    describe("get()", () => {
        it("should return undefined for missing keys", () => {
            expect(table.get("missing")).to.equal(undefined);
        });

        it("should retrieve correct value after multiple insertions", () => {
            table.set("x", 1);
            table.set("y", 2);
            expect(table.get("x")).to.equal(1);
            expect(table.get("y")).to.equal(2);
        });

        it("should not return a value from a colliding bucket unless key matches", () => {
            // Force a collision by inserting multiple keys that map to same index
            table.set("abc", "first");
            table.set("acb", "second"); // Assume these hash to same index

            expect(table.get("abc")).to.equal("first");
            expect(table.get("acb")).to.equal("second");
        });
    });

    describe("keys()", () => {
        it("should return all keys in the hash table", () => {
            table.set("a", 1);
            table.set("b", 2);
            table.set("c", 3);

            const keys = table.keys();
            expect(keys).to.have.members(["a", "b", "c"]);
        });

        it("should return updated keys after overwriting", () => {
            table.set("k", "v1");
            table.set("k", "v2");

            const keys = table.keys();
            expect(keys).to.deep.equal(["k"]);
        });

        it("should return an empty array if no keys exist", () => {
            expect(table.keys()).to.deep.equal([]);
        });
    });

    describe("integration", () => {
        it("should support full set/get/keys workflow", () => {
            table.set("x", 10);
            table.set("y", 20);
            table.set("x", 15); // overwrite

            expect(table.get("x")).to.equal(15);
            expect(table.get("y")).to.equal(20);
            expect(table.keys()).to.have.members(["x", "y"]);
        });
    });
});
