// Teams section cards
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import teamImage from "../assets/teamImage.png";

function Team() {
  const teamData = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: teamImage,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: teamImage,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: teamImage,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: teamImage,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: teamImage,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
    {
      name: "John Smith",
      role: "CEO & Founder",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      img: teamImage,
      link: "https://www.linkedin.com/in/favour-uzochukwu/",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {teamData.map((data, index) => (
        <div
          key={index}
          className="border border-black border-b-10 rounded-3xl px-6 py-2 hover:bg-primary hover:border-b-12 transition ease-in-out delay-75"
        >
          <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full place-self-end-safe">
            <Link
              to={data.link}
              className="text-primary text-2xl rounded-full "
            >
              <FaLinkedinIn />
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-end gap-5">
              <img src={data.img} alt={data.name} className="h-20 w-20"/>
              <div className="fex flex-col">
                <h4 className="text-xl font-bold ">{data.name}</h4>
                <p className="text-sm">{data.role} </p>
              </div>
            </div>
            <hr className="border w-full "/>
            <p className="text-lg">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
