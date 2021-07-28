function successHTMLOutput (response) {
    return '<h3>Result</h4>' +
           '<h4>Status</h4>' +
           '<pre>' + response.status + ' ' + response.statusText +
'</pre>' +
           '<h4>Headers:</h4>' +
           '<pre>' + JSON.stringify(response.headers, null, '\t') +
'</pre>' +
           '<h4>Data:</h4>' +
           '<pre>' + JSON.stringify(response.data, null, '\t') +
'</pre>'
        
}

function errorHTMLOutput (error) {
    return '<h3>Result</h4>' +
           '<h4>Message</h4>' +
           '<pre>' + error.message + '</pre>' +
           '<h5>Status:</h5> ' + 
           '<pre>' + error.response.status + ' ' +
error.response.statusText + '</pre>' +
           '<h4>Headers:</h4>' +
           '<pre>' + JSON.stringify(error.response.headers, null, '\t') +
'</pre>' +
           '<h4>Data:</h5>' +
           '<pre>' + JSON.stringify(error.response.data, null, '\t') +
'</pre>';
}

function getRequest() {
    var result =
    document.getElementById('getResult');
    result.innerHTML = '';

    axios.get('http://api.bryanuniversity.edu/jamieRuffin/list')
        .then(function (response) {
            result.innerHTML = 
        successHTMLOutput (response);
        })
        .catch(function (error) {
            result.innerHTML =
        errorHTMLOutput(error);
        }); 
}
