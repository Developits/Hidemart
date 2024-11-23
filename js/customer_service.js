// FAQ Section
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".toggle-button");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    // Close any open FAQ items
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
      }
    });

    // Toggle the current item
    item.classList.toggle("active");
  });
});

// Form Section
const purposeSelect = document.getElementById("purpose");
const dynamicFields = document.getElementById("dynamicFields");
const toast = document.getElementById("toast");
const form = document.getElementById("dynamicForm");

// Function to generate dynamic fields based on the selected purpose
function updateFields() {
  dynamicFields.innerHTML = ""; // Clear previous fields

  const selectedPurpose = purposeSelect.value;

  if (selectedPurpose === "feedback") {
    dynamicFields.innerHTML = `
<div class="form-group">
    <label for="visitDate">Date of Visit</label>
    <input type="date" id="visitDate">
</div>
<div class="form-group">
    <label for="experienceRating">Rate Your Overall Experience</label>
    <select id="experienceRating">
        <option value="1">1 - Very Unsatisfied</option>
        <option value="2">2 - Unsatisfied</option>
        <option value="3">3 - Neutral</option>
        <option value="4">4 - Satisfied</option>
        <option value="5">5 - Very Satisfied</option>
    </select>
</div>
<div class="form-group">
    <label for="feedbackCategory">Feedback Category</label>
    <select id="feedbackCategory">
        <option value="cleanliness">Cleanliness</option>
        <option value="customer-service">Customer Service</option>
        <option value="product-availability">Product Availability</option>
        <option value="parking">Parking</option>
        <option value="other">Other</option>
    </select>
</div>
<div class="form-group">
    <label for="comments">Comments or Suggestions</label>
    <textarea id="comments" placeholder="Enter your comments or suggestions" rows="4"></textarea>
</div>
<div class="form-group">
    <label for="consent">
        <input type="checkbox" id="consent">
        May we contact you regarding your feedback?
    </label>
</div>
        `;
  } else if (selectedPurpose === "return-exchange") {
    dynamicFields.innerHTML = `
            <div class="form-group">
    <label for="orderNumber">Order Number</label>
    <input type="text" id="orderNumber" placeholder="Enter your order number">
</div>
<div class="form-group">
    <label for="purchaseDate">Date of Purchase</label>
    <input type="date" id="purchaseDate">
</div>
<div class="form-group">
    <label for="returnReason">Reason for Return/Exchange</label>
    <select id="returnReason">
        <option value="defective">Defective Product</option>
        <option value="wrong-item">Wrong Item Delivered</option>
        <option value="size-issue">Size/Dimension Issue</option>
        <option value="other">Other</option>
    </select>
</div>
<div class="form-group">
    <label for="comments">Additional Comments</label>
    <textarea id="comments" placeholder="Enter additional details" rows="4"></textarea>
</div>
<div class="form-group">
    <label for="consent">
        <input type="checkbox" id="consent">
        I agree to the return/exchange policy.
    </label>
</div>
        `;
  } else if (selectedPurpose === "repair-service") {
    dynamicFields.innerHTML = `
            <div class="form-group">
    <label for="productType">Product Type</label>
    <input type="text" id="productType" placeholder="Enter the product type (e.g., washing machine, smartphone)">
</div>
<div class="form-group">
    <label for="purchaseDate">Purchase Date</label>
    <input type="date" id="purchaseDate">
</div>
<div class="form-group">
    <label for="warrantyStatus">Is the Product Under Warranty?</label>
    <select id="warrantyStatus">
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="not-sure">Not Sure</option>
    </select>
</div>
<div class="form-group">
    <label for="preferredContact">Preferred Contact Method</label>
    <select id="preferredContact">
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="none">No Contact Needed</option>
    </select>
</div>
<div class="form-group">
    <label for="problemDescription">Problem Description</label>
    <textarea id="problemDescription" placeholder="Describe the issue or problem with your product" rows="4"></textarea>
</div>
        `;
  } else if (selectedPurpose === "claim-warranty") {
    dynamicFields.innerHTML = `
            <div class="form-group">
    <label for="productName">Product Name</label>
    <input type="text" id="productName" placeholder="Enter the product name">
</div>
<div class="form-group">
    <label for="purchaseDate">Purchase Date</label>
    <input type="date" id="purchaseDate">
</div>
<div class="form-group">
    <label for="warrantyCardNumber">Warranty Card Number</label>
    <input type="text" id="warrantyCardNumber" placeholder="Enter your warranty card number">
</div>
<div class="form-group">
    <label for="issueDescription">Issue Description</label>
    <textarea id="issueDescription" placeholder="Describe the issue you are facing with the product" rows="4"></textarea>
</div>
<div class="form-group">
    <label for="uploadProof">Upload Proof of Purchase</label>
    <input type="file" id="uploadProof" accept="image/*,application/pdf">
</div>
<div class="form-group">
    <label for="preferredContact">Preferred Contact Method</label>
    <select id="preferredContact">
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="none">No Contact Needed</option>
    </select>
</div>
<div class="form-group">
    <label for="consent">
        <input type="checkbox" id="consent">
        I confirm the information provided is accurate and agree to the warranty terms and conditions.
    </label>
</div>
        `;
  }
}

// Attach event listener to the dropdown
purposeSelect.addEventListener("change", updateFields);

// Show toast notification and clear form after submitting
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show toast notification
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Toast disappears after 3 seconds

  // Clear the form and dynamic fields
  form.reset(); // Resets the main form fields
  dynamicFields.innerHTML = ""; // Clears the dynamic fields container
  updateFields(); // Reinitialize fields based on the default purpose
});

// Initialize fields based on the default selection
updateFields();
