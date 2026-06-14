// Copy to clipboard function
function copyToClipboard() {
    const inviteLink = document.getElementById('inviteLink');
    const notification = document.getElementById('notification');
    
    // Copy text to clipboard
    inviteLink.select();
    document.execCommand('copy');
    
    // Show notification
    notification.style.display = 'block';
    
    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// Add some interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all info cards
    document.querySelectorAll('.info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Keyboard shortcut for copy (Ctrl+C on the invite link)
    document.getElementById('inviteLink').addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'c') {
            copyToClipboard();
        }
    });
});

// Update year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} Bangkok Support | Powered by Discord.js`;
    }
});