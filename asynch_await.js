const postx = [
    { title: "Hello World", body: "The art beauty"},
    { title: "Hello People", body: "The art transformer"}
];

let getPostx = () =>{
    setTimeout( () => {
        let displayPostx = " ";
        postx.forEach( (poxt, i) =>{
            displayPostx +=`<li>${poxt.title}</li>`;
        })
        document.body.innerHTML = displayPostx
    }, 1000)
}

let createPostx = (poxt) =>{
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            postx.push(poxt);
            let error = false;
            if(!error){
                resolve()
            }else{
                reject("Something wnet gnorw")
            }
        }, 2000)
    })
}

// This is for single Promise 
/*
createPostx({title: 'The kings makers', body: 'The art of kinging'})
.then(getPostx)*/


// Asynch/Await===>It is a more elegant way to handle promises
// for us to use await: Our funct must be preceeded with async functions"
// Note==>Promise.all([]) has nothing to do with code above it

async function init() {
 await createPostx({title: 'The kings makers', body: 'The art of kinging'});
 getPostx();
}
init();


// We can also use it with "fetch" ==>Asynch / fetch/Await
async function fetchUser(){
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   let data = await res.json();
   console.log(data)
   return data;
}
fetchUser()
 


// This is for Promise.all([])
/*
const prom1 =  Promise.resolve("Hello Everyone");
const prom2 = 5;
const prom3 = new Promise((resolve, reject) => {
    setTimeout( resolve, 2050, "Welcome!!!")
})
const prom4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json())
Promise.all([prom1, prom2, prom3, prom4])
.then( (values) => console.log(values) )    */

const dtodatas = [
    { }
]
let dtos = function (){
    return new Promise((resolve, reject) =>{
        let dtoData = " ";
    dtodatas.forEach( (psts) =>{

    })
    })
}