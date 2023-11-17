const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved")
        
    }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
        
    }, 5000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolved")
        
    }, 1000);
});
Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log("All promises resolved", result);
})
.catch((error) => {
    console.log("Error: ", error);
})
//Promise  with one reject
const promiseWithOneReject = [
    Promise.resolve("#1"),
    "#2",
    new Promise((resolve, reject) => setTimeout(reject, 1000, "#3")),
];
Promise.all(promiseWithOneReject)
.then((text) => console.log("Promise resolved: ", text))
.catch((error) => console.log("Promise rejected: ", error));
//let promise = new Promise(function(resolve, reject){
  //  setTimeout(() => resolve("oke, man", 2000));
//});

//promise.then(
  //  (result) => alert(result),
    //(result) => alert(error)
//);

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

const downloadFile = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => {
            reject(new Error("Network Error"));
        };
        xhr.send();

    });
};

downloadFile("http://abc.com/File.jpg")
.then((data) => {
    console.log("File downloaded: ", data);
})
.catch
