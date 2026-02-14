const courses = [
  { title: "Master JavaScript + React", category: "Coding", rating: 4.9, students: "124k", price: 69 },
  { title: "Data Science Bootcamp", category: "Coding", rating: 4.8, students: "98k", price: 79 },
  { title: "Speak English with Confidence", category: "Education", rating: 4.7, students: "41k", price: 39 },
  { title: "Bodyweight Fitness Pro", category: "Fitness", rating: 4.9, students: "63k", price: 49 },
  { title: "Digital Marketing Masterclass", category: "Business", rating: 4.8, students: "71k", price: 59 },
  { title: "UI/UX Design from Scratch", category: "Design", rating: 4.9, students: "54k", price: 64 }
];

const courseGrid = document.getElementById("courseGrid");
const searchInput = document.getElementById("searchInput");

function renderCourses(items) {
  courseGrid.innerHTML = "";
  items.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-thumb"></div>
      <div class="course-body">
        <p class="course-meta">${course.category} • ⭐ ${course.rating} • ${course.students} students</p>
        <h3>${course.title}</h3>
        <p class="course-price">$${course.price} <span style="color:#a8b3cf;font-weight:500;">(Lifetime access)</span></p>
        <button class="cta full">Buy Now</button>
      </div>
    `;
    courseGrid.appendChild(card);
  });
}

renderCourses(courses);

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  const filtered = courses.filter((course) =>
    [course.title, course.category].some((value) => value.toLowerCase().includes(query))
  );
  renderCourses(filtered);
});
