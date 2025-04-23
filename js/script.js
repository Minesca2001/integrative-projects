// Sample Travel Package Data
const allPackages = [
    // África
    { id: 1, name: "Maravillas de Egipto", destination: "Egipto", description: "<img src='./assets/destino/Kheops-Pyramid.jpg'> <b>Pirámides de Giza:</b> Asombrosas estructuras milenarias <b>. <br><img src='./assets/destino/Luxor_3.webp'> <b>Luxor:</b> Templos y tumbas faraónicas. <br><b>Mar Rojo:</b> Ideal para buceo y relax.", imageColor: "#DAA520", continent: "África", imageUrl:"./assets/destino/Gran-Piramide-de-Guiza.jpg"},
    { id: 2, name: "Aventura Sudafricana", destination: "Sudáfrica", description: "<b>Kruger:</b> Safari inolvidable. <br><b>Table Mountain:</b> Vistas panorámicas de Ciudad del Cabo. <br><b>Ruta Jardín:</b> Paisajes costeros espectaculares.", imageColor: "#FFBF00", continent: "África", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cape_Town_and_Table_Mountain_from_Signal_Hill.jpg/600px-Cape_Town_and_Table_Mountain_from_Signal_Hill.jpg" },
    { id: 3, name: "Encantos de Marruecos", destination: "Marruecos", description: "<b>Marrakech:</b> Zocos vibrantes y cultura rica. <br><b>Fez:</b> Ciudad histórica con encanto medieval. <b>Desierto del Sahara:</b> Aventuras en dromedario y noches estrelladas.", imageColor: "#C85A17", continent: "África", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Sahara_Morocco.jpg/600px-Sahara_Morocco.jpg" },
    { id: 4, name: "Safari Fotográfico en Kenia", destination: "Kenia", description: "<b>Masai Mara:</b> Observa la Gran Migración. <br><b>Lago Nakuru:</b> Flamencos rosados en un entorno único. <b>Monte Kenia:</b> Paisajes montañosos impresionantes.", imageColor: "#F4A460", continent: "África", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Masai_Mara_National_Reserve_Kenya_East_Africa.jpg/600px-Masai_Mara_National_Reserve_Kenya_East_Africa.jpg" },
    { id: 5, name: "Tesoros de Tanzania", destination: "Tanzania", description: "<b>Serengeti:</b> Vida salvaje en su máximo esplendor. <br><b>Kilimanjaro:</b> Reta a la montaña más alta de África. <b>Zanzíbar:</b> Playas de arena blanca y aguas turquesas.", imageColor: "#BDB76B", continent: "África", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kilimanjaro_from_above.jpg/600px-Kilimanjaro_from_above.jpg" },

    // América Central
    { id: 6, name: "Legado Maya en Guatemala", destination: "Guatemala", description: "<b>Tikal:</b> Impresionantes ruinas mayas en la selva. <br><b>Lago Atitlán:</b> Un lago rodeado de volcanes majestuosos. <b>Antigua:</b> Ciudad colonial con arquitectura barroca.", imageColor: "#4682B4", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tikal_Temple_I.jpg/600px-Tikal_Temple_I.jpg" },
    { id: 7, name: "Paraíso Caribeño en Belice", destination: "Belice", description: "<b>Gran Agujero Azul:</b> Un paraíso para el buceo. <br><b>Cayo Ambergris:</b> Relajación y aventura en un cayo hermoso. <b>Caracol:</b> Un sitio arqueológico maya en la selva.", imageColor: "#5F9EA0", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Blue_hole_2011_photo.jpg/600px-Blue_hole_2011_photo.jpg" },
    { id: 8, name: "Joyas de El Salvador", destination: "El Salvador", description: "<b>Ruta de las Flores:</b> Pueblos coloridos y paisajes exuberantes. <b>Joya de Cerén:</b> Un sitio arqueológico preservado por ceniza volcánica. <b>Volcanes:</b> Imponentes picos que dominan el paisaje.", imageColor: "#8A2BE2", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ruta_de_las_Flores_El_Salvador.jpg/600px-Ruta_de_las_Flores_El_Salvador.jpg" },
    { id: 9, name: "Aventura Hondureña", destination: "Honduras", description: "<b>Copán:</b> Ruinas mayas con estelas intrincadas. <br><b>Roatán:</b> Playas de arena blanca y arrecifes de coral. <b>La Ceiba:</b> Naturaleza exuberante y aventura en el Río Cangrejal.", imageColor: "#00CED1", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Copan_StelaA.JPG/600px-Copan_StelaA.JPG" },
    { id: 10, name: "Nicaragua Colonial y Natural", destination: "Nicaragua", description: "<b>Granada:</b> Ciudad colonial con arquitectura vibrante. <b>Islas del Maíz:</b> Un paraíso caribeño con playas de ensueño. <b>León:</b> Ciudad histórica con una rica herencia cultural.", imageColor: "#FF6347", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cathedral_of_Le%C3%B3n%2C_Nicaragua_%28exterior%29.jpg/600px-Cathedral_of_Le%C3%B3n%2C_Nicaragua_%28exterior%29.jpg" },
    { id: 11, name: "Pura Vida en Costa Rica", destination: "Costa Rica", description: "<b>Volcán Arenal:</b> Un volcán icónico rodeado de selva tropical. <b>Monteverde:</b> Bosque nuboso con una biodiversidad asombrosa. <b>Parque Nacional Manuel Antonio:</b> Playas vírgenes y vida silvestre abundante.", imageColor: "#32CD32", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Arenal_Volcano_Costa_Rica.jpg/600px-Arenal_Volcano_Costa_Rica.jpg" },
    { id: 12, name: "Contrastes de Panamá", destination: "Panamá", description: "<b>Canal de Panamá:</b> Una maravilla de la ingeniería moderna. <b>Islas San Blas:</b> Un archipiélago paradisíaco con cultura indígena. <b>Bocas del Toro:</b> Islas vibrantes con playas hermosas y ambiente relajado.", imageColor: "#FFD700", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Panama_Canal_Locks.jpg/600px-Panama_Canal_Locks.jpg" },
    { id: 13, name: "Ritmo Dominicano", destination: "República Dominicana", description: "<b>Punta Cana:</b> Playas de arena blanca y resorts de lujo. <b>Bahía de Samaná:</b> Avistamiento de ballenas jorobadas y paisajes espectaculares. <b>Zona Colonial:</b> Ciudad histórica con calles empedradas y arquitectura colonial. <b>Jarabacoa:</b> Montañas frescas, ríos y saltos de agua.", imageColor: "#1E90FF", continent: "América Central", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Zona_Colonial_Santo_Domingo.jpg/600px-Zona_Colonial_Santo_Domingo.jpg" },

    // Oceanía
    { id: 14, name: "Iconos de Australia", destination: "Australia", description: "<b>Ópera de Sídney:</b> Un ícono arquitectónico mundialmente famoso. <b>Gran Barrera de Coral:</b> El arrecife de coral más grande del mundo. <b>Uluru:</b> Un monolito sagrado en el corazón de Australia.", imageColor: "#DC143C", continent: "Oceanía", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sydney_Opera_House_Sails.jpg/600px-Sydney_Opera_House_Sails.jpg" },
    { id: 15, name: "Paisajes de Nueva Zelanda", destination: "Nueva Zelanda", description: "<b>Fiordos:</b> Paisajes impresionantes con cascadas y vida salvaje. <b>Rotorua:</b> Actividad geotérmica y cultura maorí. <b>Hobbiton:</b> El set de filmación de El Señor de los Anillos.", imageColor: "#2E8B57", continent: "Oceanía", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Milford_Sound_New_Zealand_Luca_Galuzzi_2007.jpg/600px-Milford_Sound_New_Zealand_Luca_Galuzzi_2007.jpg" },
    { id: 16, name: "Relax en Fiyi", destination: "Fiyi", description: "<b>Islas Mamanuca:</b> Islas tropicales con playas de ensueño. <b>Laguna Azul:</b> Aguas cristalinas y snorkel inolvidable. <b>Arrecifes vibrantes:</b> Un paraíso para los amantes del buceo.", imageColor: "#87CEEB", continent: "Oceanía", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Fiji_Beach.jpg/600px-Fiji_Beach.jpg" },
    { id: 17, name: "Cultura y Buceo en Papúa Nueva Guinea", destination: "Papúa Nueva Guinea", description: "<b>Culturas tribales ancestrales:</b> Descubre tradiciones únicas. <b>Buceo en aguas ricas:</b> Explora la biodiversidad marina. <b>Senderismo por paisajes únicos:</b> Aventúrate en la naturaleza virgen.", imageColor: "#D2691E", continent: "Oceanía", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Papua_New_Guinea-3775_gondola.jpg/600px-Papua_New_Guinea-3775_gondola.jpg" },
    { id: 18, name: "Paraíso Natural en Samoa", destination: "Samoa", description: "<b>Cascadas espectaculares:</b> Sumérgete en la belleza natural. <b>Playas vírgenes:</b> Relájate en la arena blanca. <b>To Sua:</b> Una piscina natural impresionante.", imageColor: "#6A5ACD", continent: "Oceanía", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/To_Sua_Ocean_Trench_Samoa.jpg/600px-To_Sua_Ocean_Trench_Samoa.jpg" },

    // América del Sur
    { id: 19, name: "Vibrante Brasil", destination: "Brasil", description: "<b>Río de Janeiro:</b> Playas famosas, el Cristo Redentor y el Pan de Azúcar. <b>Amazonía:</b> Explora la selva más grande del mundo. <b>Cataratas del Iguazú:</b> Un espectáculo natural impresionante.", imageColor: "#008000", continent: "América del Sur", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Vista_do_Cristo_Redentor_2016.jpg/600px-Vista_do_Cristo_Redentor_2016.jpg" },
    { id: 20, name: "Pasión Argentina", destination: "Argentina", description: "<b>Buenos Aires:</b> Baila tango en una ciudad llena de cultura. <b>Patagonia:</b> Paisajes vastos y glaciares imponentes. <b>Cataratas del Iguazú:</b> Comparte la maravilla con Brasil.", imageColor: "#ADD8E6", continent: "América del Sur", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Buenos_Aires_Obelisco_by_night.jpg/600px-Buenos_Aires_Obelisco_by_night.jpg" },
    { id: 21, name: "Perú Milenario", destination: "Perú", description: "<b>Machu Picchu:</b> La ciudadela inca en las alturas. <b>Cusco:</b> La antigua capital del Imperio Inca. <b>Lago Titicaca:</b> El lago navegable más alto del mundo.", imageColor: "#E6E6FA", continent: "América del Sur", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/600px-Machu_Picchu%2C_Peru.jpg" },
    { id: 22, name: "Chile: Tierra de Extremos", destination: "Chile", description: "<b>Desierto de Atacama:</b> El desierto más árido del mundo. <b>Torres del Paine:</b> Montañas imponentes y paisajes prístinos. <b>Santiago:</b> La capital moderna con vistas a los Andes.", imageColor: "#B0C4DE", continent: "América del Sur", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Atacama_Desert_in_Chile.jpg/600px-Atacama_Desert_in_Chile.jpg" },
    { id: 23, name: "Colombia Mágica", destination: "Colombia", description: "<b>Cartagena:</b> Ciudad colonial amurallada con encanto caribeño. <b>Medellín:</b> Innovación y transformación en la ciudad de la eterna primavera. <b>Zona Cafetera:</b> Paisajes verdes y aroma de café.", imageColor: "#FFFF00", continent: "América del Sur", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cartagena_Colombia_Palenquera.jpg/600px-Cartagena_Colombia_Palenquera.jpg" },

    // América del Norte
    { id: 24, name: "Experiencia en Estados Unidos", destination: "Estados Unidos", description: "<b>Nueva York:</b> Rascacielos icónicos y cultura vibrante. <b>Gran Cañón:</b> Un cañón inmenso con vistas espectaculares. <b>Yosemite:</b> Naturaleza impresionante y cascadas majestuosas.", imageColor: "#D3D3D3", continent: "América del Norte", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/NYC_Top_of_the_Rock_at_Sunset.jpg/600px-NYC_Top_of_the_Rock_at_Sunset.jpg" },
    { id: 25, name: "Maravillas de Canadá", destination: "Canadá", description: "<b>Toronto:</b> Una ciudad cosmopolita con diversidad cultural. <b>Cataratas del Niágara:</b> Una maravilla natural impresionante. <b>Parque Nacional Banff:</b> Montañas, lagos y vida silvestre en las Rocosas canadienses.", imageColor: "#FF69B4", continent: "América del Norte", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Toronto_skyline_evening_June_2017.jpg/600px-Toronto_skyline_evening_June_2017.jpg" },
    { id: 26, name: "México: Sol y Cultura", destination: "México", description: "<b>Cancún:</b> Playas de arena blanca y aguas turquesas. <b>Ciudad de México:</b> Historia, arte y gastronomía en una metrópoli vibrante. <b>Chichén Itzá:</b> Un sitio arqueológico maya impresionante.", imageColor: "#AFEEEE", continent: "América del Norte", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Chichen-Itza-Castillo-View.jpg/600px-Chichen-Itza-Castillo-View.jpg" },

    // Asia
    { id: 27, name: "Gigante Asiático: China", destination: "China", description: "<b>Gran Muralla:</b> Una antigua fortificación que serpentea por las montañas. <b>Pekín:</b> La capital con historia y cultura. <b>Shanghái:</b> Una metrópoli moderna con rascacielos impresionantes.", imageColor: "#FF0000", continent: "Asia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/GreatWallNearBeijing.jpg/600px-GreatWallNearBeijing.jpg" },
    { id: 28, name: "Japón: Tradición y Modernidad", destination: "Japón", description: "<b>Tokio:</b> Una metrópolis vibrante con tecnología y cultura pop. <b>Kioto:</b> Templos antiguos y jardines zen. <b>Monte Fuji:</b> Un volcán icónico y sagrado.", imageColor: "#ADD8E6", continent: "Asia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Mount_Fuji_from_Mount_Mitsutoge.jpg/600px-Mount_Fuji_from_Mount_Mitsutoge.jpg" },
    { id: 29, name: "India Increíble", destination: "India", description: "<b>Taj Mahal:</b> Un mausoleo de mármol blanco, símbolo del amor eterno. <b>Jaipur:</b> La ciudad rosa con palacios y fuertes. <b>Kerala:</b> Playas, remansos y especias.", imageColor: "#FFA500", continent: "Asia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Taj_Mahal_in_March_2004.jpg/600px-Taj_Mahal_in_March_2004.jpg" },
    { id: 30, name: "Exótica Indonesia", destination: "Indonesia", description: "<b>Bali:</b> Templos, playas y arrozales en una isla paradisíaca. <b>Java:</b> Cultura y volcanes activos. <b>Borneo:</b> Selva tropical y orangutanes.", imageColor: "#98FB98", continent: "Asia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Pura_Ulun_Danu_Beratan.jpg/600px-Pura_Ulun_Danu_Beratan.jpg" },
    { id: 31, name: "Sonrisas de Tailandia", destination: "Tailandia", description: "<b>Bangkok:</b> Templos dorados y mercados flotantes. <b>Phuket:</b> Playas de arena blanca y vida nocturna vibrante. <b>Chiang Mai:</b> Templos antiguos y elefantes.", imageColor: "#FFC0CB", continent: "Asia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Wat_Arun_at_night.jpg/600px-Wat_Arun_at_night.jpg" },

    // Europa
    { id: 32, name: "Romance en Francia", destination: "Francia", description: "<b>París:</b> La ciudad del amor, con la Torre Eiffel y el Louvre. <b>Costa Azul:</b> Playas glamurosas y pueblos pintorescos. <b>Castillos del Loira:</b> Arquitectura renacentista y jardines elegantes.", imageColor: "#FFB6C1", continent: "Europa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_Wikimedia_Commons.jpg/600px-La_Tour_Eiffel_Wikimedia_Commons.jpg" },
    { id: 33, name: "Arte e Historia en Italia", destination: "Italia", description: "<b>Roma:</b> El Coliseo, el Foro Romano y la Ciudad del Vaticano. <b>Venecia:</b> Canales, góndolas y arquitectura única. <b>Florencia:</b> Arte renacentista y el David de Miguel Ángel.", imageColor: "#FFD700", continent: "Europa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/600px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg" },
    { id: 34, name: "Pasión Española", destination: "España", description: "<b>Barcelona:</b> Arquitectura modernista de Gaudí y playas hermosas. <b>Madrid:</b> Museos, palacios y tapas. <b>Sevilla:</b> Flamenco, la Giralda y el Real Alcázar.", imageColor: "#FA8072", continent: "Europa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sagrada_Familia_Barcelona_Spain_January_2017.jpg/600px-Sagrada_Familia_Barcelona_Spain_January_2017.jpg" },
    { id: 35, name: "Descubre Alemania", destination: "Alemania", description: "<b>Berlín:</b> Historia, cultura y arte contemporáneo. <b>Baviera:</b> Castillos de cuento de hadas y paisajes alpinos. <b>Selva Negra:</b> Bosques densos y relojes de cuco.", imageColor: "#DCDCDC", continent: "Europa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Brandenburger_Tor_abends.jpg/600px-Brandenburger_Tor_abends.jpg" },
    { id: 36, name: "Iconos del Reino Unido", destination: "Reino Unido", description: "<b>Londres:</b> El Big Ben, el Palacio de Buckingham y la Torre de Londres. <b>Edimburgo:</b> Castillo medieval y festivales culturales. <b>Stonehenge:</b> Un monumento prehistórico misterioso.", imageColor: "#A9A9A9", continent: "Europa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Houses_of_Parliament_from_Victoria_Tower_Gardens%2C_London_-_May_2007.jpg/600px-Houses_of_Parliament_from_Victoria_Tower_Gardens%2C_London_-_May_2007.jpg" },
];

// Function to create placeholder SVG
function createPlaceholderSvg(color = '#ccc', text = 'Imagen', imageUrl = null) {
    if (imageUrl) {
        return `<img src="${imageUrl}" alt="${text}" class="card-img-top" style="object-fit: cover; height: 180px;">`;
    }
    const tcColor = typeof tinycolor !== 'undefined' ? tinycolor(color) : null;
    const darkerColor = tcColor ? tcColor.darken(10).toString() : '#b3b3b3';
    const gradientId = `grad-${Math.random().toString(16).slice(2)}`;

    return `
    <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" class="card-img-top">
        <defs>
            <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${darkerColor};stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="100" height="60" fill="url(#${gradientId})"/>
        <text x="50" y="35" font-size="8" text-anchor="middle" fill="#fff" style="text-shadow: 1px 1px 2px rgba(0,0,0,0.4);">${text}</text>
    </svg>`;
}

// Function to render package cards using Bootstrap structure
function renderPackages(packagesToRender) {
    const packagesList = $('#packages-list');
    packagesList.addClass('filtering');
    $('.loading-message', packagesList).remove();

    setTimeout(() => {
        packagesList.empty();

        if (packagesToRender.length === 0) {
            packagesList.append('<div class="col-12"><p class="no-results-message text-center text-muted">No se encontraron paquetes que coincidan con tu búsqueda.</p></div>');
        } else {
            const groupedPackages = packagesToRender.reduce((acc, pkg) => {
                const continent = pkg.continent;
                if (!acc[continent]) {
                    acc[continent] = [];
                }
                acc[continent].push(pkg);
                return acc;
            }, {});

            for (const continent in groupedPackages) {
                if (groupedPackages.hasOwnProperty(continent)) {
                    const continentPackages = groupedPackages[continent];

                    packagesList.append(`<div class="col-12"><h3 class="continent-heading">${continent}</h3></div>`);

                    continentPackages.forEach((pkg, index) => {
                        const packageCardHtml = `
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="card h-100 shadow-sm package-card animate-on-scroll" data-destination="${pkg.destination.toLowerCase()}" style="--animation-order: ${index};">
                                    ${createPlaceholderSvg(pkg.imageColor, pkg.destination, pkg.imageUrl)}
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">${pkg.name}</h5>
                                        <p class="card-text flex-grow-1">${pkg.description}</p>
                                        <div class="mt-auto d-flex justify-content-between align-items-center">
                                            <span class="badge bg-secondary destination-tag">${pkg.destination}</span>
                                            <button class="btn btn-primary btn-sm details-btn">Ver Detalles</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        const $newCardWrapper = $(packageCardHtml).appendTo(packagesList);
                        observeElement($newCardWrapper.find('.package-card')[0]);
                    });
                }
            }
        }

        packagesList.removeClass('filtering');

    }, 150);
}

// Function to filter packages
function filterPackages() {
    const filterValue = $('#destination-filter').val().trim().toLowerCase();
    const clearButton = $('#clear-filter-btn');
    let filteredPackages;

    if (!filterValue) {
        filteredPackages = allPackages;
        clearButton.hide();
    } else {
        filteredPackages = allPackages.filter(pkg =>
            pkg.destination.toLowerCase().includes(filterValue) ||
            pkg.name.toLowerCase().includes(filterValue) ||
            pkg.continent.toLowerCase().includes(filterValue)
        );
        clearButton.show();
    }
    renderPackages(filteredPackages);
}

// --- Intersection Observer for Animations ---
let observer;

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
        }
    });
}

function observeElement(element) {
    if (observer && element) {
        observer.observe(element);
    }
}

function initScrollObserver() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll:not(.package-card)');
    const cardElements = document.querySelectorAll('.package-card.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    observer = new IntersectionObserver(handleIntersection, observerOptions);

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

$(document).ready(function () {

    // Initialize Slick Carousel
    $('.image-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Render initial packages
    renderPackages(allPackages);

    // Filter Input Handling
    let filterTimeout;
    $('#destination-filter').on('input', function () {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(filterPackages, 300);
    });

    // Clear Filter Button
    $('#clear-filter-btn').on('click', function () {
        $('#destination-filter').val('').trigger('input');
    });

    // Smooth Scrolling for Navbar Links
    $('.navbar a.nav-link[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var navHeight = $('.navbar').outerHeight() || 70;
            $('html, body').stop().animate({
                scrollTop: target.offset().top - navHeight
            }, 600, 'swing');

            var navbarToggler = $('.navbar-toggler');
            if (navbarToggler.attr('aria-expanded') === 'true') {
                navbarToggler.trigger('click');
            }
        }
    });

    // Add Destinations link
    $('.navbar-nav').append('<li class="nav-item"><a class="nav-link" href="destinations.html">Todos los Destinos</a></li>');


    // Initialize Scroll Animations
    initScrollObserver();

    // Initial Load Animations 
    $('.animate-on-load').each(function (index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(-20px)',
            'transition': `opacity 0.5s ease-out ${index * 0.15}s, transform 0.5s ease-out ${index * 0.15}s`
        });
        setTimeout(() => {
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }, 50);
    });

    // Handle clicks on details buttons
    $('#packages-list').on('click', '.details-btn', function () {
        const card = $(this).closest('.package-card');
        const destination = card.find('.destination-tag').text();
        window.location.href = `destinations.html?destination=${destination}`;
    });
});