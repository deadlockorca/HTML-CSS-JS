const keywords = ["h","e","l","l","0"];
const p = keywords.map((word) => 
getDataPromise(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${query}&namespace=0&limit=10`
)
);
console.log(p);
Promise.all(p).then((data) => {
    console.log(data);
});

//EX2
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
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

let timer;

input.addEventListener("keyup", (e) => {
    const query = e.target.value;

    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(() => {

        getData(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${query}&namespace=0&limit=10`,
            function (error, data) {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log(data);
                ul.innerHTML = "";
                data[1].forEach((item, index) => {
                    ul.innerHTML += `<li><a href=${data[3][index]}>${item}</a></li>`
                });
            })
            .catch((error) => console.log(error))
            .then(() => {
                return getDataPromise(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${query}&namespace=0&limit=10`);
            })
            .then((data) => {
                console.log(data);
                return getDataPromise(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&formatversion=2&search=${data[1][1]}&namespace=0&limit=10`)
            .then((data) => {
                console.log(data);
                });    
            })
    }, 500)
})
//Promise.any
Promise.any([
    Promise.reject("V 1"),
    Promise.resolve("V 2"),
    Promise.reject("V 3"),
    Promise.reject("V 4"),
])
.then((value) => console.log(value))
.catch((error) => console.log(error));
//Promise Race
const promiseRacing = [
    new Promise((resolve, reject) => setTimeout(reject, 1000, "🍏 #1")),
    new Promise((resolve, reject) => setTimeout(resolve, 2000, "🍎 #2")),
    new Promise((resolve, reject) => setTimeout(resolve, 3000, "🍏 #3")),
];
Promise.race(promiseRacing)
.then((value) => console.log(`The winner is ${value}`))
.catch((error) => console.log(`The loser is ${error}`));
//const promiseWithTwoRejected = [
  //  Promise.resolve("🍎 #1"),
    //new Promise((_, reject) => setTimeout(reject, 1000, "🍏 #2")),
    //"🍎 #3",
    //new Promise((_, reject) => setTimeout(reject, 3000, "🍏 #4")),
//];
//Promise.allSettled(promisesWithTwoRejected).then((apple) => {
  //  console.log( apple);
//});

//Ex
const promiseAS1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 1 AS resolved");
    }, 2000);
});
const promiseAS2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise 2 AS resolved");
    }, 4000);
});
const promiseAS3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise 3 AS resolved");
    }, 1000);
});
Promise.allSettled([promiseAS1, promiseAS2, promiseAS3])
.then((result) => {
    console.log("All promises settled");
})
.catch((error) => {
    console.log("Error: ", error);
});

//ex 
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
