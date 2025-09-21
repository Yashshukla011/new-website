const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close'); // make sure you have an element with id="close"

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Only keep one toggleSidebar function
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}
document.body.style.backgroundColor = "white";
 function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }
    function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
  }

//   // 👇 Jab bhi koi sidebar link par click kare → sidebar hat jaye
  document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("active");
    });
  });


    const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  // Open Sidebar
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  // Close Sidebar when arrow clicked
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
