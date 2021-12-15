const getToDus = (resources, callback) =>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request)
            let data = JSON.parse(request.responseText)
            callback(undefined, data)
        }
        else if(request.readyState === 4){
            callback("loading...Invalid request", undefined)
        }
    })


    request.open('GET', resources);
    request.send();
}


getToDus('./todos/design.json', (err, data) => {
    console.log(data);
    getToDus('./todos/economics.json', (err, data) => {
        console.log(data);
        getToDus('./todos/industry.json', (err, data) => {
            console.log(data);
        })
    })
    
})