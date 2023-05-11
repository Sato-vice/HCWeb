const form = document.querySelector(".req-form")
const input = document.querySelector(".input")
const inputNum = document.querySelector(".input_num")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputVal = input.value
    let inputNumVal = inputNum.value

    const data = {
        name: inputVal,
        comment: inputNumVal
    }
    if(input.value === "" || inputNum.value === "") {
        alert("Вы должны ввести свое имя и номер телефона")
    }
    sendForm(data)
})

const sendForm = async (data) => {
    const res = await fetch("./feedback.php", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(data)
    })

    const result = await res.json()

    if(res.status === 201) {
        alert(`Thank you! ${result.message}`)
    } else {
        alert("Oops, something went wrong.")
    }
}