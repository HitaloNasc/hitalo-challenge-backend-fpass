import { buildQueryString } from '.';

describe('buildQueryString', () => {
    it('should return an empty string when there are no parameters', () => {
        const params = {};
        const result = buildQueryString(params);
        expect(result).toEqual('');
    });

    it('should return a string with correctly formatted parameters', () => {
        const params = {
            name: 'John',
            age: 25,
            city: 'New York',
        };
        const result = buildQueryString(params);
        expect(result).toEqual('name=John&age=25&city=New+York');
    });

    it('should ignore null parameters in the query string', () => {
        const params = {
            name: 'John',
            age: null,
            city: 'New York',
        };
        const result = buildQueryString(params);
        expect(result).toEqual('name=John&city=New+York');
    });

    it('should include empty parameters in the query string', () => {
        const params = {
            name: '',
            age: 25,
            city: 'New York',
        };
        const result = buildQueryString(params);
        expect(result).toEqual('age=25&city=New+York');
    });

    it('should escape special characters in the query string', () => {
        const params = {
            name: 'John Smith',
            email: 'john@example.com',
            query: 'search?param=value',
        };
        const result = buildQueryString(params);
        expect(result).toEqual('name=John+Smith&email=john%40example.com&query=search%3Fparam%3Dvalue');
    });
});
