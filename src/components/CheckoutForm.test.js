import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText("First Name:")
    userEvent.type(firstName, "David")

    const lastName = screen.getByLabelText("Last Name:")
    userEvent.type(lastName, "Barr")

    const address = screen.getByLabelText("Address:")
    userEvent.type(address, "123 Main St")

    const city = screen.getByLabelText("City:")
    userEvent.type(city, "Jacksonville")

    const state = screen.getByLabelText("State:")
    userEvent.type(state, "FL")

    // const zip = screen.getByLabelText("Zip:")
    // userEvent.type(zip, "55555")

    const button = screen.getByRole("button")
    userEvent.click(button)

    //Assert
    const output = screen.getByText(/You have ordered some plants!/i)
    expect(output).toHaveTextContent("You have ordered some plants!")
});
