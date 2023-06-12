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