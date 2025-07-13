import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="mt-16">
        <div className="text-center">
            <h1 className="text-4xl font-bold uppercase">Rooms and Rates</h1>
            <p className="py-3">lorem ipsum dolor sit amet</p>
        </div>
        <Main/>
      </div>
    </div>
  );
}
