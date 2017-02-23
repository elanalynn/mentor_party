import $ from 'jQuery'
import Tabletop from 'tabletop'

$(document).ready(() => {
  getUsers()
})

function getUsers(){
  Tabletop.init({
    key: '1-56Bb41FTwJdmcrSEUEisRhzUxmWOLj1luH-7ZNnAzY',
    callback: showUserInfo,
    simpleSheet: true
  })
}

function showUserInfo(data, tabletop) {
  console.log(data)
  createCards(data)
}

function createCards(data) {
  data.forEach(human => {
    const card = `
      <div class="card mp-card" style="width: 300px;">
        <div class="card-divider">
          This is a header
        </div>
        <img src="#">
        <div class="card-section">
          <h4>This is a card.</h4>
          <p>This is a human</p>
        </div>
      </div>
    `

    appendCard(card)
  })
}

function appendCard(card){
  $('main').append(card)
}
