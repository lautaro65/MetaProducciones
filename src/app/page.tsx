"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Calendar,
  Users,
  Music,
  Camera,
  Utensils,
  Gift,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Menu,
} from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

export default function EventWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50" role="banner">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo-meta-producciones.svg"
              alt="Meta Producciones - Organización de eventos"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navegación principal">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Ir a la sección de inicio"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Ir a la sección de servicios"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Ir a la sección sobre nosotros"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("especialidades")}
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Ir a la sección de especialidades"
            >
              Especialidades
            </button>
            <button
              onClick={() => scrollToSection("portafolio")}
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Ir a la sección de portafolio"
            >
              Portafolio
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Ir a la sección de contacto"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Abrir menú de navegación">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]" role="dialog" aria-label="Menú de navegación móvil">
              <div className="flex flex-col space-y-6 mt-8">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-left text-lg text-gray-600 hover:text-red-600 transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-left text-lg text-gray-600 hover:text-red-600 transition-colors"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-left text-lg text-gray-600 hover:text-red-600 transition-colors"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => scrollToSection("especialidades")}
                  className="text-left text-lg text-gray-600 hover:text-red-600 transition-colors"
                >
                  Especialidades
                </button>
                <button
                  onClick={() => scrollToSection("portafolio")}
                  className="text-left text-lg text-gray-600 hover:text-red-600 transition-colors"
                >
                  Portafolio
                </button>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-left text-lg text-gray-600 hover:text-red-600 transition-colors"
                >
                  Contacto
                </button>
                <Button onClick={() => scrollToSection("contacto")} className="bg-red-600 hover:bg-red-700 mt-4">
                  Cotizar Evento
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <Button onClick={() => scrollToSection("contacto")} className="hidden md:block bg-red-600 hover:bg-red-700">
            Cotizar Evento
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center overflow-hidden pt-20"
        role="main"
        aria-labelledby="hero-title"
      >
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Video de fondo mostrando eventos de Meta Producciones"
          >
            <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
            <track kind="captions" src="/captions.vtt" srcLang="es" label="Español" default />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 id="hero-title" className="text-5xl md:text-6xl font-bold mb-6">
            Creamos Eventos
            <br />
            Inolvidables
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Transformamos tus ideas en experiencias únicas. Desde bodas hasta eventos corporativos, nos encargamos de
            cada detalle para que tu evento sea perfecto.
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection("contacto")}
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3"
            aria-label="Comenzar proyecto - ir a contacto"
          >
            Comenzar Proyecto
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50" aria-labelledby="servicios-title">
        <div className="container mx-auto px-4">
          <h2 id="servicios-title" className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Planificación Integral</h3>
                <p className="text-gray-600">
                  Organizamos cada aspecto de tu evento desde la conceptualización hasta la ejecución final.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Eventos Corporativos</h3>
                <p className="text-gray-600">
                  Conferencias, seminarios y eventos empresariales que fortalecen tu marca.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <Music className="w-12 h-12 text-red-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Bodas & Celebraciones</h3>
                <p className="text-gray-600">
                  Hacemos realidad la boda de tus sueños con atención personalizada a cada detalle.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <Camera className="w-12 h-12 text-red-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Fotografía & Video</h3>
                <p className="text-gray-600">
                  Capturamos los momentos más importantes con equipos profesionales de alta calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <Utensils className="w-12 h-12 text-red-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Catering Gourmet</h3>
                <p className="text-gray-600">
                  Menús personalizados y servicio de catering de la más alta calidad gastronómica.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <Gift className="w-12 h-12 text-red-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">Decoración Temática</h3>
                <p className="text-gray-600">
                  Ambientaciones únicas que reflejan tu estilo y crean la atmósfera perfecta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" aria-labelledby="why-choose-title">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-choose-title" className="text-4xl font-bold mb-6 text-gray-800">
                ¿Por qué elegirnos?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experiencia Comprobada</h3>
                  <p className="text-gray-600">Más de 10 años creando eventos exitosos para clientes satisfechos.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                  <p className="text-gray-600">Cada evento es único y merece un enfoque completamente personalizado.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Equipo Profesional</h3>
                  <p className="text-gray-600">Contamos con un equipo de expertos en cada área del evento.</p>
                </div>
              </div>
            </div>
            <div className="relative" aria-hidden="true">
              <div className="bg-gradient-to-br from-red-400 to-red-600 rounded-full w-80 h-80 mx-auto opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 shadow-xl max-w-sm">
                  <h4 className="font-semibold text-lg mb-2">Garantía de Satisfacción</h4>
                  <p className="text-gray-600 text-sm">
                    Tu satisfacción es nuestra prioridad. Trabajamos hasta que todo sea perfecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-gray-50" aria-labelledby="nosotros-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="nosotros-title" className="text-4xl font-bold mb-6 text-gray-800">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meta Producciones es la asociación de un grupo de empresarios, diseñadores y especialistas en producción
              de marketing y eventos, siempre en búsqueda de nuevas oportunidades para crear experiencias excepcionales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16" role="list">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <div
                  className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nuestro propósito es alcanzar el objetivo general de cada evento siendo coherentes con el estilo e
                  identidad de la institución o empresa. Establecemos vínculos de comunicación entre personas de
                  diferentes sectores sociales y nacionalidades, logrando un servicio perfecto a través del intercambio
                  de ideas, conocimientos y nuevos contactos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <div
                  className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Visión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser la primera opción como empresa de organización y producción integral de eventos sociales,
                  gubernamentales y empresariales de la República Argentina, manteniéndonos siempre a la vanguardia en
                  innovación y calidad de servicio.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow" role="listitem">
              <CardContent className="pt-6">
                <div
                  className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  aria-hidden="true"
                >
                  <Gift className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Valores</h3>
                <div className="text-gray-600 leading-relaxed space-y-2">
                  <p>• Fomentamos el crecimiento personal y de equipo</p>
                  <p>• Priorizamos la alta calidad en nuestros servicios</p>
                  <p>• Lideramos en eventos sociales y empresariales</p>
                  <p>• Mantenemos constante capacitación y aprendizaje</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Categories Section */}
      <section id="especialidades" className="py-20 bg-white" aria-labelledby="especialidades-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="especialidades-title" className="text-4xl font-bold mb-6 text-gray-800">
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos producción integral para todo tipo de eventos, adaptándonos a las necesidades específicas de
              cada cliente y sector. Haz clic en cada especialidad para conocer más detalles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-600 cursor-pointer bg-white rounded-lg p-6 text-left w-full"
                  aria-describedby="congreso-description"
                  role="listitem"
                >
                  <div className="flex flex-col">
                    <Users
                      className="w-10 h-10 text-red-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-3">Congresos y Convenciones</h3>
                    <p id="congreso-description" className="text-gray-600">
                      Eventos académicos y profesionales de gran escala con logística integral y tecnología de punta.
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="congreso-title"
              >
                <DialogHeader>
                  <DialogTitle id="congreso-title" className="text-2xl font-bold text-red-600">
                    Congresos y Convenciones
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Eventos de reunión grupal, social y empresarial que comparten la misma temática para promoción,
                    exposición y debate. En estos se emplea el protocolo y ceremonial para dar un servicio acorde a la
                    temática y cálido según la nacionalidad.
                  </p>
                  <p>
                    Se suelen llevar a cabo los ítems básicos como acreditaciones, técnica de sonido y pantalla para
                    oradores con demostraciones y contenido audiovisual, catering por jornada completa con personal de
                    atención, desenvueltos en espacios cómodos, simples y con clase para un mayor enfoque en la
                    actividad inicial.
                  </p>
                  <p>
                    Estamos en cada detalle y este tipo de eventos son consensuados con el cliente mediante reuniones
                    con detalles exhaustivos, ya que su duración suele ser desde 1 a 10 días.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600 cursor-pointer bg-white rounded-lg p-6 text-left w-full"
                  aria-describedby="empresarial-description"
                  role="listitem"
                >
                  <div className="flex flex-col">
                    <Calendar
                      className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-3">Empresariales y Educativos</h3>
                    <p id="empresarial-description" className="text-gray-600">
                      Seminarios, capacitaciones y eventos corporativos que fortalecen la imagen institucional.
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="empresarial-title"
              >
                <DialogHeader>
                  <DialogTitle id="empresarial-title" className="text-2xl font-bold text-blue-600">
                    Empresariales y Educativos
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Los eventos empresariales y educativos tienen dinámicas personales de acuerdo al cliente, ya que son
                    de creatividad e identidad según la institución o empresa que la conlleva.
                  </p>
                  <p>
                    Nos adentramos en esa identidad para buscar escenarios propicios a la temática y fin del evento, con
                    acondicionamiento interactivo.
                  </p>
                  <p>
                    Los mismos incluyen técnica de pantallas tanto interior como exterior, sonido según la cantidad de
                    personas, iluminación para ambientación del espacio elegido tanto exterior en horarios nocturnos o
                    interiores con iluminación decorativa, catering para todas las edades y horarios en modalidades
                    practicas o de salón, decoración integral y montados ornamentales como stands promocionales.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-pink-600 cursor-pointer bg-white rounded-lg p-6 text-left w-full"
                  aria-describedby="entretenimiento-description"
                  role="listitem"
                >
                  <div className="flex flex-col">
                    <Music
                      className="w-10 h-10 text-pink-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-3">Entretenimiento y Festividades</h3>
                    <p id="entretenimiento-description" className="text-gray-600">
                      Shows, conciertos y celebraciones que crean momentos memorables e impactantes.
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="entretenimiento-title"
              >
                <DialogHeader>
                  <DialogTitle id="entretenimiento-title" className="text-2xl font-bold text-pink-600">
                    Entretenimiento y Festividades
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Esta área nos apasiona, contamos con tecnología de última generación y personal abarcativo para
                    cubrir las áreas de montado de estructuras, mobiliario en cantidad, decoración diversa, pantallas a
                    gran escala, sonido para estadios, baños químicos, seguridad y vallado, stands médicos, realización
                    de stands, gastronomía móvil y de base, montado de carpas y estaciones de descanso, elementos
                    gráficos de cartelería y acreditaciones, personal de organización, contenedores, personalidades para
                    espectáculo entre otros.
                  </p>
                  <p>
                    Cada evento trae su cultura y su identidad, buscamos potenciar esas cualidades y tener una jornada
                    de festejo, confiando en un servicio fiel.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600 cursor-pointer bg-white rounded-lg p-6 text-left w-full"
                  aria-describedby="publicidad-description"
                  role="listitem"
                >
                  <div className="flex flex-col">
                    <Camera
                      className="w-10 h-10 text-green-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-3">Publicidad de Eventos</h3>
                    <p id="publicidad-description" className="text-gray-600">
                      Estrategias de comunicación y marketing para maximizar el impacto de tu evento.
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="publicidad-title"
              >
                <DialogHeader>
                  <DialogTitle id="publicidad-title" className="text-2xl font-bold text-green-600">
                    Publicidad de Eventos
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Sabemos de la importancia del posicionamiento y comunicación pública. Por ello ofrecemos para
                    eventos con búsqueda repercutiva, la difusión integral.
                  </p>
                  <p>
                    Ofrecemos publicidad en diferentes medios como pantallas led en vía pública, difusiones radiales,
                    spots televisivos y otros.
                  </p>
                  <p>
                    Armamos estrategias con tiempos al aire, horarios estratégicos y formatos varios según el mensaje y
                    público al que se desea apuntar.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-600 cursor-pointer bg-white rounded-lg p-6 text-left w-full"
                  aria-describedby="privados-description"
                  role="listitem"
                >
                  <div className="flex flex-col">
                    <Gift
                      className="w-10 h-10 text-yellow-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-3">Eventos Privados</h3>
                    <p id="privados-description" className="text-gray-600">
                      Celebraciones íntimas y personalizadas con atención al más mínimo detalle.
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="privados-title"
              >
                <DialogHeader>
                  <DialogTitle id="privados-title" className="text-2xl font-bold text-yellow-600">
                    Eventos Privados
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Somos prácticos y sabemos trabajar en serie. Entendemos a los eventos pequeños, sucesivos y/o
                    protocolares.
                  </p>
                  <p>
                    Por ello disponemos de caterings prácticos como coffee break, brunch o coffee base para jornada
                    completa. Seguido de técnica integral simple como proyectores, tv o pantallas pequeñas para
                    presentaciones con sonido acorde al espacio y micrófonos de acuerdo a la modalidad.
                  </p>
                  <p>Contamos con mobiliario formal y de oficina, junto con tarimas o estrados.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-600 cursor-pointer bg-white rounded-lg p-6 text-left w-full"
                  aria-describedby="institucionales-description"
                  role="listitem"
                >
                  <div className="flex flex-col">
                    <Utensils
                      className="w-10 h-10 text-red-600 mb-4 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mb-3">Eventos Institucionales</h3>
                    <p id="institucionales-description" className="text-gray-600">
                      Ceremonias oficiales y actos protocolares con el más alto nivel de profesionalismo.
                    </p>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent
                className="max-w-2xl max-h-[80vh] overflow-y-auto"
                role="dialog"
                aria-labelledby="institucionales-title"
              >
                <DialogHeader>
                  <DialogTitle id="institucionales-title" className="text-2xl font-bold text-red-600">
                    Eventos Institucionales
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>Ofrecemos servicio de material gráfico institucional y adicionales en merchandising.</p>
                  <p>
                    Nos especializamos en ceremonias oficiales y actos protocolares, brindando el más alto nivel de
                    profesionalismo y atención a los detalles que requieren este tipo de eventos formales.
                  </p>
                  <p>
                    Trabajamos con instituciones gubernamentales, educativas y corporativas para crear eventos que
                    reflejen la seriedad y prestigio de cada organización.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-pink-50" aria-labelledby="media-kit-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="media-kit-title" className="text-4xl font-bold mb-6 text-gray-800">
              Conocé Más Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Si querés saber más sobre nuestra historia, metodología de trabajo y la manera en que llevamos adelante
              cada proyecto, te invitamos a descargar nuestro media kit completo.
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Media Kit Meta Producciones</h3>
                  <ul className="text-gray-600 space-y-2 mb-6" role="list">
                    <li className="flex items-center" role="listitem">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" aria-hidden="true"></div>
                      Nuestra historia y trayectoria
                    </li>
                    <li className="flex items-center" role="listitem">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" aria-hidden="true"></div>
                      Metodología de trabajo
                    </li>
                    <li className="flex items-center" role="listitem">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" aria-hidden="true"></div>
                      Casos de éxito y testimonios
                    </li>
                    <li className="flex items-center" role="listitem">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3" aria-hidden="true"></div>
                      Información técnica y logística
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4" asChild>
                    <a
                      href="https://metaproducciones.com.ar/wp-content/uploads/2025/06/meta-producciones-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Descargar Media Kit de Meta Producciones (PDF, 2.5 MB)"
                    >
                      <Camera className="w-5 h-5 mr-2" aria-hidden="true" />
                      Descargar Media Kit
                    </a>
                  </Button>
                  <p className="text-sm text-gray-500 mt-2">PDF - 2.5 MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-20 bg-gray-50" aria-labelledby="portafolio-title">
        <div className="container mx-auto px-4">
          <h2 id="portafolio-title" className="text-4xl font-bold text-center mb-16 text-gray-800">
            Portafolio Reciente
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
              <div className="relative h-48">
                <Image
                  src="/evento1.webp"
                  alt="Boda Elegante - Celebración íntima organizada por Meta Producciones"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Boda Elegante</h3>
                    <p className="text-gray-200">Celebración íntima</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
              <div className="relative h-48">
                <Image
                  src="/evento1.webp"
                  alt="Evento Corporativo - Lanzamiento de producto organizado por Meta Producciones"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Evento Corporativo</h3>
                    <p className="text-gray-200">Lanzamiento de producto</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
              <div className="relative h-48">
                <Image
                  src="/evento1.webp"
                  alt="Quinceañera - Celebración especial organizada por Meta Producciones"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Quinceañera</h3>
                    <p className="text-gray-200">Celebración especial</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
              <div className="relative h-48">
                <Image
                  src="/evento1.webp"
                  alt="Conferencia - Evento profesional organizado por Meta Producciones"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Conferencia</h3>
                    <p className="text-gray-200">Evento profesional</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
              <div className="relative h-48">
                <Image
                  src="/evento1.webp"
                  alt="Gala Benéfica - Evento solidario organizado por Meta Producciones"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Gala Benéfica</h3>
                    <p className="text-gray-200">Evento solidario</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow" role="listitem">
              <div className="relative h-48">
                <Image
                  src="/evento1.webp"
                  alt="Aniversario - Celebración especial organizada por Meta Producciones"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Aniversario</h3>
                    <p className="text-gray-200">Celebración especial</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20"
        aria-labelledby="contacto-title"
      >
        <div className="container mx-auto px-4">
          <h2 id="contacto-title" className="text-4xl font-bold text-center mb-16">
            Hablemos de tu próximo evento
          </h2>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <a href="tel:+5493512543913" className="text-red-100 hover:text-white transition-colors">
                    +54 9 351 254-3913
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Email General</h3>
                  <a
                    href="mailto:info@metaproducciones.com.ar"
                    className="text-red-100 hover:text-white transition-colors"
                  >
                    info@metaproducciones.com.ar
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Administración</h3>
                  <a
                    href="mailto:administracion@metaproducciones.com.ar"
                    className="text-red-100 hover:text-white transition-colors"
                  >
                    administracion@metaproducciones.com.ar
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Eventos</h3>
                  <a
                    href="mailto:eventos@metaproducciones.com.ar"
                    className="text-red-100 hover:text-white transition-colors"
                  >
                    eventos@metaproducciones.com.ar
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">Ubicación</h3>
                  <p className="text-red-100">Córdoba, Argentina</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Solicita tu cotización</h3>
                  <form className="space-y-4" aria-label="Formulario de cotización">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Nombre completo"
                        className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
                        aria-label="Nombre completo"
                        required
                      />
                      <Input
                        placeholder="Email"
                        type="email"
                        className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
                        aria-label="Correo electrónico"
                        required
                      />
                    </div>
                    <Input
                      placeholder="Tipo de evento"
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
                      aria-label="Tipo de evento"
                      required
                    />
                    <Textarea
                      placeholder="Cuéntanos sobre tu evento..."
                      className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500"
                      rows={4}
                      aria-label="Descripción del evento"
                      required
                    />
                    <Button className="w-full bg-red-600 text-white hover:bg-red-700 font-semibold" type="submit">
                      Enviar Solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Meta Producciones</h3>
              <p className="text-gray-400 mb-4">Creando experiencias inolvidables desde 2014.</p>
              <div className="flex space-x-4" role="list" aria-label="Redes sociales">
                <Facebook
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  role="listitem"
                  aria-label="Facebook"
                />
                <Instagram
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  role="listitem"
                  aria-label="Instagram"
                />
                <Twitter
                  className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
                  role="listitem"
                  aria-label="Twitter"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li role="listitem">
                  <button onClick={() => scrollToSection("servicios")} className="hover:text-white transition-colors">
                    Bodas
                  </button>
                </li>
                <li role="listitem">
                  <button onClick={() => scrollToSection("servicios")} className="hover:text-white transition-colors">
                    Eventos Corporativos
                  </button>
                </li>
                <li role="listitem">
                  <button onClick={() => scrollToSection("servicios")} className="hover:text-white transition-colors">
                    Quinceañeras
                  </button>
                </li>
                <li role="listitem">
                  <button onClick={() => scrollToSection("servicios")} className="hover:text-white transition-colors">
                    Conferencias
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400" role="list">
                <li role="listitem">
                  <button onClick={() => scrollToSection("nosotros")} className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </button>
                </li>
                <li role="listitem">
                  <button onClick={() => scrollToSection("nosotros")} className="hover:text-white transition-colors">
                    Equipo
                  </button>
                </li>
                <li role="listitem">
                  <button onClick={() => scrollToSection("portafolio")} className="hover:text-white transition-colors">
                    Testimonios
                  </button>
                </li>
                <li role="listitem">
                  <a
                    href="https://metaproducciones.com.ar/wp-content/uploads/2025/06/meta-producciones-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Media Kit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3 text-gray-400" role="list">
                <li role="listitem">
                  <a href="tel:+5493512543913" className="hover:text-white transition-colors flex items-center">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    +54 9 351 254-3913
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="mailto:info@metaproducciones.com.ar"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    Info General
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="mailto:administracion@metaproducciones.com.ar"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    Administración
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="mailto:eventos@metaproducciones.com.ar"
                    className="hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    Eventos
                  </a>
                </li>
                <li className="flex items-center" role="listitem">
                  <MapPin className="w-4 h-4 mr-2" aria-hidden="true" />
                  Córdoba, Argentina
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Meta Producciones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



