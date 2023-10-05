let a = document.querySelectorAll("#rename")
a.forEach(element => {
  element.addEventListener("click", () => {
    document.querySelector("#popup").style.display = "flex";
    document.querySelector("#change-name-inp").value = `${element.dataset.val}`
    document.querySelector("#overlay form").action =  `/rename/${element.dataset.val}`
})
});