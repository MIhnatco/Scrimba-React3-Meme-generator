import React from "react"

import memesData from '../memesData'

//React component that represents meme generator
function Meme(){

       /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */



    //state variable holds the topText, bottomText and randomImage
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"   //default random meme image
    })

    //state variable stores an array of meme data fetched from memesData
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    //selects a random meme image URL from 'allMemeImages' array
    function getMemeImage(){
        let url = allMemeImages.data.memes[Math.floor( Math.random() * allMemeImages.data.memes.length )].url;
        setMeme(prevMeme => ({        
                ...prevMeme, 
                randomImage: url
            }))
    }

    //
    function handleChange(e){
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [e.target.name]: e.target.value
            }
        })
    }


    return(
        <main>
            <div className="form">
                {/*Input field for entering the topText of the meme*/}
                <input  type="text" 
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}  
                        onChange={handleChange}                      />

                {/*Input field for entering the bottomText of the meme*/}
                <input type="text"
                        className="form--input" 
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                        />

                {/*button triggers the 'getMemeImage' function to fetch an image*/}
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                {/*the selected meme image is displayed here*/}
                <img src={meme.randomImage} alt="" className="meme--image"/>

                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
        </main>

    )
}


export default Meme