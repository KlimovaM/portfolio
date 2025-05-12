let currentLang = 'ru'; // возможные значения: 'ru', 'ja', 'en'

const sections = {
  home: {
    title: {
      ru: "Привет, я Марина",
      ja: "こんにちは、マリナです",
      en: "Hi, I'm Marina"
    },
    text: {
      ru: "У меня есть опыт в техподдержке и тестировании.<br>Сейчас я изучаю облачные технологии.",
      ja: "テクニカルサポートとテストの経験があります。<br>現在はクラウド技術を学んでいます。",
      en: "I have experience in tech support and QA.<br>Now I study cloud technologies."
    },
    avatar: "https://avatar.iran.liara.run/public/86",
    img: "https://via.placeholder.com/300x200?text=Cloud+Engineer",
    icons: ['fas fa-cloud', 'fab fa-docker', 'fab fa-github', 'fab fa-linux', 'fas fa-terminal']
  },
  projects: {
    title: {
      ru: "Опыт",
      ja: "経験",
      en: "Experience"
    },
    text: {
      ru: "Ниже — примеры моего опыта.",
      ja: "以下は私の経験の一部です。",
      en: "Below are examples of my experience."
    },
    img: "https://via.placeholder.com/300x200?text=Project+Preview",
    icons: []
  },
  contact: {
    title: {
      ru: "Контакты",
      ja: "連絡先",
      en: "Contact"
    },
    text: {
      ru: "Свяжитесь со мной по email: <strong>fina202415@st.forum.ac.jp</strong>",
      ja: "メールでご連絡ください: <strong>fina202415@st.forum.ac.jp</strong>",
      en: "Contact me by email: <strong>fina202415@st.forum.ac.jp</strong>"
    },
    linkedin: "https://www.linkedin.com/in/marina-klimova-24a999206/", // Ссылка на LinkedIn
    avatar: "https://avatar.iran.liara.run/public/94",
    img: "https://www.linkedin.com/in/marina-klimova-24a999206/",
    icons: []
  }
};

const app = document.getElementById('app');

function renderSection(key) {
    const data = sections[key];
  
    app.innerHTML = `
      <div class="section active">
        <h1>${data.title[currentLang]}</h1>
  
        ${key === 'contact' && data.avatar ? `
          <div class="contact-card">
            <img class="avatar contact-avatar" src="${data.avatar}" alt="Avatar">
            <div class="contact-info">${data.text[currentLang]}</div>
            
            <!-- Переносим ссылку на LinkedIn под почту -->
            ${data.linkedin ? `
              <div class="contact-links">
                <a href="${data.linkedin}" target="_blank" class="contact-link">
                  <i class="fab fa-linkedin" title="LinkedIn"></i> LinkedIn
                </a>
              </div>
            ` : ''}
          </div>
        ` : `
          <p>${data.text[currentLang]}</p>
          ${data.avatar ? `<img class="avatar" src="${data.avatar}" alt="Avatar">` : ''}
        `}
  
        <img src="${data.img}" alt="">
  
        ${data.icons.length ? `
          <div class="icons">
            ${data.icons.map(i => `<i class="${i}" title="${i.split(' ')[1].toUpperCase()}"></i>`).join('')}
          </div>` : ''}
  
        ${key === 'projects' ? `
          <div class="accordion">
            <div class="accordion-item">
              <button class="accordion-header">${translate('student')}</button>
              <div class="accordion-body"><p>${translate('studentDesc')}</p></div>
            </div>
            <div class="accordion-item">
              <button class="accordion-header">${translate('tester')}</button>
              <div class="accordion-body"><p>${translate('testerDesc')}</p></div>
            </div>
            <div class="accordion-item">
              <button class="accordion-header">${translate('support')}</button>
              <div class="accordion-body"><p>${translate('supportDesc')}</p></div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  
    if (key === 'projects') {
      document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.nextElementSibling.classList.toggle('active');
        });
      });
    }
  }

  
document.querySelectorAll("nav a[data-target]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
    renderSection(link.dataset.target);
  });
});

// 🌍 Переключатель языка
const langs = ['ru', 'ja', 'en'];
document.getElementById("langToggle").addEventListener("click", e => {
  e.preventDefault();
  let index = langs.indexOf(currentLang);
  currentLang = langs[(index + 1) % langs.length];
  updateLangButton();
  const active = document.querySelector("nav a.active");
  renderSection(active ? active.dataset.target : 'home');
});

function updateLangButton() {
  const langText = {
    ru: "🇷🇺 Русский",
    ja: "🇯🇵 日本語",
    en: "🇬🇧 English"
  };
  document.getElementById("langToggle").innerText = langText[currentLang];
}

function translate(key) {
  const dictionary = {
    student: {
      ru: "Студент",
      ja: "学生",
      en: "Student"
    },
    studentDesc: {
      ru: `Учусь в Forum Academy.  Чтобы узнать больше о моём опыте, пожалуйста <a href="#" onclick="navigateTo('contact')">свяжитесь со мной</a>.`,
      ja: `フォーラムアカデミーで学んでいます。<a href="#" onclick="navigateTo('contact')">お問い合わせください</a>。`,
      en: `Studying at Forum Academy. To learn more about my experience, please <a href="#" onclick="navigateTo('contact')">contact me</a>.`
    },
    tester: {
      ru: "Тестировщик",
      ja: "テスター",
      en: "Tester"
    },
    testerDesc: {
      ru: `Ручное тестирование. Чтобы узнать больше о моём опыте, пожалуйста <a href="#" onclick="navigateTo('contact')">свяжитесь со мной</a>.`,
      ja: `手動テストの経験。詳しくは<a href="#" onclick="navigateTo('contact')">お問い合わせください</a>。`,
      en: `Manual testing experience. To learn more about my experience, please <a href="#" onclick="navigateTo('contact')">contact me</a>.`
        },
    support: {
      ru: "Техподдержка",
      ja: "テクニカルサポート",
      en: "Tech Support"
    },
    supportDesc: {
      ru: `Опыт технической поддержки. . Чтобы узнать больше о моём опыте, пожалуйста <a href="#" onclick="navigateTo('contact')">свяжитесь со мной</a>.`,
      ja:`サポートの経験があります。<a href="#" onclick="navigateTo('contact')">お問い合わせください</a>。`,
      en: `Technical support experience. To learn more about my experience, please <a href="#" onclick="navigateTo('contact')">contact me</a>.`
    }
  };
  return dictionary[key][currentLang];
}

// Загрузка первой секции и инициализация языка
updateLangButton();
renderSection('home');

// функция перехода на странице
function navigateTo(section) {
    document.querySelectorAll("nav a").forEach(a => {
      a.classList.remove("active");
      if (a.dataset.target === section) {
        a.classList.add("active");
      }
    });
    renderSection(section);
  }