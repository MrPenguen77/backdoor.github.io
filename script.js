function navigate(page) {
  // Tüm sayfaları gizle
  document.querySelectorAll('.page').forEach((section) => {
    section.classList.remove('active');
  });
  
  // Tıklanan sayfayı göster
  document.getElementById(page).classList.add('active');
}
