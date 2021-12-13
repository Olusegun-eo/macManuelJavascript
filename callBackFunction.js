// We are kind of mimicking How data are Fetch from the server


// Create a Post
const posts = [
    {title: 'Post one', body: 'The Rise of An Empire'},
    {title: 'Post two', body: 'The King is here'}
];

// Getting Posts
function getPosts(){
    setTimeout( ()=>{
        let output = "";
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}


// Create a new Post:===> pass post as patameter
function createPost(post, callBackFunction){
    setTimeout( () =>{
        posts.push(post)
        callBackFunction()
    }, 2000)
}
createPost({title: "The Empire", body: "The rising of the northern Kings"}, getPosts)


// Note: @this point, we cnt see the 3rd post bcos the time it takes  to create
// and render to the DOM. <====> To make it Show
// pass a "callBackFunction" to createPosts func as the "2nd param"
// invoke "callBackFunction()" after the post has been push
//Make the getPosts a "callBackFunc" WHERE "createPosts"
// was invoked and then remove "getPosts()" and instead pass it's name==>"getPosts"
// into createPosts as the "callBackFunction"