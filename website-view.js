let WebsitePV = 0;
let WebsiteUV = 0;


// Get the span elements where the PV and UV will be displayed

async function onceFetchAPi() {
    console.log('onceFetchAPi');
    const website = window.location.hostname;
    const port = window.location.port;
    // Create the data object with the website name
    const data = {
        website: website + (port ? ':' + port : '')
    };
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
    await updatePageViews();
}

var fetched = false;

async function updatePageViews() {
    try {
        // Get the span And Container elements where the PV and UV will be displayed
        const pvContainer = document.getElementById("website_pv_container");
        const uvContainer = document.getElementById("website_uv_container");
        const pvSpan = document.getElementById("website_pv");
        const uvSpan = document.getElementById("website_uv");
        // Send the API request to add a PV and get the response
        if (WebsitePV == 0 && !fetched) {
            // only exec one time
            fetched = true;
            await onceFetchAPi();
        }
        for (let i = 0; i < 2; i++) {
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

            // sleep 100ms
            await new Promise(resolve => setTimeout(resolve, 10));
        }

    } catch (error) {
        console.error(error);
    }
}

// Call the function to update the PV and UV spans when the page is loaded
window.addEventListener("load", function () {
    console.log('load');
    updatePageViews();
});
// window.addEventListener("focus", updatePageViews);
// window.addEventListener("resize", updatePageViews);
// window.addEventListener("scroll", function () {
//     console.log('scroll');
//     updatePageViews();
// });
// window.addEventListener("blur", updatePageViews);

window.addEventListener('hashchange', function (event) {
    console.log('hashchange');
    updatePageViews();
})
// window.addEventListener('popstate', function (event) {
//     console.log('popstate');
//     updatePageViews();
// })