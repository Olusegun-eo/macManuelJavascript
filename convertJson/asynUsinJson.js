const getTodos = (callback) => {
  // How we take JSON string that we received back from Server When we make a request to an employee
//   It is a form of object notation with key value pairs
// But to convert it back to array of object in JavaScript....We call JSON.parse()
  const request = new HXMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("loading... invalid request!", undefined);
    }
  });
  request.send();
}

getTodos( (err, data) => {
    if(err) {
        console.log('err')
    }else{
        console.log(data)
    }
})