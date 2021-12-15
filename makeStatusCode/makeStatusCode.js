
const getToDos = (callback) =>{

const request = new HXMLHttpRequest();

request.addEventListener('readychangestate', ()=>{
    console.log(request)
    if(request.readyState === 4 && request.status === 200){
        callback(undefined, request.responseText);
        // console.log(request.responseText);
    }else if(request.readyState === 4){
            callback("loading...invalid request!", undefined);
        // console.log('loading...invalid request!')
    }
})
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
}


console.log(1)
console.log(2)
// THIS HA S BECOME A AsyncFunction: EVERY STATEMENTS BEFROE AND AFTER IT GETS EXECUTED FRIST
getToDos( (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data)
    }
})
console.log(4);
console.log(8);