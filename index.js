function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const data = {
      name: name,
      email: email
    };
  
    const configObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, configObject)
      .then(response => response.json())
      .then(parsedResponse => {
        const id = parsedResponse.id;
        document.body.append(id);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
  submitData("John Doe", "john@example.com");