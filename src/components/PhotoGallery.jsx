import { useEffect, useState } from "react";


export default function PhotoGallery() {
    const [media, setMedia] = useState();
//IGQWRNbm1Wc3BLOWY4VFFKOElUUWFEb3ZAvX3FiX0pRZA2RQRFR3WThsblZAfRjE0dmRGWW4xaDhxNENMNlZABMTZAlYUhuekpBZAF9NZAW8yX25rS2xUTk9qY2J0VEN6dEZAqQ1dPaktZAX1dQeTZARcVNmdEllQnNCdzhheDgZD
const API_SECRET_TOKEN_KEY = ""
const API_BASIC_DISPLAY_URL = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=${API_SECRET_TOKEN_KEY}`


    useEffect(() => {
      async function getMediaFromInstagram() {
        await fetch(API_BASIC_DISPLAY_URL).then(res => res.json()).then(data => {
          console.log(data)
          setMedia(data)
        }).catch(err => console.log(`${err} error fetching media from instagram`))
      }
      getMediaFromInstagram()
    }, [])
    return (
        <>
        {media && media.data.filter(data => data.caption).filter(data => data['media_type'] === 'IMAGE').map((media, index) => {
          if (index >= 20 ) return
          return (
            <img key={media.id} src={media.media_url} className="h-auto w-5/6 max-w-96 max-h-96 rounded-2xl md:w-full object-cover object-center"></img>
          )
        })}
        </>
    ) 
}