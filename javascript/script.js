// set the office hours in 24-hour format
const officeHours = {
    0: { open: null, close: null }, // Sunday; office closed
    1: { open: 9, close: 19 },
    2: { open: 9, close: 19 },
    3: { open: 9, close: 19 },
    4: { open: 9, close: 19 },
    5: { open: 10, close: 17 },
    6: { open: 12, close: 16 } // Saturday
};

// function to format opening and closing hours
function formatTime(hour) {
    const timeOfDay = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}:00 ${timeOfDay}`;
}

function displayOfficeStatus() {
    // Check if necessary elements exist (homepage)
    const dateTimeElement = document.getElementById("date-time");
    const officeStatusElement = document.getElementById("office-status");
    
    if (!dateTimeElement || !officeStatusElement) {
        return; // break out of function as elements don't exist
    }
    var currentDay = new Date();
    var dateString = currentDay.toLocaleDateString();
    var timeString = currentDay.toLocaleTimeString();

    document.getElementById("date-time").innerHTML = "<p>" + dateString + " " + timeString + "</p>";

    var dayOfWeek = currentDay.getDay();
    var currentHour = currentDay.getHours();
    var currentMinute = currentDay.getMinutes();
    var currentTime = currentHour + currentMinute / 60;

    // if office is currently open
    if (currentTime >= officeHours[dayOfWeek].open && currentTime < officeHours[dayOfWeek].close) {
        var hoursLeft = Math.floor(officeHours[dayOfWeek].close - currentTime);
        var minutesLeft = Math.floor((officeHours[dayOfWeek].close - currentTime - hoursLeft) * 60);

        document.getElementById("office-status").innerHTML = "<p>The office is currently open. We are closing in " 
            + hoursLeft + " hours and " + minutesLeft + " minutes.</p>";
        return;
    } else {
        let nextOpenTime;
        let message;

        // if past today"s closing time
        if (currentTime >= officeHours[dayOfWeek].close) {
            let nextDay = (dayOfWeek + 1) % 7;
            // if office is closed the next day
            if (officeHours[nextDay] === null) { 
                nextDay = (nextDay + 1) % 7;
                message = "Day after tomorrow, we open at ";
            } else {
                message = "We open tomorrow at ";
            }
            nextOpenTime = officeHours[nextDay].open;
        } else {
            nextOpenTime = officeHours[dayOfWeek].open;
            message = "We open today at ";
        }
        document.getElementById("office-status").innerHTML = "<p>The office is currently closed. " 
            + message + formatTime(nextOpenTime) + ".</p>";
    }
}

function validateForm(e) {
    // Get form values
    const firstName = document.getElementById("fName").value.trim();
    const lastName = document.getElementById("lName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    
    // Check required fields
    if (!firstName) {
        e.preventDefault();
        alert("Please enter your first name");
        return false;
    }
    
    if (!lastName) {
        e.preventDefault();
        alert("Please enter your last name");
        return false;
    }
    
    if (!phone) {
        e.preventDefault();
        alert("Please enter your phone number");
        return false;
    }
    
    // Basic phone validation (must be 10 digits)
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
        e.preventDefault();
        alert("Phone number must be 10 digits long");
        return false;
    }
    
    // Basic email validation (if provided)
    if (email && !email.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email address");
        return false;
    }
    
    return true;
}

// Wrap everything in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    displayOfficeStatus();
    setInterval(displayOfficeStatus, 1000); // Fixed string to function reference
    
    const form = document.querySelector(".contactForm");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});