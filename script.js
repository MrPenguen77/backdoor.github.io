function showPage(page) {
    const content = document.getElementById('content');

    if (page === 'home') {
        content.innerHTML = '<h1>Home</h1><p>HypnOS, siber güvenlik için geliştirilmiş Ubuntu tabanlı bir GNU/Linux dağıtımıdır.</p>';
    } else if (page === 'download') {
        content.innerHTML = '<h1>Download</h1><p>HypnOS Bubbly Blobfish ISO.</p>';
    } else if (page === 'wiki') {
        content.innerHTML = '<h1>Wiki</h1><p>- HypnOS Sistem Gereksinimleri -</p><p>2 GB RAM (Tavsiye edilen 4 GB RAM)</p><p>20 GB Disk Alanı</p><p>1 GHz İşlemci</p>'; 
        
        content.innerHTML += '<p>- Kurulum Rehberi -</p>';

        content.innerHTML += '<p>ISOyu indirin, USB belleğinize yazın, ardından BIOS menüsünden bilgisayarınızı USB belleğinizle başlatın, GRUB menüsünde "Start HypnOS" tuşuna basın, canlı menüde indirme uygulamasını başlatın ve kurulumu bitirin.</p>';

        content.innerHTML += '<p>- HypnOS GitHub Sayfası -</p>';

        content.innerHTML += '<p> https://github.com/MrPenguen77/HypnOS </p>';

        content.innerHTML += '<p>- HypnOS Geliştirici Takımı -</p>';

        content.innerHTML += '<p> MrPenguen - Proje Sorumlusu, Proje Sahibi, Geliştirici, Web Tasarım, Tester, Görsel Tasarım, Sosyal Medya Sorumlusu </p>';

        content.innerHTML += '<p> Kerim - Fikir, Gönüllü Tester </p>';
        
        content.innerHTML += '<p>- Nasıl Katkı Yaparım? -</p>';

        content.innerHTML += '<p> Bulduğunuz hataları bize iletip geliştirmemizde yardımcı olup katkı yapabilirsiniz <3 </p>';
    } else if (page === 'latest') {
        content.innerHTML = 
            <h1>Latest Updates</h1>
            <img id="updateImage" src="computer.png" alt="Computer Icon" class="update-image">
            <p>Bubbly Blobfish come here you sweet thing.</p>
        ;
        
        // Eğer burada JavaScript ile boyutlandırmak isterseniz
        const updateImage = document.getElementById('updateImage');
        updateImage.style.width = '500px'; // Genişlik
        updateImage.style.height = 'auto'; // Yükseklik
    }
}
