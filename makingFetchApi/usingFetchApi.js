
// Here we write fewer codes that is maintainable 
// We are making network request to Https
fetch('./todos/industry.json').then( (response)=>{ //This is the overall value and it is returning a promise
    // Since it is returning a value we can then tack another .then() method
    console.log('promise resolved', response);
    return response.json();
}).then( (data)=>{ //This is called Promise Chaining....When this is resolved, it will give us the data that we fetched We can now use the data here and
    console.log(data)
}).catch( (err)=>{
    console.log('promise rejected', err);
})