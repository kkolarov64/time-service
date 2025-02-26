let selectedTimezone = "UTC";

function toggleDropdown() {
    document.getElementById("timezoneDropdown").classList.toggle("show");
}

function selectTimezone(timezone) {
    selectedTimezone = timezone;
    document.querySelector(".dropbtn").textContent = timezone;
    document.getElementById("timezoneDropdown").classList.remove("show");
}

function getTime() {
    fetch('/api/time')
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").textContent = 
                `Current time: ${data.time} (${data.timezone})`;
        });
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
