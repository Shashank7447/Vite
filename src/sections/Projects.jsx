import { useState, useEffect, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import gsap from "gsap";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const imgRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 }); // current position
  const mouse = useRef({ x: 0, y: 0 }); // target mouse position
  const initialized = useRef(false); // track first appearance

  useEffect(() => {
    if (!imgRef.current) return;

    // Set initial position to center on first render of preview
    if (!initialized.current) {
      pos.current.x = window.innerWidth / 2 - imgRef.current.offsetWidth / 2;
      pos.current.y = window.innerHeight / 2 - imgRef.current.offsetHeight / 2;
      gsap.set(imgRef.current, {
        x: pos.current.x,
        y: pos.current.y,
      });
      initialized.current = true;
    }

    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      gsap.set(imgRef.current, {
        x: pos.current.x + 20,
        y: pos.current.y + 20,
      });

      requestAnimationFrame(tick);
    };
    tick();
  }, [preview]);

  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <img
          ref={imgRef}
          className="fixed top-0 left-0 z-50 object-cover rounded-xl shadow-2xl pointer-events-none 
               w-[25rem] h-[17rem]"
          src={preview}
          alt="preview"
        />
      )}
    </section>
  );
};

export default Projects;
