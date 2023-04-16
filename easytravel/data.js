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
        idPlace:1,
        namePlace: "Cusco",
        descriptionPlace: "Conocida también como Cuzco o Qosqo, capital arqueológica de América, fue la ciudad principal del Imperio Inca, considerada por los mismos como “Ombligo del mundo”. Era el centro vital del milenario Tahuantinsuyo (Imperio de los Incas) y en la actualidad es la ciudad más visitada del Perú por ofrecer gran riqueza arquitectónica y espiritual.",
        country:"Perú",
      },
      {
        idPlace:2,
        namePlace: "Tarapoto",
        descriptionPlace: "Tarapoto goza de una excelente ubicación geográfica, de un moderno aeropuerto y de carreteras en buen estado, con las que podrás conectarte a todos los destinos del nor-oriente del Perú, y que harán de tu viaje un placer. Planifica hoy tu viaje a Tarapoto, y vive una experiencia amazónica que jamás olvidarás",
        country:"Perú",
      },
      {
        idPlace:3,
        namePlace: "Piura",
        descriptionPlace: "Piura es un departamento que no solo alberga hermosas playas, sino también que posee destinos turísticos llenos de historia, cultura y belleza.",
        country:"Perú",
      },
      {
        idPlace:4,
        namePlace: "Cajamarca",
        descriptionPlace: "Cajamarca guarda, además del peso de la historia, atractivos únicos: ¿te imaginas un establo donde las vacas son llamadas por su nombre para ser ordeñadas… y responden? ¿O una fiesta de carnavales llena de color y alegría, celebrada durante 4 días consecutivos? Cajamarca, capital del Carnaval Peruano.",
        country:"Perú",
      },
      {
        idPlace:5,
        namePlace: "Ayacucho",
        descriptionPlace: "En Ayacucho hay mucho de bueno, como sus paisajes, festividades, su gastronomía, artes, historia, tradición, costumbres y más.",
        country:"Perú",
      },
      {
        idPlace:6,
        namePlace: "Arequipa",
        descriptionPlace: "Arequipa cuenta con un hermoso entorno montañoso y volcánico, sus calles están llenas de cultura e historia.  Fue declarada Patrimonio de la Humanidad por la UNESCO y una de las tres principales ciudades del Perú",
        country:"Perú",
      },
      {
        idPlace:7,
        namePlace: "Lima",
        descriptionPlace: "Lima, fundada por Francisco Pizarro en 1535, es una ciudad fascinante y un auténtico baúl donde se conserva la historia. Explora los yacimientos arqueológicos de la civilización inca o recorre las elegantes catedrales y los lujosos palacios que datan de la época colonial española. El centro de Lima está abarrotado de gente pero te encantará explorar los barrios de la ciudad, en especial la zona costera, que ofrece buenos restaurantes, interesantes comercios y hoteles fabulosos.",
        country:"Perú",
      },
      {
        idPlace:8,
        namePlace: "Rio de Janeiro",
        descriptionPlace: "Considerado uno de los lugares mas bellos del planeta. En Río de Janeiro no solo se encuentra la gente que a diario disfruta de las playas, el sol y el mar, gran parte de su población habita las llamadas «favelas«, especie de barrios situados en las laderas de la colinas que rodean la ciudad",
        country:"Brasil",
      },
      {
        idPlace:9,
        namePlace: "Buenos Aires",
        descriptionPlace: "Una ciudad cosmopolita que deslumbra con su arquitectura, sus bailes y su vida urbana que sigue hasta el amanecer",
        country:"Argentina",
      },
      {
        idPlace:10,
        namePlace: "Santiago de Chile",
        descriptionPlace: "Considerada la tercera ciudad de Sudamérica con mejor calidad de vida y la segunda mejor ciudad para hacer negocios en Latinoamérica, además de la segunda más segura. Es una ciudad de clase alfa, moderna y competitiva, que también cuenta con alrededores naturales ideales para actividades al aire libre y relajarse.",
        country:"Chile",
      }
    ],
    }
    return data
}
