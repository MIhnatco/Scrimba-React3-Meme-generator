import React from "react"

import memesData from '../memesData'
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */


function Meme(){

    const [memeImage, setMemeImage] = React.useState("")



    function getMemeImage(){
        let url = memesData.data.memes[Math.floor( Math.random() * memesData.data.memes.length )].url;

        setMemeImage(url)

    }


    return(
        <main>
            <div className="form">
                <input  type="text" 
                        placeholder="Top text"
                        className="form--input"
                        />

                <input type="text"
                        className="form--input" 
                        placeholder="Bottom text"
                        />

                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>

            <img src={memeImage} alt="" className="meme--image"/>
        </main>

    )
}


export default Meme