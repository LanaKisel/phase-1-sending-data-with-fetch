// Add your code here
//fetch(destinationURL, configurationObject);
// const destinationURL = "http://localhost:3000/dogs"


// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed : "Poodle"
//     })
// };
// fetch("http://localhost:3000/dogs", configurationObject)
// .then(function (response){
//     return response.json();
// })
// .then(function(object){
//     console.log(object)
// })

// const users = {
//     userName : "Lana",
//     email: "svetlana.kisel.ca@gmail.com"
// }
function configurationObject (userName, email) {
return { method : 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    },
    body: JSON.stringify({
        'name':userName, 
        'email': email
    })
        }    
    }
function submitData(userName, email){
    //fetch('http://localhost:3000/users', configurationObject)
    //.then(response => {response.json().then(parsed => {console.log(parsed)})})
    // .catch(function(error){
    //     alert('Oh man..It didn\'t work');
    //     console.log(error.message)})
        return fetch("http://localhost:3000/users", configurationObject(userName, email))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector("body").innerHTML = data.id;
        })
        .catch((error) => {
          document.querySelector("body").innerHTML = error.message;
        });
    }
    