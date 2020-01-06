// change theme on button hit
$(function () {
    $('#darkSwitch').change(function () {

        // darkSwitch checked = light theme
        if (darkSwitch.checked) {
            document.body.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
        //console.log(localStorage.getItem("theme"));
    })
})


// on page load
document.addEventListener('DOMContentLoaded', (event) => {
    var theme = localStorage.getItem("theme")

    // checked = light theme is current theme
    if (theme == "light") {
        document.body.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        if (!darkSwitch.checked) {
            document.getElementById('darkSwitch').click();
        }
    }

    else {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        if (darkSwitch.checked) {
            document.getElementById('darkSwitch').click();
        }
    }
})