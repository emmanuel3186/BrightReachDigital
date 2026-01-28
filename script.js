 const form = document.getElementById("contactForm");
 const statusMessage = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    statusMessage.textContent = "Sending message...";
    statusMessage.style.color = "#475569";

    setTimeout(() => {
      statusMessage.textContent =
        "Message sent successfully! We'll get back to you shortly.";
      statusMessage.style.color = "#16a34a";
      form.reset();
    }, 1200);
  });