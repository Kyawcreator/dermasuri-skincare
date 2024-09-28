// script.js
function showMessage() {
    alert("Hello! Welcome to my first webpage!");
}
<script>
        function updateContent() {
            // Update text
            const newText = document.getElementById('newText').value;
            document.getElementById('yourTextElementId').innerText = newText;

            // Update image
            const newImage = document.getElementById('newImage').files[0];
            const imgElement = document.getElementById('yourImageElementId');
            const reader = new FileReader();

            reader.onload = function(e) {
                imgElement.src = e.target.result; // Update image source
            };

            if (newImage) {
                reader.readAsDataURL(newImage);
            }
        }
    </script>