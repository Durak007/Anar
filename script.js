// Add the confirmed Northstar Social contact email here once the mailbox is created.
// Example: const CONTACT_EMAIL = "your-confirmed-address@gmail.com";
const CONTACT_EMAIL = "";

document.getElementById("year").textContent = new Date().getFullYear();
const toast = document.getElementById("contact-toast");
let toastTimer;
document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (CONTACT_EMAIL.trim()) {
      event.preventDefault();
      const subject = encodeURIComponent("Northstar Social starter post");
      window.location.href = `mailto:${CONTACT_EMAIL.trim()}?subject=${subject}`;
      return;
    }
    if (link.getAttribute("href") === "#contact") {
      event.preventDefault();
      toast.hidden = false;
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => { toast.hidden = true; }, 5000);
    }
  });
});

