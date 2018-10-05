class Api {

  static getUsers () {
    return fetch('http://localhost:3000/users')
      .then(resp => resp.json())
  }

  static getResults () {
    return fetch('http://localhost:3000/results')
      .then(resp => resp.json())
  }

  static postResults (result) {
    return fetch('http://localhost:3000/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(result)

    }).then(resp => resp.json())
    // .then(response => console.log('Success:', JSON.stringify(response)))
  }

  static postUser (user) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)

    }).then(resp => resp.json())
    // .then(resp => console.log('Success:', JSON.stringify(resp)))
  }

}
