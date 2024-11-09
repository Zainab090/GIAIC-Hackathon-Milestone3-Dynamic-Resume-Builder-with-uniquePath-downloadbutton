var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
// Function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        var description = document.getElementById("description").value;
        var profileImage = (_a = document.getElementById("profileImage").files) === null || _a === void 0 ? void 0 : _a[0];
        var usernameElement = document.getElementById("username");
        if (profileImage) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                var imageSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                // Generate HTML resume with image at the top
                var resumeHTML = "\n          <h2>Generated Resume</h2>\n          <img src=\"".concat(imageSrc, "\" alt=\"Profile Image\" style=\"max-width: 200px; border-radius: 10px; margin-bottom: 15px;\">\n          <p><strong>Name:</strong> ").concat(name, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Phone:</strong> ").concat(phone, "</p>\n          <p><strong>Education:</strong> ").concat(education, "</p>\n          <p><strong>Experience:</strong> ").concat(experience, "</p>\n          <p><strong>Skills:</strong> ").concat(skills, "</p>\n          <p><strong>Description:</strong> ").concat(description, "</p>\n        ");
                resumeOutput.innerHTML = resumeHTML;
                var username = usernameElement.value;
                var uniquePath = "resumes/".concat(username.replace(/\s+/g, "_"), "_cv.html");
                // Create the download link with the unique path
                var downloadLink = document.createElement('a');
                downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput.innerHTML);
                downloadLink.download = uniquePath;
                downloadLink.textContent = 'Download your 2024 Resume';
                // Append the download link below the resume content
                resumeOutput.appendChild(downloadLink);
            };
            // Read the image as a data URL
            reader.readAsDataURL(profileImage);
        }
        else {
            // Generate HTML without an image if no file is uploaded
            var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><em>No image uploaded</em></p>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Description:</strong> ").concat(description, "</p>\n      ");
            var username = usernameElement.value;
            var uniquePath = "resumes/".concat(username.replace(/\s+/g, "_"), "_cv.html");
            // Create the download link with the unique path
            var downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
            downloadLink.download = uniquePath;
            downloadLink.textContent = 'Download your 2024 Resume';
            // Show the resume without an image
            resumeOutput.innerHTML = resumeHTML;
            // Append the download link below the resume content
            resumeOutput.appendChild(downloadLink);
        }
    });
}
else {
    console.error("Form or output element not found in the DOM");
}
