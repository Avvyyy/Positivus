// Component for working process section
import { useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import { SlMinus } from "react-icons/sl";

function WorkingProcess() {
  const workingProcessData = [
    {
      index: 1,
      heading: "Consultation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      index: 2,
      heading: "Research and Strategy Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      index: 3,
      heading: "Implementation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      index: 4,
      heading: "Monitoring and Optimisation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      index: 5,
      heading: "Reporting and Communication",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
    {
      index: 6,
      heading: "Continual Improvement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
    },
  ];

  const [isOpenIndex, setIsOpenIndex] = useState<number | null >(null);

  const toggleOpen = (index : number | null) => {
    setIsOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="space-y-6">
      {workingProcessData.map((data) => (
        <div key={data.index} className={`border border-black border-b-10 rounded-4xl md:p-8 p-4 flex flex-col gap-5 hover:border-b-12 transition ease-in-out delay-75 ${isOpenIndex === data.index ? "bg-primary" : " "}`} onClick={() => toggleOpen(data.index)}>
          <div className="cursor-pointer flex justify-between w-full">
            <h4 className="flex gap-5 items-center md:text-3xl text-xl font-medium">
              0{data.index} <span className="text-xl">{data.heading}</span>
            </h4>
            <button type="button" className='text-4xl bg-white rounded-full'>
              {isOpenIndex === data.index ? < SlMinus /> : <GoPlusCircle />}
            </button>
          </div>
          {isOpenIndex === data.index && (
            <>
              <hr className="my-2 border-2" />
              <p className="text-gray-700 text-lg">{data.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default WorkingProcess;
