import PhotoGalleryProva from "./PhotoGallerycopy.jsx";

function Portfolio() {

  return (
  <>
    <section
      id="Portfolio"
      style={{backgroundColor:'#f7f7f7'}}
      className="text-center w-full bg-white"
    >
      <h1 className="text-center pt-20 font-black text-black text-2xl">I miei lavori</h1>
        <section className="flex place-content-center "> 
          <figure className="flex flex-wrap place-content-center gap-1 my-20 max-w-7xl">
              <PhotoGalleryProva />
          </figure>
        </section>
    </section>
  </>
    
  );
}

export default Portfolio;
