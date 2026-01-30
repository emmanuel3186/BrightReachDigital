document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const whatsappText =
        "Hello Emmanuel,%0A%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Project: " + message;

      window.open(
        "https://wa.me/2349153068210?text=" + whatsappText,
        "_blank"
      );
    });
