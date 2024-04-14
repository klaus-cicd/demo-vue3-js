import {get, post} from '@/utils/request';

export function helloWorld(query) {
    return get('/helloWorld', query);
}

export function testEnum(bodyParam) {
    return post('/api/test-enum', bodyParam);
}
