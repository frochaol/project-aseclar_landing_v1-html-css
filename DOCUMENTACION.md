# Documentación del Proyecto ASECLARET

Este documento describe la estructura y funcionamiento técnico del proyecto de la landing page de **ASECLARET** (Asociación de Ex Claretianos de Arequipa).

## 1. Visión General del Proyecto

El proyecto es un sitio web estático tradicional ("Vanilla Web") construido sin frameworks complejos para asegurar la máxima compatibilidad, velocidad de carga rápida y un fácil mantenimiento. 

### Tecnologías Principales
- **HTML5**: Para la estructura semántica.
- **CSS3 (Vanilla)**: Para todos los estilos, animaciones y diseño responsivo, usando variables nativas de CSS para la tematización.
- **JavaScript (Vanilla)**: Para la interactividad del lado del cliente (menú móvil, efectos de scroll, etc.), sin depender de librerías como jQuery o frameworks reactivos.

## 2. Estructura de Archivos y Navegación

El sitio está compuesto por varias páginas HTML estáticas interconectadas:

- `index.html`: La página principal o "Home". Contiene la sección hero de bienvenida, comunicados oficiales, eventos futuros, noticias y un "Únete a nosotros".
- `nosotros.html`: Información institucional de la asociación, visión, misión y valores.
- `elecciones.html`: Una página especial y detallada con los resultados electorales, gráficos de barras de los votos y perfiles de los partidos (PAD y ECC). Tiene su propia hoja de estilos (`elecciones-styles.css`).
- Páginas en construcción: `campeonatos.html`, `proyectos.html`, `comunidad.html`, `estatutos.html`. Muestran un mensaje amigable indicando que se está trabajando en ellas.

## 3. Arquitectura CSS (`styles.css` y `elecciones-styles.css`)

El diseño utiliza un enfoque responsivo ("Mobile First" / "Desktop First" híbrido) mediante media queries (`@media (max-width: ...)`).

### Variables Globales
En `:root` se definen las variables CSS (`--primary-color`, `--secondary-color`, `--accent-gold`, etc.) para mantener la identidad visual del colegio (Rojo Claretiano, Azul Marino Fe, Oro Esperanza) consistente en todo el sitio. 

### Estilos Compartidos (`styles.css`)
- **Header y Navbar**: Un menú de navegación que se queda fijo (`position: fixed`) en la parte superior. Al hacer scroll hacia abajo, la altura se reduce y cambia de opacidad gracias a la clase `.scrolled` que inyecta JavaScript.
- **Menú Móvil (Hamburger)**: Diseño oculto en desktop y activado en pantallas pequeñas a través de un panel lateral animado (`.mobile-menu`).
- **Footer**: Compartido entre todas las páginas, conteniendo enlaces rápidos, redes sociales y contacto.
- **Secciones (Sections)**: Utilizan `display: flex` y `display: grid` para distribuir el contenido uniformemente (ej. las noticias, tarjetas de valores, etc.).
- **Animaciones**: Incorpora animaciones de entrada (`fadeInUp`), efectos *hover* sutiles (escalado, sombras extendidas, cambio de colores de bordes/fondos) y botones interactivos.

### Estilos Específicos (`elecciones-styles.css`)
Aplicados exclusivamente en `elecciones.html`, manejan componentes particulares como:
- Barras de progreso de resultados electorales.
- Tarjetas informativas de cada partido (con colores específicos para cada agrupación).

## 4. Funcionalidad JavaScript (`script.js`)

El archivo central de lógica maneja la interacción de la interfaz de usuario:

- **Menú Hamburguesa (Mobile)**: 
  Escucha clics en el icono `.hamburger`. Activa la clase `active` en el menú (`.mobile-menu`), bloqueando el scroll de la página de fondo (`overflow = 'hidden'`). Se puede cerrar dando clic fuera del menú, en un enlace, o usando la tecla `Escape`.
- **Smooth Scrolling**: 
  Intercepta los clics en enlaces ancla (`<a href="#...">`) y realiza un desplazamiento suave (`behavior: 'smooth'`) considerando la altura del *header* fijo para no tapar el título de destino.
- **Efecto Header Shrink**: 
  Añade la clase `.scrolled` al `header` al detectar que el scroll vertical es mayor a 100px. Esto desencadena los estilos CSS que achican el navbar para no ocupar tanto espacio al navegar por la página.
- **Active Links**: 
  Calcula qué sección está actualmente visible en el viewport (`window.pageYOffset`) y le añade la clase `active` al enlace de navegación correspondiente.
- **Prevención de Zoom Mobile**: 
  Desactiva el doble toque (double tap) en pantallas táctiles para que la página no haga un zoom inesperado y afecte la experiencia.

## 5. Carpeta de Activos (`/assets`)

Contiene todas las imágenes estáticas del proyecto:
- Logos (`exal.png`).
- Imágenes hero y de noticias/comunicados (ej. `c1.jpeg`, `c2.jpeg`, imágenes de reuniones).
- Se recomienda optimizar estas imágenes en formato WebP para futuras mejoras de rendimiento web.

## 6. Despliegue y Ejecución Local

Para visualizar o probar cambios en el proyecto:
1. No se requiere servidor de backend (Node.js/PHP/Python no son estrictamente necesarios).
2. Simplemente se puede abrir el archivo `index.html` en cualquier navegador moderno.
3. Para una mejor experiencia (y evitar problemas de CORS si se añaden *fetches* futuros), se recomienda usar **Live Server** (extensión de VSCode) u otra herramienta local básica.

---
*Desarrollado para la Asociación de Ex Claretianos de Arequipa (ASECLARET).*
