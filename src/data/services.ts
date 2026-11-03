
export interface SpaService {
    id: string;
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    featured?: boolean;
}

export const spaServices: SpaService[] = [
    {
        id: 'relaxing-massage',
        name: 'Masaje relajante',
        description:
            'Una experiencia de descanso mediante movimientos suaves y presión moderada.',
        durationMinutes: 60,
        price: 790,
        featured: true
    },
    {
        id: 'deep-tissue',
        name: 'Masaje descontracturante',
        description:
            'Masaje de presión ajustable enfocado en zonas con tensión muscular.',
        durationMinutes: 60,
        price: 950
    },
    {
        id: 'hot-stones',
        name: 'Masaje con piedras calientes',
        description:
            'Una experiencia relajante que combina masaje y piedras tibias.',
        durationMinutes: 60,
        price: 990
    },
    {
        id: 'aromatherapy',
        name: 'Aromaterapia y masaje',
        description:
            'Una sesión de masaje acompañada de aceites aromáticos seleccionados.',
        durationMinutes: 75,
        price: 950
    },
    {
        id: 'couples-experience',
        name: 'Experiencia para parejas',
        description:
            'Dos sesiones simultáneas en un ambiente privado y relajante.',
        durationMinutes: 60,
        price: 1590
    }
];
