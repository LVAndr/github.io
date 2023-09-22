import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
const style = "";
function PageLayout(children) {
  return Layout(
    [
      Content(children)
    ].join("\n")
  );
}
function Layout(children) {
  return `
<!doctype html>
<html lang="uk">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Дукат - ремонт мобільних телефонів в місті Монастирище</title>
</head>
<body>
<div class="wrapper">
    <header class="header">
        <div class="header__container">
            <div class="header__top">
                <a href="/" class="logo" aria-label="логотип магазину Дукат">Дукат</a>
            </div>
            <div class="header__nav">
                <nav class="menu">
                    <ul class="menu__list list-reset">
                        <li class="menu__list-item"><a href="/answers" class="menu__list-link">Питання і відповіді</a></li>
                        <li class="menu__list-item"><a href="/#contacts" class="menu__list-link">Контакти</a></li>
                        <li class="menu__list-item"><a href="/#about-us" class="menu__list-link">Про нас</a></li>
                        <li class="menu__list-item"><a href="/agreement" class="menu__list-link">Гарантійна політика</a></li>
                    </ul>
                </nav>
            </div>
            <div class="header__content">
                <div class="header__burger">
                    <button class="burger btn-reset" aria-controls="primary-navigation" aria-expanded="false">
                        <svg stroke="#fc3441" class="hamburger" viewBox="0 0 100 100" width="45">
                            <line class="top line"
                                  x1="90" x2="10" y1="40" y2="40"
                                  stroke-width="10"
                                  stroke-linecap="round"
                                  stroke-dasharray="80"
                                  stroke-dashoffset="0">
                            </line>
                            <line class="bottom line"
                                  x1="10" x2="90" y1="60" y2="60"
                                  stroke-width="10"
                                  stroke-linecap="round"
                                  stroke-dasharray="80"
                                  stroke-dashoffset="0">
                            </line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
  ${children}
  <footer class="footer">
        <div class="footer__container">
            <div class="footer__top">
                <div class="logo__content">
                    <a href="#" class="logo footer__top__logo">Дукат</a>
                    <p class="logo-caption">
                        Якісний ремонт мобільних телефонів і планшетів м. Монастирище
                    </p>
                </div>

                <div id="contacts" class="social__content">
                    <ul class="social-content__links list-reset">
                        <li class="social-content__item">
                            <a class="social-content__link" href="https://www.facebook.com/YourPage" target="_blank">
                                <img src="/img/social-img/instagram-img.svg" alt="Instagram">
                            </a>
                        </li>
                        <li class="social-content__item">
                            <a class="social-content__link" href="https://www.facebook.com/" target="_blank">
                                <img src="/img/social-img/facebook-img.svg" alt="Facebook">
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__contacts">
                <h3 class="footer__contacts-title">Контакти адміністрації</h3>
                <a class="footer__phone" href="tel:+380965315231">+380965315231</a>
</div>
            </div>
        </div>
        <div class="footer__bottom">
            <smal class="copyright">Copyright &copy; 2023 Дукат</smal>
            <br>
            <small class="developer">Сайт розроблено <a class="developer__link" href="https://t.me/Vadim_web_developer" target="_blank">Vadim Liulko</a></small>
        </div>
    </footer>
</div>
</body>
</html>`;
}
function Content(children) {
  return children;
}
async function onRenderHtml(pageContext) {
  const { Page } = pageContext;
  const pageHtml = PageLayout(Page);
  return escapeInject`${dangerouslySkipEscape(pageHtml)}`;
}
const import_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  import_0 as i
};