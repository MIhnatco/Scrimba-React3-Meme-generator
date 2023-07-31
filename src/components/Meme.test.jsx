import {render, screen} from '@testing-library/react'

import Meme from './Meme'


describe("Meme component", () => {
    test("all elements render", () => {
        render(<Meme />)

        const topInput = screen.getByPlaceholderText("Top text")
        const bottomInput = screen.getByPlaceholderText("Bottom text")
        const btnElement = screen.getByRole('button')

        //Assertions
        expect(topInput).toBeInTheDocument()
        expect(bottomInput).toBeInTheDocument()
        expect(btnElement).toBeInTheDocument()

        expect(topInput).toHaveClass("form--input")
        expect(bottomInput).toHaveClass("form--input")
        expect(btnElement).toHaveClass("form--button")
    })


   
})