import { RxArrowTopRight } from "react-icons/rx";
import { HashLink } from "react-router-hash-link";

type servicesBlockProps = {
  label: string;
  image: string;
  link: string;
  boxStyling: string;
  textBg: string;
};

function ServicesBlock({
  label,
  image,
  link,
  boxStyling,
  textBg,
}: servicesBlockProps) {
  return (
    <div
      className={`${boxStyling} flex flex-col md:flex-row items-start gap-4 h-full`}
    >
      <div className="flex flex-col md:w-1/2  order-1 md:order-none justify-between md:h-full">
        <h3
          className={`bg-${textBg} md:text-2xl text-3xl font-semibold md:w-11/12 w-full rounded-xl p-3 h-max`}
        >
          {label}
        </h3>
        <HashLink
          smooth
          to={link}
          className="hidden md:flex items-center gap-2 text-xl w-max"
        >
          <RxArrowTopRight /> Learn More
        </HashLink>
      </div>

      <img
        src={image}
        alt={label}
        className="w-2/5 object-cover order-2 place-self-end-safe md:place-self-center"
      />

      <HashLink
        smooth
        to={link}
        className="flex md:hidden items-center gap-2 text-xl order-3"
      >
        <RxArrowTopRight /> Learn More
      </HashLink>
    </div>
  );
}

export default ServicesBlock;
