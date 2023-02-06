console.log("it should WORK!");

const insetContent = document.querySelector(".footer");

insetContent.insertAdjacentHTML("beforeend",`
<section class="header">
        <section class="laptop-footer">
            <section class="laptop-footer-warpper">
                <section class="laptop-footer-menu">
                    <div class="laptop-menu-box">
                        <p class="laptop-menu-header">Thermify</p>
                        <p class="laptop-menu-text">Skaldehøjvevj 2, DK 8800 Viborg</p>
                        <p class="laptop-menu-text">+45 86 67 50 55</p>
                        <p class="laptop-menu-text">mail@thermify.dk</p>
                        
                    </div>
                    <div class="line-v"></div>
                    <div class="laptop-menu-box">
                        <p class="laptop-menu-header">Info</p>
                        <a class="laptop-menu-text" href="shop.html" target="_blank">Shop</a>
                        <a class="laptop-menu-text" href="#section-2">Om os</a>
                        <a class="laptop-menu-text" href="#">Persondatapolitik og cookies</a>
                    </div>
                    <div class="line-v"></div>
                    <section class="laptop-footer-form"> 
                        <p class="laptop-menu-header">Tilmeld Nyhedsbrev</p> 
                        <form action="subscription.html" target="_blank">
                            <div class="form-warpper">
                                <input class="email" type="email" placeholder="Email">
                                <button class="email-send-btn">Tilmeld</button>
                        
                                
                            </div>
                            <section class="mobil-footer-SHOME">
                                <a class="icon" href="https://www.facebook.com/" target="_blank" rel="Facebook.com">
                                    <div class="facebook icon"></div>
                                </a>
                                <a class="icon" href="https://www.instagram.com/" target="_blank" rel="instagram.com">
                                    <div class="instagram icon">
                                    <img src="./assets/icons/Instagram_Glyph_Gradient_RGB.svg"/>
                                    </div>
                                </a>
                                <a class="icon"  href="https://twitter.com/" target="_blank" rel="twitter.com">
                                    <div class="twitter icon"></div>
                                </a>
                                <a class="icon" href="https://www.youtube.com/" target="_blank" rel="youtube.com">
                                    <div class="youtube icon"></div>
                                </a>
                        </form>
                    </section>
                </section>
            </section>
            <section class="back-to-top-wapper">
                <div class="test">
                    <a class="back-to-top" href="#">
                        <div class="triangle-up"></div>
                    </a>
                    <p>Back to top</p>
                </div>
            </section>
            <div class="line-b"></div>
            <p class="copy">Copyright © 2022 Thermify, All rights reserved.</p>

        </section>
        <section class="mobil-footer">
            <section class="mobil-footer-warpper">
                <section class="mobil-footer-SHOME">
                    <a class="icon" href="https://www.facebook.com/" target="_blank" rel="Facebook.com">
                        <div class="facebook icon"></div>
                    </a>
                    <a class="icon" href="https://www.instagram.com/" target="_blank" rel="instagram.com">
                        <div class="instagram icon">
                        <img src="./assets/icons/Instagram_Glyph_Gradient_RGB.svg"/>

                        </div>
                    </a>
                    <a class="icon"  href="https://twitter.com/" target="_blank" rel="twitter.com">
                        <div class="twitter icon"></div>
                    </a>
                    <a class="icon" href="https://www.youtube.com/" target="_blank" rel="youtube.com">
                        <div class="youtube icon"></div>
                    </a>

                </section>
                <section class="mobil-footer-form"> 
                    <p>Tilmeld Nyhedsbrev</p> 
                    <form action="subscription.html" target="_blank">
                        <div class="form-warpper">
                            <input class="email" type="email" placeholder="Email">
                            <button class="email-send-btn">Tilmeld</button>
                    
                            
                        </div>
                    </form>
                </section>
                <section class="mobil-footer-dropdown">
                    <div class="mobil-footer-dropdown-warpper">

                        <div class="box-cont-menu-header">
                            Thermify
                            <div class="box-cont-menu-icon">
                                <div class="icon-1-bar1"></div>
                                <div class="icon-1-bar2"></div>
                            </div>
                            
                        </div>
                        <div class="box-cont-menu-footer">
                            <div class="menu-footer-dropdwon">
                                <p>Skaldehøjvevj 2, DK 8800 Viborg</p>
                                <p>+45 86 67 50 55</p>
                                <p>mail@thermify.dk</p>
                            </div>
                            
                        </div>
                        <div class="line-b"></div>
                        <div class="box-cont-menu-header2">
                            Info
                            <div class="box-cont-menu-icon2">
                                <div class="icon-2-bar1 icon-header2"></div>
                                <div class="icon-2-bar2"></div>
                            </div>
                            
                        </div>
                        <div class="box-cont-menu-footer2">
                            <div class="menu-footer-dropdwon">
                                
                                <p>Shop</p>
                                <p>Om os</p>
                                <p>Persondatapolitik og cookies</p>
                            </div>
                            
                        </div>
                    </div>

                </section>
                <section class="back-to-top-wapper">
                    <div class="test">
                        <a class="back-to-top" href="#">
                            <div class="triangle-up"></div>
                        </a>
                        <p>Back to top</p>
                    </div>
                </section>
                <div class="line-b"></div>
                <p class="copy">Copyright © 2022 Thermify, All rights reserved.</p>
            </section>
        </section>
</section>
`);

const menuHeader = document.querySelector(".box-cont-menu-header");
const menuFooter = document.querySelector(".box-cont-menu-footer");

const menuHeader2 = document.querySelector(".box-cont-menu-header2");
const menuFooter2 = document.querySelector(".box-cont-menu-footer2");

const iconHeader = document.querySelector(".icon-1-bar2");
const iconHeader2 = document.querySelector(".icon-2-bar2");


menuHeader.addEventListener("click", () => {

    iconHeader2.classList.remove("rotate");
    menuHeader2.classList.remove("activ");
    menuFooter2.classList.remove("active");
    
    menuHeader.classList.toggle("activ");
    menuFooter.classList.toggle("active");

    iconHeader.classList.toggle("rotate");


});

menuHeader2.addEventListener("click", () => {

    iconHeader.classList.remove("rotate");
    menuHeader.classList.remove("activ");
    menuFooter.classList.remove("active");

    menuHeader2.classList.toggle("activ");
    menuFooter2.classList.toggle("active");

    iconHeader2.classList.toggle("rotate");

});


