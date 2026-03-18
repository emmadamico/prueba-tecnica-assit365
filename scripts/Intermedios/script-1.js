// Desafío: Test: flujo de búsqueda de vuelos
// Modo Página — usá `page` directamente, el sitio ya está abierto.

// Calcular fecha de hoy + 30 dias
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30);
const formattedDate = futureDate.toISOString().split('T')[0];

// Completar el formulario
await page.fill('#origin', 'Buenos Aires (EZE)');
await page.fill('#destination', 'Miami (MIA)');
await page.fill('#depDate', formattedDate);

// Click en buscar
await page.click('.btn-search');
// Esperar la navegación a los resultados de la búsqueda
await page.waitForURL('**/results.html**');

// Contar vuelos
const flightCount = await page.locator('.flight-card').count();

// Imprimir el resultado
console.log(`Cantidad de vuelos encontados: ${flightCount}`);