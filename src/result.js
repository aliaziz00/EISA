class Result {
  constructor (result) {
    this.id = result.id
    this.user_id = result.user_id
    this.adaptability = result.adaptability
    this.assertiveness = result.assertiveness
    this.self_esteem = result.self_esteem
    this.stress_management = result.stress_management
    this.emotion_expression = result.emotion_expression
    this.emotion_management = result.emotion_management
    this.emotion_perception = result.emotion_perception
    this.emotion_regulation = result.emotion_regulation
    this.impulsiveness = result.impulsiveness
    this.relationship_skills = result.relationship_skills
    this.social_competence = result.social_competence
    this.trait_empathy = result.trait_empathy
    this.trait_happiness = result.trait_happiness
    this.trait_optimism = result.trait_optimism
    this.self_motivation = result.self_motivation
    this.element = undefined
    this.render()
  }

  render () {
    const resultEl = document.createElement('div')
    resultEl.className = 'result'
    resultEl.innerHTML = `
      <p>${this.user_id}</p>
      <p>${this.adaptability}</p>
      <p>${this.assertiveness}</p>
      <p>${this.self_esteem}</p>
      <p>${this.stress_management}</p>
      <p>${this.emotion_expression}</p>
      <p>${this.emotion_management}</p>
      <p>${this.emotion_perception}</p>
      <p>${this.emotion_regulation}</p>
      <p>${this.impulsiveness}</p>
      <p>${this.relationship_skills}</p>
      <p>${this.social_competence}</p>
      <p>${this.trait_empathy}</p>
      <p>${this.trait_happiness}</p>
      <p>${this.trait_optimism}</p>
      <p>${this.self_motivation}</p>
    `
    this.element = resultEl
    return this.element
  }

  static renderAssessment (lowerSection) {
    lowerSection.innerHTML = `
      <div class="row">
      <form>
        <div class="col-md-12" centre>
          <div class='intro'>
            <h3>intro</h3>
            <p>this is an intro
          </div>


          <div>
            <h2>Self-control skills</h2>
            <label class='resultAttr'>Adaptability:</label><br>
            <p class='assessmentDesc'>Flexible and willing to adapt to new conditions.</p>
            <select id="c1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Assertiveness: </label><br>
            <p class='assessmentDesc'>Forthright, frank and willing to stand up for their rights.</p>
            <select id="c2">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Self Esteem: </label><br>
            <p class='assessmentDesc'>Successful and self-confident.</p>
            <select id="c3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Stress Management: </label><br>
            <p class='assessmentDesc'>Capable of withstanding pressure and regulating stress.</p>
            <select id="c4">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>
          </div>


          <div>
            <h2>Emotional Skills</h2>
            <label class='resultAttr'>Emotion Expression: </label><br>
            <p class='assessmentDesc'>Capable of communicating their feelings to others.</p>
            <select id="c5">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Emotion Management: </label><br>
            <p class='assessmentDesc'>Capable of influencing other peoples feelings.</p>
            <select id="c6">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Emotion Perception: </label><br>
            <p class='assessmentDesc'>Clear about their own and other peoples feelings.</p>
            <select id="c7">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Emotion Regulation: </label><br>
            <p class='assessmentDesc'>Capable of controlling their emotions.</p>
            <select id="c8">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>
          </div>
        </div>


          <div>
          <h2>Social Skills</h2>
            <label class='resultAttr'>Impulsiveness: </label><br>
            <p class='assessmentDesc'>Reflective and unlikely to give into their urges.</p>
            <select id="c9">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Relationship Skills: </label><br>
            <p class='assessmentDesc'>Capable of having fulfilling personal relationships.</p>
            <select id="c10">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Social Competence: </label><br>
            <p class='assessmentDesc'>Accomplished networker with excellent social skills.</p>
            <select id="c11">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>

            <label class='resultAttr'>Trait Empathy: </label><br>
            <p class='assessmentDesc'>Capable of taking someones else’s perspective.</p>
            <select id="c12">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select><br>
          </div>

        <div>
          <h2>Well Being</h2>
          <label class='resultAttr'>Trait Happiness: </label><br>
          <p class='assessmentDesc'>Cheerful and satisfied with their lives.</p>
          <select id="c13">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select><br>

          <label class='resultAttr'>Trait Optimism: </label><br>
          <p class='assessmentDesc'>Confident and likely to ‘look on the bright side’ of life .</p>
          <select id="c14">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select><br>

          <label class='resultAttr'>Self Motivation: </label><br>
          <p class='assessmentDesc'>Driven and unlikely to give up in the face of adversity.</p>
          <select id="c15">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select><br>
          </div>

        <div>
          <button id='submitAssessment' class="btn btn-primary">Submit</button>
        </div>

        </form>
      </div>

    `
  }

  // remove () {
  //   this.element.remove()
  // }
  //
  // editName (name) {
  //   this.result.name = name
  //   this.update()
  // }
  //
  // update () {
  //   this.element.innerHTML = `
  //     <h3>${this.result.name}</h3>
  //   `
  // }

}
