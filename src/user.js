class User {
  constructor (user) {
    this.id = user.id
    this.username = user.username
    this.age = user.age
    this.results = this.createResultElements(user.results)
    this.resultList = document.querySelector('#result-list')
  }

  appendUsers (el) {
    const p = document.querySelector('p')
    p.innerText = this.username
    console.log(user)
    el.appendChild(p)
  }

  removeResult (name) {
    const resultEl = this.results.find(result => result.result.name === name)
    resultEl.remove()
    this.results = this.results.filter(result => result !== resultEl)
  }

  createResultElements (results) {
    return results.map(result => new Result(result))
  }

  createResult (result) {
    this.results.push(new Result(result))
  }

}

// this.results.forEach(result => document.body.append(result.render()))
//
// this.results.find(result => result.id === 1).remove()
// const formEl = document.querySelector('form')
// const nameEl = document.querySelector('#name-input')
//
// form.addEventListener('submit', event => {
//   event.preventntDefault()
//   const user = {
//     name: nameEl.value
//   }
//   new User(user)
// })
