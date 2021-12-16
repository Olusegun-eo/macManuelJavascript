
const getTodoDos = async () => {
    // We declare a function and turn it asyn func by adding asyn keyword infront of it...
    // We can make request using fetch(And we pass resoucre to the endpoint into it) request
    // Instead of tacking .then() to it...Since we have asyn and await, we don't need to do that
    /* const getToDos = async () =>{
        instead of doing this==>fetch('./todos/industry.json').then( () =>{}), we can now have

        const response = await fetch('./todos/industry.json')

        "await" will block the request until the promise is reolved and store it inside reponse
        AND we use "await" keyword to chain all these promise
        NOte==> json() formar our data AND returns promise in itself 
        const data = await response.json().;
        return data (SO THAT WEN WE CALL THIS FUNC, IT WILL RETURN data)
        ....NOTE...we can chain all OUR REQUEST FOLLOWING THE PROCESSES ABOVE INE AFTER THE OTHER   
    }
*/
// NOTE...All the request/requests made in this func is BLOCKING, and these func only return "Promise" not the actual data until we invoke it....
    const response = await fetch('./todos/industry.json')
    // This is Creating Custom Error Handler
    if(response.status !== 200){throw new Error('incorrect resource status: ' + response.status)}
    // console.log(response)
    const data = await response.json()
    return data;
}

// FROM HERE ONWARD, THIS IS NON-BLOCKING
console.log("This is non-blocking, and it executes b4 the Async fun")
console.log(4);
getTodoDos()
.then( (data) => { console.log('promise resolved', data) })
.catch( (err) => {console.log('promise rejected', err.message)})
console.log(5);
console.log(8);