// Desafío: Audit: verificación del ordenamiento de precios
// Modo Script completo
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const log = (msg) => console.log(`[${new Date().toLocaleTimeString()}] ${msg}`);

  try {
    // Ir a la página de resultados
    await page.goto('http://3.239.228.202:3000/results.html');
    log('Página de resultados cargada');

    // Extraer precios iniciales
    const getPrices = async () => {
        return await page.evaluate(() => Array.from(document.querySelectorAll(".flight-card")).map(c => parseInt(c.dataset.price))
        );
    };

    const initialPrices = await getPrices();
    log(`Precios iniciales: ${initialPrices.join(', ')}`);

    // Aplicar ordenamiento
    await page.selectOption('#sortSelect', 'price_asc');
    log('Orden aplicado: precio ascendente');

    // Espera
    await page.waitForTimeout(500);

    // Extraer precios ordenados
    const sortedUIPrices = await getPrices();
    log(`Precios ordenados: ${sortedUIPrices.join(', ')}`);

    // Orden esperado
    const expectedSorted = [...initialPrices].sort((a,b) => a - b)
    log(`Orden esperado: ${expectedSorted.join(', ')}`);

    // Validación
    const isCorrect = sortedUIPrices.lenght === expectedSorted.lenght && sortedUIPrices.every((val, i) => val === expectedSorted[i]);

    if (isCorrect) {
        log('PASS: Ordenamiento correcto - Ascendente');
    } else {
        log('FAIL: Ordenamiento incorrecto');
    }
  } catch (error) {
    console.error('ERROR en el test:', error.message);
  } finally {
    await browser.close();
  }

})();