import { Meta, Nav, Modal, Loader, GalleryCard, Picture, PictureThumbnail } from './index';

jest.mock('./meta/meta', () => 'Meta');
jest.mock('./nav/nav', () => 'Nav');
jest.mock('./modal/modal', () => 'Modal');
jest.mock('./loader/loader', () => 'Loader');
jest.mock('./gallery-card/gallery-card', () => 'GalleryCard');
jest.mock('./picture/picture', () => 'Picture');
jest.mock('./picture-thumbnail/picture-thumbnail', () => 'PictureThumbnail');

describe('Components module API', () => {
  it('should export the individual components', () => {
    expect(Meta).toBe('Meta');
    expect(Nav).toBe('Nav');
    expect(Modal).toBe('Modal');
    expect(Loader).toBe('Loader');
    expect(GalleryCard).toBe('GalleryCard');
    expect(Picture).toBe('Picture');
    expect(PictureThumbnail).toBe('PictureThumbnail');
  });
});
