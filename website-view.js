let WebsitePV = 0;
let WebsiteUV = 0;


// Get the span elements where the PV and UV will be displayed


async function updatePageViews() {
    try {
        // Get the span And Container elements where the PV and UV will be displayed
        const pvContainer = document.getElementById("website_pv_container");
        const uvContainer = document.getElementById("website_uv_container");
        const pvSpan = document.getElementById("website_pv");
        const uvSpan = document.getElementById("website_uv");
        const website = window.location.hostname;
        // Create the data object with the website name
        const data = {
            website: website
        };

        // Send the API request to add a PV and get the response
        if (WebsitePV == 0) {
            const response = await fetch("https://api1.bmft.tech/dc3/api_platform/add_view", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const resp = await response.json();
            WebsitePV = resp.data.pv;
            WebsiteUV = resp.data.uv;
        }

        // If Span is not null, update the PV and UV spans
        if (pvSpan !== null) {
            pvSpan.textContent = WebsitePV;
        }
        if (uvSpan !== null) {
            uvSpan.textContent = WebsiteUV;
        }

        // If Container is not null, style='display:none' set to 'display:block'
        if (pvContainer !== null) {
            pvContainer.style.display = "block";
        }
        if (uvContainer !== null) {
            uvContainer.style.display = "block";
        }
    } catch (error) {
        console.error(error);
    }
}

// Call the function to update the PV and UV spans when the page is loaded
window.addEventListener("load", updatePageViews);
window.addEventListener("focus", updatePageViews);
window.addEventListener("resize", updatePageViews);
window.addEventListener("scroll", updatePageViews);
window.addEventListener("blur", updatePageViews);

