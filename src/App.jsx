import LavaBlobs from "./components/LavaBlobs";
import { MenuDesk } from "./components/MenuDesk";
import { MenuRes } from "./components/MenuRes";
import { AboutMe } from "./containers/AboutMe";
import { Education } from "./containers/Education";
import { Experience } from "./containers/Experience";
import { Footer } from "./containers/Footer";
import { Projects } from "./containers/Projects";
import { Skills } from "./containers/Skills";

function App() {
  return (
    <main>
      <LavaBlobs />
      <MenuRes />
      <MenuDesk />
      <AboutMe />
      <Education />
      <Experience />
      {/* <Skills /> */}
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
