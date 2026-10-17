document.addEventListener('DOMContentLoaded', () => {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        lastUpdatedElement.textContent = `Last updated: ${formattedDate}`;
    }
});

