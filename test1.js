fetch('https://6krfmawvbrbn39q3afgmoevqwh28q3es.oastify.com/data') .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.error(error)); 
