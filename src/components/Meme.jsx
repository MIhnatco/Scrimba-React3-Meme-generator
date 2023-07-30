import React from "react"

import memesData from '../memesData'

   /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */


function Meme(){

    function getImage(){
        let url = memesData.data.memes[Math.floor( Math.random() * memesData.data.memes.length )].url;

        console.log(url)

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

                <button className="form--button" onClick={getImage}>Get a new meme image 🖼</button>
            </div>
        </main>

    )
}


export default Meme