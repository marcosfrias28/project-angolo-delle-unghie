import nail1 from "../assets/nails-images/0.png"
import nail2 from "../assets/nails-images/1.png"
import nail3 from "../assets/nails-images/2.png"
import nail4 from "../assets/nails-images/3.png"
import nail5 from "../assets/nails-images/4.png"
import nail6 from "../assets/nails-images/5.png"
import nail7 from "../assets/nails-images/6.png"
import nail8 from "../assets/nails-images/7.png"
import nail9 from "../assets/nails-images/8.png"
import nail10 from "../assets/nails-images/9.png"
import nail11 from "../assets/nails-images/10.png"
import nail0 from "../assets/nails-images/11.png"

export default function PhotoGalleryProva() {

  const datos = [
    { id: 0, imagenUrl: nail0},
    { id: 1, imagenUrl: nail1},
    { id: 2, imagenUrl: nail2},
    { id: 3, imagenUrl: nail3},
    { id: 4, imagenUrl: nail4},
    { id: 5, imagenUrl: nail5},
    { id: 6, imagenUrl: nail6},
    { id: 7, imagenUrl: nail7},
    { id: 8, imagenUrl: nail8},
    { id: 9, imagenUrl: nail9},
    { id: 10, imagenUrl: nail10},
    { id: 11, imagenUrl: nail11},
  ];

    return (
      <>
      {datos && datos.map(media => (
        <img alt="Nails from Angolodelleunghie_ Instagram Profile" key={media.id} src={media.imagenUrl} className="h-auto w-5/6 max-w-96 max-h-96 rounded-2xl md:w-full object-cover object-center"></img>
          ))
        }
      </>

    ) 
}