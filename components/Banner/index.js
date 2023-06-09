import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="forest hero image"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center space-y-3">
        <p className="text-sm sm:text-lg">Not sure where to go?</p>
        <button className="text-purple-500 px-10 py-4 rounded-full bg-white shadow font-bold hover:shadow-xl active:scale-90 transition duration-150">I am flexible</button>
      </div>
    </div>
  );
}
