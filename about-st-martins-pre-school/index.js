document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
  
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
  })

// CMS

let URL = "https://0pxy7jkz.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'teamMembers'%5D%20%7C%20order(order)%20%7B%0A%20%20name%2C%0A%20%20%20%20title%2C%0A%20%20%20%20favouriteFood%2C%0A%20%20%20%20favouriteColour%2C%0A%20%20%20%20pet%2C%0A%20%20%20%20text%2C%0A%20%20%20%20%22imageUrl%22%3A%20photo.asset-%3Eurl%0A%7D%20" 

fetch(URL)
.then((res) => res.json())
.then(({ result }) => {

  if (result.length > 0) {

    result.forEach((result, index) => {

        const teamGrid = document.querySelector(".team-grid")
        let teamGridItem = document.createElement("div")
        teamGridItem.classList.add("team-grid-item")
        teamGrid.appendChild(teamGridItem)

        const teamGridItemChildImage = document.createElement("div")
        teamGridItemChildImage.classList.add("team-grid-item-child-image")
        teamGridItem.appendChild(teamGridItemChildImage)

        const teamGridItemChildText = document.createElement("div")
        teamGridItemChildText.classList.add("team-grid-item-child-text")
        teamGridItem.appendChild(teamGridItemChildText)

        const photo = document.createElement('img')
        photo.src = result.imageUrl
        teamGridItemChildImage.appendChild(photo)

        const name = document.createElement("p")
        teamGridItemChildText.appendChild(name)
        name.textContent = result.name

        const title = document.createElement("p")
        title.textContent = result.title
        teamGridItemChildText.appendChild(title)

        const favouriteFood = document.createElement("p")

        if (result.favouriteFood != null) {
            favouriteFood.textContent = `Favourite Food: ${result.favouriteFood}`
            teamGridItemChildText.appendChild(favouriteFood)
        }
        

        const favouriteColour = document.createElement("p")

        if (result.favouriteColour != null) {
            favouriteColour.textContent = `Favourite Colour: ${result.favouriteColour}`
            teamGridItemChildText.appendChild(favouriteColour)
        }
        

        const pet = document.createElement("p")
        if (result.favouriteColour != null) {
            pet.textContent = `Pet: ${result.pet}`
            teamGridItemChildText.appendChild(pet)
        }
        

        const content = document.createElement("p")
        content.textContent = result.text
        teamGridItemChildText.appendChild(content)

        const contactUsButton = document.createElement("button")
        contactUsButton.textContent = "CONTACT US"

        teamGridItemChildText.appendChild(contactUsButton)

    });
   
  }
})
.catch((err) => console.error(err));