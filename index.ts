const resumeForm = document.getElementById("resumeForm") as HTMLFormElement | null;
const resumeOutput = document.getElementById("resumeOutput") as HTMLElement | null;

// Function to generate resume
if (resumeForm && resumeOutput) {
  resumeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;
    const profileImage = (document.getElementById("profileImage") as HTMLInputElement).files?.[0];

    const usernameElement = document.getElementById("username") as HTMLInputElement;

    if (profileImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageSrc = e.target?.result as string;

        // Generate HTML resume with image at the top
        const resumeHTML = `
          <h2>Generated Resume</h2>
          <img src="${imageSrc}" alt="Profile Image" style="max-width: 200px; border-radius: 10px; margin-bottom: 15px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Skills:</strong> ${skills}</p>
          <p><strong>Description:</strong> ${description}</p>
        `;
        resumeOutput.innerHTML = resumeHTML;

        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;

        // Create the download link with the unique path
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput.innerHTML);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your 2024 Resume';

        // Append the download link below the resume content
        resumeOutput.appendChild(downloadLink);
      };

      // Read the image as a data URL
      reader.readAsDataURL(profileImage);
    } else {
      // Generate HTML without an image if no file is uploaded
      const resumeHTML = `
        <h2>Generated Resume</h2>
        <p><em>No image uploaded</em></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Description:</strong> ${description}</p>
      `;

      const username = usernameElement.value;
      const uniquePath = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;

      // Create the download link with the unique path
      const downloadLink = document.createElement('a');
      downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
      downloadLink.download = uniquePath;
      downloadLink.textContent = 'Download your 2024 Resume';

      // Show the resume without an image
      resumeOutput.innerHTML = resumeHTML;

      // Append the download link below the resume content
      resumeOutput.appendChild(downloadLink);
    }
  });
} else {
  console.error("Form or output element not found in the DOM");
}
