import Container from "../Container";
import rightBar from "../../assets/rightbar.png";
import process1 from "../../assets/process1.svg";
import process2 from "../../assets/process2.svg";
import process3 from "../../assets/process3.svg";
import process4 from "../../assets/process4.svg";
import process5 from "../../assets/process5.svg";
import process6 from "../../assets/process6.svg";
import process7 from "../../assets/process7.svg";
import process8 from "../../assets/process8.svg";

const steps = [
  {
    number: 1,
    title: "Requirement Gathering",
    description:
      "Client vision is our top priority. We ask, listen, to understand what matters most.",
    icon: process1,
  },
  {
    number: 2,
    title: "Brainstorming",
    description:
      "Great ideas start here. Together we unleash possibilities and turn challenges into opportunities.",
    icon: process2,
  },
  {
    number: 3,
    title: "UX Strategy & Design",
    description:
      "We map the journey, avoid the potholes, anticipate the bumps to ensure no one gets lost.",
    icon: process3,
  },
  {
    number: 4,
    title: "UI Design",
    description:
      "Craft stunning, intuitive, and user-friendly interfaces that don’t just look good - they feel good.",
    icon: process4,
  },
  {
    number: 5,
    title: "Prototyping",
    description:
      "Bringing ideas to life with interactive prototypes to see the product before launch.",
    icon: process5,
  },
  {
    number: 6,
    title: "Development",
    description:
      "Our code warriors transform design into robust, scalable solutions that perform seamlessly.",
    icon: process6,
  },
  {
    number: 7,
    title: "Deployment",
    description:
      "Launch day is just the start. We ensure everything runs smoothly.",
    icon: process7,
  },
  {
    number: 8,
    title: "Maintenance",
    description:
      "Continuous improvement matters. We keep products updated, secure, and evolving with users’ needs.",
    icon:process8,
  },
];

const StepCard = ({ step }: { step: typeof steps[0] }) => (
  <div className="xl:w-[320px] col-span-4 p-5 relative">
    <div className="flex">
      <div className="text-[30px] font-semibold text-primary-dark2 pe-5">
        {step.number}
      </div>
      <div>
        <img src={step.icon} alt="Icon" />
        <h2 className="mt-3 text-[30px] font-semibold leading-10">
          {step.title}
        </h2>
        <p className="text-neutral-600 mt-3">{step.description}</p>
      </div>
    </div>
    <img
      src={rightBar}
      className="h-[290px] absolute right-0 bottom-0 top-0"
      alt="bar"
    />
  </div>
);

const Process = () => (
  <section className="mt-[200px]">
    <Container>
      <div className="flex flex-col xl:flex-row justify-center xl:items-end xl:justify-between">
        <div className="xl:max-w-[400px] p-5 relative bottom-16">
          <h5 className="text-[60px] font-semibold leading-none">Our</h5>
          <h2 className="text-[85px] font-semibold">Process</h2>
          <p className="text-neutral-600 text-2xl">
            Our process ensures your vision becomes a seamless reality.
          </p>
        </div>
        <div className="grid grid-cols-12 xl:grid-flow-col xl:auto-cols-max xl:me-24">
          {steps.slice(0, 3).map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 xl:grid-flow-col xl:auto-cols-max border-t-[1px] border-t-primary-dark2">
        {steps.slice(3).map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>
    </Container>
  </section>
);

export default Process;
