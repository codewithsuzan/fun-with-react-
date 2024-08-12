import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
      <Section opacity={opacityFirstSection} className="text-center">
  <h1 className="font-semibold font-serif text-2xl mb-4">
    Hello, I'm Sujan Timalsina
  </h1>
  <p className="text-gray-500 mb-4">Welcome to my beautiful portfolio</p>
  <p className="leading-9 mb-6 text-justify max-w-md mx-auto">
    I'm a frontend developer based in Kathmandu, Nepal, specializing in crafting beautiful and responsive web interfaces. I combine creativity and technical skill to build seamless digital experiences using modern web technologies like React.js.
  </p>
  <p className="animate-bounce mt-6">↓</p>
</Section>

        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>React JS</li>
          </ul>
          
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:+977 9749704282">+977 9749704282</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};