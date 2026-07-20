document.getElementById("openBtn").addEventListener("click", openSurprise);
    function openSurprise() {

        document.body.innerHTML = `
        <div class="surprise">

            <div class ="slideshow">
                <img class="slides" src="images/photo1.jpg">
                <img class="slides" src="images/photo2.jpg">
                <img class="slides" src="images/photo3.jpg">
                <img class="slides" src="images/photo4.jpg">
                <img class="slides" src="images/photo5.jpg">
                <img class="slides" src="images/photo6.jpg">
                <img class="slides" src="images/photo7.jpg">
                <img class="slides" src="images/photo8.jpg">
                <img class="slides" src="images/photo9.jpg">
                <img class="slides" src="images/photo10.jpg">
                <img class="slides" src="images/photo11.jpg">
                <img class="slides" src="images/photo12.jpg">
                <img class="slides" src="images/photo13.jpg">
                <img class="slides" src="images/photo14.jpg">
                <img class="slides" src="images/photo15.jpg">
                <img class="slides" src="images/photo16.jpg">
                <img class="slides" src="images/photo17.jpg">
                <img class="slides" src="images/photo18.jpg">
            </div>
   

        <div id="message"></div>

        <a class="spotify-btn"
        href="https://open.spotify.com/search/I%20Wanna%20-Be%20Yours%20Arctic%20Monkeys"
        target="_blank">
        💚 Listen to Our Song
        </a>
    </div>
    `;
    typeMessage();
    showSlides();
}

const text = `
Happy Birthday, my Love.

 Today is all about celebrating the incredible person that you are. 
 I wish I could do more to make your day unforgettable, 
 but for now, I hope this little gift reminds you just how special you are to me. 
 It may not have a price tag, but every line of it was created with love, thought, 
 and care.
 Thank you for being the wonderful, kind, and inspiring person that you are, 
 even though sometimes you get on my last nerves.

 I pray that God blesses you with endless happiness, good health, success in everything you do, 
 peace of mind, spiritual growth, unforgettable adventures, more money to spend on me without complaints🤣,
 and countless reasons to smile. May every dream you carry in your heart come true, 
 and may this year be more amazing than the last. May you be more gentle, loving and caring.

  Always remember that you are deeply appreciated, genuinely cherished, and truly loved. 
  Never stop believing in yourself because you are capable of achieving incredible things. 
  May you start living.

  With all my love,
  Loulah❤️
  `;
let i = 0;
function typeMessage(){
    if(i<text.length){
        document.getElementById("message").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeMessage,40);
    }

}
let slideIndex =0;
function showSlides(){
    const slides = document.getElementsByClassName("slides");
    for(let i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex = 1;
    }
 slides[slideIndex-1].style.display="block";

 setTimeout(showSlides, 3000);
}
