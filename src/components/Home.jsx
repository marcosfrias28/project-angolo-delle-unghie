import Logo from "../assets/logo.js";
import backgroundImage from "../assets/bg-nail2.png";

function Home() {
    return (
    <section style={{clipPath: 'polygon(50% 100%, 100% 60%, 100% 0, 0 0, 0 60%)', backgroundImage: `url(${backgroundImage})`}} id="Inizio" className="bg-cover bg-no-repeat bg-center Home w-full h-screen xl:max-h-svh">
      <figure className="logo-figure w-full h-full flex justify-center items-center" >
        <Logo className=""/>
      </figure>
    </section>
  );
}

export default Home;
