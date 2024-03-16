// ./frontend/src/app/[lang]/utils/api-helpers.ts

export function getURL(path = '') {
    return `${process.env.NEXT_PUBLIC__API_URL || 'http://localhost:1337'}${path}`;
}

export function getMedia(url: string | null) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the URL path with the  URL
    return `${getURL()}${url}`;
}

export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}