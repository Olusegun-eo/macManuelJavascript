const getData = (resource) => {

    return new Promise( (resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", () => {
              if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
              } else if (request.readyState === 4) {
                reject("loading...invalid request");
              }
        });
            request.open("GET", resource);

            request.send();

    })


}

getData('./todos/industry.json').then( (data) => {
console.log('promise resolved', data)
}).catch( (err) => {
    console.log('promise rejected', err)
})