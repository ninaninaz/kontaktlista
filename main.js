
let namn = document.getElementById("first-name")
let number = document.getElementById("phonenumber")
let button = document.getElementById("button1")
let list = document.getElementById("contact-list")
let form = document.querySelector("form")
let message = document.createElement("p")
let button2 = document.createElement("button")
button2.innerHTML = "Radera lista"
form.appendChild(button2)
message.innerHTML = ""
form.appendChild(message)
let message2 = document.createElement("p")
message2.innerHTML = ""
list.appendChild(message2)


function doNotSave() {
    if (namn.value.trim() === "" || number.value.trim() === "") {
        message.innerHTML = "Du måste fylla i både namn och nummer"
    } else {
        message.innerHTML = ""
    }
}


namn.addEventListener("input", doNotSave)
number.addEventListener("input", doNotSave)

function removeList() {
    list.innerHTML = ""
}

button2.addEventListener("click", function (e) {
    e.preventDefault()
    removeList()
})

button.addEventListener("click", function (e) {
    e.preventDefault()
    doNotSave()  

    if (message.innerHTML === "") {
        let inputName = namn.value
        let inputNumber = number.value

        let contact = document.createElement("li")

        let nameList = document.createElement("input")
        nameList.value = inputName
        nameList.type = "text"
        nameList.disabled = true
        contact.appendChild(nameList)

        let phoneList = document.createElement("input")
        phoneList.value = inputNumber
        phoneList.type = "tel"
        phoneList.disabled = true
        contact.appendChild(phoneList)

        let editButton = document.createElement("button")
        editButton.innerHTML = "Ändra"
        contact.appendChild(editButton)
        editButton.id = "edit-button"

        
        function saveOrEdit() {
            if (editButton.innerHTML === "Ändra") {
                editButton.innerHTML = "Spara"
                nameList.disabled = false
                phoneList.disabled = false
            } else {
                editButton.innerHTML = "Ändra"
                nameList.disabled = true
                phoneList.disabled = true
            }
        }

        editButton.addEventListener("click", saveOrEdit)

      
        function doNotSaveContact() {
            if (nameList.value.trim() === "" || phoneList.value.trim() === "") {
                editButton.disabled = true
                message2.innerHTML = "Båda fälten måste vara ifyllda innan du kan spara dina ändringar"
            } else {
                editButton.disabled = false
                message2.innerHTML = ""
            }
        }

        nameList.addEventListener("input", doNotSaveContact)
        phoneList.addEventListener("input", doNotSaveContact)

        let deleteButton = document.createElement("button")
        deleteButton.innerHTML = "Radera"
        contact.appendChild(deleteButton)

        list.appendChild(contact)

        
        namn.value = ""
        number.value = ""

        
        function removeContact() {
            list.removeChild(contact)
        }

        deleteButton.addEventListener("click", removeContact)
    }
})
