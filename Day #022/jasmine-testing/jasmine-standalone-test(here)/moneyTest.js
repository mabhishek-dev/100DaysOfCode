import formatCurrency from "./money.js";

//To create a test suite we use the keyword "describe" in Jasmine
//It takes 2 parameters: the first one is the name of the test suite and the second is a function which is where the tests are added with the keyword "it"
describe("test suite: format currency", () => {
  //This take 2 parameters, the first is the test name and agin followed by function
  it("coverts paisa to rupees", () => {
    //Rather using if,Jasmine give the expect method which is: expect(actual) -> {matches} -->here for:expect(formatCurrency(1060)) this is an object to which there are multiple methods such as toEqual()
    expect(formatCurrency(1060)).toEqual("10.60");
  });

  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("rounds up to the nearest paisa", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  it("rounds down to the nearest paisa", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});

// describe("test suite: Demo fail", () => {
//   it("demo to fail", () => {
//     expect(formatCurrency(100.1)).toEqual(100);
//   });
// });

//we can have describe inside another describe

describe("test suite: show describe under another describe", () => {
  describe("show describe 1", () => {
    it("demo to pass", () => {
      expect(formatCurrency(0)).toEqual("0.00");
    });
  });

  describe("show describe 2", () => {
    it("demo to pass", () => {
      expect(formatCurrency(0)).toEqual("0.00");
    });
  });
});
