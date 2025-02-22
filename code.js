document.addEventListener("DOMContentLoaded", function () {
            function getDaysUntilSaturday() {
                let today = new Date();
                let dayOfWeek = today.getDay();
                let daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
                return daysUntilSaturday === 0 ? 7 : daysUntilSaturday;
            }
            
            document.getElementById("countdown").textContent = `Залишилось ${getDaysUntilSaturday()} днів до суботи!`;
});