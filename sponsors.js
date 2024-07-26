document.addEventListener("DOMContentLoaded", function() {
    const sponsors = [
        { name: "HCB", logo: "hcb.png" },
        { name: "Code For Cause", logo: "og-image.png" },
        { name: "THub Cafe", logo: "thub.png" },
        { name: "Taskade", logo: "taskade.png" },
        { name: "Wolfram", logo: "wolfram.png"},
        { name: "Echo3D", logo: "echo.png"},
    ];

    const sponsorsContainer = document.querySelector(".prev-sponsors");

    const sponsorsToDisplay = sponsors.slice(0, 0);

    sponsorsToDisplay.forEach(sponsor => {
        const sponsorDiv = document.createElement("div");
        sponsorDiv.classList.add("sponsor");

        const sponsorImg = document.createElement("img");
        sponsorImg.src = sponsor.logo;
        sponsorImg.alt = sponsor.name;

        sponsorDiv.appendChild(sponsorImg);
        sponsorsContainer.appendChild(sponsorDiv);
    });
});