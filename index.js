const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });
}
const contactBtn = document.getElementById("cont");

contactBtn.addEventListener("click", function() {
    window.location.href = "Contact.html";
});
const cvBtn = document.getElementById("cv");

cvBtn.addEventListener("click", function() {
    window.location.href = "My_Resume.png";
});
