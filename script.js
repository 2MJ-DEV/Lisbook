document.addEventListener('DOMContentLoaded', function () {
            const playlistItems = document.querySelectorAll('#playlist li');
            const audioPlayer = document.getElementById('audio-player');
            const themeToggle = document.getElementById('theme-toggle');
            const menuToggle = document.getElementById("menu-toggle");
            const menuClose = document.getElementById("menu-close");
            const menu = document.getElementById("menu");

            playlistItems.forEach(item => {
                item.addEventListener('click', function () {
                    audioPlayer.src = item.getAttribute('data-src');
                    audioPlayer.play();
                });
            });

            // Comment Submission
            document.getElementById('comment-form').addEventListener('submit', function (e) {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const comment = document.getElementById('comment').value;

                const commentHTML = `<div class="bg-gray-700 text-white p-4 rounded-lg">
                    <strong>${username}:</strong>
                    <p>${comment}</p>
                </div>`;

                document.getElementById('comments-list').insertAdjacentHTML('beforeend', commentHTML);

                // Reset form
                document.getElementById('comment-form').reset();
            });
            // Theme Toggle
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    document.body.classList.remove('dark-mode');
                    document.body.classList.add('light-mode');
                } else {
                    document.body.classList.remove('light-mode');
                    document.body.classList.add('dark-mode');
                }
            });

            //Mobile menu toggle
            menuToggle.addEventListener("click", () => {
                menu.classList.remove("scale-0");
                menu.classList.add("scale-100");
            });

            menuClose.addEventListener("click", () => {
                menu.classList.add("scale-0");
                menu.classList.remove("scale-100");
            });
        });