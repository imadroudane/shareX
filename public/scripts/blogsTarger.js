var blogs = document.querySelectorAll(".blog");

for (let i = 0; i < blogs.length; i++){
    blogs[i].addEventListener("click", function() {
        fetch("http://localhost:4000/view", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ index: i })
        })
            .then(response => response.text())
            .then(html => document.body.innerHTML = html);
    });
}