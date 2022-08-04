import { camelToSnakeCase, createSearchParams } from '../../../src/core/github/github-client';

describe('GitHub Client', () => {
  describe('camelToSnakeCase', () => {
    it('Should convert camelCase to snake_case', () => {
      const original = 'camelCase';
      const converted = camelToSnakeCase(original);

      expect(converted).toBe('camel_case');
    });
  });

  describe('createSearchParams', () => {
    it('Should convert an object to GitHub compatible querystring', () => {
      const request = {
        username: 'chrisjbarr',
        sort_order: 'desc',
        favoriteColor: 'yellow'
      };

      const querystring = createSearchParams(request);

      expect(querystring).toBe('username=chrisjbarr&sort_order=desc&favorite_color=yellow');
    });
  });

  /**
   * Normally would be mocking axios here and minimally testing to ensure our
   * correct endpoint url was called for `searchGitHubUsers`...
   */
});
