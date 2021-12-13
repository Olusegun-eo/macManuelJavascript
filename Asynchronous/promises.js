
const posts = [
    { title: "The cohort Story", body: "The native kings are here"},
    { title: "The unforseen Chnage", body: "The power of determinATION"}
];


let getPosts = ()=>{
    setTimeout( () => {
        let displayPosts = " ";
        posts.forEach( (post) => {
            displayPosts += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = displayPosts;
    }, 1000)
}


let createPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.push(post);

            let error = false;
            if(!error) {
                resolve();
            }
            else{
                reject("Error: Something went wrong");
            }
        }, 2000);
    })
}
// Note IF the error is set to true==> it will flag error
// But the error has bee caught
/*
createPosts({title: 'The appearing in the saints', body: 'God in man on earth'})
.then(getPosts)
.catch(error => console.log(error))*/


// IF WE HAVE MULTIPLE PROMISES(WE CAN HAVE Promise.all() instead of multiple .then())
// We can create multiple promises and append it to Promise.all([takes-in array of promiss])

const promises1 = Promise.resolve("Hello World")
const promises2 = 10;
const promises3 = new Promise( (resolve,reject) =>{
    setTimeout(resolve, 2000, 'GoodBye' )
})
// Calls to fetch Api or to Make HTTP request wich return a promises4
// For "fetch" we've to format it ==>.then(resp => resp.json)
const promises4 = fetch('https://jsonplaceholder.typicode.com/users')
.then( (res) => res.json());
Promise.all([promises1, promises2, promises3, promises4])
.then((values) => console.log(values))





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
            let error = true;
            if(!error){
                resolve()
            }else{
                reject("Something wnet gnorw")
            }
        }, 2000)
    })
}
/*
createPostx({title: 'The kings makers', body: 'The art of kinging'})
.then(getPostx)*/

const prom1 =  Promise.resolve("Hello Everyone");
const prom2 = 5;
const prom3 = new Promise((resolve, reject) => {
    setTimeout( resolve, 2050, "Welcome!!!")
})
const prom4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res =>res.json())
Promise.all([prom1, prom2, prom3, prom4])
.then( (values) => console.log(values) )    