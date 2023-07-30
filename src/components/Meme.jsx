import React from "react"


function Meme(){
    return(
        <main>
            <form className="form">
                <input  type="text" 
                        placeholder="Top text"
                        className="form--input"
                        />

                <input type="text"
                        className="form--input" 
                        placeholder="Bottom text"
                        />

                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>

    )
}


export default Meme