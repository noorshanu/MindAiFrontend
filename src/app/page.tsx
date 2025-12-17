import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
<>
<Navbar/>
<h2 className="text-4xl font-bold font-mon text-center mt-10">Welcome to Mind's AI</h2>
<p className="text-lg text-center mt-4">
  Mind's AI is a platform that uses AI to help you with your mental health.
</p>
<div className="flex items-center justify-center mt-10">
  <button className="bg-[#84B357] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#709944] transition-colors shadow-md">
    Get Started
  </button>
</div>
<Footer/>
</>
  );
}
