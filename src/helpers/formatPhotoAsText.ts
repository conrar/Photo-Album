import type Photo from '../types/Photo';
// Format albums into text strings
// e.g. "[10] my photo"
export default function (photo: Photo): string {
    return `[${photo.id}] ${photo.title}`;
}
