// Desafío: Verificar respuesta de todas las páginas
// Modo Página — usá `page` directamente, el sitio ya está abierto.

const baseURL = 'http://3.239.228.202:3000';

const rutas = ['/', '/results.html', '/login.html', '/cart.html', '/console.html'];

// Header de la tabla
console.log('RUTA'.padEnd(20) + 'READY STATE'.padEnd(15) + 'TÍTULO');

console.log('-'.repeat(60));

for (const ruta of rutas) {
    const url = baseURL + ruta;

    await page.goto(url);

    const readyState = await page.evaluate(() => document.readyState);
    const title = await page.title();

    console.log(ruta.padEnd(20) + readyState.padEnd(15) + title);
}