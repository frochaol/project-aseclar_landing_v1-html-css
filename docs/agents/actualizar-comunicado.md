# Instrucciones para Actualizar el Comunicado Principal

Este documento sirve como guía para que los agentes de IA actualicen el comunicado oficial, aviso importante, banner principal o noticias destacadas del inicio en `index.html`.

Sigue rigurosamente el siguiente flujo de trabajo:

## 1. Identificar y Extraer el Comunicado Actual
Antes de realizar cualquier cambio en `index.html`, debes leer la sección `<section class="important-announcement">` en `index.html` (normalmente alrededor de la línea 124) y extraer la información del comunicado actual:
- **Título**: El contenido del tag `<h2>` (ej. "Comunicado Oficial").
- **Etiqueta (Badge)**: El texto dentro de `<div class="announcement-badge"><span>...</span></div>`.
- **Texto**: Todos los párrafos `<p class="announcement-body">` y el saludo/despedida (`.announcement-greeting`, `.announcement-tagline`).
- **Archivo de Imagen/Video**: La ruta del archivo en `src` o `href` (ej. `assets/comunicado-oficial.jpg`).
- **Fecha aproximada o de archivo**: La fecha actual del sistema (u otra especificada) en la que se archiva.

## 2. Registrar en el Historial (`docs/historial-comunicados.md`)
1. Abre el archivo `docs/historial-comunicados.md`. Si no existe, créalo con el encabezado `# Historial de Comunicados`.
2. Inserta el comunicado extraído **al principio de la lista** (justo debajo del título principal `# Historial de Comunicados`), manteniendo un orden cronológico inverso (lo más reciente arriba).
3. Usa la siguiente plantilla markdown para archivar:

```markdown
## [Fecha: AAAA-MM-DD] - [Título del Comunicado]
**Etiqueta:** [Nombre de la Etiqueta]

[Texto del comunicado con sus respectivos párrafos y firmas]

**Archivo adjunto:**
![[Descripción del Archivo]](file:///Users/fernando/Documents/2-Trabajo/ASECLAR/project-aseclar_landing_v1-html-css/[Ruta de la imagen en assets])
```

> [!NOTE]
> Asegúrate de usar rutas absolutas válidas para que las imágenes se puedan previsualizar en el editor/markdown del usuario.

## 3. Procesar los Nuevos Recursos (Imágenes/Videos/Documentos)
El usuario proporcionará en el chat la ubicación o el contenido del nuevo texto, imágenes, videos u otros archivos.
1. Localiza el archivo proporcionado por el usuario.
2. Cópialo a la carpeta `assets/` del proyecto.
3. Renombra el archivo en `assets/` con un formato claro que incluya la fecha para evitar que se sobrescriban los archivos de comunicados pasados y se rompa el historial.
   - Formato recomendado: `assets/comunicado-YYYY-MM-DD.[ext]` (ej. `assets/comunicado-2026-06-25.png`).
   - Mantén el formato original del archivo (no intentes convertir imágenes a WebP de forma automática, respeta el formato original JPG, PNG, etc., según la preferencia del usuario).

## 4. Actualizar `index.html`
Modifica únicamente la sección `<section class="important-announcement">` en `index.html`. Asegúrate de no romper la estructura responsiva ni las clases CSS.

### Estructura base para Imágenes:
```html
        <!-- Sección de Noticia Importante -->
        <section class="important-announcement">
            <div class="announcement-container">
                <div class="announcement-badge">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                    </svg>
                    <span>[ETIQUETA (ej. Comunicado Oficial)]</span>
                </div>
                <div class="announcement-content">
                    <div class="announcement-text">
                        <h2>[TÍTULO]</h2>
                        <div class="announcement-greeting">[SALUDO (ej. Estimados asociados y exalumnos claretianos:)]</div>
                        <p class="announcement-body">
                            [Párrafo 1]
                        </p>
                        <p class="announcement-body">
                            [Párrafo 2]
                        </p>
                        <!-- Agregar más párrafos según sea necesario -->
                        <div class="announcement-tagline">[DESPEDIDA (ej. Atentamente,)]</div>
                        <p class="announcement-body"><strong>[FIRMA (ej. El Consejo Directivo)]</strong><br>[SUB-FIRMA (ej. ASECLARET - Arequipa)]</p>
                    </div>
                    <div class="announcement-image-wrapper" style="flex: 0 0 auto; width: 100%; max-width: 420px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <a href="assets/comunicado-YYYY-MM-DD.ext" target="_blank" style="display: block; width: 100%;">
                            <img src="assets/comunicado-YYYY-MM-DD.ext" alt="[Alt Text]" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.18); border: 2px solid rgba(209, 163, 63, 0.25); display: block;" fetchpriority="high">
                        </a>
                        <span class="announcement-caption" style="font-size: 0.85rem; color: var(--neutral-dark); opacity: 0.8; font-style: italic;">Haz clic en la imagen para ampliar</span>
                    </div>
                </div>
            </div>
        </section>
```

### Estructura base para Videos (usando el modal de video existente):
Si el nuevo comunicado contiene un video, utiliza un enlace que dispare la función global `openVideoModal` cargada desde `script.js`.
```html
                    <div class="announcement-image-wrapper" style="flex: 0 0 auto; width: 100%; max-width: 420px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <a href="javascript:openVideoModal('assets/comunicado-YYYY-MM-DD.mp4')" style="display: block; width: 100%; position: relative;">
                            <!-- Usa una imagen de miniatura o un póster del video -->
                            <img src="assets/comunicado-YYYY-MM-DD-thumbnail.jpg" alt="Reproducir Comunicado" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.18); border: 2px solid rgba(209, 163, 63, 0.25); display: block;">
                            <!-- Superposición de botón de play -->
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: rgba(0,0,0,0.65); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
                                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </a>
                        <span class="announcement-caption" style="font-size: 0.85rem; color: var(--neutral-dark); opacity: 0.8; font-style: italic;">Haz clic para reproducir el video</span>
                    </div>
```

## 5. Verificación
1. Asegúrate de que el archivo copiado a `assets/` tiene los permisos correctos.
2. Abre la landing page localmente o verifica la sintaxis del HTML para confirmar que no hay etiquetas sin cerrar.
3. Informa al usuario sobre los archivos modificados y el nuevo registro en el historial.
