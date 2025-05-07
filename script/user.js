document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('via') === 'qr') {
      document.getElementById('via').value = 'QR';
    } else {
      document.getElementById('via').value = 'System';
    }
  
    document.getElementById('registrationForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const formData = new FormData(this);
      const user = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        age: formData.get('age'),
        address: formData.get('address'),
        email: formData.get('email'),
        contact: formData.get('contact'),
        role: formData.get('role'),
        via: formData.get('via'),
        idFileName: formData.get('idUpload').name
      };
  
      let records = JSON.parse(localStorage.getItem('registrations') || '[]');
      records.push(user);
      localStorage.setItem('registrations', JSON.stringify(records));
  
      alert('Registration successful!');
      this.reset();
    });
  });

 /*Footer JS*/
  window.addEventListener('scroll', function () {
    const footer = document.getElementById('page-footer');
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });

  