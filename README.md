# 🏛️ ASECLAR - Sitio Web Oficial

> Sitio web oficial de la Asociación de Exalumnos Claretianos de Arequipa

[![HTML](https://img.shields.io/badge/HTML-49.8%25-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-48.3%25-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-1.9%25-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Vanilla](https://img.shields.io/badge/Framework-Vanilla-yellow)](https://vanilla-js.com/)

---

## 📖 Sobre el Proyecto

**ASECLAR** es el sitio web oficial de la **Asociación de Exalumnos Claretianos de Arequipa**, diseñado para reconectar a los exalumnos del colegio Claretiano y mantenerlos informados sobre las actividades de la asociación.

### 🎯 Propósito

El sitio tiene como objetivo principal:

- 🤝 **Reconectar** a los exalumnos claretianos de Arequipa
- 📅 **Informar** sobre eventos, campeonatos y actividades
- 🗳️ **Facilitar** procesos democráticos como elecciones
- 📢 **Difundir** la misión y proyectos institucionales
- 🌐 **Crear comunidad** entre los exalumnos y mantener vivo el espíritu claretiano

---

## ✨ Características Principales

- ✅ **Sistema de navegación responsive** con menú hamburguesa para dispositivos móviles
- 📊 **Página de resultados electorales** con gráficos animados y visualización de datos
- 📰 **Secciones de eventos futuros** para campeonatos y actividades
- 🔗 **Integración con redes sociales** (Facebook y otras plataformas)
- 📱 **Diseño completamente responsive** optimizado para desktop, tablet y móviles
- 🎨 **Identidad visual claretiana** con colores institucionales
- ⚡ **Carga rápida** sin dependencias de frameworks pesados
- ♿ **Accesibilidad** con navegación por teclado y semántica HTML

---

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con tecnologías web fundamentales, sin el uso de frameworks:

| Tecnología | Porcentaje | Uso |
|------------|-----------|-----|
| ![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 49.8% | Estructura y contenido |
| ![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | 48.3% | Estilos y diseño responsive |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | 1.9% | Interactividad y menú mobile |

**Enfoque Vanilla**: Sin frameworks ni librerías externas, código limpio y ligero.

---

## 📂 Estructura del Proyecto

```
project-aseclar_landing_v1-html-css/
├── index.html              # 🏠 Página principal / Home
├── nosotros.html           # ℹ️ Información institucional
├── elecciones.html         # 🗳️ Resultados electorales
├── campeonatos.html        # ⚽ Eventos deportivos
├── proyectos.html          # 📋 Proyectos de la asociación
├── comunidad.html          # 👥 Sección comunidad
├── estatutos.html          # 📜 Documentos normativos
├── styles.css              # 🎨 Estilos principales (64KB+)
├── elecciones-styles.css   # 📊 Estilos específicos de elecciones
├── script.js               # ⚙️ Funcionalidad JavaScript
├── assets/                 # 🖼️ Imágenes y recursos
│   ├── exal.png           # Logo de la asociación
│   ├── campeonato.jpg     # Imagen de campeonatos
│   ├── votaciones.jpg     # Imagen de elecciones
│   ├── reunion-exalumnos.jpg
│   └── ...                # Otros recursos gráficos
└── README.md              # 📖 Documentación del proyecto
```

---

## 📄 Páginas del Sitio

### 🏠 **index.html** - Página Principal
Página de inicio con hero section, presentación de la asociación, eventos destacados y llamadas a la acción.

### ℹ️ **nosotros.html** - Información Institucional
Historia, misión, visión y valores de ASECLAR. Presenta la identidad de la asociación.

### 🗳️ **elecciones.html** - Resultados Electorales
Página especial con gráficos animados y resultados de las elecciones de la junta directiva.

### ⚽ **campeonatos.html** - Eventos Deportivos
Información sobre campeonatos deportivos organizados por la asociación.

### 📋 **proyectos.html** - Proyectos
Descripción de los proyectos sociales y comunitarios de la asociación.

### 👥 **comunidad.html** - Comunidad
Espacio para conectar con otros exalumnos y compartir experiencias.

### 📜 **estatutos.html** - Estatutos y Normativas
Documentos oficiales que rigen el funcionamiento de la asociación.

---

## 🎨 Características Técnicas

### Diseño Responsive

El sitio se adapta a diferentes dispositivos con breakpoints optimizados:

```css
/* Breakpoints principales */
- Desktop:  > 1024px
- Tablet:   768px - 1024px
- Mobile L: 640px - 768px
- Mobile M: 480px - 640px
- Mobile S: < 480px
```

### Paleta de Colores Claretiana

```css
--primary-color: #8B1E22;    /* 🔴 Rojo Claretiano */
--secondary-color: #1B2C4C;  /* 🔵 Azul Naval Fe */
--accent-gold: #D1A33F;      /* 🟡 Dorado Esperanza */
--neutral-dark: #3A3A3A;     /* ⚫ Gris Sacerdotal */
--neutral-light: #E8E2D0;    /* ⚪ Beige Luz */
--dark-red: #6E1015;         /* 🔴 Rojo Oscuro Fuego */
```

### Sistema de Variables CSS

Utiliza CSS custom properties (variables CSS) para:
- 🎨 Gestión centralizada de colores
- 📝 Tipografías consistentes
- ⏱️ Transiciones uniformes
- 🌓 Fácil mantenimiento y temas

### Tipografías

- **Títulos**: `Playfair Display` (serif) - Elegante y formal
- **Cuerpo**: `Open Sans` (sans-serif) - Legible y moderna

### Características Especiales

- 🎭 **Animaciones CSS** en hover y transiciones
- 🍔 **Menú hamburguesa** para navegación móvil
- 📱 **Mobile-first approach** en algunos componentes
- 🎯 **Smooth scroll** y efectos visuales
- 🖱️ **Estados hover** detallados en enlaces y botones

---

## 🚀 Instalación y Uso

### Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Opcionalmente: servidor local (Live Server, http-server, etc.)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/frochaol/project-aseclar_landing_v1-html-css.git

# 2. Navegar al directorio del proyecto
cd project-aseclar_landing_v1-html-css

# 3. Abrir en el navegador
# Opción A: Abrir index.html directamente
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Opción B: Usar un servidor local (recomendado)
# Con Python 3
python -m http.server 8000

# Con Node.js (npx http-server)
npx http-server -p 8000

# Con PHP
php -S localhost:8000

# Con VS Code extension Live Server
# Click derecho en index.html → "Open with Live Server"
```

### Acceso

Abrir en el navegador:
```
http://localhost:8000
```

---

## 🌐 Despliegue

Este proyecto es compatible con múltiples plataformas de hosting estático:

### GitHub Pages

```bash
# El sitio puede ser desplegado directamente en GitHub Pages
# Configuración: Settings → Pages → Source: main branch
```

URL de ejemplo: `https://frochaol.github.io/project-aseclar_landing_v1-html-css/`

### Otras Opciones

- ✅ **Netlify**: Drag & drop o conexión con GitHub
- ✅ **Vercel**: Deploy automático desde repositorio
- ✅ **Cloudflare Pages**: Hosting gratuito y rápido
- ✅ **Firebase Hosting**: Hosting de Google
- ✅ **Cualquier servidor web estático** (Apache, Nginx)

### Características de Despliegue

- 🚫 **No requiere backend** ni base de datos
- 🚫 **No requiere build process** o compilación
- ✅ **Listo para producción** tal como está
- ✅ **Compatible con CDN** para mejor rendimiento

---

## 🤝 Contribución

Las contribuciones son bienvenidas y apreciadas. Para contribuir:

### Proceso de Contribución

1. 🍴 **Fork** el proyecto
2. 🌿 Crea una **rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push** a la rama (`git push origin feature/AmazingFeature`)
5. 🔁 Abre un **Pull Request**

### Guías de Contribución

- 📝 Mantén el código limpio y comentado
- 🎨 Respeta la paleta de colores y diseño existente
- 📱 Asegura que tus cambios sean responsive
- ✅ Prueba en múltiples navegadores
- 📖 Actualiza la documentación si es necesario

### Áreas de Contribución

- 🐛 Reportar bugs o problemas
- 💡 Sugerir nuevas características
- 📝 Mejorar documentación
- 🎨 Optimizar diseño y UX
- ♿ Mejorar accesibilidad
- 🌐 Traducciones (si aplica)

---

## 👨‍💻 Autor

**Fernando Rocha Olivera**

- GitHub: [@frochaol](https://github.com/frochaol)
- Email: [contacto@frochaol.com](mailto:contacto@frochaol.com)
- Web: [frochaol.com](https://frochaol.com)

Desarrollado con ❤️ para la comunidad de exalumnos claretianos de Arequipa.

---

## 📄 Licencia

Este proyecto fue desarrollado para la **Asociación de Exalumnos Claretianos de Arequipa (ASECLAR)**.

**Derechos reservados** © 2024 ASECLAR - Asociación de Exalumnos Claretianos de Arequipa

Para uso, reproducción o modificación de este código, por favor contactar con la asociación o el autor.

---

## 🙏 Agradecimientos

- 🏫 Al **Colegio Claretiano de Arequipa** por formar generaciones de exalumnos
- 👥 A la **Junta Directiva de ASECLAR** por su liderazgo
- 🎓 A todos los **exalumnos claretianos** que mantienen viva la comunidad
- ⛪ A los **Misioneros Claretianos** por su labor educativa

---

<div align="center">

### 🌟 Si este proyecto te fue útil, considera darle una estrella ⭐

**ASECLAR - Unidos por la tradición Claretiana**

[🏠 Inicio](index.html) • [ℹ️ Nosotros](nosotros.html) • [🗳️ Elecciones](elecciones.html) • [👥 Comunidad](comunidad.html)

</div>