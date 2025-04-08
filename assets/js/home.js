const ContentSwitcher = () => {
  return (
    <div> {/* Wrap the content with a single parent */}
      <button id="switch-layout-button">Switch Content</button>

      <div id="Christianity" style={{ display: 'block' }}>Christianity Content</div>
      <div id="Islam" style={{ display: 'none' }}>Islam Content</div>
      <div id="Judaism" style={{ display: 'none' }}>Judaism Content</div>
      <div id="Buddhism" style={{ display: 'none' }}>Buddhism Content</div>
      <div id="Hinduism" style={{ display: 'none' }}>Hinduism Content</div>
      <div id="Confucianism" style={{ display: 'none' }}>Confucianism Content</div>
      <div id="Taoism" style={{ display: 'none' }}>Taoism Content</div>
      <div id="Zoroastrianism" style={{ display: 'none' }}>Zoroastrianism Content</div>
      <div id="Sikhism" style={{ display: 'none' }}>Sikhism Content</div>
      <div id="Bahá'í Faith" style={{ display: 'none' }}>Bahá'í Faith Content</div>
      <div id="Jainism" style={{ display: 'none' }}>Jainism Content</div>

      <script>
        var currentContent = 0;
        var contentSections = ["Christianity", "Islam", "Judaism", "Buddhism", "Hinduism", "Confucianism", "Taoism", "Zoroastrianism", "Sikhism", "Bahá'í Faith", ""];

        // Function to switch content visibility
        function switchContentLayout() {
          var old = currentContent;
          currentContent = currentContent === contentSections.length - 1 ? 0 : currentContent + 1;

          var oldDiv = document.getElementById(contentSections[old]);
          var currentDiv = document.getElementById(contentSections[currentContent]);

          // Hide the old section and show the new one
          oldDiv.style.display = "none";
          currentDiv.style.display = "block";
        }

        // Wait for the DOM content to load before attaching the event listener
        window.addEventListener("DOMContentLoaded", (event) => {
          document.querySelectorAll("#switch-layout-button").forEach((button) =>
            button.addEventListener("click", function (e) {
              e.preventDefault(); // Prevent the default button action
              switchContentLayout(); // Call the function to switch content
            })
          );
        });
      </script>
    </div> // Single parent div wraps the content
  );
};

export default ContentSwitcher;
