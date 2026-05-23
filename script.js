/**
 * handleSearch(event)
 * ดักจับการกดปุ่ม keyboard
 * ถ้ากด Enter → เรียก goSearch() ทันที
 */
function handleSearch(event) {
  if (event.key === 'Enter') {
    goSearch();
  }
}

/**
 * goSearch()
 * อ่านค่าจาก input แล้วตัดสินใจ:
 * 1. เป็น URL  → เปิดโดยตรง
 * 2. เป็นคำค้น → ส่งไปค้นหาที่ Google
 */
function goSearch() {
  const val = document.getElementById('searchInput').value.trim();
  if (!val) return; // ถ้าไม่มีข้อความให้หยุด

  // ตรวจว่าเป็น URL หรือเปล่า
  const isUrl = /^https?:\/\//.test(val) || /^[\w-]+\.\w+/.test(val);

  let destination;
  if (isUrl) {
    // เติม https:// ถ้ายังไม่มี
    destination = val.startsWith('http') ? val : 'https://' + val;
  } else {
    // ไม่ใช่ URL → ค้นหาด้วย Google
    destination = 'https://www.google.com/search?q=' + encodeURIComponent(val);
  }

  window.open(destination, '_blank'); // เปิด tab ใหม่
}
