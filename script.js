const sections = {
    home: {
      title: "Hello, I'm Marina",
      text: `
        I have an experience as techsupport and test engineer.<br>
        Now I study cloud.
      `,
      avatar:"https://avatar.iran.liara.run/public/86",
      img: "https://via.placeholder.com/300x200?text=Cloud+Engineer",
      icons: ['fas fa-cloud', 'fab fa-docker', 'fab fa-github', 'fab fa-linux', 'fas fa-terminal']
    },
    projects: {
        title: "Experience",
        text: "",
        img: "https://via.placeholder.com/300x200?text=Project+Preview",
        icons: []
      },
    contact: {
        title: "Contact me",
        text: "Contact email: <strong> fina202415@st.forum.ac.jp </strong>",
        img: "https://via.placeholder.com/300x200?text=Contact+Me",
        avatar: "https://avatar.iran.liara.run/public/94",
        icons: []
      }
  };
  
  const app = document.getElementById('app');
  
  function renderSection(key) {
    const data = sections[key];
  
    const extraContent = key === 'projects' ? `
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-header">Student</button>
          <div class="accordion-body">
            <p>Forum academy student</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">Tester/QA</button>
          <div class="accordion-body">
            <p>Manual testing</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header">TechSupport</button>
          <div class="accordion-body">
            <p>Technical support</p>
          </div>
        </div>
      </div>
    ` : '';
  
    app.innerHTML = `
    <div class="section active">
      <h1>${data.title}</h1>

      ${key === 'contact' && data.avatar ? `
        <div class="contact-card">
          <img class="avatar contact-avatar" src="${data.avatar}" alt="Avatar">
          <div class="contact-info">${data.text}</div>
        </div>
      ` : `
        <p>${data.text}</p>
        ${data.avatar ? `<img class="avatar" src="${data.avatar}" alt="Avatar">` : ''}
      `}

      <img src="${data.img}" alt="">
      
      ${data.icons.length ? `
        <div class="icons">
          ${data.icons.map(i => `<i class="${i}" title="${i.split(' ')[1].toUpperCase()}"></i>`).join('')}
        </div>` : ''}

      ${extraContent}
    </div>
  `;
  
    // Аккордеон логика
    if (key === 'projects') {
      document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', () => {
          const body = btn.nextElementSibling;
          body.classList.toggle('active');
        });
      });
    }
  }
  
  
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      renderSection(link.dataset.target);
    });
  });
  
  // Загрузка первой секции
  renderSection('home');
  
