## Reportes de bugs

---

### 🆔 ID Bug
`BUG-001`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Al reducir el tamaño de la página, por ejemplo: versión tablet y/o mobile, se evidencias diferentes errores relacionados al responsive (o a la falta del mismo).

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Recorrer las diferentes páginas (Home, Resultados de búsqueda, Detalles del vuelo, Checkout, etc) achicando el tamano de las mismas.

### ❌ Resultado actual
> Se observan campos desalineados, componentes que no están acondicionados para los distintos tamaños de pantalla, el navbar que queda por fuera sin lograrse un menú hamburguesa o similar

### ✅ Resultado esperado
> La página, y todos los componentes que la conforman, deben ajustarse correctamente a los difeerentes tamaños

### 📎 Evidencia
- 📷 Screenshots: [
                    [Home](evidencias/bug-001/1.png),
                    [Resultados de búsqueda](evidencias/bug-001/2.png),
                    [Detalles del vuelo](evidencias/bug-001/3.png),
                    [Checkout](evidencias/bug-001/4.png)
                ]
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-002`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> Navbar: Typo en el tab de vuelos.

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Visualizar el tab de vuelos en el navbar.

### ❌ Resultado actual
> Se observa que dice "Vuelas"

### ✅ Resultado esperado
> El tab debería decir: "Vuelos"

### 📎 Evidencia
- 📷 Screenshots: [Navbar](evidencias/bug-002/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-003`

### 📄 Página / Módulo
`Toda la web en general`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> No se visualiza el favicon

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`

### ❌ Resultado actual
> Se observa que no hay favicon

### ✅ Resultado esperado
> El favicon debería de estar visible

### 📎 Evidencia
- 📷 Screenshots: [Favicon](evidencias/bug-003/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-004`

### 📄 Página / Módulo
`Navbar` | `Footer`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Algunos links del navbar y footer redirigen a la Home

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en:
    - Hoteles
    - Paquetes
    - Ofertas
    - Cruceros
    - Sobre nosotros
    - Prensa
    - Trabaja con nosotros

### ❌ Resultado actual
> Al hacer click en los links mencionados, se ejecuta la redirección a la Home.

### ✅ Resultado esperado
> Cada link debería redirigir a su respectiva página.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/ba426eb7-2fe2-46a9-92a4-1a7f7ae3b0a8)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-005`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualiza el contenido de los desplegables de búsqueda de vuelos

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. En el buscador, poner una letra para visualizar el desplegable con las opciones de destino.

### ❌ Resultado actual
> Se visualiza tanto en "Sólo ida", "Ida y Vuelta", "Multi-ciudad"; desplegables que parecen vacíos hasta que se pasa el mouse por encima.

### ✅ Resultado esperado
> Deberían visualizarse los destinos.

### 📎 Evidencia
- 📷 Screenshots: [Desplegable del buscador](evidencias/bug-005/1.png)
- 🎥 Video: [Evidencia](https://jam.dev/c/ab2886b1-b71a-4bb5-b8e9-befb31690473)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-006`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los desplegables del buscador de vuelos quedan por debajo del contenido siguiente de la página

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. En el buscador, poner una letra para visualizar el desplegable con las opciones de destino.

### ❌ Resultado actual
> El desplegable queda por detrás del próximo contenido de la página.

### ✅ Resultado esperado
> Se debería de poder visualizar todo el desplegable correctamente

### 📎 Evidencia
- 📷 Screenshots: [Desplegable del buscador](evidencias/bug-006/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-007`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los desplegables del buscador de vuelos se superponen entre sí

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. En el buscador, poner una letra en ambos desplegables.

### ❌ Resultado actual
> Los desplegables se superponen entre sí

### ✅ Resultado esperado
> Opción 1: Deberían de poder visualizarse sin superposición
> Opción 2: Al desplegar uno el otro debería de contraerse
> Opción 3: No permitir desplegar los dos al mismo tiempo

### 📎 Evidencia
- 📷 Screenshots: [Desplegable del buscador](evidencias/bug-007/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-008`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> Los placeholders de los inputs Origen y/o Destino tienen el texto cortado

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Visualizar los inputs de Origen y/o Destino del buscador de vuelos tanto en "Sólo ida", "Ida y Vuelta", "Multi-ciudad"

### ❌ Resultado actual
> Los placeholders estan entrecortados

### ✅ Resultado esperado
> Debería de visualizarse coreectamente el texto de los placeholders

### 📎 Evidencia
- 📷 Screenshots: [
    [Ida](evidencias/bug-008/1.png),
    [Ida y vuelta](evidencias/bug-008/2.png),
    [Multi](evidencias/bug-008/3.png)
]
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-009`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Desbordamiento del campo pasajeros respecto a su contenedor

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Ida y vuelta

### ❌ Resultado actual
> Se visualiza que el campo pasajeros queda por fuera del contenedor

### ✅ Resultado esperado
> Debería de reajustarse la posición de cada elemento respecto al espacio de su contenedor

### 📎 Evidencia
- 📷 Screenshots: [Ida y vuelta](evidencias/bug-009/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-010`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> La opción Multi-ciudad no habilita múltiples tramos

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Multi-ciudad

### ❌ Resultado actual
> Se visualiza que el comportamiento es el mismo que para Ida y vuelta

### ✅ Resultado esperado
> Debería de poder seleccionarse mútiples tramos

### 📎 Evidencia
- 📷 Screenshots: [Muti-ciudad](evidencias/bug-010/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-011`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualiza el contenido completo del desplegable de pasajeros

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida o Multi-ciudad
3. Hacer click en el componete de pasajeros

### ❌ Resultado actual
> Parte del desplegable queda debajo del siguiente contenido de la página, por lo cual no se pueden seleccionar pasajeros del tipo "bebés" 

### ✅ Resultado esperado
> Debería de visualizarse correctamente todo el contenido del componente

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-011/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-012`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los botones +/- del desplegable de pasajeros están desalineados y fuera del contenedor

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Hacer click en el componete de pasajeros

### ❌ Resultado actual
> Se visualiza que los botones no están alineados entre sí y que quedaron desbordados de su contenedor

### ✅ Resultado esperado
> Deberían de visualizarse alineados y dentro de su contenedor

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-012/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-013`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El contador de pasajeros tiene el mismo color que su contenedor

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Hacer click en el componete de pasajeros

### ❌ Resultado actual
> Se visualiza que el contador de cada tipo de pasjeros tiene el mismo color blanco que su contenedor

### ✅ Resultado esperado
> Deberían de tener un color distinto para tener bien visible la cantidad de cada tipo de pasajero

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-013/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-014`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualiza por completo la cantidad de pasajeros

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Hacer click en el componete de pasajeros
4. Seleccionar, por lo menos, 1 adulto y 1 niño

### ❌ Resultado actual
> Sólo queda visible la cantidad de adultos (si se ciera el desplegable)

### ✅ Resultado esperado
> Deberían de visualizarse toda la cantidad de pasajeros

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-014/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-015`

### 📄 Página / Módulo
`Home` | `Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite ingresar y procesar fechas pasadas

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelta o Multi-ciudad
3. Seleccionar una fecha, o rango de fechas, anteriores a la actual
4. Hacer click en buscar vuelos

### ❌ Resultado actual
> El sistema no valida la, o las fechas, y avanza con la busqueda de vuelos

### ✅ Resultado esperado
> Debería de validarse la fecha o el sistema no debería permitir ingresar una fecha anterior a la actual.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/74329978-2649-47a1-bb5b-65d4550cebfa)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-016`

### 📄 Página / Módulo
`Home` | `CTA: Ver Ofertas`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se identifica la acción clave del botón junto al "Cyber Monday"

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer scroll hasta llegar a la sección del Cyber Monday

### ❌ Resultado actual
> El botón "Ver Ofertas" no es visible debido a la falta de contraste, impidiendo que se identifique la acción clave.

### ✅ Resultado esperado
> Debería de visualizarse correctamente a que hace referencia el botón.

### 📎 Evidencia
- 📷 Screenshots: [CTA](evidencias/bug-016/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-017`

### 📄 Página / Módulo
`Home` | `Destinos Populares`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Seleccionar un destino popular redirige a la home

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer scroll hasta llegar a la sección de Destinos Populares
3. Hacer click en cualquiera de esos destinos

### ❌ Resultado actual
> Al hacer click en un destino popular, el sistema redirige a la home en lugar de navegar al contenido correspondiente.

### ✅ Resultado esperado
> Al hacer click en un destino popular, el sistema debería de navegar al contenido correspondiente.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/3d0bc2d1-d00d-4a8d-a8de-84ffdc31f133)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-018`

### 📄 Página / Módulo
`Home`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> Se visualiza placeholder de imagen rota debajo de "Soporte 24/7"

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer scroll hasta llegar a la sección de "¿Por qué elegir AeroVista?"

### ❌ Resultado actual
> Debajo de "Soporte 24/7" se muestra un placeholder de imagen rota y un texto de "soporte badge", rompiendo la consistencia visual del componente

### ✅ Resultado esperado
> Opción 1: Debería de eliminarse ese contenido
> Opción 2: Si es contenido faltante, debería de agregarse correctamente (imagen, h3, texto)

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-018/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-019`

### 📄 Página / Módulo
`Home` | `Suscripción`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El campo de suscripción acepta valores que no cumplen el formato de email

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer scroll hasta llegar a la sección de Suscribirse
3. Ingresar cualquier caracter, o cadena de caracteres, que no cumplan el formato de email

### ❌ Resultado actual
> El sistema acepta cualquier caracter, con excepción de espacios en blanco, como email válido

### ✅ Resultado esperado
> El sistema debería de validar el formato de email

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-019/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-020`

### 📄 Página / Módulo
`Footer`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [x] 🟢 Bajo

### 🧾 Título
> El año del copyright no está actualizado

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer scroll hasta llegar al footer

### ❌ Resultado actual
> El año visible en el coyright no coincide con el año actual

### ✅ Resultado esperado
> Opción 1: Actualizarlo al año actual
> Opción 2: Poner un rango, es decir, 2019 - 2026 (año actual)
> Opción 3: Hacerlo dinámico para que se actualice sólo en cada nuevo año

### 📎 Evidencia
- 📷 Screenshots: [Copyright](evidencias/bug-020/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-021`

### 📄 Página / Módulo
`Footer`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> La página de contacto está rota

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer scroll hasta llegar al footer
3. Hacer click en contacto

### ❌ Resultado actual
> El sistema redirige pero la página de contacto está rota

### ✅ Resultado esperado
> Debería de poder visualizarse la página de contacto correctamente

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Contacto](https://jam.dev/c/1370c1a5-9705-480f-9fcc-9dcd4d035f21)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-022`

### 📄 Página / Módulo
`Login`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema confirma implícitamente que el email ingresado es válido

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Ingresar un mail válido y una contraseña inválida
4. Hacer click en ingresar

### ❌ Resultado actual
> El sistema muestra un mensaje de que la contraseña es incorrecta, dejando en evidencia que el mail puede ser válido.

### ✅ Resultado esperado
> El sistema debería de mostrar un mensaje más seguro, por ejemplo: "Credrenciales Inválidas"

### 📎 Evidencia
- 📷 Screenshots: [Credenciales](evidencias/bug-022/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-023`

### 📄 Página / Módulo
`Login`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema confirma explícitamente que el email ingresado es válido

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Ingresar un mail inválido y una contraseña inválida (o válida)
4. Hacer click en ingresar

### ❌ Resultado actual
> El sistema muestra un mensaje explícito de que no existe una cuenta con ese mail.

### ✅ Resultado esperado
> El sistema debería de mostrar un mensaje más seguro, por ejemplo: "Credrenciales Inválidas"

### 📎 Evidencia
- 📷 Screenshots: [Credenciales](evidencias/bug-023/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-024`

### 📄 Página / Módulo
`Login`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El link de recupero de contraseña no funciona

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Hacer click en "¿Olvidaste tu contraseña?

### ❌ Resultado actual
> El sistema no redirige a ninguna pantalla de recupero de contraseña

### ✅ Resultado esperado
> El sistema debería de redirigir al usuario a una pantalla donde pueda efectuar el recupero de contraseña

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-025`

### 📄 Página / Módulo
`Login`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema no mantiene la sesión del usuario

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Ingresar credenciales válidas
4. Hacer click en ingresar

### ❌ Resultado actual
> El sistema permite ingresar credenciales válidas, redirige a la home, pero no mantiene la sesión del usuario, impidiendo que quede autenticado.

### ✅ Resultado esperado
> El sistema debería mantener la sesión del usuario activa ya sea hasta que cierre la sesión o hasta que pase cierto tiempo sin actividad.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Autenticación](https://jam.dev/c/5a05a319-d421-4cf7-93c4-808f3c5c136c)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-026`

### 📄 Página / Módulo
`Registro`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite registrar usuarios con nombre y apellido distinto de un string

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Click en crear cuenta
4. Completar todos los campos, pero en el nombre y apellido poner números (u otros caracteres)

### ❌ Resultado actual
> El sistema permite crear la cuenta con esos datos

### ✅ Resultado esperado
> El sistema debería de validar que esos campos sólo admitan letras.

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-026/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-027`

### 📄 Página / Módulo
`Registro`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite registrar usuarios con formato inválido de emails

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Click en crear cuenta
4. Completar todos los campos, pero en el email poner un formato inválido

### ❌ Resultado actual
> El sistema permite crear la cuenta con ese email malformado

### ✅ Resultado esperado
> El sistema debería de validar el formato del email.

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-027/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-028`

### 📄 Página / Módulo
`Registro`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite registrar usuarios con una contraseña que no cumple el mínimo de longitud

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Click en crear cuenta
4. Completar todos los campos, pero en contraseña y confirmar contraseña, poner una cantidad menor a la longitud mínima

### ❌ Resultado actual
> El sistema permite crear la cuenta con esa clave

### ✅ Resultado esperado
> El sistema debería de validar el mínimo de caracteres.

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-028/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-029`

### 📄 Página / Módulo
`Registro`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite registrar crear cuentas con contraseñas distintas

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Click en crear cuenta
4. Completar todos los campos, pero en contraseña y confirmar contraseña, poner contraseñas distintas

### ❌ Resultado actual
> El sistema permite crear la cuenta exitosamente

### ✅ Resultado esperado
> El sistema debería de validar que ambas contraseñas sean iguales y cumplan, por lo menos, el mínimo de longitud.

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-029/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-030`

### 📄 Página / Módulo
`Registro`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El indicador de fortaleza de contraseña varís solo hasta nivel medio de seguridad

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Click en crear cuenta
4. En el campo de contraseña poder una de mas de 8 caracteres que incluya, por lo menos: una mayúcula, numeros, caracteres especiales, etc 

### ❌ Resultado actual
> El indicar de fortaleza de contraseña sólo varía hasta nivel medio de seguridad, sin importar cuan larga y compleja sea.

### ✅ Resultado esperado
> El sistema debería de establecer los requerimientos para los niveles de fortaleza (y cumplirlos)

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-030/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-031`

### 📄 Página / Módulo
`Registro`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> No se visualizan los términos y condiciones

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Hacer click en iniciar sesión
3. Click en crear cuenta
4. Hacer click en el enlace de Términos y Condiciones 

### ❌ Resultado actual
> No se visualizan los términos y condiciones.

### ✅ Resultado esperado
> El sistema debería de informar cuales son los términos y condiciones

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-032`

### 📄 Página / Módulo
`Buscador de vuelos`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> La búsqueda por Multi-ciudad muestra los resultados de Sólo Ida

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Multi-ciudad
3. Competar todos los campos
4. Hacer click en buscar vuelos

### ❌ Resultado actual
> El sistema muestra los resultados como Solo ida, evidenciando una inconsistencia en la lógica de procesamiento y/o visualización.

### ✅ Resultado esperado
> Debería de mostrar los vuelos Multi-ciudad

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/fc1b2b88-4e37-488e-ad61-67cc375ca6c5)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-033`

### 📄 Página / Módulo
`Buscador de vuelos` | `Resultados de Búsqueda`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los resultados de una búsqueda de vuelos no aparecen, por defecto, ordenamos por precio de forma ascendente

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelva o Multi-ciudad
3. Competar todos los campos
4. Hacer click en buscar vuelos

### ❌ Resultado actual
> El sistema, por defecto, debería de mostrar los vuelos ordenados de menor a mayor precio

### ✅ Resultado esperado
> El sistema no los muestra ordenados de ninguna forma

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/10fac259-5130-4866-8f44-e76384ad510f)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-034`

### 📄 Página / Módulo
`Resultados de Búsqueda`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Sólo funciona el filtro de escala

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelva o Multi-ciudad
3. Competar todos los campos
4. Hacer click en buscar vuelos
5. En los resultados de vuelos, interactuar con los diferentes filtros

### ❌ Resultado actual
> El único filtro que finciona es el de las escalas

### ✅ Resultado esperado
> Deberían de funcionar todos los filtros (precio, escalas, aerolíneas, horario de salida)

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/741b450e-eaa4-4d01-ace0-33490745b2cc)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-035`

### 📄 Página / Módulo
`Buscador de vuelos` | `Resultados de Búsqueda`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El resumen en los resultados de búsqueda, sólo refleja los pasajeros del tipo "Adulto"

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelva o Multi-ciudad
3. Competar todos los campos, seleccionando uno o mas adultos y por lo menos un niño
4. Hacer click en buscar vuelos
5. Ver el resumen de la búsqueda

### ❌ Resultado actual
> En el resumen, margen superior, sólo se visualiza que la búsqueda fue efectuada para los adultos

### ✅ Resultado esperado
> Deberían de mostrarse la cantidad correcta y tipo correcto de pasajeros

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/29b764b9-59c3-47e4-a262-7ec796deaec3)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-036`

### 📄 Página / Módulo
`Resultados de Búsqueda`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema muestra vuelos con menor disponibildad de asientos que la cantidad de pasajeros

### ⚙️ Precondiciones
- Elegir Ezeiza como origen
- Elegir Madrid como destino

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Solo ida, Ida y vuelva o Multi-ciudad
3. Competar todos los campos, seleccionando, por ejemplo, 5 pasajeros
4. Hacer click en buscar vuelos

### ❌ Resultado actual
> El sistema muestra vuelos con menor disponibildad de asientos que la cantidad de pasajeros, incumpliendo las condiciones de búsqueda.

### ✅ Resultado esperado
> Deberían de mostrarse los vuelos que cumples con las condiciones de búsqueda.

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-036/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-037`

### 📄 Página / Módulo
`Buscador de vuelos` | `Resultados de Búsqueda`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El resumen en los resultados de búsqueda, sólo refleja la fecha de salida

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Ida y vuelva o Multi-ciudad
3. Competar todos los campos
4. Hacer click en buscar vuelos
5. Ver el resumen de la búsqueda

### ❌ Resultado actual
> En el resumen, margen superior, sólo se visualiza la fecha de salida

### ✅ Resultado esperado
> Deberían de mostrarse la fecha de salida y la de regreso

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-037/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-038`

### 📄 Página / Módulo
`Buscador de vuelos` | `Resultados de Búsqueda`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Buscar por multi-ciudad o ida y vuelta, sólo trae vuelos de ida

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir a: `[http://3.239.228.202:3000/]`
2. Seleccionar Ida y vuelva o Multi-ciudad
3. Competar todos los campos
4. Hacer click en buscar vuelos

### ❌ Resultado actual
> La búsqueda de vuelos ignora el tipo de viaje (ida y vuelta o multi-ciudad), con excepción del precio, y muestra únicamente los vuelos de ida

### ✅ Resultado esperado
> Deberían de mostrarse los resultados correctos en base al tipo de búsqueda

### 📎 Evidencia
- 📷 Screenshots: [Evidencia](evidencias/bug-038/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-039`

### 📄 Página / Módulo
`Detalles del vuelo` | `Resumen del vuelo`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El resumen del vuelo no refleja el tipo y el precio correcto

### ⚙️ Precondiciones
- Estar en la pantalla de vuelos disponibles en base a la búsqueda efectuada
- La busqueda debe ser Ida y vuelta o Multi-ciudad

### 🔁 Pasos para reproducir
1. Elegir un vuelo
2. Visualizar el resumen del vuelo

### ❌ Resultado actual
> En el resumen del vuelo se visualiza que sólo hay pasaje de ida y que el precio es la mitad del que figuraba al momento de seleccionar el vuelo

### ✅ Resultado esperado
> Deberían de reflejarse: vuelo de ida y vuelta, y además el precio correcto

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/0e38f314-8ab7-4643-b9f5-063bfc8f64b9)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-040`

### 📄 Página / Módulo
`Detalles del vuelo` | `Datos de pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema sólo permite cargar los datos de un pasajero

### ⚙️ Precondiciones
- Estar en la pantalla de vuelos disponibles en base a la búsqueda efectuada
- La busqueda debe ser realizarse con una canidad de pasajeros mayor a 1

### 🔁 Pasos para reproducir
1. Elegir un vuelo
2. Visualizar el detalle del vuelo/pasajero

### ❌ Resultado actual
> Sólo se visualizan los campos para completar los datos de un sólo pasajero

### ✅ Resultado esperado
> El sistema debería permitir cargar los datos de todos los pasajeros

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/0d9b3bd4-b6c6-4470-b9c4-926a8654dd5a)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-041`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema toma como válido cualquier cadena de caracteres de longitud 3 o superior

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar cualquier cadena de caracteres de longitud 3 o superior en código de descuento

### ❌ Resultado actual
> Se aplica un 10% de descuento sobre el total del vuelo sin incluir los impuestos y tasas

### ✅ Resultado esperado
> El sistema debería de aplicar descuentos en base a cupones/códigos válidos

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/5ffb360e-818c-4e4a-be92-234f6d373f3d)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-042`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema no valida que el nombre y apellido sea del tipo string

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, pero en nombre y apellido poner numeros y/o caracteres especiales o solo espacios en blanco

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar el tipo de dato de esos campos

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-043`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin elegir un tipo de documento

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, pero no seleccionar ningún tipo de documento

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar el exigir el tipo de documento para poder avanzar

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-044`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin validar el número de documento ingresado

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, pero en el número de documento:
   - Ingresar uno con una longitud muy corta (ej, DNI 13)
   - Ingresar cualquier caracter
   - Ingresar espacios en blanco

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar que el número de documento se corresponda con el tipo de documento, que respecte el tipo de dato, que no acpete espacios en blanco y además que respete la longitud mínima

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-045`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin ingresar la fecha de nacimiento

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, pero no ingresar la fecha de nacimiento

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar el ingreso de la fecha ya que es un campo obligatorio

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-046`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin ingresar la nacionalidad

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, pero no selecionar la nacionalidad

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar la nacionalidad ya que es un campo obligatorio

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-047`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin ingresar el número de teléfono o con sólo espacios en blanco

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, pero no ingresar el número de teléfono

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar el ingreso del número de teléfono ya que es un campo obligatorio

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-048`

### 📄 Página / Módulo
`Navbar`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Cantidad inconsistente de tabs en el navbar según la página

### ⚙️ Precondiciones
- N/A

### 🔁 Pasos para reproducir
1. Ir pasando por las diferntes partes del sistema y visualizar el navbar

### ❌ Resultado actual
> El sistema es inconsistente con la cantidad de tabs que hay en cada página, afectando la navegación y la experiencia de usuario.

### ✅ Resultado esperado
> El navbar debería de ser consistente en cada página del sistema.

### 📎 Evidencia
- 📷 Screenshots: [
    [Ejemplo 1](evidencias/bug-048/1.png),
    [Ejemplo 2](evidencias/bug-048/2.png),
    [Ejemplo 3](evidencias/bug-048/3.png)
]
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-049`

### 📄 Página / Módulo
`Detalles de vuelos/pasajeros`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin validar la fecha de nacimiento (edad mínima)

### ⚙️ Precondiciones
- Estar en la pantalla de detalles de vuelos/pasajeros

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del formulario, en la fecha de nacimiento poner la fecha actual

### ❌ Resultado actual
> El sistema permite avanzar al pago

### ✅ Resultado esperado
> El sistema debería de validar la fecha de nacimiento (edad mínima) respecto al tipo de pasajero (adulto: mayor de 12 años, niño: entre 2 y 11 años, etc)

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-050`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar poniendo un nombre que no sea del tipo string 

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del medio de pago disponible (tarjeta de crédito), pero en el nombre poner cualquier caracter que no sea un string

### ❌ Resultado actual
> El sistema permite procesar el pago exitosamente

### ✅ Resultado esperado
> El sistema debería de validar que el nombre se corresponda con el medio de pago utilizado (ejemplo: tarjeta de crédito)

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-051`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin ingresar el nombre en el medio de pago 

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del medio de pago disponible (tarjeta de crédito), pero en el nombre dejarlo vacío

### ❌ Resultado actual
> El sistema permite procesar el pago exitosamente

### ✅ Resultado esperado
> El sistema debería de validar el nombre como campo obligatorios y que se corresponda con el medio de pago utilizado (tarjeta de crédito)

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-052`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar con una fecha de vencimiento inferior a la actual

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del medio de pago disponible (tarjeta de crédito), pero en la fecha de vencimiento poner una inferior a la actual

### ❌ Resultado actual
> El sistema permite procesar el pago exitosamente

### ✅ Resultado esperado
> El sistema debería de validar la fecha de vencimiento del medio de pago (tarjeta de crédito) antes de poder avanzar.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-053`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema no valida que el CVV sean sólo números

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del medio de pago disponible (tarjeta de crédito), pero en el CVV poner caracteres no numéricos

### ❌ Resultado actual
> El sistema permite procesar el pago exitosamente

### ✅ Resultado esperado
> El sistema debería de validar que el CVV se númerico y se corresponda con el número y tipo de tarjeta

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-054`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [x] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite avanzar sin aceptar los términos y condiciones, y la política de privacidad

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Ingresar todos los datos del medio de pago disponible (tarjeta de crédito), pero no aceptar los términos y condiciones, y la política de privacidad

### ❌ Resultado actual
> El sistema permite procesar el pago exitosamente

### ✅ Resultado esperado
> El sistema debería de exigir aceptar dichos términos y políticas antes de poder avanzar

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-055`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema sólo permite hacer uso de tarjeta de crédito

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Intentar seleccionar como medio de pago tardeja de débito o transferencia

### ❌ Resultado actual
> El sistema sólo permite el uso de tarjetas de crédito

### ✅ Resultado esperado
> Al mostrar otros medios de pago, el sistema debería permitir hacer uso de cualquiera de ellos.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/a70a8a20-8ddb-49a4-8af6-ef58bbb69df3)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-056`

### 📄 Página / Módulo
`Checkout` | `Medio de Pago`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los links de "Términos y Condiciones" y "Políticas de Privacidad" no muestran nada de información

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Hacer click en los links de "Términos y Condiciones" y "Políticas de Privacidad"

### ❌ Resultado actual
> El sistema no hace nada la hacer click en esos links

### ✅ Resultado esperado
> Al hacer lick en cada uno de esos lincks, el sistema debería acceder al usuario a la información legal pertinente a cada uno de dichos links.

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-057`

### 📄 Página / Módulo
`Checkout`

### 🏷️ Tipo
- [x] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Al hacer scroll algunos componentes se superponen

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Hacer scroll en la pantalla

### ❌ Resultado actual
> El resumen del datos del pasajero se superpone con el resumen de la reserva

### ✅ Resultado esperado
> No debería de darse ningun tipo de superposición entre componentes

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/c799ae70-7069-4aad-ac31-4b5469ec0b74)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-058`

### 📄 Página / Módulo
`Checkout` | `Confirmación`

### 🏷️ Tipo
- [ ] Visual  
- [x] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [x] 🔴 Crítico
- [ ] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El sistema permite reprocesar un pago al volver hacias atrás en el navegador

### ⚙️ Precondiciones
- Estar en la pantalla de checkout

### 🔁 Pasos para reproducir
1. Completar todos los datos de la tarjeta
2. Confirmar y pagar
3. Al visualizar la reserva confirmada, ir hacia atrás en el navegador
4. Estando ahora en la pantalla de checkout nuevamente, volver a confirmar y pagar
5. Repetir pasos 3 y 4 las veces que se quiera

### ❌ Resultado actual
> El sistema reprocesa el pago al navegar hacia atras en el navegador y volvidno a confirmar la transacción, generando cobros y reservas duplicadas

### ✅ Resultado esperado
> Opción 1: Al confirmar la reserva debería de automaticamente redirigir al Home
> Opción 2: Al volver hacia atras desde la pantalla de confirmación debería de ir haciane la Home directamente

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/1f083328-adbb-4429-9661-eb35ed06db85)
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-059`

### 📄 Página / Módulo
`Confirmación`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [ ] Lógica  
- [x] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [ ] 🟠 Alto
- [x] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> El detalle de la reserva no muestra toda la información pertinente

### ⚙️ Precondiciones
- Estar en la pantalla de confirmación de la reserva

### 🔁 Pasos para reproducir
1. Visualizar los detalles de la reserva

### ❌ Resultado actual
> El detalle de la reserva muestra el tipo de tarjeta usada ni la cantidad de cuotas ni la fecha de salida

### ✅ Resultado esperado
> El sistema debería de mostar el tipo de tarjeta usada, la cantidad de cuotas y la fecha de salida, en el detalle de la reserva

### 📎 Evidencia
- 📷 Screenshots: [Detalle de reserva](evidencias/bug-059/1.png)
- 🎥 Video: N/A
- 📄 Logs: N/A

-------------------------------------------------------------

### 🆔 ID Bug
`BUG-060`

### 📄 Página / Módulo
`Seleciión de vuelo` | `Carrito de compras`

### 🏷️ Tipo
- [ ] Visual  
- [ ] Funcional  
- [ ] Validación  
- [x] Lógica  
- [ ] UX  

### 🚨 Severidad
- [ ] 🔴 Crítico
- [x] 🟠 Alto
- [ ] 🟡 Medio
- [ ] 🟢 Bajo

### 🧾 Título
> Los vuelos seleccionados no se agregan al carrito de compras

### ⚙️ Precondiciones
- Estar en la pantalla de confirmación de la selección de vuelos

### 🔁 Pasos para reproducir
1. Seleccionar un vuelo

### ❌ Resultado actual
> Al seleccionar un vuelo, este no se agrega al carrito de compras y el mismo permanece vacío, aunqie el sistema permite avanzar con la compra, generando una inconsistencia en el estado del flujo.

### ✅ Resultado esperado
> El sistema debería agregar los vuelos seleccionados al carrito de compras

### 📎 Evidencia
- 📷 Screenshots: N/A
- 🎥 Video: [Evidencia](https://jam.dev/c/34431dbf-ba79-4d41-b74c-7c1c8d3c814b)
- 📄 Logs: N/A

-------------------------------------------------------------