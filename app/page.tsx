import Image from "next/image";

export default function Home() {
  return (
    <div className="text-foreground flex w-full items-center justify-center">
      <div className="flex w-[85%] justify-between items-center">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="text-7xl font-bold">Creative Thoughts Agency</h1>
          <div className="text-xl">
            <p>Your one-stop solution for creative services.</p>
            <p>We specialize in branding, design, and digital marketing.</p>
          </div>
          <div className="flex gap-6">
            <button className="bg-btn  text-gray-50 p-4 rounded-sm  min-w-30 font-semibold cursor-pointer hover:bg-blue-700">
              Learn more
            </button>
            <button className="text-blue-600 bg-gray-50 p-4 rounded-sm min-w-30 font-semibold cursor-pointer hover:bg-gray-200">
              Contact us
            </button>
          </div>
          <div className="relative flex w-[500px] h-[50px] grayscale">
            <Image src="/brands.png" alt="brands" fill />
          </div>
        </div>
        <div className="relative flex-1 w-[500px] h-[500px]">
          <Image src={"/hero.gif"} alt="hero img" fill />
        </div>
      </div>
    </div>
  );
}
