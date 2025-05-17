import { HashLink } from "react-router-hash-link";
import { RxArrowTopRight } from "react-icons/rx";
import React from "react";

function CaseStudies() {
const caseStudiesArray = [
    {
      text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
      link: "#case-studies",
    },
    {
      text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
      link: "#case-studies",
    },
    {
      text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
      link: "#case-studies",
    },
  ];

  return (
    <div className="bg-black rounded-3xl flex flex-col md:flex-row p-10 gap-10">
      {caseStudiesArray.map((caseStudy, index) => (
        <div
          key={caseStudy.link + index}
          className={`flex flex-col justify-between gap-5 text-lg md:pr-5 md:pb-0 pb-5 w-full h-full ${
            index !== caseStudiesArray.length - 1
              ? "md:border-r md:border-b-0 border-b border-white"
              : ""
          }`}
        >
          <p className="text-white">{caseStudy.text}</p>
          <HashLink
            smooth
            to={caseStudy.link}
            className="text-primary flex items-center"
          >
            Learn More <RxArrowTopRight />
          </HashLink>
        </div>
      ))}
    </div>
  );
}

export default CaseStudies;
