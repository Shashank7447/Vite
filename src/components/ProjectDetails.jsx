import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative w-[88%] max-w-xl border shadow-sm rounded-xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-4 right-4 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <img src={image} alt={title} className="w-full rounded-t-xl" />

        {/* Content */}
        <div className="p-4">
          <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-sm font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 text-sm font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-3">
            {/* Tags */}
            <div className="flex gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-7 hover-animation"
                />
              ))}
            </div>

            {/* Project Link */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
