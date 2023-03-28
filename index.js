const jobList = document.querySelector(".job-list");

jobList.addEventListener("click", (event) => {
  if (event.target.classList.contains("job-list__link")) {
    event.preventDefault();
    alert("You have been redirected to the Telegram channel.");
// Get the job list element
const jobList = document.querySelector(".job-list");

// Define a function to render the job listings
function renderJobs(jobs) {
  // Loop through the jobs and create a new list item for each one
  jobs.forEach((job) => {
    const listItem = document.createElement("li");
    listItem.classList.add("job-list__item");

    const title = document.createElement("h3");
    title.classList.add("job-list__title");
    title.textContent = job.title;

    const description = document.createElement("p");
    description.classList.add("job-list__description");
    description.textContent = job.description;

    const link = document.createElement("a");
    link.classList.add("job-list__link");
    link.textContent = "Join Telegram Channel";
    link.href = job.telegramLink;

    // Append the title, description, and link to the list item
    listItem.appendChild(title);
    listItem.appendChild(description);
    listItem.appendChild(link);

    // Append the list item to the job list
    jobList.appendChild(listItem);
  });
}

// Define a function to fetch the job listings from the server
async function getJobs() {
  const response = await fetch("https://your-api-endpoint.com/jobs");
  const data = await response.json();
  return data;
}

// Call the getJobs function to fetch the job listings and then render them
getJobs()
  .then((jobs) => renderJobs(jobs))
  .catch((error) => console.error(error));

// Add an event listener to the job list to handle clicks on the link
jobList.addEventListener("click", (event) => {
  if (event.target.classList.contains("job-list__link")) {
    event.preventDefault();
    alert("You have been redirected to the Telegram channel.");
  }
});
  }
})
