import { describe, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App  from './App'

/**
* @vitest-environment jsdom
*/


describe ("App", () => {
    test("should render the correct elements", () => {
        render (<App/>)
        expect (screen.getByPlaceholderText("Escribe tu nombre")).toBeInTheDocument();
        expect (screen.getByText("Hola")).toBeInTheDocument();
    } );

    test ("should render the corret name when input is filled", () => {
        render (<App/>)
        const InputElement = screen.queryByPlaceholderText("Escribe tu nombre")
        expect (screen.queryByPlaceholderText("Escribe tu nombre"));
        userEvent.type(InputElement, "Antonio")
        waitFor(() => screen.queryByText("Hola Antonio"))
    }) 

   test ("should render the correct heading", () => {
    render (<App/>)
    expect(screen.queryByRole("heading"))
   })
})