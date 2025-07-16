document.getElementById('chat-toggle').onclick = function () {
  const chat = document.getElementById('chat-window');
  chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
};

const responses = {
  "how do i book": "You can book an appointment by calling +91 70875 58177 or using the Contact Us form.",
  "who is dr rupinder": "Dr. Rupinder is a Consultant Psychiatrist specializing in neuropsychiatry, adolescent health, and de-addiction.",
  "location": "We are located at 143521 Government College Rd, Gurdaspur, India.",
  "services": "We offer neuropsychiatric consultations, de-addiction treatment, adolescent mental health care, and more.",
  "timings": "Our operating hours are typically Monday–Saturday, 10 AM to 6 PM.",
  "emergency": "We do offer Emergency Care. You can contact us using our Emergency Helpline. The number for it is +91 70875 58177.",
  "thank you": "You are very welcome. Have a nice day!",
  "hi": "Hello! Is there something I can help you with?",
  "hello": "Hello! Is there something I can help you with?",
  "no": "Okay. Let me know if I can assist you further.",
  "faq": "You can find our Frequently Asked Questions section by clicking on the section for it in the navigation bar.",
  "home": "You can get back to the home page by clicking on the Home button in the navigation bar.",
  "about": "You can learn more about us by clicking on the About Us section in the navigation bar.",
  "news": "You can get to our News and Media Sction by clicking on it in the navigation bar.",
  "media": "You can get to our News and Media Sction by clicking on it in the navigation bar.",
  "services": "You can get to our services page by clicking on it's section in the navigation bar.",
  "bunny bul": "BUNNY BUNNY BUNNY BUNNY BUNNY BUNNY BUNNY BUL BUL BUL BUL BUNNY BUNNY BUNNY BUNNY BUNNY no cars"
};

document.getElementById('chat-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const input = e.target.value.toLowerCase().trim();
    const log = document.getElementById('chat-log');
    log.innerHTML += `<div><strong>You:</strong> ${e.target.value}</div>`;
    e.target.value = '';

    let matched = "Sorry, I didn't understand that. Please ask about booking, location, services, etc.";
for (const key in responses) {
  const words = input.split(/\s+/); // split input into words
  if (input === key || words.includes(key)) {
    matched = responses[key];
    break;
  }
}


    setTimeout(() => {
      log.innerHTML += `<div><strong>Bot:</strong> ${matched}</div>`;
      log.scrollTop = log.scrollHeight;
    }, 400);
  }
});
