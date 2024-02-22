export default function SocialCard ({name, link, children}) {
    return (
        <>
             <figure className="w-full h-auto flex justify-center items-center" >
                <a target="_blank" href={link} className="flex flex-col flex-nowrap justify-center items-center">
                {children}
                <figcaption>
                    <h3 className="font-bold">{name}</h3>
                </figcaption>
                </a>
            </figure>
        </>
    )
}