function logout() {
    sessionStorage.removeItem('loggedInAdmin');
    window.location.href = 'admin-login.html';
  }
  
  function downloadCSV() {
    const rows = JSON.parse(localStorage.getItem('registrations') || '[]');
    let csv = "First Name,Last Name,Age,Address,Email,Contact,Role,ID File,Registered Via\n";
    rows.forEach(r => {
      csv += `${r.firstName},${r.lastName},${r.age},${r.address},${r.email},${r.contact},${r.role},${r.idFileName},${r.via}\n`;
    });
  
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "uc_intto_registrations.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector("#dataTable tbody");
    const data = JSON.parse(localStorage.getItem('registrations') || '[]');
  
    data.forEach(reg => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${reg.firstName}</td>
        <td>${reg.lastName}</td>
        <td>${reg.age}</td>
        <td>${reg.address}</td>
        <td>${reg.email}</td>
        <td>${reg.contact}</td>
        <td>${reg.role}</td>
        <td>${reg.idFileName}</td>
        <td><strong>${reg.via === "QR" ? "QR Code" : "Manual"}</strong></td>
      `;
      tbody.appendChild(row);
    });
  });
  