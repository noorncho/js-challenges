import * as challenge from "./js11";

test("greet() test", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
});

test("sumTwoNumbers() test", () => {
    expect(challenge.sumTwoNumbers(23, 17)).toBe(40);
    expect(challenge.sumTwoNumbers(-15, 5)).toBe(-10);
})

describe("checkLarger() tests", () =>{
    test("Catch numbers that are equal", () => {
        expect(challenge.checkLarger(30, 30)).toBe("Both numbers are equal")
    });
    test("Return correct largest", () => {
        expect(challenge.checkLarger(100, 34)).toBe("100 is bigger than 34");
        expect(challenge.checkLarger(3456, 3457)).toBe("3457 is bigger than 3456");
    })
});

describe("fileterByLength() test", () =>{
    const longNames = ["Matthew", "Rebbeca", "Jessica"];
    const shortNames = ["Peter", "Tony", "Fury", "Steve"];
    const mixedNames = ["Luke", "Matthew", "Jessica", "Fury"]

    test("Return list of only short name", () => {
        expect(challenge.filterByLength(shortNames)).toStrictEqual(shortNames);
    })
    test("Remove long names", () =>{
        expect(challenge.filterByLength(longNames)).toBe("Sorry, no valid names supplied");
    })
    test("Filter mixed array", () => {
        expect(challenge.filterByLength(mixedNames)).toStrictEqual(["Luke", "Fury"]);
    })
})

test("reduceNumbers() test", () => {
    expect(challenge.reduceNumbers([10, 20, 30], 40)).toMatchObject([0, 0, 0]);
    expect(challenge.reduceNumbers([287, 267, 277], 7)).toMatchObject([255, 255, 255]);
    expect(challenge.reduceNumbers([50, 100, 200], 10)).toMatchObject([40, 90, 190]);
})