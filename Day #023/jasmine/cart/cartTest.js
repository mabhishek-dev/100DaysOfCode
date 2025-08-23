import { cart, addToCart, loadFromStorage } from "./cart.js";

describe("test suite: addToCart", () => {
  it("adds a new product to the cart", () => {
    spyOn(localStorage, "setItem"); // order matters hence first we mock the setItem then the getItem

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    }); //Here we mock using "spyOn" where it takes the 2 parameters, first is the object and the second is the method corresponding to that object, so the spyOn gives us an object which has method called "and" which is also is another object and this has a method called "callFake" and to which a callback function returning an empty array, here we return it as string becuase of localStorage.

    loadFromStorage(); // we reload the cart after mocking else the old cart details remains and because we are mocking, we dont want it to actually reset the localStorage

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1); // this will fail as some items maybe present in localStorage so we can use mock feature in Jasmine.

    //spyOn records everytime a method is used,lets see:
    expect(localStorage.setItem).toHaveBeenCalledTimes(1); //This only works here due to spyOn and its records and it has been called 1 times only so it passes here.

    //The test passes only if every expectation is passed else the test fails.

    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
  });
});
