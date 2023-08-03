const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_w02xv56';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

document.getElementById('descargarBtn').addEventListener('click', function () {

    const urlArchivo = '../pdf/Fauna_Plataforma_De_Servicios.pdf';

    const linkDescarga = document.createElement('a');
    linkDescarga.href = urlArchivo;
    linkDescarga.download = 'Fauna_Plataforma_De_Servicios.pdf';
    linkDescarga.style.display = 'none';

    document.body.appendChild(linkDescarga);
    linkDescarga.click();

    document.body.removeChild(linkDescarga);
});
