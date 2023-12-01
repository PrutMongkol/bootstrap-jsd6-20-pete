// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation()
        if (!form.checkValidity()) {
        } else {
            // alert('Success');
            document.getElementById('alertPlaceholder').innerHTML = 
            '<div class="alert alert-success alert-dismissible" role="alert">' +
            '  <div>Success</div>' +
            '  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></botton>' +
            '</div>'
            ;
        }
        
        form.classList.add('was-validated')
      }, false)
    })
  })()