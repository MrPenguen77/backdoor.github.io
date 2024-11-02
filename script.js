document.addEventListener("DOMContentLoaded", function() {
    function showPage(page) {
        const content = document.getElementById('content');

        if (page === 'home') {
            content.innerHTML = '<h1>Home</h1><p>- HackUbuntu -</p>';
            content.innerHTML += '<p>HackUbuntu hafif, güçlü ve hızlı olup Ubuntu tabanlıdır.</p>';
        } else if (page === 'download') {
            content.innerHTML = '<h1>İndir</h1><p>HackUbuntu Bubbly Blobfish ISO.</p>';
        } else if (page === 'wiki') {
            content.innerHTML = '<h1>Wiki</h1><p>- HackUbuntu Sistem Gereksinimleri -</p><p>2 GB RAM</p><p>20 GB Disk Alanı</p><p>1 GHz İşlemci</p>'; 
            content.innerHTML += '<p>- Kurulum Rehberi -</p>';
            content.innerHTML += '<p>ISO dosyasını indirin, USB belleğinize yazın, ardından BIOS menüsünden bilgisayarınızı USB belleğinizle başlatın, GRUB menüsünde "Start HackUbuntu" tuşuna basın, canlı menüde indirme uygulamasını başlatın ve kurulumu bitirin.</p>';
            content.innerHTML += '<p>- HackUbuntu GitHub Sayfası -</p>';
            content.innerHTML += '<p><a href="https://github.com/MrPenguen77/hackubuntu" target="_blank">GitHub HackUbuntu</a></p>';
            content.innerHTML += '<p>- HackUbuntu Geliştirici Takımı -</p>';
            content.innerHTML += '<p>MrPenguen - Proje Lideri - Takım Sorumlusu - Geliştirici - Sanat ve Web Tasarım</p>';
            content.innerHTML += '<p>LordBalbazar - Proje Sorumlusu - Gönüllü Tester - Sosyal Medya Sorumlusu</p>';
            content.innerHTML += '<p>Tamelektro - Gönüllü sürüm tester ve geri bildirim</p>';
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
    
    // Sayfa açıldığında 'home' sayfasını göster
    showPage('home');

    window.showPage = showPage; 
});

// Sayfa kaydırıldığında alt bilgiyi görünür yap
document.addEventListener("scroll", function() {
    const footer = document.querySelector("footer");
    if (window.scrollY > 50) { // 50 piksel kaydırıldığında
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});
