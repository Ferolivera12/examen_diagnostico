document.addEventListener('DOMContentLoaded', function () {
    console.log('El script se ha cargado correctamente');

    const imgPerfil = document.querySelector('.img-perfil');

    imgPerfil.addEventListener('click', function () {
        console.log('Se hizo clic en la imagen');
        gsap.to(imgPerfil, { rotation: 360, duration: 1, ease: 'bounce.out' });
    });
});