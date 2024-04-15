import {get, post} from '@/utils/request';

export function getHelloWorld(queryMap = {}) {
    return get('/api/hello-world', queryMap);
}

export function getTestEnum(bodyParam) {
    return post('/api/test-enum', bodyParam);
}
