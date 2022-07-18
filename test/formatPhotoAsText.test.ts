import formatPhotoAsText from '../src/helpers/formatPhotoAsText';
import type Photo from '../src/types/Photo';

const testPhoto: Photo = {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796'
};

describe('formatPhotoAsText', () => {
    it('should return text string for test photo', () => {
        expect(formatPhotoAsText(testPhoto)).toBe(
            '[2] reprehenderit est deserunt velit ipsam'
        );
    });
});
