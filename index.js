const promo = document.querySelector('#promo');
console.log(promo);

function promociones() {
    const jsConfetti = new JSConfetti();
    const handleClick = () => {
        console.log('click');
        jsConfetti.addConfetti();
        setTimeout(() => {
            promoSemana();
        }, 2000); // Retrasa la apertura de la URL por 2 segundos
    };

    promo.addEventListener("click", handleClick);
    promo.addEventListener("touchstart", handleClick); // Agrega el evento touchstart para dispositivos móviles
}

function promoSemana() {
    window.open("https://drive.google.com/file/d/1krizXmGbotwFUHLFrPGGmMBfUptXOkVq/view?usp=sharing", '_blank');
}

promociones();