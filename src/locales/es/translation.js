const es = {
  login: "Iniciar sesión",
  register: "Registrarse",
  logout: "Cerrar sesión",
  welcome: "Bienvenido",
  signInWithGoogle: "Iniciar sesión con Google",
  signInWithFacebook: "Iniciar sesión con Facebook",
  signInWithMicrosoft: "Iniciar sesión con Microsoft",
  email: "Correo Electrónico",
  password: "Contraseña",
  signIn: "Ingresar",
  changeLanguage: "Cambiar idioma",
  welcome_message: "Bienvenid@, a Turistall",
  description: "Explora los mejores destinos turísticos.",
  title1: "Búsquedas Destacadas",
  titleCiudadesTuristicas: "Ciudades Turisticas",
  titleLugares: "Explora Lugares Turisticos",
  titleHoteles: "Hoteles",
  titleRestaurantes: "Restaurantes",
  titlePaquetes: "Paquetes",
  titlecontacto: "Contacta nuestros canales de venta Asistida ¡Descuentos imperdibles!",
  titleContactos:"Contacto",
  titlecontactos2: "Visítanos y Conoce Más",
  search: "Buscar...",
  bogota_title: "¿Ya conoces Bogotá?",
  santa_marta_title: "Visita Santa Marta y sus paisajes inolvidables",
  barranquilla_title: "Explora Barranquilla, la ciudad de la belleza arquitectónica",
  menu: {
    home: "Inicio",
    contact: "Contacto",
    packages: "Paquetes",
    restaurant: "Restaurantes",
    hotels: "Hoteles",
    places: "Lugares",
    cities: "Ciudades Turísticas",
    auth: "Autenticación"
  },
  formcontacto:{
    name: "Nombres",
    email: "Correo electrónico",
    message: "Comentario o mensaje",
    namePlaceholder: "Escribe tu nombre y apellido",
    emailPlaceholder: "Escribe tu email",
    messagePlaceholder: "Cuéntame lo que necesitas...",
    send: "Enviar",
    contactInfoTitle: "Contáctenos!",
    contactInfoDescription: "Horario de atención: Lunes a Viernes de 9:00 a 18:00 hs. Sábados de 10:00 a 14:00 hs.",
    address:"Dirección: Cra. 33a #30-20, Bogotá ",
    phone:"Telefonos de contacto: +57 3137371781, +57 3209772986, +57 3222438058 ",
    emailinfo: "Email: tvalencia@uniempresarial.edu.co - nrubio@uniempresarial.edu.co - llopez@uniempresarial.edu.co ",
  },
  menu: {
    home: "Inicio",
    cities: "Ciudades Turisticas",
    packages: "Paquetes",
    contact: "Contacto",
    restaurant: "Restaurantes", 
    hotels: "Hoteles",
    places: "Lugares"
  },
  cards: [
    { title: "Hotel Sofitel", description: "Un hotel de lujo con vista al mar.", image: "Hotel Sofitel.jpg", category: "Hoteles" },
    { title: "Ciudad Perdida Teyuna", description: "Un sitio arqueológico escondido en la selva.", image: "Teyuna.jpg", category: "Lugares" },
    { title: "Playa Blanca", description: "Una playa paradisíaca con arena blanca y mar turquesa.", image: "Playa blanca.jpg", category: "Lugares" },
    { title: "Catedral de Sal", description: "Una impresionante catedral subterránea en Zipaquirá.", image: "Catedral de sal.jpg", category: "Lugares" },
    { title: "Caño Cristales", description: "El río de cinco colores, una maravilla natural.", image: "Caño cristales.jpg", category: "Lugares" },
    { title: "Parque Tayrona", description: "Un parque con playas vírgenes y biodiversidad impresionante.", image: "Parque tayrona.jpg", category: "Lugares" },
    { title: "Monserrate", description: "Un mirador con vistas panorámicas de Bogotá.", image: "Monserrate.jpg", category: "Lugares" }
  ],
  view: "Ver más",
  title2: "Ranking de ciudades turísticas en Colombia",
  cards2: [
    { title: "Cartagena", description: "La joya del Caribe con su ciudad amurallada y playas paradisíacas.", image: "Cartagena.jpg", category: "Ciudades" },
    { title: "Medellín", description: "La ciudad de la eterna primavera, conocida por su innovación y cultura.", image: "Medellin.jpg", category: "Ciudades" },
    { title: "Bogotá", description: "La capital vibrante con museos, gastronomía y vida nocturna.", image: "Bogota.jpg", category: "Ciudades" },
    { title: "San Andrés", description: "Un paraíso tropical con mar de siete colores y playas de ensueño.", image: "San Andres.jpg", category: "Ciudades" },
    { title: "Santa Marta", description: "Un destino con historia, montañas y acceso al Parque Tayrona.", image: "Santa Marta.jpg", category: "Ciudades" },
    { title: "Cali", description: "La capital mundial de la salsa y cuna de grandes festivales.", image: "Cali.jpg", category: "Ciudades" },
    { title: "Villa de Leyva", description: "Un pueblo colonial con calles empedradas y arquitectura histórica.", image: "Villa de Leyva.jpg", category: "Ciudades" }
  ],

  title3: "Promociones y Descuentos",
  cards3: [
    { title: "Paquete Cartagena Todo Incluido", description: "5 días y 4 noches con vuelos y comidas incluidas.", image: "Cartagena promo.jpg", category: "Promociones" },
    { title: "Descuento en el Parque Tayrona", description: "Entrada con 20% de descuento para nacionales y extranjeros.", image: "Tayrona promo.jpg", category: "Promociones" },
    { title: "Hospedaje en Medellín", description: "Hoteles 4 estrellas con hasta 40% de descuento en reservas anticipadas.", image: "Medellin promo.jpg", category: "Promociones" },
    { title: "San Andrés Todo Incluido", description: "Paquete de 4 días con hospedaje y tours. Desde $1.200.000 COP.", image: "San Andres promo.jpg", category: "Promociones" },
    { title: "2x1 en Tour a la Catedral de Sal", description: "Compra un boleto y recibe otro gratis para este increíble destino.", image: "Catedral Sal promo.jpg", category: "Promociones" },
    { title: "Descuento en Caño Cristales", description: "Reserva con anticipación y obtén hasta 30% de descuento.", image: "Caño Cristales promo.jpeg", category: "Promociones" },
    { title: "City Tour en Bogotá", description: "Tour por los principales sitios de la capital con 25% de descuento.", image: "Bogota promo.jpg", category: "Promociones" }
  ],
  titlecontact: "Contactanos",
  cardscontact:[
    { title: "Paquete Cartagena Todo Incluido", description: "5 días y 4 noches con vuelos y comidas incluidas.", image: "Cartagena promo.jpg", category: "Promociones" },
    { title: "Descuento en el Parque Tayrona", description: "Entrada con 20% de descuento para nacionales y extranjeros.", image: "Tayrona promo.jpg", category: "Promociones" },
    { title: "Hospedaje en Medellín", description: "Hoteles 4 estrellas con hasta 40% de descuento en reservas anticipadas.", image: "Medellin promo.jpg", category: "Promociones" },
    { title: "San Andrés Todo Incluido", description: "Paquete de 4 días con hospedaje y tours. Desde $1.200.000 COP.", image: "San Andres promo.jpg", category: "Promociones" },
    { title: "2x1 en Tour a la Catedral de Sal", description: "Compra un boleto y recibe otro gratis para este increíble destino.", image: "Catedral Sal promo.jpg", category: "Promociones" },
    { title: "Descuento en Caño Cristales", description: "Reserva con anticipación y obtén hasta 30% de descuento.", image: "Caño Cristales promo.jpeg", category: "Promociones" },
    { title: "City Tour en Bogotá", description: "Tour por los principales sitios de la capital con 25% de descuento.", image: "Bogota promo.jpg", category: "Promociones" }
  ],
  testimonials: [
    {
      img: "/images/Testimonios/Colombiano1.jpg",
      title: "María de España: 'Una experiencia inolvidable en Bogotá'",
      description: "María quedó maravillada con la historia y cultura de la ciudad, visitando lugares como La Candelaria y el Museo del Oro. Se sintió como en casa.",
      city: "Bogotá"
    },
    {
      img: "/images/Testimonios/Colombiano2.jpg",
      title: "Carlos de Argentina: 'Santa Marta, el paraíso escondido'",
      description: "Carlos disfrutó de las playas cristalinas y las montañas de Santa Marta. Enamoró con la Sierra Nevada y las maravillas naturales del Parque Tayrona.",
      city: "Santa Marta"
    },
    {
      img: "/images/Testimonios/Colombiano3.jpg",
      title: "Lucía de México: 'Barranquilla, una ciudad llena de vida y color'",
      description: "Lucía se asombró con la calidez de la gente y la arquitectura de Barranquilla. Además, disfrutó de su gastronomía única y su vibrante Carnaval.",
      city: "Barranquilla"
    },
    {
      img: "/images/Testimonios/Colombiano4.jpeg",
      title: "Andrés de Chile: 'Cartagena, historia y romance a la orilla del mar'",
      description: "Andrés visitó la ciudad amurallada y se sintió como un viajero en el tiempo, explorando la arquitectura colonial y disfrutando de las playas caribeñas.",
      city: "Cartagena"
    },
    {
      img: "/images/Testimonios/Colombiano5.jpg",
      title: "Sofía de Brasil: 'Cali, la salsa y el ritmo de la vida'",
      description: "Sofía se sumergió en el corazón de la salsa. Disfrutó de las noches de fiesta, la gastronomía caleña, y los parques naturales de la ciudad.",
      city: "Cali"
    },
    {
      img: "/images/Testimonios/Colombiano6.jpg",
      title: "Diego de Perú: 'Medellín, innovación y cultura en cada rincón'",
      description: "Diego quedó encantado con la transformación de Medellín, visitando el Parque Arví, el Museo de Antioquia y disfrutando de la calidez de su gente.",
      city: "Medellín"
    }
  ],
  footer: {
    terms_conditions: "Términos y Condiciones",
    privacy_policy: "Política de Privacidad",
    rights: "Todos los derechos reservados."
  },

};
export default es;
