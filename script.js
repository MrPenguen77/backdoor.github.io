document.addEventListener("DOMContentLoaded", function() {
    function showPage(page) {
        const content = document.getElementById('content');

        if (page === 'home') {
            content.innerHTML = '<h1>Home</h1><p>- HackUbuntu -</p>';
            content.innerHTML += '<p>HackUbuntu hafif, güçlü ve hızlı olup Ubuntu tabanlıdır.</p>';

            content.innerHTML += '<img src="dev.png" alt="Developer Team Logo" width="200">';
            content.innerHTML += '<p>- HackUbuntu Linux Geliştirici Takımı -</p>';
            content.innerHTML += '<p>MrPenguen - Görev: Takım Lideri, Geliştirici</p>';
            content.innerHTML += '<p>LordBalbazar - Görev: Tester</p>';
            content.innerHTML += '<p>Tamelektro - Görev: Tester</p>';
            content.innerHTML += '<p>HamTux - Görev: Geliştirici</p>
        } else if (page === 'download') {
            content.innerHTML = '<h1>İndir</h1><p>HackUbuntu Bubbly Blobfish ISO.</p>';
        } else if (page === 'wiki') {
            content.innerHTML = '<h1>Wiki</h1><p>- HackUbuntu Sistem Gereksinimleri -</p><p>2 GB RAM</p><p>20 GB Disk Alanı</p><p>1 GHz İşlemci</p>'; 
            content.innerHTML += '<p>- Kurulum Rehberi -</p>';
            content.innerHTML += '<p>ISO dosyasını indirin, USB belleğinize yazın, ardından BIOS menüsünden bilgisayarınızı USB belleğinizle başlatın, GRUB menüsünde "Start HackUbuntu" tuşuna basın, canlı menüde indirme uygulamasını başlatın ve kurulumu bitirin.</p>';
            content.innerHTML += '<p>- HackUbuntu GitHub Sayfası -</p>';
            content.innerHTML += '<p><a href="https://github.com/MrPenguen77/hackubuntu" target="_blank">GitHub HackUbuntu</a></p>';
        } else if (page === 'latest') {
            content.innerHTML = 
                '<h1>Son Güncellemeler</h1>' +
                '<img id="updateImage" src="computer.png" alt="Computer Icon" class="update-image">' +
                '<p>Merhaba! Bubbly Blobfish</p>';
            
            const updateImage = document.getElementById('updateImage');
            if (updateImage) {
                updateImage.style.width = '500px'; 
                updateImage.style.height = 'auto'; 
            }
        }
    }
    
    showPage('home');

    window.showPage = showPage; 
});

document.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if (window.scrollY > 50) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});
