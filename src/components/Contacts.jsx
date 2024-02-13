import Logo from "../assets/logo.js";
import WhatsappIcon from "../assets/WhatsappIcon.js";
import FacebookIcon from "../assets/facebook.js";
import InstagramIcon from "../assets/instagram.js";
import SocialCard from "./Social Network/SocialCard.jsx";

function Contacts() {
    return (
        <section id="Contattami" className="bg-cover bg-no-repeat bg-center Home w-full h-screen xl:max-h-svh grid grid-cols-2 place-content-center place-items-center">
        <section className="w-3/4 h-full xl:max-h-svh flex flex-col place-self-end">
            <SocialCard name="Instagram" link="https://www.instagram.com/angolodelleunghie_/" children={<InstagramIcon className="" />} />
            <SocialCard name="Facebook" link="" children={<FacebookIcon className="" />} />
            <SocialCard name="Whatsapp" link="" children={<WhatsappIcon className="" />} />
        </section>
        <section>
             <Logo className=""/>
        </section>
      </section>
    )
}

export default Contacts;