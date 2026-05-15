// Elementos del DOM
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Estado del menú
let isMenuOpen = false;

// Función para alternar el menú
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    // Alternar clases para las animaciones
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevenir scroll del body cuando el menú está abierto
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Event listener para el botón hamburguesa
hamburger.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un enlace
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) {
            toggleMenu();
        }
    });
});

// Cerrar menú con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
        toggleMenu();
    }
});

// Cerrar menú al hacer click fuera de él
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        toggleMenu();
    }
});

// Smooth scrolling para todos los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de shrink en el header al hacer scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Añadir/quitar clase para el efecto de scroll
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Agregar funcionalidad de active link según la sección visible
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Event listener para el scroll
window.addEventListener('scroll', updateActiveLink);

// Inicializar cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    updateActiveLink();
    
    // Animación de entrada para el header
    setTimeout(() => {
        header.classList.add('loaded');
    }, 100);
});

// Prevenir el zoom en dispositivos móviles al hacer doble tap
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Funciones para el Video Modal
function openVideoModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideoPlayer');
    
    videoPlayer.src = videoSrc;
    modal.style.display = 'flex';
    
    // Pequeño delay para permitir que el display flex se aplique antes de la opacidad (para transición)
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    videoPlayer.play();
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('modalVideoPlayer');
    
    modal.style.opacity = '0';
    
    // Esperar a que termine la transición para ocultarlo completamente
    setTimeout(() => {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    }, 300);
}

// Cerrar modal al hacer clic fuera del video
document.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideoModal();
    }
});