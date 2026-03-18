// Desafío: Bug hunt automatizado: bugs simples de UI
// Modo Script completo
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let passed = 0;
  let failed = 0;

  const bug = (id, desc) => {
    failed++;
    console.error(`BUG: [${id}] ${desc}`);
  };

  const ok = (desc) => {
    passed++;
    console.error(`PASS ${desc}`);
  };

  try {
    await page.goto('http://3.239.228.202:3000');
    await page.waitForTimeout(1000);

    // Bug 1: año de copyright
    const footerText = await page.locator('footer').textContent().catch(() => '');
    const currentYear = new Date ().getFullYear().toString();
    const footerYearMatch = (footerText || '').match(/\b(20\d{2})\b/);

    if (!footerYearMatch) {
        bug('UI-001', 'No se encontró un año de copyright en el footer');
    } else if (footerYearMatch[1] !== currentYear) {
        bug('UI-001', 'Año de copyright desactualizado');
    } else {
        ok('Footer con año actualizado');
    }

    // Bug 2: Textos con typos en la navegación
    const expectedNavLabels = ['Vuelos', 'Paquetes', 'Hoteles', 'Ofertas'];

    const navTexts = await page.locator('.nav-links').locator('a, button').allTextContents().catch(() => []);
    const cleanedNavTexts = navTexts.map(t => t.replace(/\s+/g, ' ').trim()).filter(Boolean);

    const unexpectedNavTexts = cleanedNavTexts.filter(txt => !expectedNavLabels.includes(txt));

    if (cleanedNavTexts.length == 0) {
        bug('UI-002', 'No se encontraron textos de los elementos del navbar para validar');
    } else if (unexpectedNavTexts.length > 0) {
        bug('UI-002', 'Se detectaron textos inesperados o posbiles typos en los elementos del navbar');
    } else {
        ok('Navegación sintypos detectados');
    }

    // Bug 3: Imágenes rotas
    const brokenImages = await page.evaluate(() => Array.from(document.images).filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src));

    if (brokenImages.lenght > 0) {
        bug('UI-003', 'Se detectaron imágenes rotas');
    } else {
        ok('No se detectaron imágenes rotas');
    }

    //Bug 4: botón de promo con texto invisible 
    const promoButton = page.locator('.btn-promo').first();

    if (await promoButton.count()) {
        const promoStyles = await promoButton.evaluate(el => {
            const cs = window.getComputedStyle(el);
            return {
                color: cs.color,
                bg: cs.backgroundColor,
                text: (el.textContent || '').trim()
            };
        });

        if (!promoStyles.text) {
            bug('UI-004', 'El botón de promo existe pero no tiene texto visible');
        } else if (promoStyles.color === promoStyles.bg) {
            bug('UI-004', 'El color del texto es igual al del botón');
        } else {
            ok('Texto del botón de promo visible')
        }
    } else {
        bug('UI-004', 'No se encontró el botón de promo');
    }

    // Resumen Final
    console.log('----------------------------------------------------');
    console.log(`Pass: ${passed} | Bugs: ${failed}`);
    onsole.log('----------------------------------------------------');
  } catch (error) {
    console.error(`ERROR general: ${error.message}`);
  } finally {
    await browser.close();
  }

})();