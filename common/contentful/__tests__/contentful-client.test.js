import contentfulClient from '../contentful-client';

jest.mock('contentful', () => ({
  createClient: object => object,
}));

describe('contentful-client', () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules(); // this is important
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('should render a client object without crashing', () => {
    process.env.NODE_ENV = 'development';
    const client = contentfulClient();
    expect(client.host).toEqual('preview.contentful.com');
  });

  it('should set the correct host for production environment', () => {
    process.env.NODE_ENV = 'production';
    const client = contentfulClient();
    expect(client.host).toEqual('cdn.contentful.com');
  });
});
