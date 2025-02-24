import { About, Intro, } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="">
          <About />
        </div>
        <div className="">
          <Footer />
        </div>
        <div className="">
          <Intro />
        </div>
      </div>
    </>
  );
}
