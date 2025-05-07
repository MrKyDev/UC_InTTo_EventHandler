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

  /*Digital Clock */
  function displayTime(){
    var d = new Date();
    var hour = d.getHours(); // 0-23
    var min = d.getMinutes(); // 0-59
    var sec = d.getSeconds(); // 0-59
    var amOrPm = "AM";
    if(hour >= 12)
    {
      amOrPm = "PM";
    }
    if(hour > 12)
    {
      hour = hour - 12;
    }
    if(hour < 10)
      hour = "0" + hour;
    if(min < 10)
      min = "0" + min;
    if(sec < 10)
      sec = "0" + sec;
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + amOrPm;
  }
  setInterval(displayTime, 1000);
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

  