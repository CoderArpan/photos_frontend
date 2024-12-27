// API URL of the backend (replace with your actual backend URL)
const API_URL = "https://photos-wqb3.onrender.com"; // Change this to your server's URL

// Fetch photos from the server and display them in the gallery
async function fetchPhotos() {
  try {
    const response = await fetch(`${API_URL}/photos`);
    const data = await response.json();

    if (data.photos && data.photos.length > 0) {
      const gallery = document.getElementById("gallery");
      gallery.innerHTML = ""; // Clear the gallery before displaying new images

      data.photos.forEach(photo => {
        const imgElement = document.createElement("img");
        imgElement.src = photo.url;
        imgElement.alt = "Uploaded Photo";
        imgElement.classList.add("w-full", "h-auto", "rounded-lg", "shadow-lg");

        const photoContainer = document.createElement("div");
        photoContainer.classList.add("p-2", "border", "border-gray-200", "rounded-lg");
        photoContainer.appendChild(imgElement);

        gallery.appendChild(photoContainer);
      });
    } else {
      console.log("No photos available");
    }
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

// Call the fetchPhotos function when the page loads
window.onload = fetchPhotos;
