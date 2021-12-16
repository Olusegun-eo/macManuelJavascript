
const getDataBack = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Loading...Invalid request!!!: ");
      }
    });
    request.open("GET", resource);

    request.send();
  });
};


// Multiple promise chaining can be  effected here
getDataBack("./todos/industry.json").then((data) => {
    console.log("promise 1 resolved", data);
    return getDataBack('./todos/economics.json')
  }).then((data) => {
      console.log("promise 2 resolved", data);
      return getDataBack('./todos/design.json')
  }).then((data) => {
      console.log("promise 3 resolved", data);
  }).catch((err) => {
    console.log("promise rejected", err);
  });