// Reusable blocks for each of the services
import { RxArrowTopRight } from "react-icons/rx"
import { HashLink } from 'react-router-hash-link';


type servicesBlockProps = {
    label: string,
    image: string,
    link: string, 
    boxStyling: string,
    textBg: string
}

function ServicesBlock({label, image, link, boxStyling, textBg } : servicesBlockProps)  {
    return (
        <div className={`${boxStyling}  `}>
            <div className="flex flex-col justify-between">
            <h3 className={`bg-${textBg} h3`}>{ label }</h3>
            <HashLink smooth to={link} className="flex items-center gap-2 text-xl">< RxArrowTopRight /> Learn More</HashLink>
            </div>

            <img src={image} alt={label} className="h-5/12"/>
        </div>
    )
}



export default ServicesBlock;