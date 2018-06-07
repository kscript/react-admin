import fetch from 'UTIL/fetch.js';

var fetchList = (data) => fetch('/api/list', {
    type: 'POST',
    data: data
})


export { fetchList };