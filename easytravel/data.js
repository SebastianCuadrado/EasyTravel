module.exports=function(){
var data= {
    hotels:[
        {
            idHotel:1,
            nombre:"Selina Posada Miraflores",
            precio_noche:"116",
            ciudad:"Lima",
            valoracion_promedio:"8.1",
            estrellas:2,
        },
        {
            idHotel:2,
            nombre:"Hotel Andean Dreams",
            precio_noche:"61",
            ciudad:"Cuzco",
            valoracion_promedio:"6.4",
            estrellas:2,
        },
        {
            idHotel:3,
            nombre:"El Dorado",
            precio_noche:"176",
            ciudad:"Iquitos",
            valoracion_promedio:"7.1",
            estrellas:3,
        },
        {
            idHotel:4,
            nombre:"Qala & Resort",
            precio_noche:"324",
            ciudad:"Chincha",
            valoracion_promedio:"8.2",
            estrellas:3,
        },
        {
            idHotel:5,
            nombre:"Hotel Paracas, a Luxury Collection Resort",
            precio_noche:"809",
            ciudad:"Paracas",
            valoracion_promedio:"9.2",
            estrellas:5,
        },
        {
            idHotel:6,
            nombre:"Qallwa Casma",
            precio_noche:"166",
            ciudad:"Casma",
            valoracion_promedio:"7.3",
            estrellas:2,
        },

    ],


    usuarios: [
      {
        idUsuario: 1,
        nombre: "Luis",
        apellidos: "Pérez Reyes",
        email:"lperez@gmail.com",
        fechaNacimiento: "2000-09-10",
        celular: "987454333",
        ubicacion: "Lima, Peru",
      },
      {
        idUsuario: 2,
        nombre: "Ana",
        apellidos: "Díaz Reyes",
        email:"adiaz@gmail.com",
        fechaNacimiento: "1980-10-10",
        celular: "965454566",
        ubicacion: "Lima, Peru",
      },
      {
        idUsuario: 3,
        nombre: "Gerardo",
        apellidos: "Santillán Reyes",
        email:"gsreyes@gmail.com",
        fechaNacimiento: "2002-06-05",
        celular: "965766878",
        ubicacion: "Lima, Peru",
      },
      {
        idUsuario: 4,
        nombre: "Juana",
        apellidos: "Pérez Reyes",
        email:"jperez@gmail.com",
        fechaNacimiento: "2000-09-10",
        celular: "953422727",
        ubicacion: "Lima, Peru",
	}
    ],

    places: [
      {
        id:1,
        namePlace: "Cusco",
        descriptionPlace: "Conocida también como Cuzco o Qosqo, capital arqueológica de América, fue la ciudad principal del Imperio Inca, considerada por los mismos como “Ombligo del mundo”. Era el centro vital del milenario Tahuantinsuyo (Imperio de los Incas) y en la actualidad es la ciudad más visitada del Perú por ofrecer gran riqueza arquitectónica y espiritual.",
        country:"Perú",
      },
      {
        id:2,
        namePlace: "Tarapoto",
        descriptionPlace: "Tarapoto goza de una excelente ubicación geográfica, de un moderno aeropuerto y de carreteras en buen estado, con las que podrás conectarte a todos los destinos del nor-oriente del Perú, y que harán de tu viaje un placer. Planifica hoy tu viaje a Tarapoto, y vive una experiencia amazónica que jamás olvidarás",
        country:"Perú",
      },
      {
        id:3,
        namePlace: "Piura",
        descriptionPlace: "Piura es un departamento que no solo alberga hermosas playas, sino también que posee destinos turísticos llenos de historia, cultura y belleza.",
        country:"Perú",
      },
      {
        id:4,
        namePlace: "Cajamarca",
        descriptionPlace: "Cajamarca guarda, además del peso de la historia, atractivos únicos: ¿te imaginas un establo donde las vacas son llamadas por su nombre para ser ordeñadas… y responden? ¿O una fiesta de carnavales llena de color y alegría, celebrada durante 4 días consecutivos? Cajamarca, capital del Carnaval Peruano.",
        country:"Perú",
      },
      {
        id:5,
        namePlace: "Ayacucho",
        descriptionPlace: "En Ayacucho hay mucho de bueno, como sus paisajes, festividades, su gastronomía, artes, historia, tradición, costumbres y más.",
        country:"Perú",
      },
      {
        id:6,
        namePlace: "Arequipa",
        descriptionPlace: "Arequipa cuenta con un hermoso entorno montañoso y volcánico, sus calles están llenas de cultura e historia.  Fue declarada Patrimonio de la Humanidad por la UNESCO y una de las tres principales ciudades del Perú",
        country:"Perú",
      },
      {
        id:7,
        namePlace: "Lima",
        descriptionPlace: "Lima, fundada por Francisco Pizarro en 1535, es una ciudad fascinante y un auténtico baúl donde se conserva la historia. Explora los yacimientos arqueológicos de la civilización inca o recorre las elegantes catedrales y los lujosos palacios que datan de la época colonial española. El centro de Lima está abarrotado de gente pero te encantará explorar los barrios de la ciudad, en especial la zona costera, que ofrece buenos restaurantes, interesantes comercios y hoteles fabulosos.",
        country:"Perú",
      },
      {
        id:8,
        namePlace: "Rio de Janeiro",
        descriptionPlace: "Considerado uno de los lugares mas bellos del planeta. En Río de Janeiro no solo se encuentra la gente que a diario disfruta de las playas, el sol y el mar, gran parte de su población habita las llamadas «favelas«, especie de barrios situados en las laderas de la colinas que rodean la ciudad",
        country:"Brasil",
      },
      {
        id:9,
        namePlace: "Buenos Aires",
        descriptionPlace: "Una ciudad cosmopolita que deslumbra con su arquitectura, sus bailes y su vida urbana que sigue hasta el amanecer",
        country:"Argentina",
      },
      {
        id:10,
        namePlace: "Santiago de Chile",
        descriptionPlace: "Considerada la tercera ciudad de Sudamérica con mejor calidad de vida y la segunda mejor ciudad para hacer negocios en Latinoamérica, además de la segunda más segura. Es una ciudad de clase alfa, moderna y competitiva, que también cuenta con alrededores naturales ideales para actividades al aire libre y relajarse.",
        country:"Chile",
      }
    ],

    Empresa_Transporte:[
      {
          idEmpresa:1,
          nombre:"AVIANCA AIRLINES",
          ruc:"20348858182",
          direccion:"Av. Jose Pardo 811, Miraflores. Lima - Peru",
          contacto:"Lima: (511) 511-8222. Provincia: (0 800) 5-1111",

      },
      {
          idEmpresa:2,
          nombre:"LATAM AIRLINES",
          ruc:"20341841357",
          direccion:"Av. José Pardo 513, Miraflores Lima - Perú",
          contacto:"Telefono: (01) 213-8200 ; Web: www.latam.com/es_pe",
      },
      {
          idEmpresa:3,
          nombre:"REDBUS",
          ruc:"20547391501",
          direccion:"Av. Juan de Aliaga 360, Magdalena del Mar 15076",
          contacto:"Telefono 0801 - 00 - 015 . Email: CONTACTO@REDBUS.PE",
      },
      {
          idEmpresa:4,
          nombre:"BUSBUD",
          ruc:"20106076635",
          direccion:"Av. Brasil 1150, Magdalena del Mar",
          contacto:"Telefono +1-2023322691 o 514-700-0451. Pagina web: Busbud.com",
      },

    ],
    Comentarios_Hotel: [
      {
        idComentarioHotel:1,
        valoracion: "8",
        comentario: "Mi estancia en este hotel fue excelente. Las habitaciones eran cómodas y limpias, el personal era muy amable y servicial, y la ubicación del hotel era muy conveniente para mi viaje",
      },
      {
        idComentarioHotel:2,
        valoracion: "9",
        comentario: "El hotel está ubicado en una buena zona, cerca de restaurantes y tiendas. Sin duda, recomendaría este hotel a cualquier persona que busque una estadía agradable y cómoda.",
      },
      {
        idComentarioHotel:3,
        valoracion: "9",
        comentario: "Ubicación perfecta, habitaciones privadas y compartidas con camas súper cómodas y aire acondicionado. En definitiva regresaría a hospedarme aquí.",
      },
      {
        idComentarioHotel:4,
        valoracion: "8",
        comentario: "Excelente servicio, todos los trabajadores son muy amables y dispuesto a hacer que tu estadía sea la mejor.",
	    }
    ],

    }
    return data
}
