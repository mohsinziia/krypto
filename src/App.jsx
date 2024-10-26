import {
  Hero,
  Container,
  Featured,
  Analytics,
  GetApp,
  Access,
  Testimonial,
  GetStarted,
  Footer,
  Decoration,
  Blur,
} from "./components";

function App() {
  return (
    <div className="relative">
      <Container className="mb-[7.9rem]">
        <Hero className="mb-[13.4rem]" />
        <Featured className="mb-[7rem]" />
        <Analytics className="mb-[7rem]" />
        <GetApp className="mb-[7rem]" />
        <Access className="mb-[13.4rem]" />
        <Testimonial className="mb-[13.8rem]" />
        <GetStarted className="mb-[6.9rem]" />
        <Footer />
      </Container>
      <Decoration />
      <Blur className="top-[-9%] right-[70%] bg-[#8080D7]" />
      <Blur className="top-[12%] left-[90%] bg-[#AAD9D9]" />
    </div>
  );
}

export default App;
