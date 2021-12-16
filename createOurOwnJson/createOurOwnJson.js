const getToDos = (callback) => {
  const request = new XMLHttpRequest();
  var url = 'createOurOwnJson.json';

  request.addEventListener("readystatechange", () => {
    console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
      // console.log(request.responseText)
    } else if (request.readyState === 4) {
      // I called back and passed the arguments into it
      callback(
        "loading... invalid request, could not fetch request",
        undefined
      );
      // console.log("loading... invalid request, could not fetch request")
    }
  });

  request.open("GET", url, true);
  request.send();
};
console.log("The following will execute before the AsyncFunction");
console.log(1);
console.log(2);
//  THIS IS now AsyncFunction: we can as well invoke it multiple times and use it differently
getToDos((err, data) => {
  console.log("callback works!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("Another statement been executed");
console.log(4);
console.log(5);

// How we take JSON string that we received back from Server When we make a request to an employee
// npm i react-router-dom react-icons