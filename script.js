const form = document.getElementById("registerForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {
        const response = await fetch("backend/register.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        });

        const result = await response.json();

        document.getElementById("message").textContent =
            result.message;

    } catch (error) {
        document.getElementById("message").textContent =
            "Server connection failed";
    }
});