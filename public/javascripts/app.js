$(document).ready(() => {
  $(document).foundation()
  getUsers()
})

function getUsers(){
  Tabletop.init({
    key: '1-56Bb41FTwJdmcrSEUEisRhzUxmWOLj1luH-7ZNnAzY',
    callback: showUserInfo,
  })
}

function showUserInfo(data, tabletop) {
  console.log(data)
  createCards(data['final data'].elements)
}

function createCards(data) {

    data.forEach(user => {
      if (user.learning) {
        console.log(user)
        const card = `
        <div class="card small-12 large-3 columns mp-card">
          <div class="card-divider mp-card-divider">
            ${ user.first_name } ${ user.last_name }
          </div>
          <div class="card-section">
            <img src="${ user.photo }" alt="${ user.name }">
              <p>${ user.learning }</p>
            </div>
          </div>
          `
          appendCard(card)
        }
      })
}

function appendCard(card){
  $('main').append(card)
}
