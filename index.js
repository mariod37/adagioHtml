

const promo = document.querySelector('#promo')
console.log(promo)

function promociones (){
    const jsConfetti = new JSConfetti();
        document.querySelector('#promo').addEventListener("click", () =>{
            console.log('click');
            jsConfetti.addConfetti();
            setTimeout( () => {
                promoSemana () }, 3000);
            })
        }


function promoSemana () {
    // setTimeout(() => {
        window.open("https://drive.google.com/file/d/1krizXmGbotwFUHLFrPGGmMBfUptXOkVq/view?usp=sharing",'blank');
    // }, 4000);

} 

promociones()
        
