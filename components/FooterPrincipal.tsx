import Link from "next/link";

export default function FooterPrincipal() {
  return (
    <footer className="bg-gray-800 px-4 py-6 text-white md:px-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col">
          <h3 className="text-primario text-lg font-bold">
            Contáctanos <span className="text-xs">(Da Click)</span>
          </h3>
          <Link
            href="https://maps.app.goo.gl/jinyVDshRqii5djR8"
            className="mt-2 font-semibold  hover:text-orange-300"
            target="_blank"
          >
            81379 Ejido Plan de Guadalupe, Sinaloa México
          </Link>
          <Link
            href="https://wa.me/6682324356"
            className="mt-2 font-semibold hover:text-orange-300"
            target="_blank"
          >
            (+52) 668 232 4356
          </Link>
        </div>
        <div>
          <h3 className="text-primario text-lg   font-medium">
            Síguenos en redes
          </h3>
          <div className="mt-2 flex space-x-6">
            <Link
              className="text-gray-400 hover:text-gray-300"
              href="https://www.facebook.com/people/Okahey-Temazcal/pfbid022LcgCqqDFJ6Ng9Nwd3ZcAXbNfv6VtPM1JfvE4MUxjA7eMse6yxkK8SoSnfXENB92l/"
              target="_blank"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-300"
              href="https://www.instagram.com/okaheytemazcal/"
              target="_blank"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
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
