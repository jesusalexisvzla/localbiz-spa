

export interface BookingConfig {
    provider: 'google-calendar';
    displayMode: 'embed' | 'link';
    bookingUrl: string;
    embedUrl: string;
    enabled: boolean;
}

export const bookingConfig: BookingConfig = {
    provider: 'google-calendar',
    displayMode: 'embed',
    bookingUrl: import.meta.env.BOOKING_URL ?? '',
    embedUrl: import.meta.env.BOOKING_EMBED_URL ?? '',
    enabled: import.meta.env.BOOKING_ENABLED === 'true'
};
