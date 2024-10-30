function showPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = '<h1>Home</h1><p>HypnOS, siber güvenlik için geliştirilmiş Ubuntu tabanlı bir GNU/Linux dağıtımıdır.</p>';
    } else if (page === 'download') {
        content.innerHTML = '<h1>Download</h1><p>HypnOS Bubbly Blobfish ISO.</p>';
    } else if (page === 'wiki') {
        content.innerHTML = `
            <h1>Wiki</h1>
            <h2>HypnOS Sistem Gereksinimleri</h2>
            <p>2 GB RAM (Tavsiye edilen 4 GB RAM)</p>
            <p>20 GB Disk Alanı</p>
            <p>1 GHz İşlemci</p>
            <h2>Kurulum Rehberi</h2>
            <p>ISO'yu indirin, USB belleğinize yazın, ardından BIOS menüsünden bilgisayarınızı USB belleğinizle başlatın, GRUB menüsünde "Start HypnOS" tuşuna basın, canlı menüde indirme uygulamasını başlatın ve kurulumu bitirin.</p>
            <h2>HypnOS GitHub Sayfası</h2>
            <p><a href="https://github.com/MrPenguen77/HypnOS" target="_blank">https://github.com/MrPenguen77/HypnOS</a></p>
            <h2>HypnOS Geliştirici Takımı</h2>
            <p>MrPenguen - Proje Sorumlusu, Proje Sahibi, Geliştirici, Web Tasarım, Tester, Görsel Tasarım, Sosyal Medya Sorumlusu</p>
            <p>Kerim - Fikir, Gönüllü Tester</p>
            <h2>Nasıl Katkı Yaparım?</h2>
            <p>Bulduğunuz hataları bize iletip geliştirmemizde yardımcı olup katkı yapabilirsiniz <3</p>
        `;
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
