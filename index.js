function configurationObject(userName, email) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': userName,
            'email': email
        })
    }
}
function submitData(userName, email) {
    return fetch("http://localhost:3000/users", configurationObject(userName, email))
        .then((response) => response.json())
        .then((data) => {
            let p = document.createElement('p')
            p.textContent = data.id
            document.querySelector("body").appendChild(p)
        })
        .catch((error) => {
            let c = document.createElement('p');
            c.textContent = error.message
            document.querySelector("body").append(c)
        });
}


