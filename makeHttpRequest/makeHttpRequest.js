const getToDos=(callback) => {
    // create an XMLHttpRequest request using thtodos
const request = new XMLHttpRequest();

// Check XMLHttpRequest.readyState in MDN
/* But at the minute, we don't when the request is complete'
 We can Track the request With Event Listener using readstateChange by binding it to the request */
request.addEventListener('readystatechange',  ()=> {
    console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        // I called back and passed the arguments into it
        callback(undefined, request.responseText)
        // console.log(request.responseText)
    } else if(request.readyState === 4){
      // I called back and passed the arguments into it
      callback("loading... invalid request, could not fetch request", undefined);
      // console.log("loading... invalid request, could not fetch request")
    }

})

// Set the type of request(and where do we want to make request to) as the parameters
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// Then we send the request....send()...here, we make the request
request.send();
}

/*We can pass callback func in getToDos an arg inform of anonymous(with 2 params....1==>err, 2==>data)...i.e We will also pass it as a param to it
 Once I pass d func @d point of declaration Uo there: By convention wen we consume Network request, we do error first then data second*/

console.log("The following will execute before the AsyncFunction")
console.log(1)
console.log(2)
//  THIS IS now AsyncFunction: we can as well invoke it multiple times and use it differently
getToDos( (err, data) => {
    console.log("callback works!")
    if(err) {
        console.log(err)
    }else {
        console.log(data)
    }
});
console.log("Another statement been executed")
console.log(4)
console.log(5)

// How we take JSON string that we received back from Server When we make a request to an employee