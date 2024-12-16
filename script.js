let accessToken = "";

// Microsoft login logic
async function microsoftLogin() {
    const clientId = "d0f8c99b-ca1b-4d16-83cb-8e416d9994bd"; // Replace with your Azure App Registration Client ID
    const redirectUri = "https://cetas-test.azurewebsites.net/"; // Replace with your redirect URI
    const scopes = ["User.Read"];

    const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}`;

    window.location = authUrl;
}

// Parse the access token from URL fragment
window.onload = function () {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.substring(1));
        accessToken = params.get("access_token");

        if (accessToken) {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("date-container").style.display = "block";
			alert("Token generated successfully");
        }
    }
};

// Submit date range
document.getElementById("date-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const fromDate = document.getElementById("from-date").value;
    const toDate = document.getElementById("to-date").value;

    if (!fromDate || !toDate) {
        alert("Please select both dates.");
        return;
    }

    try {
        /*const response = await fetch("https://your-d365-instance.com/api/services/yourEndpoint", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fromDate: fromDate,
                toDate: toDate
            })*/
			alert("trying to call API.")
        });

        if (response.ok) {
            alert("Data submitted successfully.");
        } else {
            alert("Failed to submit data.");
        }
    } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred. Check the console for details.");
    }
});
