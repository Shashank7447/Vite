import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section
      id="work"
      className="w-full relative z-0 p-6 md:p-10"
    >
      <div className="relative z-10">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
