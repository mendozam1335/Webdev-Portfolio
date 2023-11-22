import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Who am i" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            culpa maxime hic, illum laudantium iusto exercitationem commodi
            doloribus, quasi magnam officia, nisi repellendus enim odit! Quo rem
            minus placeat consequatur.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
