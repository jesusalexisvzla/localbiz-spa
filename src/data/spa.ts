
import type { ImageMetadata } from 'astro';

export interface GalleryImage {
    src: ImageMetadata;
    alt: string;
}

export const spaContent = {
    services: {
        title: 'Encuentra tu momento de bienestar.',
        description:
            'Explora nuestros tratamientos, conoce su duración y precio, y elige la experiencia ideal para ti.'
    },

    about: {
        eyebrow: 'Nuestra esencia',
        title: 'Un espacio para desconectar.',
        description:
            'En Serenia creemos que dedicar tiempo al descanso es parte del bienestar. Nuestra propuesta combina ambientes tranquilos y experiencias enfocadas en la relajación.'
    },

    gallery: {
        title: 'Un ambiente pensado para ti.',
        description:
            'Descubre los espacios y detalles que hacen especial cada experiencia.'
    },

    contact: {
        title: 'Estamos aquí para ti.',
        description:
            'Consulta nuestros horarios, ubicación y medios de contacto.',
        hours: [
            { days: 'Lunes a viernes', time: 'Por confirmar' },
            { days: 'Sábado', time: 'Por confirmar' },
            { days: 'Domingo', time: 'Por confirmar' }
        ]
    }
};

export const galleryImages: GalleryImage[] = [];
