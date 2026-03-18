// Desafío: Captura de pantalla de la homepage
// Modo Script completo
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Navegar a la homepage
  await page.goto('http://3.239.228.202:3000');

  // Esperar a que cargue
  await page.waitForLoadState('networkidle');

  // Tomar screenshot full page
  const path = '/tmp/aerovista.png';
  await page.screenshot({ path, fullPage: true });

  console.log(`Screenshot generado correctamente en: ${path}`);

  await browser.close();
})();