import App from "./"
import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

describe("Container", () => {
    test("Checa se o Provider funciona, deiponibilza a store", () => {
        const component = shallow(<App />)

        expect(component.find(<Provider></Provider>)).toBeTruthy()
    })
})