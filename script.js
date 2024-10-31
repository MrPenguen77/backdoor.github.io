document.addEventListener("DOMContentLoaded", function() {
    function showPage(page) {
        const content = document.getElementById('content');
    
        if (page === 'home') {
            content.innerHTML = '<h1>Home</h1><p>HypnOS, siber güvenlik için geliştirilmiş Ubuntu tabanlı bir GNU/Linux dağıtımıdır.</p>';
        } else if (page === 'download') {
            content.innerHTML = '<h1>Download</h1><p>HypnOS Bubbly Blobfish ISO.</p>';
        } else if (page === 'wiki') {
            content.innerHTML = '<h1>Wiki</h1><p>- HypnOS Sistem Gereksinimleri -</p><p>2 GB RAM</p><p>20 GB Disk Alanı</p><p>1 GHz İşlemci</p>'; 
            
            content.innerHTML += '<p>- Kurulum Rehberi -</p>';
            content.innerHTML += '<p>ISO dosyasını indirin, USB belleğinize yazın, ardından BIOS menüsünden bilgisayarınızı USB belleğinizle başlatın, GRUB menüsünde "Start HypnOS" tuşuna basın, canlı menüde indirme uygulamasını başlatın ve kurulumu bitirin.</p>';
            content.innerHTML += '<p>- HypnOS GitHub Sayfası -</p>';
            content.innerHTML += '<p><a href="https://github.com/MrPenguen77/HypnOS" target="_blank">GitHub HypnOS</a></p>';
            content.innerHTML += '<p>- HypnOS Geliştirici Takımı-</p>';
            content.innerHTML += '<p>MrPenguen - Proje Lideri - Takım Sorumlusu - Geliştirici - Sanat ve Web Tasarım</p>';
            content.innerHTML += '<p>Kerim - Proje Sorumlusu - Gönüllü Tester - Sosyal Medya Sorumlusu</p>';
        } else if (page === 'latest') {
            content.innerHTML = 
                '<h1>Latest Updates</h1>' +
                '<img id="updateImage" src="computer.png" alt="Computer Icon" class="update-image">' +
                '<p>Merhaba! Bubbly Blobfish</p>';
            
            // Eğer burada JavaScript ile boyutlandırmak isterseniz
            const updateImage = document.getElementById('updateImage');
            if (updateImage) {
                updateImage.style.width = '500px'; // Genişlik
                updateImage.style.height = 'auto'; // Yükseklik
            }
        }
    }
    
    window.showPage = showPage; // Fonksiyonu global hale getirme
});
