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
  createCards(data['final data'].elements)
}

function createCards(data) {
  var mentorshipRoleClass
  data.sort((a,b) =>  {
    if (a.last_name < b.last_name) return -1
    if (a.last_name > b.last_name) return 1
    return 0
  })
  data.forEach(user => {
    if (user.mentorship_role === 'student') {
      mentorshipRoleClass = 'mp-student-header'
    } else {
      mentorshipRoleClass = 'mp-mentor-header'
    }
    if (user.learning) {
      const card = `
      <div class="card small-12 large-3 columns mp-card">
        <div class="card-divider mp-card-header ${mentorshipRoleClass}">
          ${ user.first_name } ${ user.last_name }
        </div>
        <div class="card-section">
          <img src="${ user.photo }" alt="${ user.name }">
            <small>Currently learning about:</small>
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
