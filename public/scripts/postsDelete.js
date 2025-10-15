var remove = document.querySelectorAll(".deleteButton");

for (let j = 0; j < remove.length; j++){
    remove[j].addEventListener("click", function() {
        fetch("http://localhost:4000/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ indexJ: j })
        })
            .then(response => response.text())
            .then(window.location.href = "/blogs");
    });
}