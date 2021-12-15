import createOurOwnJson from "./createOurOwnJson.js"
const getTodos = (callback)=>{
   const request = new HXMLHttpRequest();
   
   request.addEventListener("readychangestate", ()=>{
       if(request.readyState === 4 && request.status === 200){
           let data = JSON.parse(request.responseText)
           callback(undefined, data);
        }
        else if(request.readyState === 4){
            callback("loading...invalid request!", undefined);
        }
    })
    request.open("GET", 'createOurOwnJson.'); 
    request.send();                                                   
}

console.log("The varous statement")
console.log(2)
console.log(4)

getTodos( (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

console.log(4)
console.log(7)