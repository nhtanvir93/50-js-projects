const header = document.getElementById("card-header");
const excerpt = document.getElementById("card-excerpt");
const authorImg = document.getElementById("author-img");
const authorName = document.getElementById("author-name");
const excerptDate = document.getElementById("excert-date");

setTimeout(() => updatePlaceholders(), 3000);

function updatePlaceholders() {
  header.classList.remove("animated-bg");
  header.innerHTML = `<img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
        />`;

  excerpt.innerHTML = `<h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            perferendis accusamus tenetur maiores est repellendus.
          </h3>`;

  authorImg.classList.remove("animated-bg");
  authorImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" />`;

  authorName.classList.remove("animated-bg", "animated-bg-text");
  authorName.textContent = `John Doe`;

  excerptDate.classList.remove("animated-bg", "animated-bg-text");
  excerptDate.textContent = `Oct 08, 2025`;
}
