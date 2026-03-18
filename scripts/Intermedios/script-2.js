// Desafío: Test: login con credenciales válidas
// Modo Página — usá `page` directamente, el sitio ya está abierto.

// Navegar a la página de login
await page.goto(`${page.url()}/login.html`);

// Completar credenciales
await page.fill('#loginEmail', 'qa@aerovista.com');
await page.fill('#loginPassword', 'QAtest123!');

// Click en login
await page.click('.btn-auth');

// Esperar los 500 ms
await page.waitForTimeout(500);

// Obtener el mensaje
const message = await page.locator('#loginAlert').textContent();

// Validar resultado
if (message.toLowerCase().includes('exitoso')) {
    console.log('PASS: Login Exitoso');
} else {
    console.error(`FAIL: ${message}`);
}