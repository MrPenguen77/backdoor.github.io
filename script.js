function showPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = '<h1>Home</h1><p>HypnOS is an Ubuntu-based GNU/Linux distribution developed for cybersecurity.</p>';
    } else if (page === 'download') {
        content.innerHTML = '<h1>Download</h1><p>HypnOS 28.10.24 Xfce Edition.</p>';
    } else if (page === 'wiki') {
        content.innerHTML = '<h1>Wiki</h1><p>Wiki.</p>';
    } else if (page === 'latest') {
        content.innerHTML = `
            <h1>Latest Updates</h1>
            <img src="computer.png" alt="Computer Icon" class="update-image">
            <p>Örnek bir yazı. Bu alanı güncelleyebilirsiniz.</p>
        `;
    }
}
