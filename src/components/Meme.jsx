import React from "react"

import memesData from '../memesData'

//React component that represents meme generator
function Meme(){
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
        setMeme(prevMeme => ({                ...prevMeme, 
                randomImage: url
            }))
    }


    return(
        <main>
            <div className="form">
                {/*Input field for entering the topText of the meme*/}
                <input  type="text" 
                        placeholder="Top text"
                        className="form--input"
                        />

                {/*Input field for entering the bottomText of the meme*/}
                <input type="text"
                        className="form--input" 
                        placeholder="Bottom text"
                        />

                {/*button triggers the 'getMemeImage' function to fetch an image*/}
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>

            {/*the selected meme image is displayed here*/}
            <img src={meme.randomImage} alt="" className="meme--image"/>
        </main>

    )
}


export default Meme