import {screen, render} from "@testing-library/react"
import Header from './Header'


describe("Header component test", () => {
    
    test("all elements renders", () => {
        render(<Header />)
    
            //headings element are present
        let headingElement = screen.getByRole("heading", {
            level: 2
        })
        let projectElement = screen.getByRole("heading", {
            level: 4
        })
    
        //header image
        let imageElement = screen.getByAltText("Troll")
        
        //Assertion
        expect(headingElement).toBeInTheDocument()
        expect(projectElement).toBeInTheDocument()
        expect(imageElement).toBeInTheDocument()   
    
    })

    test('all elements have className', () => {
       render(<Header />)

        let headingElement = screen.getByRole("heading", {
            level: 2
        })
        let projectElement = screen.getByRole("heading", {
            level: 4
        })
        let imageElement = screen.getByAltText("Troll")


        //Assertion
     
        expect(headingElement).toHaveClass("header--title")
        expect(projectElement).toHaveClass("header--project")
        expect(imageElement).toHaveClass("header--image")
    })

})