// Desafío: Test: validación de formulario de pasajero
// Modo Página — usá `page` directamente, el sitio ya está abierto.

// Navegar a la página de detalle
const detailPage = `${page.url()}/detail.html`

async function fillForm(name, lastname, document, email){
    await page.fill('#firstName', name);
    await page.fill('#lastName', lastname);
    await page.fill('#docNumber', document);
    await page.fill('#contactEmail', email);
}

// Primer caso: Nombre y Apellido solo son espacios
await page.goto(detailPage);

await fillForm('   ', '   ', '12345678', 'test@email.com');
await page.getByText('Continuar al pago').click();
await page.waitForTimeout(500);

const firstNameErrorVisible = await page.locator('#firstNameErr').isVisible();
const lastNameErrorVisible = await page.locator('#lastNameErr').isVisible();

if (firstNameErrorVisible && lastNameErrorVisible) {
    console.log('PASS: El campo nombre y apellido con sólo espacios fueron rechazados');
} else if (firstNameErrorVisible || lastNameErrorVisible) {
    console.log('PASS: El campo nombre, o apellido, con sólo espacios fue rechazado');
} else {
    console.error('FAIL: El campo nombre y apellido con sólo espacios fue aceptado');
}

// Segundo caso: Email sin formato válido
await page.goto(detailPage);

await fillForm('Emmanuel', 'Nenadovit', '12345678', 'test');
await page.getByText('Continuar al pago').click();
await page.waitForTimeout(500);

const emailErrorVisible = await page.locator('#contactEmailErr').isVisible();

if (emailErrorVisible) {
    console.log('PASS: email inválido fue rechazado');
} else {
    console.error('FAIL: email inválido fue aceptado');
}