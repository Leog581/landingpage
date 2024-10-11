// Datos de todas las skins
const skins = [
    { tipo: 'oferta', nombre: "★ Butterfly Knife | Doppler", oldPrice: "$2800", newPrice: "$2500", img: "images/skin10.png" },
    { tipo: 'oferta', nombre: "USP-S | Printstream (Field-Tested)", oldPrice: "$150", newPrice: "$100", img: "images/skin11.png" },
    { tipo: 'oferta', nombre: "Glock-18 Fade", oldPrice: "$300", newPrice: "$250", img: "images/skin5.png" },
    { tipo: 'oferta', nombre: "M4A1 | Hyper Beast", oldPrice: "$600", newPrice: "$450", img: "images/skin2.png" },
    { tipo: 'oferta', nombre: "AK-47 | Vulcan", oldPrice: "$400", newPrice: "$300", img: "images/skin4.png" },

    { tipo: 'vendida', nombre: "AWP Asiimov", precio: "$400", img: "images/skin6.png" },
    { tipo: 'vendida', nombre: "M4A4 Howl", precio: "$500", img: "images/skin7.png" },
    { tipo: 'vendida', nombre: "Desert Eagle Blaze", precio: "$700", img: "images/skin8.png" },
    
    { tipo: 'destacada', nombre: "AWP Dragon Lore", precio: "$1,200", img: "images/skin1.png" },
    { tipo: 'destacada', nombre: "AK-47 Redline", precio: "$300", img: "images/skin2.png" },
    { tipo: 'destacada', nombre: "Karambit ★ | Doppler gamma", precio: "$2,000", img: "images/skin9.png" },
];

// Función para generar las tarjetas de skins
function generarTarjetasSkins(skins) {
    skins.forEach(skin => {
        const contenedorId = skin.tipo === 'oferta' ? 'ofertas-grid' :
                            skin.tipo === 'vendida' ? 'mas-vendidas-grid' :
                            'destacadas-grid'; // Asignar el contenedor correspondiente

        const contenedor = document.getElementById(contenedorId);
        const skinItem = document.createElement('div');
        skinItem.classList.add('skin-item');

        if (skin.tipo === 'oferta') {
            skinItem.innerHTML = `
                <img src="${skin.img}" alt="${skin.nombre}">
                <h4>${skin.nombre}</h4>
                <p class="old-price">${skin.oldPrice}</p>
                <p class="new-price">${skin.newPrice}</p>
                <button class="btn">Comprar</button>
            `;
        } else {
            skinItem.innerHTML = `
                <img src="${skin.img}" alt="${skin.nombre}">
                <h4>${skin.nombre}</h4>
                <p class="current-price">${skin.precio}</p>
                <button class="btn">Comprar</button>
            `;
        }

        contenedor.appendChild(skinItem);
    });
}

// Generar todas las skins al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    generarTarjetasSkins(skins);
});
