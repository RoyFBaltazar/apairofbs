import logo from '../images/apair.jpg'

const Podcast =()=>{
    return(
        <div>
            <h1>Listen A Pair Of B's</h1>
    
      <div className='imgLogo'><img src={logo}/></div> 
      <h2>Latest Episode:</h2> 
      < div className='player'><iframe 
      style={ {style:"border-radius:50px",
      width:"50%" ,
      height:"152",
      frameBorder:"0"}}
      
      src="https://open.spotify.com/embed/show/1528ERPEo5YGpfTrMbMedr?utm_source=generator"
      allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;="
      
      
      
      ></iframe></div>

        </div>
    )
}

export default Podcast;
