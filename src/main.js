const countriesTopology = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(
  (response) => response.json(),
)

const copy = {
  zh: {
    badge: '女性舞蹈地图',
    title: '当女性起舞，世界听见了什么',
    intro:
      '以舞蹈、仪式、抗议与社区行动为线索的全球女性主义界面。地球是舞台，故事以拼接的方式并置，强调连结而不是单一叙事。',
    panelTitle: '精选地点',
    detailLabel: '当前聚焦',
    hint: '拖拽地球，或点击下方地点切换视角。',
    statsLabel: '主题切片',
    stats: ['身体自主', '公共空间', '文化传承', '反暴力', '去殖民'],
    languageLabel: '语言',
    english: 'English',
    chinese: '中文',
  },
  en: {
    badge: 'Global Feminist Movement Atlas',
    title: 'When Women Dance, the World Listens',
    intro:
      'A global feminist interface built from dance, ritual, protest, and community action. The full-screen globe acts as the stage while collage panels keep multiple narratives in view at once.',
    panelTitle: 'Selected Sites',
    detailLabel: 'Current Focus',
    hint: 'Drag the globe or select a site below to shift the point of view.',
    statsLabel: 'Theme Fragments',
    stats: ['Bodily autonomy', 'Public space', 'Cultural memory', 'Anti-violence', 'Decolonial futures'],
    languageLabel: 'Language',
    english: 'English',
    chinese: '中文',
  },
}

const stories = [
  {
    id: 'santiago',
    coordinates: [-70.6693, -33.4489],
    continent: { zh: '南美', en: 'South America' },
    color: '#f04c6a',
    title: { zh: 'LASTESIS 与街头抗议编舞', en: 'LASTESIS and choreographed street protest' },
    subtitle: { zh: '智利，Santiago', en: 'Santiago, Chile' },
    body: {
      zh: '当动作、口号与合唱在广场汇合，女性集体将反性暴力从私人叙事推向国家尺度的控诉。',
      en: 'When movement, chanting, and choral rhythm converge in the plaza, feminist collectives turn anti-violence from a private wound into a public indictment.',
    },
    tags: {
      zh: ['反性暴力', '公共行动', '集体表演'],
      en: ['Anti-violence', 'Public action', 'Collective performance'],
    },
  },
  {
    id: 'brooklyn',
    coordinates: [-73.9442, 40.6782],
    continent: { zh: '北美', en: 'North America' },
    color: '#ff9f68',
    title: { zh: 'Urban Bush Women', en: 'Urban Bush Women' },
    subtitle: { zh: '美国，Brooklyn', en: 'Brooklyn, United States' },
    body: {
      zh: '黑人女性经验在舞台与社区之间往返，迁徙、劳动和种族正义不只是主题，也是身体的方法。',
      en: 'Black women\'s experience moves between stage and neighborhood, where migration, labor, and racial justice become not only themes but methods of embodiment.',
    },
    tags: {
      zh: ['黑人女性', '社区组织', '身体政治'],
      en: ['Black women', 'Community organizing', 'Body politics'],
    },
  },
  {
    id: 'toubab',
    coordinates: [-17.1167, 14.7167],
    continent: { zh: '非洲', en: 'Africa' },
    color: '#ffcf73',
    title: { zh: 'Ecole des Sables', en: 'Ecole des Sables' },
    subtitle: { zh: '塞内加尔，Toubab Dialaw', en: 'Toubab Dialaw, Senegal' },
    body: {
      zh: '这里把祖先身体知识与当代舞并置，女性舞者在海岸线与历史之间重新定义主体性。',
      en: 'Here, ancestral movement knowledge is set beside contemporary dance, allowing women performers to redefine agency between shoreline and history.',
    },
    tags: {
      zh: ['祖先知识', '当代舞', '女性主体性'],
      en: ['Ancestral knowledge', 'Contemporary dance', 'Women\'s agency'],
    },
  },
  {
    id: 'brussels',
    coordinates: [4.3517, 50.8503],
    continent: { zh: '欧洲', en: 'Europe' },
    color: '#f5eadc',
    title: { zh: 'Rosas danst Rosas', en: 'Rosas danst Rosas' },
    subtitle: { zh: '比利时，Brussels', en: 'Brussels, Belgium' },
    body: {
      zh: '重复、疲惫与日常姿态组成一种反凝视语言，让女性身体不再服务于被观看的期待。',
      en: 'Repetition, fatigue, and everyday gestures compose an anti-gaze vocabulary in which women\'s bodies no longer exist to satisfy expectation.',
    },
    tags: {
      zh: ['反凝视', '日常动作', '编舞语言'],
      en: ['Anti-gaze', 'Everyday movement', 'Choreographic language'],
    },
  },
  {
    id: 'auckland',
    coordinates: [174.7633, -36.8485],
    continent: { zh: '大洋洲', en: 'Oceania' },
    color: '#d74e72',
    title: { zh: 'Wahine kapa haka', en: 'Wahine kapa haka' },
    subtitle: { zh: 'Aotearoa New Zealand', en: 'Aotearoa New Zealand' },
    body: {
      zh: '女性在集体吟唱和动作中维系语言、谱系与土地记忆，拼接出一种去殖民的公共在场。',
      en: 'Through collective chant and movement, women sustain language, genealogy, and land memory, stitching together a decolonial public presence.',
    },
    tags: {
      zh: ['去殖民', '土地记忆', '原住民女性'],
      en: ['Decolonial', 'Land memory', 'Indigenous women'],
    },
  },
  {
    id: 'yunnan',
    coordinates: [102.7123, 25.0406],
    continent: { zh: '亚洲', en: 'Asia' },
    color: '#f76d4f',
    title: { zh: '从社区共舞到女性再诠释', en: 'From community dance to women-led reinterpretation' },
    subtitle: { zh: '中国与亚洲女性实践', en: 'China and Asian women\'s practices' },
    body: {
      zh: '广场、节庆、仪式和舞台并置在同一张地图上，说明女性主义并不只发生在抗议现场，也发生在日常文化的重新编排里。',
      en: 'Plazas, festivals, rituals, and stages sit on the same map, showing that feminism does not live only in protest but also in the rearrangement of everyday culture.',
    },
    tags: {
      zh: ['社区舞蹈', '传统重释', '日常权利'],
      en: ['Community dance', 'Tradition reworked', 'Everyday rights'],
    },
  },
]

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="app-shell">
    <div class="backdrop backdrop-left"></div>
    <div class="backdrop backdrop-right"></div>
    <canvas class="globe-canvas" aria-label="Global feminist dance globe"></canvas>

    <div class="left-column">
      <header class="hero-panel panel-collage">
        <p class="eyebrow" data-copy="badge"></p>
        <h1 class="hero-title" data-copy="title"></h1>
        <p class="hero-intro" data-copy="intro"></p>
        <div class="stat-strip">
          <span class="stat-label" data-copy="statsLabel"></span>
          <div class="stat-list"></div>
        </div>
        <p class="hint" data-copy="hint"></p>
      </header>

      <aside class="story-list panel-collage">
        <div class="story-list-head">
          <span class="story-list-label" data-copy="panelTitle"></span>
        </div>
        <div class="story-items"></div>
      </aside>
    </div>

    <section class="focus-card panel-collage">
      <div class="focus-topbar">
        <div class="focus-heading">
          <p class="focus-label" data-copy="detailLabel"></p>
        </div>
        <div class="focus-language" aria-label="language switcher">
          <span class="language-label" data-copy="languageLabel"></span>
          <div class="language-switch">
            <button class="lang-button is-active" type="button" data-lang="zh"></button>
            <button class="lang-button" type="button" data-lang="en"></button>
          </div>
        </div>
      </div>
      <p class="focus-continent"></p>
      <h2 class="focus-title"></h2>
      <p class="focus-subtitle"></p>
      <p class="focus-body"></p>
      <div class="focus-tags"></div>
    </section>
  </main>
`

const canvas = app.querySelector('.globe-canvas')
const context = canvas.getContext('2d')
const statList = app.querySelector('.stat-list')
const storyItems = app.querySelector('.story-items')
const focusContinent = app.querySelector('.focus-continent')
const focusTitle = app.querySelector('.focus-title')
const focusSubtitle = app.querySelector('.focus-subtitle')
const focusBody = app.querySelector('.focus-body')
const focusTags = app.querySelector('.focus-tags')
const langButtons = Array.from(app.querySelectorAll('.lang-button'))

const state = {
  lang: 'zh',
  activeStoryId: stories[0].id,
  rotation: [18, -16, 0],
  dragging: false,
}

const land = topojson.feature(countriesTopology, countriesTopology.objects.countries)
const sphere = { type: 'Sphere' }
const graticule = d3.geoGraticule10()
const projection = d3.geoOrthographic().precision(0.35)
const path = d3.geoPath(projection, context)

let rotationTween = null
let previousDrag = null

function activeStory() {
  return stories.find((story) => story.id === state.activeStoryId) ?? stories[0]
}

function updateText() {
  const locale = copy[state.lang]

  app.querySelectorAll('[data-copy]').forEach((node) => {
    node.textContent = locale[node.dataset.copy]
  })

  statList.innerHTML = locale.stats
    .map((item) => `<span class="stat-pill">${item}</span>`)
    .join('')

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.lang
    button.textContent = button.dataset.lang === 'zh' ? locale.chinese : locale.english
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })

  renderStoryList()
  renderFocusCard()
}

function renderStoryList() {
  storyItems.innerHTML = stories
    .map((story) => {
      const isActive = story.id === state.activeStoryId
      return `
        <button class="story-item${isActive ? ' is-active' : ''}" type="button" data-story-id="${story.id}">
          <span class="story-dot" style="--story-color:${story.color}"></span>
          <span class="story-copy">
            <strong>${story.title[state.lang]}</strong>
            <span>${story.subtitle[state.lang]}</span>
          </span>
          <span class="story-region">${story.continent[state.lang]}</span>
        </button>
      `
    })
    .join('')

  storyItems.querySelectorAll('.story-item').forEach((button) => {
    button.addEventListener('click', () => {
      const story = stories.find((item) => item.id === button.dataset.storyId)
      if (!story) return
      state.activeStoryId = story.id
      rotateToStory(story)
      renderStoryList()
      renderFocusCard()
      render()
    })
  })
}

function renderFocusCard() {
  const story = activeStory()
  focusContinent.textContent = story.continent[state.lang]
  focusTitle.textContent = story.title[state.lang]
  focusSubtitle.textContent = story.subtitle[state.lang]
  focusBody.textContent = story.body[state.lang]
  focusTags.innerHTML = story.tags[state.lang]
    .map((tag) => `<span class="focus-tag">${tag}</span>`)
    .join('')
}

function resize() {
  const width = window.innerWidth
  const height = window.innerHeight
  const dpr = window.devicePixelRatio || 1
  canvas.width = width * dpr
  canvas.height = height * dpr
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  context.setTransform(dpr, 0, 0, dpr, 0, 0)

  const scale = Math.min(width, height) * (width < 900 ? 0.34 : 0.38)
  projection.scale(scale).translate([width * 0.56, height * 0.54]).rotate(state.rotation)
  render()
}

function globeCenter() {
  const [lambda, phi] = projection.rotate()
  return [-lambda, -phi]
}

function drawBackdropGlow(cx, cy, radius) {
  const gradient = context.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.6)
  gradient.addColorStop(0, 'rgba(245, 136, 123, 0.28)')
  gradient.addColorStop(0.5, 'rgba(249, 215, 196, 0.16)')
  gradient.addColorStop(1, 'rgba(11, 10, 15, 0)')
  context.beginPath()
  context.fillStyle = gradient
  context.arc(cx, cy, radius * 1.6, 0, Math.PI * 2)
  context.fill()
}

function visibleOnFront(coordinates) {
  return d3.geoDistance(coordinates, globeCenter()) < Math.PI / 2
}

function drawMarkers() {
  stories.forEach((story) => {
    if (!visibleOnFront(story.coordinates)) return
    const projected = projection(story.coordinates)
    if (!projected) return

    const isActive = story.id === state.activeStoryId
    const [x, y] = projected

    context.beginPath()
    context.fillStyle = story.color
    context.strokeStyle = 'rgba(18, 13, 14, 0.65)'
    context.lineWidth = 1.5
    context.arc(x, y, isActive ? 7.2 : 4.4, 0, Math.PI * 2)
    context.fill()
    context.stroke()

    if (isActive) {
      context.beginPath()
      context.strokeStyle = 'rgba(255, 240, 229, 0.75)'
      context.lineWidth = 1.1
      context.arc(x, y, 12.5, 0, Math.PI * 2)
      context.stroke()
    }
  })
}

function render() {
  const width = window.innerWidth
  const height = window.innerHeight
  const [cx, cy] = projection.translate()
  const radius = projection.scale()

  context.clearRect(0, 0, width, height)
  drawBackdropGlow(cx, cy, radius)

  context.save()
  context.beginPath()
  path(sphere)
  context.fillStyle = '#120f14'
  context.shadowColor = 'rgba(0, 0, 0, 0.22)'
  context.shadowBlur = 34
  context.fill()
  context.restore()

  context.beginPath()
  path(sphere)
  context.fillStyle = '#2b1820'
  context.fill()

  context.beginPath()
  path(graticule)
  context.strokeStyle = 'rgba(255, 229, 219, 0.14)'
  context.lineWidth = 0.7
  context.stroke()

  context.beginPath()
  path(land)
  context.fillStyle = '#f3e2d2'
  context.fill()

  context.beginPath()
  path(land)
  context.strokeStyle = 'rgba(122, 48, 48, 0.18)'
  context.lineWidth = 0.8
  context.stroke()

  context.beginPath()
  path(sphere)
  context.strokeStyle = 'rgba(255, 233, 221, 0.42)'
  context.lineWidth = 1.2
  context.stroke()

  drawMarkers()
}

function animateRotation(targetRotation) {
  const startRotation = projection.rotate()
  const interpolate = d3.interpolate(startRotation, targetRotation)
  const duration = 900
  const start = performance.now()

  rotationTween = (now) => {
    const t = Math.min(1, (now - start) / duration)
    const eased = d3.easeCubicInOut(t)
    state.rotation = interpolate(eased)
    projection.rotate(state.rotation)
    render()

    if (t < 1) {
      requestAnimationFrame(rotationTween)
    }
  }

  requestAnimationFrame(rotationTween)
}

function rotateToStory(story) {
  const [lon, lat] = story.coordinates
  animateRotation([-lon, -lat, 0])
}

const dragBehavior = d3
  .drag()
  .on('start', (event) => {
    state.dragging = true
    previousDrag = { x: event.x, y: event.y, rotation: projection.rotate() }
  })
  .on('drag', (event) => {
    if (!previousDrag) return
    const deltaX = event.x - previousDrag.x
    const deltaY = event.y - previousDrag.y
    const sensitivity = 0.24
    state.rotation = [
      previousDrag.rotation[0] + deltaX * sensitivity,
      previousDrag.rotation[1] - deltaY * sensitivity,
      previousDrag.rotation[2],
    ]
    projection.rotate(state.rotation)
    render()
  })
  .on('end', () => {
    state.dragging = false
    previousDrag = null
  })

d3.select(canvas).call(dragBehavior)

canvas.addEventListener('pointerdown', () => {
  canvas.classList.add('is-dragging')
})

window.addEventListener('pointerup', () => {
  canvas.classList.remove('is-dragging')
})

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.lang = button.dataset.lang
    updateText()
  })
})

d3.timer(() => {
  if (state.dragging) return
  const [lambda, phi, gamma] = projection.rotate()
  state.rotation = [lambda + 0.03, phi, gamma]
  projection.rotate(state.rotation)
  render()
})

window.addEventListener('resize', resize)

updateText()
resize()
