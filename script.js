function showPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = '<h1>Home</h1><p>HypnOS is an Ubuntu based GNU/Linux distribution developed for cybersecurity.</p>';
    } else if (page === 'download') {
        content.innerHTML = '<h1>Download</h1><p>HypnOS 28.10.24 Xfce Edition.</p>';
    } else if (page === 'wiki') {
        content.innerHTML = '<h1>Wiki</h1><p>- HypnOS System Requirements:</p><p>2 GB RAM (Recommended 4 GB RAM)</p><p>20 GB Disk Space</p><p>1 GHz Processor</p>'; 
        
        content.innerHTML += '<p>- Install Guide</p>';

        content.innerHTML += '<p>Download the ISO, burn it to your USB memory, then start your computer with your USB memory from the BIOS menu, press "Start HypnOS" in the GRUB menu, start the download application in the live menu and finish the installation.</p>';
    } else if (page === 'latest') {
        content.innerHTML = `
            <h1>Latest Updates</h1>
            <img id="updateImage" src="computer.png" alt="Computer Icon" class="update-image">
            <p>Bubbly Blobfish come here you sweet thing.</p>
        `;
        
        // Eğer burada JavaScript ile boyutlandırmak isterseniz
        const updateImage = document.getElementById('updateImage');
        updateImage.style.width = '500px'; // Genişlik
        updateImage.style.height = 'auto'; // Yükseklik
    }
}
