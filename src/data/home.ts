import type { ImageMetadata } from 'astro';
// import heroTestImage from '@assets/images/hero-test.png';

export interface HomeContent {
    hero: {
        title: string;
        description: string;
        primaryAction: {
            label: string;
            href: string;
        };
        image?: {
            src: ImageMetadata;
            alt: string;
        };
    };
}

export const homeContent: HomeContent = {
    hero: {
        title: 'Regálate un momento de calma.',
        description:
            'Descubre un espacio dedicado a tu bienestar, con masajes y experiencias de relajación diseñadas para desconectarte de la rutina.',
        primaryAction: {
            label: "Explorar servicios",
            href: "/#services"
        },
        // image: {
        //     src: heroTestImage,
        //     alt: 'Temporary image for testing Astro image optimization'
        // }
    }
};