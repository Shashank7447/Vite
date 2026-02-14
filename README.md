🚀 Personal Portfolio Website

This project is a modern developer portfolio website built with React, TailwindCSS, and modern UI/animation libraries. It highlights personal skills, projects, work experience, and allows visitors to get in touch via an integrated contact form.



✨ Features

Responsive Design – Works seamlessly on desktop, tablet, and mobile.
Navigation Bar – Smooth scroll and mobile menu with animations.
Hero Section – 3D Astronaut model using @react-three/fiber and parallax background.
About Section – Interactive card layout showcasing coding principles, tools, and tech stack.
Projects Section – Displays selected projects with hover preview effects.
Experience Section – Timeline component to showcase career/work history.
Testimonials Section – Auto-scrolling client reviews using a marquee effect.
Contact Section – EmailJS integration with real-time alerts for success/failure.
Footer – Social links, Terms & Conditions, and Copyright.
Animations – Smooth transitions, framer-motion, parallax, and hover effects.



🛠️ Tech Stack

Frontend: React, Vite, TailwindCSS
Animations: Framer Motion, Motion, Parallax, @react-three/fiber, drei
3D Models: React Three Fiber (Astronaut)
Email Integration: EmailJS
Utilities: Tailwind Merge, Responsive Hooks



📂 Project Structure

src/
 ├── components/      # Reusable UI components (Cards, Buttons, HeroText, etc.)
 ├── sections/        # Main sections (Hero, About, Projects, Experiences, etc.)
 ├── constants/       # Static data (socials, projects, reviews, experiences)
 ├── App.jsx          # Main app layout
 ├── index.css        # Tailwind theme and custom styles
 └── main.jsx         # App entry point



⚡ Getting Started

Install dependencies:
npm install

Run the development server:
npm run dev

Build for production:
npm run build



🔑 Setup EmailJS

Create an account at EmailJS.
Get your Service ID, Template ID, and Public Key.
Replace them in Contact.jsx:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {...}, "YOUR_PUBLIC_KEY");



📸 Preview

🌌 3D Hero Section with Astronaut
📖 About section with coding principles
💻 Project previews with hover effects
⏳ Timeline for work experiences
⭐ Client testimonials with marquee
📬 Contact form with live EmailJS integration
