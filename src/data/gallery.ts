const galleryImages = import.meta.glob<string>(
    '../assets/images/gallery/*',
    { eager: true, query: '?url', import: 'default' },
)

const localImages = Object.keys(galleryImages)
    .sort()
    .map((path) => ({ src: galleryImages[path] }))

export const images: { src: string; alt?: string }[] = [
    ...localImages,
];