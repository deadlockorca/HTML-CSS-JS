var USER_URL = "https://jsonplaceholder.typicode.com/todos";
const getData = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                callback(undefined, JSON.parse(xhr.responseText));
            } else {
                callback(new Error(xhr.responseText));
            }
        }
    }
    xhr.open("GET", url, true);
    xhr.send();
}


const getDataPromise = (url) => {
    return new Promise(function(resolve, reject){
        getData(url, function(error, data){
            if(error){
                reject(error);
            }
            resolve(data);
        })
    })
}
async function main() {
    console.log("Before");  
    var t = await getDataPromise(USER_URL +1);
    console.log(t);
    console.log("After");
}
main();
console.log("End")
//
async function delay(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve, ms);
    });
}
async function delayLog(){
    console.log("Start");
    await delay(3000);
    console.log("End");
}
delayLog();
//
//async function fetchData(){
  //  try {
    //    const [data1, data2] = await Promise.all([
      //      fetch(USER_URL +1),
        //    fetch(USER_URL +2),
          //  fetch(USER_URL +3),
        //]);
    //};
      //  const result1 = await data1.json();
        //const result2 = await data2.json();
        //const result3 = await data3.json();

        c//onsole.log(result1, result2, result3);
//x}


