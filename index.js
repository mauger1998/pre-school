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

let URL = "https://0pxy7jkz.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'price'%5D"

fetch(URL)
.then((res) => res.json())
.then(({ result }) => {

  if (result.length > 0) {
    const price = document.querySelector(".main-left p")
    
    price.textContent = `£${result[0].price} per hour`
   
  }
})
.catch((err) => console.error(err));

// Testimonials CMS

let URLTWO = "https://0pxy7jkz.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'testimonials'%5D%20%0A%0A"

fetch(URLTWO)
.then((res) => res.json())
.then(({ result }) => {

  if (result.length > 0) {
    const testGrid  = document.querySelector(".trusted-bottom-right")
    
    result.forEach((result, index) => {
      const testCard = document.createElement("div")
      testCard.classList.add("trusted-card")
      testGrid.appendChild(testCard)

      const testName = document.createElement("p")
      testName.textContent = result.name
      testCard.appendChild(testName)
      
      const testBody = document.createElement("p")
      testBody.textContent = result.text 
      testCard.appendChild(testBody)
    })
  }
})
.catch((err) => console.error(err));
