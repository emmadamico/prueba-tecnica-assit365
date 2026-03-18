// Desafío: Test: flujo completo de reserva (end-to-end)
// Modo Script completo
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Helper de logs con timestamp
  const log = (msg) => {
    console.log(`[${new Date().toLocaleDateString()}] ${msg}`);
  }

  try {
    // Home
    log('Navegando a la Home');
    await page.goto('http://3.239.228.202:3000');

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    const formattedDate = futureDate.toISOString().split('T')[0];

    await page.fill('#origin', 'Buenos Aires (EZE)');
    await page.fill('#destination', 'Miami (MIA)');
    await page.fill('#depDate', formattedDate);

    log('Buscando vuelos');
    await page.click('.btn-search');

    // Resultados
    await page.waitForURL('**/results.html**');
    log('Página de resultados cargada');

    const flights = await page.locator('.flight-card').count();
    log(`Vuelos encontrados: ${flights}`);

    // Seleccionar el primer vuelo
    await page.locator('.btn-select').first().click()

    // Detalle
    await page.waitForURL('**/detail.html**');
    log('Página de detalle cargada');

    const detailPriceText = await page.locator('#totalDisplay').textContent();
    const detailPrice = parseFloat(detailPriceText.replace(/[^\d.]/g, ''));
    log(`Precio en detalle: ${detailPrice}`);

    // Form pasajero
    await page.fill('#firstName', 'Juan');
    await page.fill('#lastName', 'Perez');
    await page.fill('#docNumber', '12345678');
    await page.fill('#contactEmail', 'juan@test.com');

    log('Datos de pasajero cargados');

    // Avanzar al checkout
    await page.getByText('Continuar al pago').click();

    // Checkout
    await page.waitForURL('**/checkout.html**');
    log('Página de checkout cargada');

    const checkoutPriceText = await page.locator('#checkoutTotal').textContent();
    const checkoutPrice = parseFloat(checkoutPriceText.replace(/[^\d.]/g, ''));
    log(`Precio en detalle: ${checkoutPrice}`);

    // Validación
    if (detailPrice === checkoutPrice) {
        log('PASS: los precios coinciden');
    } else {
        log('FAIL: los precios no coinciden');
        log(`Detalle: ${detailPrice} vs Checkout: ${checkoutPrice}`);
    }
  } catch (error) {
    console.error('ERROR en el flujo: ', error);
  } finally {
    await browser.close();
  }
})();