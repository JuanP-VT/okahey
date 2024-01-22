import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primario">
              Vive la magia del Temazcal
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl dark:text-slate-100">
              Únete para una experiencia única. Relájate, rejuvenece y conecta
              con la naturaleza
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primario">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primario">
              Beneficios del Temazcal
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Descubre los números beneficios para tu salud física, mental y
              espiritual participando en la ceremonia de Temazcal
            </p>
          </div>
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-2">
            <div className="flex flex-col items-center space-y-2 justify-center">
              <HeartIcon className="h-12 w-12 text-red-500" />
              <h3 className="text-lg font-semibold">
                Promueve Funciones Cardiovasculares
              </h3>
              <p className="text-sm text-gray-500">
                El calor y los vapores pueden estimular la circulación,
                promoviendo mejor funcionamiento cardiovascular
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 justify-center">
              <LeafIcon className="h-12 w-12 text-green-500" />
              <h3 className="text-lg font-semibold">Detox Natural</h3>
              <p className="text-sm text-gray-500">
                El sudor inducido por el calor ayuda a remover toxinas
                naturalmente del cuerpo
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BrainIcon className="h-12 w-12 text-pink-500" />
              <h3 className="text-lg font-semibold">
                Mejora tu Bienestar Mental
              </h3>
              <p className="text-sm text-gray-500">
                La ceremonia puede ayudar a reducir el estrés, promover la
                relajación y mejorar la claridad mental
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <UserIcon className="h-12 w-12 text-purple-500" />
              <h3 className="text-lg font-semibold">
                Fortalece El Sistema Inmune
              </h3>
              <p className="text-sm text-gray-500">
                El calor puede estimular la producción de glóbulos blancos,
                fortaleciendo el sistema inmunológico
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SmileIcon className="h-12 w-12 text-sky-500" />
              <h3 className="text-lg font-semibold">Embellece Tu Piel</h3>
              <p className="text-sm text-gray-500">
                El vapor puede ayudar a limpiar la piel, mejorando su salud y
                apariencia
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FeatherIcon className="h-12 w-12 text-indigo-500" />
              <h3 className="text-lg font-semibold">
                Fomenta el Crecimiento Espiritual
              </h3>
              <p className="text-sm text-gray-500">
                La ceremonia puede llevar a la introspección personal y al
                crecimiento espiritual
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Galería
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            <Image
              alt="Gallery Image"
              className="aspect-square overflow-hidden rounded-md object-cover object-center"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
            <Image
              alt="Gallery Image"
              className="aspect-square overflow-hidden rounded-md object-cover object-center"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
            <Image
              alt="Gallery Image"
              className="aspect-square overflow-hidden rounded-md object-cover object-center"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
            <Image
              alt="Gallery Image"
              className="aspect-square overflow-hidden rounded-md object-cover object-center"
              height="300"
              src="/placeholder.svg"
              width="300"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Próximas Sesiones
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            <Card>
              <CardContent>
                <h3 className="font-semibold">Session 1</h3>
                <p>Date: 22nd January, 2024</p>
                <p>Time: 6:00 PM</p>
                <p>Status: Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Session 2</h3>
                <p>Date: 29th January, 2024</p>
                <p>Time: 6:00 PM</p>
                <p>Status: Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Session 3</h3>
                <p>Date: 5th February, 2024</p>
                <p>Time: 6:00 PM</p>
                <p>Status: Available</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Session 4</h3>
                <p>Date: 12th February, 2024</p>
                <p>Time: 6:00 PM</p>
                <p>Status: Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-50">
        <h2 className="text-2xl lg:text-3xl font-bold text-center">
          Testimonials
        </h2>
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Testimonial"
              className="h-24 w-24 rounded-full object-cover"
              height="100"
              src="/img/pic1.jfif"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="mt-4 text-xl font-semibold">Jane Doe</h3>
            <p className="mt-2 text-gray-500">
              The Temazcal experience was transformative. I left feeling
              cleansed and renewed.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Testimonial"
              className="h-24 w-24 rounded-full object-cover"
              height="100"
              src="/img/pic2.png"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="mt-4 text-xl font-semibold">Juan Pablo</h3>
            <p className="mt-2 text-gray-500">
              I was skeptical at first, but the temazcal proved to be a deeply
              healing experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              alt="Testimonial"
              className="h-24 w-24 rounded-full object-cover"
              height="100"
              src="/img/pic3.jfif"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="mt-4 text-xl font-semibold">Maria Rodriguez</h3>
            <p className="mt-2 text-gray-500">
              The temazcal is a must-try. Its like a sauna, but so much more
              powerful.
            </p>
          </div>
        </div>
      </section>
      <footer className="py-6 px-4 md:px-6 bg-gray-800 text-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-medium">Contact Us</h3>
            <p className="mt-2">123 Main St, Anytown, USA</p>
            <p className="mt-1">(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Follow Us</h3>
            <div className="mt-2 flex space-x-6">
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="text-gray-400 hover:text-gray-300" href="#">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function BrainIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function HeartIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LeafIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function UserIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function SmileIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
function FeatherIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" x2="2" y1="8" y2="22" />
      <line x1="17.5" x2="9" y1="15" y2="15" />
    </svg>
  );
}
