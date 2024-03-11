/*========================= EMAIL JS ==========================*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ggwn9w4','template_qudb6y5','#contact-form','QK88UnawVQxtE0DRn')
        .then(() => {
            contactMessage.textContent = 'Message sent sucessfully'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()
        })
}

contactForm.addEventListener('submit', sendEmail)