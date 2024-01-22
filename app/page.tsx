import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full  h-screen relative py-10 ">
      <video
        className="absolute -z-10 w-screen h-screen object-cover"
        preload="metadata"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/img/video.webm"
      ></video>
      <div className="container flex px-4 md:px-6 h-full  items-end justify-center">
        <div className="flex flex-col items-center space-y-4 text-center mb-32">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-slate-50">
            Vive la magia del Temazcal
          </h1>
          <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl dark:text-slate-100">
            Únete para una experiencia única. Relájate, rejuvenece y conecta con
            la naturaleza
          </p>
        </div>
      </div>
    </section>
  );
}
