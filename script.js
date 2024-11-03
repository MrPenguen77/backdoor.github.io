document.addEventListener("DOMContentLoaded", function() {
    function showPage(page) {
        const content = document.getElementById('content');
        content.setAttribute("data-page", page);

        if (page === 'home') {
            content.innerHTML = '<h1>Home</h1><p>- HackUbuntu -</p>';
            content.innerHTML += '<img src="awesome.png" id="awesomeImage" alt="Awesome Feature">';
            content.innerHTML += '<p>- HackUbuntu Linux Bubbly Blobfish 2024.11.03 Sürümü Hazır -</p>';
            content.innerHTML += '<p>HackUbuntu daha kullanıcı dostu uygulamalar ve hacking için gerekli araçlarla donatılmıştır.</p>';
            content.innerHTML += '<p>Blackarch Linux ve Kali Linux benzeri Ubuntu tabanlı bir dağıtımdır.</p>';
            content.innerHTML += '<p>Hergün gerekli güncellemeleri alır ve kullanıcılarına sunar.</p>';
            content.innerHTML += '<p>Awesome WM pencere yönetisiyle gelir ve kullanıcının isteğine göre düzenlemesine olanak tanır.</p>';
        } else if (page === 'download') {
            content.innerHTML = '<h1>İndir</h1><p>HackUbuntu Bubbly Blobfish ISO.</p>';
        } else if (page === 'wiki') {
            content.innerHTML = '<h1>Wiki</h1><p>- HackUbuntu Sistem Gereksinimleri -</p><p>2 GB RAM</p><p>20 GB Disk Alanı</p><p>1 GHz İşlemci</p>';
            content.innerHTML += '<p>- Kurulum Rehberi -</p>';
            content.innerHTML += '<p>ISO dosyasını indirin, USB belleğinize yazın, ardından BIOS menüsünden bilgisayarınızı USB belleğinizle başlatın, GRUB menüsünde "Start HackUbuntu" tuşuna basın, canlı menüde indirme uygulamasını başlatın ve kurulumu bitirin.</p>';
            content.innerHTML += '<p>- HackUbuntu GitHub Sayfası -</p>';
            content.innerHTML += '<p><a href="https://github.com/MrPenguen77/hackubuntu" target="_blank">GitHub HackUbuntu</a></p>';
            content.innerHTML += '<img src="dev.png" alt="Developer Team Logo" width="200">';
            content.innerHTML += '<p>- HackUbuntu Linux Geliştirici Takımı -</p>';
            content.innerHTML += '<p>MrPenguen - Görev: Takım Lideri, Geliştirici</p>';
            content.innerHTML += '<p>LordBalbazar - Görev: Tester</p>';
            content.innerHTML += '<p>Tamelektro - Görev: Tester</p>';
            content.innerHTML += '<p>HamTux - Görev: Geliştirici</p>';
        } else if (page === 'latest') {
            content.innerHTML = 
                '<h1>Son Güncellemeler</h1>' +
                '<img src="computer.png" id="updateImage" alt="Computer Icon">' +
                '<p>Merhaba! Bubbly Blobfish</p>';
        }
    }

    showPage('home');
    window.showPage = showPage;
});

function toggleTranslateMenu() {
    const flagContainer = document.getElementById('flagContainer');
    flagContainer.style.display = (flagContainer.style.display === 'none' || flagContainer.style.display === '') ? 'block' : 'none';
}

function translatePage(language) {
    const page = document.getElementById('content').getAttribute("data-page");
    showPage(page);

    const googleTranslateElement = new google.translate.TranslateElement({pageLanguage: 'tr', includedLanguages: 'tr,en,de', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'content');
    document.getElementById("content").appendChild(googleTranslateElement);
    toggleTranslateMenu();
}
