import React from "react"


//React component that represents meme generator
function Meme(){
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */



    //state variable holds the topText, bottomText and randomImage
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"   //default random meme image
    })

    //state variable stores an array of meme data fetched from memesData
    const [allMemeImages, setAllMemeImages] = React.useState()


    //selects a random meme image URL from 'allMemeImages' array
    function getMemeImage(){
        let url = allMemeImages[Math.floor( Math.random() * allMemeImages.length )].url;
        setMeme(prevMeme => ({        
                ...prevMeme, 
                randomImage: url
            }))
    }

    React.useEffect(() => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }

        getMemes()
    },[])

    console.log(allMemeImages)



    //top and bottom text 
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