import Logo from "../assets/logo.js";
import WhatsappIcon from "../assets/WhatsappIcon.js";
import FacebookIcon from "../assets/facebook.js";
import InstagramIcon from "../assets/instagram.js";
import SocialCard from "./Social Network/SocialCard.jsx";

function Contacts() {
    return (
        <section id="Contattami" className="bg-cover bg-no-repeat bg-center Home w-full h-screen xl:max-h-svh flex place-content-center place-items-center max-[360px]:flex sm: sm:flex-col sm:flex-wrap">
        <section className="w-3/4 h-screen z-10 flex flex-col flex-wrap place-content-center place-item-center">
            <SocialCard name="Instagram" link="https://www.instagram.com/angolodelleunghie_/" children={<InstagramIcon className="" />} />
            <SocialCard name="Facebook" link="" children={<FacebookIcon className="" />} />
            <SocialCard name="Whatsapp" link="" children={<WhatsappIcon className="" />} />
        </section>
        <section className="absolute h-auto w-96 opacity-10">
             <Logo width={"100%"} height={"100%"}/>
        </section>
      </section>
    )
}

export default Contacts;