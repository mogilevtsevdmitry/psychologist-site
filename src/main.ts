import './styles.css'

const app = document.querySelector('#app') as HTMLDivElement

app.innerHTML = `
  <header class="header" aria-label="Главная навигация">
    <nav class="nav">
      <a class="brand" href="#home" aria-label="На главную">
        <span class="brand__logo" aria-hidden="true"></span>
        <span class="brand__name">Имя Фамилия</span>
      </a>
      <div class="nav__links" role="navigation" aria-label="Основные разделы">
        <a class="nav__link" href="#about">Обо мне</a>
        <a class="nav__link" href="#certs">Сертификаты</a>
        <a class="nav__link" href="#articles">Статьи</a>
        <a class="nav__link" href="#reviews">Отзывы</a>
        <a class="nav__link" href="#contact">Контакты</a>
      </div>
      <button class="burger" aria-label="Меню" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div id="mobile-menu" class="mobile-menu" role="menu" aria-label="Мобильное меню">
      <a href="#about" role="menuitem">Обо мне</a>
      <a href="#certs" role="menuitem">Сертификаты</a>
      <a href="#articles" role="menuitem">Статьи</a>
      <a href="#reviews" role="menuitem">Отзывы</a>
      <a href="#contact" role="menuitem">Контакты</a>
    </div>
  </header>

  <main id="home" class="hero container reveal">
    <div>
      <span class="hero__badge">Психотерапевт • 7+ лет практики</span>
      <h1>Спокойнее внутри — увереннее снаружи</h1>
      <p>Помогаю справляться с тревогой, выгоранием и сложными отношениями. Работаю бережно, экологично и в темпе, комфортном именно вам.</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="#contact">Записаться на консультацию</a>
        <a class="btn btn--ghost" href="#articles">Почитать статьи</a>
      </div>
    </div>
    <div class="hero__photo" aria-label="Фотография психолога"></div>
  </main>

  <section id="about" class="about reveal" aria-label="Обо мне">
    <div class="container">
      <div class="section__head">
        <span class="section__eyebrow">Обо мне</span>
        <h2 class="section__title">Подход, образование и ценности</h2>
        <p class="section__desc">Кратко о том, как именно вы работаете и почему людям с вами спокойно.</p>
      </div>
      <div class="about__grid">
        <article class="card">
          <h3 style="margin-top:0">Образование и методы</h3>
          <ul class="list">
            <li>Магистр психологии, НИУ (год — год)</li>
            <li>Методы: КПТ, схема‑терапия, EMDR, майндфулнесс</li>
            <li>Супервизии, регулярная личная терапия</li>
            <li>Онлайн и очные встречи</li>
          </ul>
          <h3>Ценности работы</h3>
          <ul class="list">
            <li>Безоценочность и конфиденциальность</li>
            <li>Эмпатия и научная обоснованность</li>
            <li>Фокус на результат и устойчивые изменения</li>
          </ul>
        </article>
        <aside class="card">
          <h3 style="margin-top:0">Галерея</h3>
          <div class="gallery" aria-label="Профессиональные фотографии">
            <div class="gallery__item" style="background-image:url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop')"></div>
            <div class="gallery__item tall" style="background-image:url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop')"></div>
            <div class="gallery__item" style="background-image:url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop')"></div>
            <div class="gallery__item" style="background-image:url('https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop')"></div>
            <div class="gallery__item tall" style="background-image:url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop')"></div>
            <div class="gallery__item" style="background-image:url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop')"></div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section id="certs" class="reveal" aria-label="Сертификаты">
    <div class="container">
      <div class="section__head">
        <span class="section__eyebrow">Сертификаты</span>
        <h2 class="section__title">Дипломы и подтверждения квалификации</h2>
        <p class="section__desc">Скан-копии документов: нажмите для просмотра в полном размере.</p>
      </div>
      <div class="certs__grid">
        <figure class="cert">
          <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec2e7c2?q=80&w=1600&auto=format&fit=crop" alt="Диплом магистра психологии">
          <figcaption class="cert__caption">Диплом магистра психологии</figcaption>
        </figure>
        <figure class="cert">
          <img src="https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1600&auto=format&fit=crop" alt="Сертификат по КПТ">
          <figcaption class="cert__caption">Сертификат КПТ</figcaption>
        </figure>
        <figure class="cert">
          <img src="https://images.unsplash.com/photo-1531232001323-75c2f88b8e69?q=80&w=1600&auto=format&fit=crop" alt="Сертификат EMDR">
          <figcaption class="cert__caption">Сертификат EMDR</figcaption>
        </figure>
        <figure class="cert">
          <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop" alt="Повышение квалификации">
          <figcaption class="cert__caption">Повышение квалификации</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section id="articles" class="reveal" aria-label="Статьи">
    <div class="container">
      <div class="section__head">
        <span class="section__eyebrow">Статьи</span>
        <h2 class="section__title">Полезные материалы по темам</h2>
        <p class="section__desc">Разделяйте публикации по тегам: тревога, отношения, выгорание, самоценность и др.</p>
      </div>
      <div class="filters" role="toolbar" aria-label="Фильтры статей">
        <button class="chip" aria-pressed="true" data-filter="all">Все</button>
        <button class="chip" aria-pressed="false" data-filter="тревога">Тревога</button>
        <button class="chip" aria-pressed="false" data-filter="выгорание">Выгорание</button>
        <button class="chip" aria-pressed="false" data-filter="отношения">Отношения</button>
      </div>
      <div class="posts" id="posts">
        <article class="post" data-tags="тревога">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" alt="">
          <div class="post__body">
            <span class="post__tag">Тревога</span>
            <h3 class="post__title">Как успокаивать тело, когда ум тревожится</h3>
            <div class="post__meta">5 мин • Практики дыхания</div>
          </div>
        </article>
        <article class="post" data-tags="выгорание">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop" alt="">
          <div class="post__body">
            <span class="post__tag">Выгорание</span>
            <h3 class="post__title">Три уровня восстановления энергии</h3>
            <div class="post__meta">7 мин • Пошаговый гид</div>
          </div>
        </article>
        <article class="post" data-tags="отношения">
          <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" alt="">
          <div class="post__body">
            <span class="post__tag">Отношения</span>
            <h3 class="post__title">Границы без чувства вины</h3>
            <div class="post__meta">6 мин • Коммуникация</div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section id="reviews" class="testimonials reveal" aria-label="Отзывы клиентов">
    <div class="container">
      <div class="section__head">
        <span class="section__eyebrow">Отзывы</span>
        <h2 class="section__title">Опыт клиентов</h2>
        <p class="section__desc">Реальные отзывы с согласия клиентов. Можно указывать имя и фото или инициалы.</p>
      </div>
      <div class="tape" aria-live="polite">
        <article class="review">
          <div class="review__head">
            <div class="avatar" aria-hidden="true"></div>
            <div>
              <div class="review__name">Анастасия, 32</div>
              <div class="hint">работали 3 месяца</div>
            </div>
          </div>
          <p class="review__text">Очень бережно и структурно. Научилась замечать первые признаки тревоги и лучше себя поддерживать.</p>
        </article>
        <article class="review">
          <div class="review__head">
            <div class="avatar" aria-hidden="true"></div>
            <div>
              <div class="review__name">Игорь, 41</div>
              <div class="hint">онлайн‑формат</div>
            </div>
          </div>
          <p class="review__text">Понравилось, что всегда есть конкретные шаги и упражнения. Чувствую себя устойчивее.</p>
        </article>
        <article class="review">
          <div class="review__head">
            <div class="avatar" aria-hidden="true"></div>
            <div>
              <div class="review__name">Мария, 28</div>
              <div class="hint">5 встреч</div>
            </div>
          </div>
          <p class="review__text">Без осуждения, с большим уважением к моим границам. Спасибо!</p>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="contact reveal" aria-label="Форма обратной связи">
    <div class="container">
      <div class="section__head">
        <span class="section__eyebrow">Контакты</span>
        <h2 class="section__title">Напишите мне</h2>
        <p class="section__desc">Обычно отвечаю в течение 24 часов в будние дни.</p>
      </div>
      <div class="contact__grid">
        <form class="form" aria-label="Форма связи">
          <div class="field">
            <label for="name">Имя</label>
            <input id="name" name="name" type="text" placeholder="Как к вам обращаться" required>
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="name@example.com" required inputmode="email">
          </div>
          <div class="field">
            <label for="message">Сообщение</label>
            <textarea id="message" name="message" placeholder="Коротко опишите ваш запрос"></textarea>
          </div>
          <p class="hint">Отправляя форму, вы соглашаетесь с обработкой персональных данных.</p>
          <button class="btn btn--primary" type="submit">Отправить</button>
        </form>
        <aside class="contacts-card">
          <h3 style="margin-top:0">Как со мной связаться</h3>
          <ul class="contacts-list">
            <li>Город: Тюмень / Онлайн</li>
            <li>Телефон: <a href="tel:+7XXXXXXXXXX">+7 (XXX) XXX‑XX‑XX</a></li>
            <li>Email: <a href="mailto:you@example.com">you@example.com</a></li>
            <li>Telegram: <a href="https://t.me/your_handle" target="_blank" rel="noopener">t.me/your_handle</a></li>
            <li>Instagram*: <a href="#" target="_blank" rel="noopener">@your_handle</a></li>
          </ul>
          <p class="hint">*организация, признанная в РФ экстремистской.</p>
        </aside>
      </div>
    </div>
  </section>

  <footer>
    <div class="footer__inner">
      <div>© <span id="year"></span> Имя Фамилия — психолог</div>
      <div class="socials">
        <a href="#articles">Статьи</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contact">Контакты</a>
      </div>
    </div>
  </footer>
`

// Behavior
const yearEl = document.getElementById('year')!
yearEl.textContent = String(new Date().getFullYear())

const burger = document.querySelector('.burger') as HTMLButtonElement | null
const menu = document.getElementById('mobile-menu') as HTMLDivElement | null
burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true'
  burger.setAttribute('aria-expanded', String(!expanded))
  menu?.classList.toggle('show')
})
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger?.setAttribute('aria-expanded', 'false'); menu?.classList.remove('show')
}))

const io = ('IntersectionObserver' in window) ? new IntersectionObserver((entries)=>{
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io?.unobserve(e.target as Element); } });
}, {threshold: .08}) : null;
document.querySelectorAll('.reveal').forEach(el => {
  if(io) io.observe(el); else (el as HTMLElement).classList.add('in');
});

// Dummy submit
const form = document.querySelector('.form') as HTMLFormElement
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  alert('Спасибо! Ваше сообщение отправлено.')
  form.reset()
})

// Filters
const posts = document.getElementById('posts') as HTMLDivElement
const chips = document.querySelectorAll('.chip')
chips.forEach(chip => chip.addEventListener('click', ()=>{
  chips.forEach(c => c.setAttribute('aria-pressed','false'))
  chip.setAttribute('aria-pressed','true')
  const f = (chip as HTMLElement).dataset.filter
  posts.querySelectorAll('.post').forEach(p=>{
    const ok = f==='all' || (p as HTMLElement).dataset.tags?.includes(String(f))
    ;(p as HTMLElement).style.display = ok ? '' : 'none'
  })
}))
