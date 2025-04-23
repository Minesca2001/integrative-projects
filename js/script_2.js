// Sample Travel Package Data
const allPackages = [
    // África
    { id: 1, name: "Maravillas de Egipto", destination: "Egipto", description: "Explora las Pirámides de Giza, Luxor y relájate en el Mar Rojo.", imageColor: "#DAA520", continent: "África", 
      about: "Egipto, cuna de una de las civilizaciones más antiguas, ofrece una mezcla fascinante de historia, cultura y belleza natural.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pyramids_at_Giza.jpg/440px-Pyramids_at_Giza.jpg" },
    { id: 2, name: "Aventura Sudafricana", destination: "Sudáfrica", description: "Safari en Kruger, vistas desde Table Mountain y recorrido por la Ruta Jardín.", imageColor: "#FFBF00", continent: "África",
      about: "Sudáfrica, un país de diversidad asombrosa, desde sus safaris de vida silvestre hasta sus paisajes urbanos vibrantes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Table_Mountain_from_Bloubergstrand_Feb_2014_diluted.jpg/440px-Table_Mountain_from_Bloubergstrand_Feb_2014_diluted.jpg" },
    { id: 3, name: "Encantos de Marruecos", destination: "Marruecos", description: "Sumérgete en los zocos de Marrakech, la historia de Fez y el Desierto del Sahara.", imageColor: "#C85A17", continent: "África",
      about: "Marruecos, un país de contrastes, donde las antiguas tradiciones se encuentran con la modernidad en un torbellino de colores y aromas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Marrakesh_-_Djemaa_el-Fna_-_Square.jpg/440px-Marrakesh_-_Djemaa_el-Fna_-_Square.jpg" },
    { id: 4, name: "Safari Fotográfico en Kenia", destination: "Kenia", description: "Observa la Gran Migración en Masai Mara, flamencos en Lago Nakuru y el Monte Kenia.", imageColor: "#F4A460", continent: "África",
      about: "Kenia, un destino de ensueño para los amantes de la naturaleza, hogar de algunos de los paisajes y la vida silvestre más espectaculares de África.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Masai_Mara_National_Reserve%2C_Kenya..jpg/440px-Masai_Mara_National_Reserve%2C_Kenya..jpg" },
    { id: 5, name: "Tesoros de Tanzania", destination: "Tanzania", description: "Vive el Serengeti, conquista el Kilimanjaro y descansa en las playas de Zanzíbar.", imageColor: "#BDB76B", continent: "África",
      about: "Tanzania, un país de maravillas naturales, desde las llanuras del Serengeti hasta las cumbres nevadas del Kilimanjaro y las playas tropicales de Zanzíbar.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Serengeti_Tanzania.jpg/440px-Serengeti_Tanzania.jpg" },

    // América Central
    { id: 6, name: "Legado Maya en Guatemala", destination: "Guatemala", description: "Descubre las ruinas de Tikal, la belleza del Lago Atitlán y la colonial Antigua.", imageColor: "#4682B4", continent: "América Central",
      about: "Guatemala, un país de rica historia maya y belleza natural impresionante.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/GuateAntiguaIglesia.JPG/440px-GuateAntiguaIglesia.JPG" },
    { id: 7, name: "Paraíso Caribeño en Belice", destination: "Belice", description: "Bucea en el Gran Agujero Azul, relájate en Cayo Ambergris y explora Caracol.", imageColor: "#5F9EA0", continent: "América Central",
      about: "Belice, un paraíso caribeño con una biodiversidad marina excepcional.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Aerial_view_of_the_Great_Blue_Hole.jpg/440px-Aerial_view_of_the_Great_Blue_Hole.jpg" },
    { id: 8, name: "Joyas de El Salvador", destination: "El Salvador", description: "Recorre la Ruta de las Flores, visita la 'Pompeya de América' Joya de Cerén y admira sus volcanes.", imageColor: "#8A2BE2", continent: "América Central",
      about: "El Salvador, un país de paisajes volcánicos y cultura vibrante.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Ruta_de_Las_Flores_-_El_Salvador.jpg/440px-Ruta_de_Las_Flores_-_El_Salvador.jpg" },
    { id: 9, name: "Aventura Hondureña", destination: "Honduras", description: "Explora las ruinas mayas de Copán, disfruta las playas de Roatán y la naturaleza de La Ceiba.", imageColor: "#00CED1", continent: "América Central",
      about: "Honduras, un país de historia maya y playas caribeñas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Copan_AltarQ.JPG/440px-Copan_AltarQ.JPG" },
    { id: 10, name: "Nicaragua Colonial y Natural", destination: "Nicaragua", description: "Pasea por Granada, escapa a las Islas del Maíz y visita la histórica León.", imageColor: "#FF6347", continent: "América Central",
      about: "Nicaragua, un país de ciudades coloniales y belleza natural.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cathedral_of_Leon_Nicaragua_from_the_air.jpg/440px-Cathedral_of_Leon_Nicaragua_from_the_air.jpg" },
    { id: 11, name: "Pura Vida en Costa Rica", destination: "Costa Rica", description: "Admira el volcán Arenal, explora el bosque nuboso de Monteverde y el Parque Nacional Manuel Antonio.", imageColor: "#32CD32", continent: "América Central",
      about: "Costa Rica, un paraíso de biodiversidad y aventura.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Arenal_Volcano_Costa_Rica_Luca_Galuzzi_2006.JPG/440px-Arenal_Volcano_Costa_Rica_Luca_Galuzzi_2006.JPG" },
    { id: 12, name: "Contrastes de Panamá", destination: "Panamá", description: "Maravíllate con el Canal, navega por las islas San Blas y relájate en Bocas del Toro.", imageColor: "#FFD700", continent: "América Central",
      about: "Panamá, un país de maravillas de ingeniería y belleza caribeña.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Panama_Canal_locks_2018.jpg/440px-Panama_Canal_locks_2018.jpg" },
    { id: 13, name: "Ritmo Dominicano", destination: "República Dominicana", description: "Disfruta de Punta Cana, la bahía de Samaná, la Zona Colonial y el fresco Jarabacoa.", imageColor: "#1E90FF", continent: "América Central",
      about: "República Dominicana, un destino caribeño de playas, historia y aventura.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Zona_Colonial%2C_Santo_Domingo.jpg/440px-Zona_Colonial%2C_Santo_Domingo.jpg" },

    // Oceanía
    { id: 14, name: "Iconos de Australia", destination: "Australia", description: "Visita la Ópera de Sídney, explora la Gran Barrera de Coral y admira Uluru.", imageColor: "#DC143C", continent: "Oceanía",
      about: "Australia, un continente de paisajes icónicos y vida silvestre única.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sydney_Opera_House_Sails.jpg/440px-Sydney_Opera_House_Sails.jpg" },
    { id: 15, name: "Paisajes de Nueva Zelanda", destination: "Nueva Zelanda", description: "Navega por los fiordos, siente la energía geotérmica de Rotorua y visita Hobbiton.", imageColor: "#2E8B57", continent: "Oceanía",
      about: "Nueva Zelanda, un país de paisajes de ensueño y aventura.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Milford_Sound_New_Zealand_Luca_Galuzzi_2007.JPG/440px-Milford_Sound_New_Zealand_Luca_Galuzzi_2007.JPG" },
    { id: 16, name: "Relax en Fiyi", destination: "Fiyi", description: "Disfruta de las Islas Mamanuca, navega por la Laguna Azul y haz snorkel en arrecifes vibrantes.", imageColor: "#87CEEB", continent: "Oceanía",
      about: "Fiyi, un archipiélago de islas paradisíacas para relajarse y explorar.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Fiji_beach_scene.jpg/440px-Fiji_beach_scene.jpg" },
    { id: 17, name: "Cultura y Buceo en Papúa Nueva Guinea", destination: "Papúa Nueva Guinea", description: "Conoce culturas tribales ancestrales, bucea en aguas ricas y haz senderismo por paisajes únicos.", imageColor: "#D2691E", continent: "Oceanía",
      about: "Papúa Nueva Guinea, un tesoro de culturas ancestrales y biodiversidad.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Papuan_man_ornamented_for_a_sing-sing.jpg/440px-Papuan_man_ornamented_for_a_sing-sing.jpg" },
    { id: 18, name: "Paraíso Natural en Samoa", destination: "Samoa", description: "Descubre cascadas espectaculares, playas vírgenes y refréscate en la piscina natural To Sua.", imageColor: "#6A5ACD", continent: "Oceanía",
      about: "Samoa, un edén de cascadas y playas vírgenes para explorar.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/To_Sua_Ocean_Trench_Samoa.jpg/440px-To_Sua_Ocean_Trench_Samoa.jpg" },

    // América del Sur
    { id: 19, name: "Vibrante Brasil", destination: "Brasil", description: "Siente el ritmo de Río de Janeiro, explora la Amazonía y maravíllate con las Cataratas del Iguazú.", imageColor: "#008000", continent: "América del Sur",
      about: "Brasil, un país de playas, selvas y carnaval.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Aerial_Rio_Janeiro_and_Corcovado_edit.jpg/440px-Aerial_Rio_Janeiro_and_Corcovado_edit.jpg" },
    { id: 20, name: "Pasión Argentina", destination: "Argentina", description: "Baila tango en Buenos Aires, recorre la vasta Patagonia y visita las Cataratas del Iguazú.", imageColor: "#ADD8E6", continent: "América del Sur",
      about: "Argentina, un país de tango, vino y paisajes extremos.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/9_el_calafate_perito_moreno_glaciar.jpg/440px-9_el_calafate_perito_moreno_glaciar.jpg" },
    { id: 21, name: "Perú Milenario", destination: "Perú", description: "Descubre Machu Picchu, explora Cusco y navega por el Lago Titicaca.", imageColor: "#E6E6FA", continent: "América del Sur",
      about: "Perú, un país de historia incaica y maravillas naturales.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/440px-Machu_Picchu%2C_Peru.jpg" }, 
    { id: 22, name: "Chile: Tierra de Extremos", destination: "Chile", description: "Desde el Desierto de Atacama hasta las Torres del Paine, pasando por Santiago.", imageColor: "#B0C4DE", continent: "América del Sur",
      about: "Chile, un país de desiertos, montañas y viñedos.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Atacama_Desert_Chile.jpg/440px-Atacama_Desert_Chile.jpg" },
    { id: 23, name: "Colombia Mágica", destination: "Colombia", description: "Recorre la histórica Cartagena, la innovadora Medellín y la hermosa Zona Cafetera.", imageColor: "#FFFF00", continent: "América del Sur",
      about: "Colombia, un país de café, flores y cultura vibrante.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Cartagena_de_Indias%2C_Colombia.jpg/440px-Cartagena_de_Indias%2C_Colombia.jpg" },

    // América del Norte
    { id: 24, name: "Experiencia en Estados Unidos", destination: "Estados Unidos", description: "Descubre Nueva York, el Gran Cañón y la naturaleza de Yosemite.", imageColor: "#D3D3D3", continent: "América del Norte",
      about: "Estados Unidos, un país de ciudades icónicas y maravillas naturales.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Lower_Manhattan_from_Liberty_Island_April_2010_corrected.jpg/440px-Lower_Manhattan_from_Liberty_Island_April_2010_corrected.jpg" }, 
    { id: 25, name: "Maravillas de Canadá", destination: "Canadá", description: "Visita Toronto, las Cataratas del Niágara y el Parque Nacional Banff.", imageColor: "#FF69B4", continent: "América del Norte",
      about: "Canadá, un país de naturaleza virgen y ciudades cosmopolitas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Moraine_Lake_ Banff_National_Park.jpg/440px-Moraine_Lake_%28Banff_National_Park%29.jpg" },
    { id: 26, name: "México: Sol y Cultura", destination: "México", description: "Relájate en Cancún, explora Ciudad de México y visita Chichén Itzá.", imageColor: "#AFEEEE", continent: "América del Norte",
      about: "México, un país de playas, ruinas mayas y cultura vibrante.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Chichen_Itza_3.jpg/440px-Chichen_Itza_3.jpg" }, 

    // Asia
    { id: 27, name: "Gigante Asiático: China", destination: "China", description: "Camina por la Gran Muralla, visita Pekín y la moderna Shanghái.", imageColor: "#FF0000", continent: "Asia",
      about: "China, un país de historia antigua y modernidad deslumbrante.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/440px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg" },
    { id: 28, name: "Japón: Tradición y Modernidad", destination: "Japón", description: "Explora Tokio, la cultural Kioto y admira el Monte Fuji.", imageColor: "#ADD8E6", continent: "Asia",
      about: "Japón, un país de templos antiguos y rascacielos futuristas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Fuji_Hakone.JPG/440px-Fuji_Hakone.JPG" }, 
    { id: 29, name: "India Increíble", destination: "India", description: "Visita el Taj Mahal, explora Jaipur y relájate en Kerala.", imageColor: "#FFA500", continent: "Asia",
      about: "India, un país de espiritualidad, color y diversidad.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Taj_Mahal_Agra_India_Dawn_edit.jpg/440px-Taj_Mahal_Agra_India_Dawn_edit.jpg" },
    { id: 30, name: "Exótica Indonesia", destination: "Indonesia", description: "Descubre Bali, la cultura de Java y la selva de Borneo.", imageColor: "#98FB98", continent: "Asia",
      about: "Indonesia, un archipiélago de islas volcánicas y culturas diversas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Borobudur_Temple.jpg/440px-Borobudur_Temple.jpg" },
    { id: 31, name: "Sonrisas de Tailandia", destination: "Tailandia", description: "Vive Bangkok, relájate en las playas de Phuket y visita los templos de Chiang Mai.", imageColor: "#FFC0CB", continent: "Asia",
      about: "Tailandia, un país de templos dorados y playas tropicales.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Wat_Arun_Ratchawararam_Ratchawaramahawihan.jpg/440px-Wat_Arun_Ratchawararam_Ratchawaramahawihan.jpg" },

    // Europa
    { id: 32, name: "Romance en Francia", destination: "Francia", description: "Disfruta de París, la Costa Azul y los Castillos del Loira.", imageColor: "#FFB6C1", continent: "Europa",
      about: "Francia, un país de romance, arte y gastronomía.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_Wikimedia_Commons.jpg/440px-La_Tour_Eiffel_Wikimedia_Commons.jpg" }, 
    { id: 33, name: "Arte e Historia en Italia", destination: "Italia", description: "Recorre Roma, navega por Venecia y admira el arte de Florencia.", imageColor: "#FFD700", continent: "Europa",
      about: "Italia, un país de historia antigua y arte renacentista.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/440px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg" }, 
    { id: 34, name: "Pasión Española", destination: "España", description: "Descubre Barcelona, Madrid y la vibrante Sevilla.", imageColor: "#FA8072", continent: "Europa",
      about: "España, un país de flamenco, tapas y arquitectura impresionante.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Barcelona_Sagrada_Familia_Basilica.jpg/440px-Barcelona_Sagrada_Familia_Basilica.jpg" },
    { id: 35, name: "Descubre Alemania", destination: "Alemania", description: "Explora Berlín, los paisajes de Baviera y la mística Selva Negra.", imageColor: "#DCDCDC", continent: "Europa",
      about: "Alemania, un país de historia, cultura y paisajes variados.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Brandenburger_Tor_abends.jpg/440px-Brandenburger_Tor_abends.jpg" },
    { id: 36, name: "Iconos del Reino Unido", destination: "Reino Unido", description: "Visita Londres, la histórica Edimburgo y el misterioso Stonehenge.", imageColor: "#A9A9A9", continent: "Europa",
      about: "Reino Unido, un país de historia real y patrimonio cultural.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Palace_of_Westminster_from_the_southwest_%281%29.jpg/440px-Palace_of_Westminster_from_the_southwest_%281%29.jpg" },
];

// Function to create placeholder SVG
function createPlaceholderSvg(color = '#ccc', text = 'Imagen') {
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
                                    ${createPlaceholderSvg(pkg.imageColor, pkg.destination)}
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

$(document).ready(function(){

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
    $('#destination-filter').on('input', function() {
        clearTimeout(filterTimeout);
        filterTimeout = setTimeout(filterPackages, 300); 
    });

    // Clear Filter Button
    $('#clear-filter-btn').on('click', function() {
        $('#destination-filter').val('').trigger('input'); 
    });

    // Smooth Scrolling for Navbar Links
    $('.navbar a.nav-link[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
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
    $('.animate-on-load').each(function(index) {
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
    $('#packages-list').on('click', '.details-btn', function() {
        const card = $(this).closest('.package-card');
        const destination = card.find('.destination-tag').text();
        window.location.href = `destinations.html?destination=${destination}`;
    });
});