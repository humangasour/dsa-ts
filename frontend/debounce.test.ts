import debounce from "./debounce";

describe("debounce", () => {
    it("can be initiated", () => {
        const increment = debounce(() => {}, 50);
        expect(increment).toBeTruthy();
    });
});
