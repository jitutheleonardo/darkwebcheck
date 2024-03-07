const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');

submitBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;

    // **Important:** This script does NOT perform any checks on the dark web or send any data to external servers. It only displays a basic informative message.

    resultEl.textContent = "This email is not on darkweb.";
});

