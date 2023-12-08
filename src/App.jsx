import { Content } from "./Content";
import { Header } from "./Header";
import { Hero } from "./Hero";

function App() {
  return (
    <>
      <div className="hero-header">
        <Header />
        <Hero />
      </div>
      <div className="content-pos">
        <Content />
      </div>
    </>
  );
}

export default App;
