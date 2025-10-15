var modify = document.querySelectorAll(".modifyButton");

for (let k = 0; k < modify.length; k++){
    modify[k].addEventListener("click", function() {
        fetch("http://localhost:4000/modify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ indexk: k })
        })
            .then(response => response.text())
            .then(html => document.body.innerHTML = html);
    });
}