function GalleryList ({dogsArray}) {
    console.log(dogsArray);
    
    return(
        <div data-testid="galleryList" className="galleryList">
            <h2>Where my dogs at?</h2>
            {dogsArray.map(dog => (
                <div key={dog.id} >
                    <img className="dogCard" src = {dog.url} alt= 'This is a picture of a dog.'/>
                    <h3>{dog.title}</h3>
                </div>  
            ))}
        </div>
    )

}

export default GalleryList;