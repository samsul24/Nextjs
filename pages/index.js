import Carosel from "../components/Carosel";
import About from "../components/Home/about";
import Contact from "../components/Home/contact";
import Project from "../components/Home/project";
import Service from "../components/Home/service";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="items-center max-sm">
      <Layout>
        <Carosel />
        <About />
        <Service />
        <Project />
        <Contact />
      </Layout>
    </div>
  );
}
