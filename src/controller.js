class Controller {
  constructor () {
    this.users = []
    this.results = []
    this.getUsers()
    this.getResults()
    this.allUsersButton()
    this.lowerSection = document.querySelector('#lowerSection')
    this.allUsers = document.querySelector('#allUsers')
    this.reloadPage()
    this.signUpButton()
    this.assessButton()
    this.aboutPage()
  }

  getUsers () {
    Api.getUsers()
    .then(users => this.createUsers(users))
  }

  getResults () {
    Api.getResults()
    .then(results => {
      this.createResults(results)
    })
  }

  createUsers (users) {
    users.map(user => this.addUsers(user))
  }

  addUsers (user) {
    this.users.push(new User(user))
  }

  createResults (results) {
    results.map(result => this.addResult(result))
  }

  addResult (result) {
    this.results.push(new Result(result))
  }

  reloadPage () {
    const navBarBrand = document.querySelector('.navbar-brand')
    navBarBrand.addEventListener('click', event => {
      window.location.reload()
    })
  }

  // on click of 'All Users'
  // empty section element
  // iterate over users
  // append to lowerSection
  allUsersButton () {
    allUsers.addEventListener('click', event => {
      this.showAllUsers()
    })
  }

  showAllUsers () {
    this.lowerSection.innerHTML = ''
    const jumbotronText = document.querySelector('#jumbotronText')
    jumbotronText.innerText = ''
    const div = this.createUsersDiv()

    this.users.forEach(user => {
      this.appendUsers(div, user)
    })
    this.lowerSection.appendChild(div)

    this.findResults()
  }

  // create a div for user
  createUsersDiv () {
    const div = document.createElement('div')
    div.id = 'allUsersDiv'
    div.class = 'col-md-4'
    div.innerHTML = `
    <span class="glyphicon glyphicon-user glyphicon-large" aria-hidden="true"></span>
    <h3>Users</h3>
  `
    return div
  }

  // within div.innerHTML add user data
  appendUsers (el, user) {
    const p = document.createElement('p')
    p.id = user.id
    p.innerText = user.username
    el.appendChild(p)
  }

  // when user is clicked
  // find user object
  findResults () {
    const allUsersDiv = document.querySelector('#allUsersDiv')

    allUsersDiv.addEventListener('click', event => {
      const results = this.users.find(user => user.id === parseInt(event.target.id)).results
      this.displayResults(results)
      this.showResult()
    })
  }

  // display user results
  displayResults (results) {
    this.lowerSection.innerHTML = ''

    const div = this.createResultsDiv()
    const usersButton = this.usersButton()

    results.forEach(result => {
      this.appendResult(div, result)
    })
    div.appendChild(usersButton)
    this.lowerSection.appendChild(div)
  }

  usersButton () {
    const usersButton = document.createElement('button')
    usersButton.innerText = 'Go back to users'
    usersButton.className = 'btn btn-primary btn-lg'

    usersButton.addEventListener('click', event => {
      this.showAllUsers()
    })

    return usersButton
  }

  createResultsDiv () {
    const div = document.createElement('div')
    div.id = 'allResultsDiv'
    div.class = 'col-md-12'
    div.innerHTML = `
    <span class="glyphicon glyphicon-link glyphicon-large" aria-hidden="true"></span>
    <h3>Results</h3>
    `
    return div
  }

  appendResult (el, result) {
    const p = document.createElement('p')
    p.id = result.id
    p.innerText = `result ${result.id}`
    el.appendChild(p)
  }

  showResult () {
    const allResultsDiv = document.querySelector(`#allResultsDiv`)
    const usersButton = this.usersButton()

    allResultsDiv.addEventListener('click', event => {
      const result = this.results.find(result => result.id === parseInt(event.target.id))
      this.appendResultCharts(allResultsDiv, result)
      this.lowerSection.appendChild(usersButton)

      // add tag for each result attribute
      // append result data
    })
  }

  appendResultCharts (div, result) {
    div.innerHTML = `
    <span class="glyphicon glyphicon-stats glyphicon-large" aria-hidden="true"></span>
    <h3>User: ${this.users.find(user => user.id === result.user_id).username}</h3>

    <div>
      <canvas style="margin: 0 auto;" id="selfControlChart" width="400" height="400"></canvas>
    </div>
    <div>
      <canvas style="margin: 0 auto;" id="emotionalSkillsChart" width="400" height="400"></canvas>
    </div>
    <div>
      <canvas style="margin: 0 auto;" id="socialSkillsChart" width="400" height="400"></canvas>
    </div>
    <div>
      <canvas style="margin: 0 auto;" id="wellBeingChart" width="400" height="400"></canvas>
    </div>
    `

    this.renderSelfControlChart(result)
    this.renderEmotionalSkillsChart(result)
    this.renderSocialSkillsChart(result)
    this.renderWellBeingChart(result)
  }

  renderSelfControlChart (result) {
    const ctx = document.getElementById('selfControlChart')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Adaptability', 'Assertiveness', 'Self esteem', 'Stress management'],
        datasets: [{
          label: 'Self Control Skills',
          data: [`${result.adaptability}`, `${result.assertiveness}`, `${result.self_esteem}`, `${result.stress_management}`],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              max: 10,
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  renderEmotionalSkillsChart (result) {
    const ctx = document.getElementById('emotionalSkillsChart')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Emotion expression', 'Emotion management', 'Emotion perception', 'Emotion regulation'],
        datasets: [{
          label: 'Emotional Skills',
          data: [`${result.emotion_expression}`, `${result.emotion_management}`, `${result.emotion_perception}`, `${result.emotion_regulation}`],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              max: 10,
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  renderSocialSkillsChart (result) {
    const ctx = document.getElementById('socialSkillsChart')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Impulsiveness', 'Relationship_skills', 'Social competence', 'Trait empathy'],
        datasets: [{
          label: 'Social Skills',
          data: [`${result.trait_empathy}`, `${result.relationship_skills}`, `${result.social_competence}`, `${result.trait_empathy}`],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              max: 10,
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  renderWellBeingChart (result) {
    const ctx = document.getElementById('wellBeingChart')
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Trait happiness', 'Trait optimism', 'Self-motivation'],
        datasets: [{
          label: 'Well Being',
          data: [`${result.trait_happiness}`, `${result.trait_optimism}`, `${result.self_motivation}`],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              max: 10,
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  signUpButton () {
    const signUpButton = document.querySelector('#signUp')

    signUpButton.addEventListener('click', event => {
      this.openForm()
      this.closeForm()
      this.signInUser()
    })
  }

  signInUser (username) {
    const signUpUser = document.querySelector('#signUpUser')

    signUpUser.addEventListener('click', event => {
      this.createNewUser()
      document.getElementById('myForm').style.display = 'none'
      this.meButton()
      this.signOut()
    })
  }

  createNewUser () {
    const usernameInput = document.querySelector('#usernameInput')
    const ageInput = document.querySelector('#ageInput')

    this.removeMeButton()

    localStorage.setItem('username', usernameInput.value)

    const user = {
      username: usernameInput.value,
      age: ageInput.value
    }

    Api.postUser(user)
    .then(resp => {
      if (resp.error) return
      this.users.push(new User(resp))
    })
  }

  removeMeButton () {
    if (document.querySelector('#meButton')) {
      document.querySelector('#meButton').remove()
    }
  }

  signOut () {
    const signUp = document.querySelector('#signUp')
    signUp.innerText = 'Sign Out'

    signUp.addEventListener('click', event => {
      localStorage.clear()
      window.location.reload()

      // if (signUp.innerText === 'Sign Out') {
      //   signUp.innerText = 'Sign Up'
      //   const me = document.querySelector('#meButton')

        // me.remove()
      // }
    })
  }

  meButton () {
    if (localStorage.getItem('username')) {
      const navbarButtons = document.querySelector('#navbarButtons')
      const li = document.createElement('li')
      if (li.id !== 'meButton') {
        li.id = 'meButton'
        li.innerHTML = `<a>Me</a>`

        navbarButtons.appendChild(li)

        this.showUser(li)
      }
    }
  }

  showUser (el) {
    el.addEventListener('click', event => {
      const results = this.users.find(user => user.username === localStorage.getItem('username')).results
      this.displayResults(results)
      this.showResult()
    })
  }

  openForm () {
    document.getElementById('myForm').style.display = 'block'
  }

  closeForm () {
    const closeButton = document.querySelector('#signUpClose')
    closeButton.addEventListener('click', event => {
      document.getElementById('myForm').style.display = 'none'
    })
  }

  assessButton () {
    const assessButton = document.querySelector('#assessButton')

    assessButton.addEventListener('click', event => {
      if (localStorage.getItem('username')) {
        Result.renderAssessment(this.lowerSection)
        this.submitResults()
      } else {
        alert('You must be registered')
      }
    })
  }

  submitResults () {
    const submitAssessment = document.querySelector('#submitAssessment')
    submitAssessment.addEventListener('click', event => {
      event.preventDefault()
      console.log(this.users)
      const result = {
        user_id: this.users.find(user => user.username === localStorage.getItem('username')).id,
        adaptability: parseInt(document.querySelector('#c1').value),
        assertiveness: parseInt(document.querySelector('#c2').value),
        self_esteem: parseInt(document.querySelector('#c3').value),
        stress_management: parseInt(document.querySelector('#c4').value),
        emotion_expression: parseInt(document.querySelector('#c5').value),
        emotion_management: parseInt(document.querySelector('#c6').value),
        emotion_perception: parseInt(document.querySelector('#c7').value),
        emotion_regulation: parseInt(document.querySelector('#c8').value),
        impulsiveness: parseInt(document.querySelector('#c9').value),
        relationship_skills: parseInt(document.querySelector('#c10').value),
        social_competence: parseInt(document.querySelector('#c11').value),
        trait_empathy: parseInt(document.querySelector('#c12').value),
        trait_happiness: parseInt(document.querySelector('#c13').value),
        trait_optimism: parseInt(document.querySelector('#c14').value),
        self_motivation: parseInt(document.querySelector('#c15').value)
      }
      Api.postResults(result)
      .then(resp => {
        const user = this.users.find(user => user.id === resp.user_id)
        user.results.push(resp)
        this.results.push(new Result(resp))

        const results = this.users.find(user => user.username === localStorage.getItem('username')).results
        this.displayResults(results)
        this.showResult()
      })
    })
  }

  aboutPage () {
    const learnMoreButton = document.querySelector('#learnMoreButton')
    const aboutPage = document.querySelector('#aboutPage')

    aboutPage.addEventListener('click', event => {
      console.log(event)
      this.aboutPageHTML()
    })
    learnMoreButton.addEventListener('click', event => {
      console.log(event)
      this.aboutPageHTML()
    })
  }

  aboutPageHTML () {
    this.lowerSection.innerHTML = `
    <div class="container">
    	<div class="row">
        <h1>Some Info</h1>
    		<div class="col-md-4">
    			<span class="glyphicon glyphicon-book glyphicon-large" aria-hidden="true"></span>
    			<h3>Concept</h3>
    			<p>This assessment is designed to be relative to you, the aim is not to compare highest scores but rather to identify the attributes you score less on.</p>
    		</div>
    		<div class="col-md-4">
    			<span class="glyphicon glyphicon-user glyphicon-large" aria-hidden="true"></span>
    			<h3>How?</h3>
    			<p>something about self awareness</p>
    		</div>
    		<div class="col-md-4">
    			<span class="glyphicon glyphicon-globe glyphicon-large" aria-hidden="true"></span>
    			<h3>Versatility</h3>
    			<p>some stuff.</p>
    		</div>
    	</div>
    </div>
    `
  }
}
