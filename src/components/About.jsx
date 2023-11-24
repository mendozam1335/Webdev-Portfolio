import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Who am i" />
          <div className="text-slate-600 mt-8 leading-loose">
            <p>
              Passionate Software Developer with a drive for learning all things
              tech. My journey through computer science has been fueled by the
              limitless possibilities of what can be achieved through software
              e.g. this portfolio website.
            </p>
            <p>
              I graduated from the University of Houston - Clear Lake in
              December 2021 with a B.S. in computer science.
            </p>
            <p className="capitalize font-semibold my-2">What i love</p>
            <p>
              I thrive on the challenges presented with building websites,
              mobile applications and developing video games. From fixing bugs,
              to creating 2D sprites, I am constantly exploring what I can do
              with software. I can think of no greater joy than seeing your
              ideas come to life through your own hard work.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
