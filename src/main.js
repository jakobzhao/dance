const copy = {
  zh: {
    badge: '女性舞蹈地图',
    title: '女性如何用舞蹈改变公共空间',
    intro:
      '一个明亮的全球舞蹈与女性主义案例地图：从抗议编舞、社区舞蹈、仪式身体到当代舞实践，观察身体如何成为记忆、组织和行动的方法。',
    panelTitle: '案例数据',
    detailLabel: '当前聚焦',
    hint: '拖拽地球，点击地图标记或案例卡片切换视角。',
    statsLabel: '数据概览',
    languageLabel: '语言',
    english: 'English',
    chinese: '中文',
    allRegions: '全部地区',
    cases: '个案例',
    regions: '个地区',
    themes: '个主题',
    mapLoading: '地图数据加载中',
    mapFallback: '地图底图未加载，案例点仍可浏览',
  },
  en: {
    badge: 'Global Feminist Dance Atlas',
    title: 'How Women Move Public Space',
    intro:
      'A brighter global atlas of feminist dance and embodied practice, connecting protest choreography, community dance, ritual movement, and contemporary performance.',
    panelTitle: 'Case Dataset',
    detailLabel: 'Current Focus',
    hint: 'Drag the globe, then select a map marker or case card to shift the view.',
    statsLabel: 'Data Snapshot',
    languageLabel: 'Language',
    english: 'English',
    chinese: '中文',
    allRegions: 'All regions',
    cases: 'cases',
    regions: 'regions',
    themes: 'themes',
    mapLoading: 'Loading map data',
    mapFallback: 'Basemap unavailable; case points remain browsable',
  },
}

const stories = [
  {
    id: 'santiago',
    coordinates: [-70.6693, -33.4489],
    region: 'latin-america',
    continent: { zh: '拉丁美洲', en: 'Latin America' },
    color: '#ff4f7a',
    year: '2019',
    theme: { zh: '反暴力抗议', en: 'Anti-violence protest' },
    title: { zh: 'LASTESIS 与街头抗议编舞', en: 'LASTESIS and choreographed street protest' },
    subtitle: { zh: '智利，圣地亚哥', en: 'Santiago, Chile' },
    body: {
      zh: '动作、口号与合唱在广场汇合，女性集体将反性暴力从私人叙事推向国家尺度的控诉。',
      en: 'Movement, chant, and choral rhythm converge in the plaza, turning anti-violence from private wound into public indictment.',
    },
    tags: { zh: ['反性暴力', '公共行动', '集体表演'], en: ['Anti-violence', 'Public action', 'Collective performance'] },
  },
  {
    id: 'brooklyn',
    coordinates: [-73.9442, 40.6782],
    region: 'north-america',
    continent: { zh: '北美', en: 'North America' },
    color: '#ff8a3d',
    year: '1984-',
    theme: { zh: '社区组织', en: 'Community organizing' },
    title: { zh: 'Urban Bush Women', en: 'Urban Bush Women' },
    subtitle: { zh: '美国，布鲁克林', en: 'Brooklyn, United States' },
    body: {
      zh: '黑人女性经验在舞台与社区之间往返，迁徙、劳动和种族正义不只是主题，也是身体的方法。',
      en: 'Black women’s experience moves between stage and neighborhood, where migration, labor, and racial justice become embodied methods.',
    },
    tags: { zh: ['黑人女性', '社区教育', '身体政治'], en: ['Black women', 'Community education', 'Body politics'] },
  },
  {
    id: 'toubab',
    coordinates: [-17.1167, 14.7167],
    region: 'africa',
    continent: { zh: '非洲', en: 'Africa' },
    color: '#ffc247',
    year: '1998-',
    theme: { zh: '去殖民身体知识', en: 'Decolonial body knowledge' },
    title: { zh: 'Ecole des Sables', en: 'Ecole des Sables' },
    subtitle: { zh: '塞内加尔，Toubab Dialaw', en: 'Toubab Dialaw, Senegal' },
    body: {
      zh: '祖先身体知识与当代舞并置，女性舞者在海岸线与历史之间重新定义主体性。',
      en: 'Ancestral movement knowledge sits beside contemporary dance, allowing women performers to redefine agency between shoreline and history.',
    },
    tags: { zh: ['祖先知识', '当代舞', '女性主体性'], en: ['Ancestral knowledge', 'Contemporary dance', 'Women’s agency'] },
  },
  {
    id: 'brussels',
    coordinates: [4.3517, 50.8503],
    region: 'europe',
    continent: { zh: '欧洲', en: 'Europe' },
    color: '#7b61ff',
    year: '1983',
    theme: { zh: '反凝视', en: 'Anti-gaze' },
    title: { zh: 'Rosas danst Rosas', en: 'Rosas danst Rosas' },
    subtitle: { zh: '比利时，布鲁塞尔', en: 'Brussels, Belgium' },
    body: {
      zh: '重复、疲惫与日常姿态组成一种反凝视语言，让女性身体不再服务于被观看的期待。',
      en: 'Repetition, fatigue, and everyday gestures compose an anti-gaze vocabulary in which women’s bodies refuse expected display.',
    },
    tags: { zh: ['反凝视', '日常动作', '编舞语言'], en: ['Anti-gaze', 'Everyday movement', 'Choreographic language'] },
  },
  {
    id: 'auckland',
    coordinates: [174.7633, -36.8485],
    region: 'oceania',
    continent: { zh: '大洋洲', en: 'Oceania' },
    color: '#00a889',
    year: '持续实践',
    theme: { zh: '原住民女性记忆', en: 'Indigenous women’s memory' },
    title: { zh: 'Wahine kapa haka', en: 'Wahine kapa haka' },
    subtitle: { zh: 'Aotearoa New Zealand', en: 'Aotearoa New Zealand' },
    body: {
      zh: '女性在集体吟唱和动作中维系语言、谱系与土地记忆，拼接出一种去殖民的公共在场。',
      en: 'Through collective chant and movement, women sustain language, genealogy, and land memory as decolonial public presence.',
    },
    tags: { zh: ['去殖民', '土地记忆', '原住民女性'], en: ['Decolonial', 'Land memory', 'Indigenous women'] },
  },
  {
    id: 'yunnan',
    coordinates: [102.7123, 25.0406],
    region: 'asia',
    continent: { zh: '亚洲', en: 'Asia' },
    color: '#ef476f',
    year: '当代',
    theme: { zh: '社区舞蹈', en: 'Community dance' },
    title: { zh: '从社区共舞到女性再诠释', en: 'From community dance to women-led reinterpretation' },
    subtitle: { zh: '中国与亚洲女性实践', en: 'China and Asian women\'s practices' },
    body: {
      zh: '广场、节庆、仪式和舞台并置在同一张地图上，说明女性主义也发生在日常文化的重新编排里。',
      en: 'Plazas, festivals, rituals, and stages show feminism living in the rearrangement of everyday culture as much as in protest.',
    },
    tags: { zh: ['社区舞蹈', '传统重释', '日常权利'], en: ['Community dance', 'Tradition reworked', 'Everyday rights'] },
  },
  {
    id: 'istanbul',
    coordinates: [28.9784, 41.0082],
    region: 'europe',
    continent: { zh: '欧洲/西亚', en: 'Europe/West Asia' },
    color: '#2f80ed',
    year: '2010s-',
    theme: { zh: '公共空间', en: 'Public space' },
    title: { zh: '女性在城市广场中的身体可见性', en: 'Women’s bodily visibility in city squares' },
    subtitle: { zh: '土耳其，伊斯坦布尔', en: 'Istanbul, Turkey' },
    body: {
      zh: '街头舞蹈、节庆与抗议实践共同争夺城市可见性，身体成为谈判公共空间边界的语言。',
      en: 'Street dance, festivals, and protest practices contest urban visibility, making the body a language for negotiating public space.',
    },
    tags: { zh: ['城市空间', '可见性', '身体边界'], en: ['Urban space', 'Visibility', 'Bodily boundaries'] },
  },
  {
    id: 'delhi',
    coordinates: [77.209, 28.6139],
    region: 'asia',
    continent: { zh: '亚洲', en: 'Asia' },
    color: '#f15bb5',
    year: '2012-',
    theme: { zh: '夜间安全', en: 'Night safety' },
    title: { zh: '公共舞蹈与女性夜间城市权利', en: 'Public dance and women’s right to the night city' },
    subtitle: { zh: '印度，德里', en: 'Delhi, India' },
    body: {
      zh: '夜间街头行动把“安全”从规训女性转向改变城市，舞蹈成为重新占领街道的集体姿态。',
      en: 'Night-time actions shift safety from disciplining women toward changing the city, with dance reclaiming streets as collective gesture.',
    },
    tags: { zh: ['夜间城市', '安全政治', '街头行动'], en: ['Night city', 'Safety politics', 'Street action'] },
  },
  {
    id: 'tokyo',
    coordinates: [139.6917, 35.6895],
    region: 'asia',
    continent: { zh: '亚洲', en: 'Asia' },
    color: '#00bbf9',
    year: '当代',
    theme: { zh: '流行文化', en: 'Popular culture' },
    title: { zh: '偶像舞蹈与女性粉丝再创作', en: 'Idol dance and women fans’ reinterpretation' },
    subtitle: { zh: '日本，东京', en: 'Tokyo, Japan' },
    body: {
      zh: '翻跳、二创和线下聚会让粉丝从观看者变成编排者，重新分配流行文化中的能动性。',
      en: 'Covers, remixes, and meetups turn fans from spectators into choreographers, redistributing agency inside popular culture.',
    },
    tags: { zh: ['粉丝文化', '二创', '流行身体'], en: ['Fan culture', 'Remix', 'Pop embodiment'] },
  },
  {
    id: 'cairo',
    coordinates: [31.2357, 30.0444],
    region: 'africa',
    continent: { zh: '非洲/西亚', en: 'Africa/West Asia' },
    color: '#06d6a0',
    year: '当代',
    theme: { zh: '舞台与规训', en: 'Stage and discipline' },
    title: { zh: '肚皮舞、职业女性与道德边界', en: 'Belly dance, working women, and moral boundaries' },
    subtitle: { zh: '埃及，开罗', en: 'Cairo, Egypt' },
    body: {
      zh: '表演行业中的女性身体同时面对市场、国家与道德凝视，舞台成为劳动、艺术和尊严的交叉点。',
      en: 'Women performers face market, state, and moral gazes at once, making the stage a crossing point of labor, art, and dignity.',
    },
    tags: { zh: ['劳动', '道德凝视', '表演经济'], en: ['Labor', 'Moral gaze', 'Performance economy'] },
  },
  {
    id: 'lagos',
    coordinates: [3.3792, 6.5244],
    region: 'africa',
    continent: { zh: '非洲', en: 'Africa' },
    color: '#ffb703',
    year: '当代',
    theme: { zh: '数字舞蹈传播', en: 'Digital dance circulation' },
    title: { zh: 'Afrobeats 舞步与女性创作者', en: 'Afrobeats steps and women creators' },
    subtitle: { zh: '尼日利亚，拉各斯', en: 'Lagos, Nigeria' },
    body: {
      zh: '短视频平台放大女性舞者与编舞者的影响力，也暴露她们在可见性、收益和署名上的不平等。',
      en: 'Short-video platforms amplify women dancers and choreographers while exposing unequal visibility, revenue, and credit.',
    },
    tags: { zh: ['数字平台', '署名权', '流行舞'], en: ['Digital platforms', 'Credit', 'Popular dance'] },
  },
  {
    id: 'rio',
    coordinates: [-43.1729, -22.9068],
    region: 'latin-america',
    continent: { zh: '拉丁美洲', en: 'Latin America' },
    color: '#fb5607',
    year: '持续实践',
    theme: { zh: '嘉年华身体政治', en: 'Carnival body politics' },
    title: { zh: '桑巴、嘉年华与女性身体权利', en: 'Samba, Carnival, and women’s bodily rights' },
    subtitle: { zh: '巴西，里约热内卢', en: 'Rio de Janeiro, Brazil' },
    body: {
      zh: '嘉年华的女性身体既被消费也能反击凝视，桑巴学校和街区组织成为身体权利的谈判场。',
      en: 'Carnival bodies are consumed and yet can answer the gaze, with samba schools and neighborhood groups negotiating bodily rights.',
    },
    tags: { zh: ['嘉年华', '身体权利', '街区组织'], en: ['Carnival', 'Bodily rights', 'Neighborhood groups'] },
  },
  {
    id: 'seattle',
    coordinates: [-122.3321, 47.6062],
    region: 'north-america',
    continent: { zh: '北美', en: 'North America' },
    color: '#3a86ff',
    year: '当代',
    theme: { zh: '酷儿与跨文化舞蹈', en: 'Queer and intercultural dance' },
    title: { zh: '社区舞台中的酷儿女性与跨文化实践', en: 'Queer women and intercultural practice on community stages' },
    subtitle: { zh: '美国，西雅图', en: 'Seattle, United States' },
    body: {
      zh: '社区艺术空间把移民、酷儿和女性经验连接起来，让舞蹈成为归属感与政治表达的共同容器。',
      en: 'Community arts spaces connect immigrant, queer, and women’s experience, making dance a vessel for belonging and political expression.',
    },
    tags: { zh: ['酷儿实践', '移民社区', '归属感'], en: ['Queer practice', 'Immigrant communities', 'Belonging'] },
  },
  {
    id: 'paris',
    coordinates: [2.3522, 48.8566],
    region: 'europe',
    continent: { zh: '欧洲', en: 'Europe' },
    color: '#8338ec',
    year: '当代',
    theme: { zh: '移民女性身体', en: 'Migrant women’s bodies' },
    title: { zh: '当代舞中的移民女性叙事', en: 'Migrant women’s narratives in contemporary dance' },
    subtitle: { zh: '法国，巴黎', en: 'Paris, France' },
    body: {
      zh: '舞台把迁徙、语言和身份断裂转化为动作结构，女性身体成为讲述城市多重历史的档案。',
      en: 'The stage turns migration, language, and fractured identity into movement structure, making women’s bodies archives of urban history.',
    },
    tags: { zh: ['迁徙', '身份', '当代舞'], en: ['Migration', 'Identity', 'Contemporary dance'] },
  },
]

const regionOrder = ['all', 'asia', 'africa', 'europe', 'latin-america', 'north-america', 'oceania']
const regionLabels = {
  all: { zh: '全部地区', en: 'All regions' },
  asia: { zh: '亚洲', en: 'Asia' },
  africa: { zh: '非洲', en: 'Africa' },
  europe: { zh: '欧洲', en: 'Europe' },
  'latin-america': { zh: '拉丁美洲', en: 'Latin America' },
  'north-america': { zh: '北美', en: 'North America' },
  oceania: { zh: '大洋洲', en: 'Oceania' },
}

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="app-shell">
    <canvas class="globe-canvas" aria-label="Global feminist dance globe"></canvas>
    <div class="marker-layer" aria-label="Map case markers"></div>

    <div class="left-column">
      <header class="hero-panel panel">
        <p class="eyebrow" data-copy="badge"></p>
        <h1 class="hero-title" data-copy="title"></h1>
        <p class="hero-intro" data-copy="intro"></p>
        <div class="summary-grid" aria-label="dataset summary"></div>
        <p class="hint" data-copy="hint"></p>
      </header>

      <aside class="story-list panel">
        <div class="story-list-head">
          <span class="story-list-label" data-copy="panelTitle"></span>
          <div class="region-filters"></div>
        </div>
        <div class="story-items"></div>
      </aside>
    </div>

    <section class="focus-card panel">
      <div class="focus-topbar">
        <div class="focus-heading">
          <p class="focus-label" data-copy="detailLabel"></p>
          <p class="map-status" aria-live="polite" data-copy="mapLoading"></p>
        </div>
        <div class="focus-language" aria-label="language switcher">
          <span class="language-label" data-copy="languageLabel"></span>
          <div class="language-switch">
            <button class="lang-button is-active" type="button" data-lang="zh"></button>
            <button class="lang-button" type="button" data-lang="en"></button>
          </div>
        </div>
      </div>
      <div class="focus-meta-row">
        <span class="focus-continent"></span>
        <span class="focus-year"></span>
      </div>
      <h2 class="focus-title"></h2>
      <p class="focus-theme"></p>
      <p class="focus-subtitle"></p>
      <p class="focus-body"></p>
      <div class="focus-tags"></div>
    </section>
  </main>
`

const canvas = app.querySelector('.globe-canvas')
const context = canvas.getContext('2d')
const summaryGrid = app.querySelector('.summary-grid')
const regionFilters = app.querySelector('.region-filters')
const storyItems = app.querySelector('.story-items')
const markerLayer = app.querySelector('.marker-layer')
const focusContinent = app.querySelector('.focus-continent')
const focusYear = app.querySelector('.focus-year')
const focusTitle = app.querySelector('.focus-title')
const focusTheme = app.querySelector('.focus-theme')
const focusSubtitle = app.querySelector('.focus-subtitle')
const focusBody = app.querySelector('.focus-body')
const focusTags = app.querySelector('.focus-tags')
const mapStatus = app.querySelector('.map-status')
const langButtons = Array.from(app.querySelectorAll('.lang-button'))

const state = {
  lang: 'zh',
  activeStoryId: stories[0].id,
  activeRegion: 'all',
  rotation: [18, -16, 0],
  dragging: false,
  mapReady: false,
  mapFailed: false,
}

let land = null
const sphere = { type: 'Sphere' }
const graticule = d3.geoGraticule10()
const projection = d3.geoOrthographic().precision(0.35)
const path = d3.geoPath(projection, context)
let previousDrag = null

function filteredStories() {
  return state.activeRegion === 'all' ? stories : stories.filter((story) => story.region === state.activeRegion)
}

function activeStory() {
  return stories.find((story) => story.id === state.activeStoryId) ?? filteredStories()[0] ?? stories[0]
}

function uniqueThemes() {
  return new Set(stories.map((story) => story.theme[state.lang])).size
}

function updateText() {
  const locale = copy[state.lang]
  app.querySelectorAll('[data-copy]').forEach((node) => {
    node.textContent = locale[node.dataset.copy]
  })

  mapStatus.textContent = state.mapFailed ? locale.mapFallback : state.mapReady ? '' : locale.mapLoading

  summaryGrid.innerHTML = [
    [stories.length, locale.cases],
    [new Set(stories.map((story) => story.region)).size, locale.regions],
    [uniqueThemes(), locale.themes],
  ]
    .map(([value, label]) => `<div class="summary-card"><strong>${value}</strong><span>${label}</span></div>`)
    .join('')

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.lang
    button.textContent = button.dataset.lang === 'zh' ? locale.chinese : locale.english
    button.classList.toggle('is-active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })

  renderRegionFilters()
  renderStoryList()
  renderFocusCard()
  updateMarkers()
}

function renderRegionFilters() {
  regionFilters.innerHTML = regionOrder
    .map((region) => {
      const isActive = region === state.activeRegion
      return `<button class="filter-button${isActive ? ' is-active' : ''}" type="button" data-region="${region}">${regionLabels[region][state.lang]}</button>`
    })
    .join('')

  regionFilters.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeRegion = button.dataset.region
      const nextStory = filteredStories()[0]
      if (nextStory && !filteredStories().some((story) => story.id === state.activeStoryId)) {
        state.activeStoryId = nextStory.id
        rotateToStory(nextStory)
      }
      updateText()
      render()
    })
  })
}

function renderStoryList() {
  storyItems.innerHTML = filteredStories()
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
      updateText()
    })
  })
}

function renderFocusCard() {
  const story = activeStory()
  focusContinent.textContent = story.continent[state.lang]
  focusYear.textContent = story.year
  focusTitle.textContent = story.title[state.lang]
  focusTheme.textContent = story.theme[state.lang]
  focusSubtitle.textContent = story.subtitle[state.lang]
  focusBody.textContent = story.body[state.lang]
  focusTags.innerHTML = story.tags[state.lang].map((tag) => `<span class="focus-tag">${tag}</span>`).join('')
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

  const scale = Math.min(width, height) * (width < 800 ? 0.36 : 0.39)
  projection.scale(scale).translate([width * (width < 800 ? 0.58 : 0.57), height * (width < 800 ? 0.38 : 0.52)]).rotate(state.rotation)
  render()
}

function globeCenter() {
  const [lambda, phi] = projection.rotate()
  return [-lambda, -phi]
}

function drawBackdrop(cx, cy, radius) {
  const gradient = context.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.7)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
  gradient.addColorStop(0.42, 'rgba(255, 216, 143, 0.32)')
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
  context.fillStyle = gradient
  context.beginPath()
  context.arc(cx, cy, radius * 1.7, 0, Math.PI * 2)
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
    context.strokeStyle = '#ffffff'
    context.lineWidth = isActive ? 3 : 2
    context.arc(x, y, isActive ? 8 : 5, 0, Math.PI * 2)
    context.fill()
    context.stroke()

    if (isActive) {
      context.beginPath()
      context.strokeStyle = story.color
      context.lineWidth = 2
      context.arc(x, y, 15, 0, Math.PI * 2)
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
  drawBackdrop(cx, cy, radius)

  context.beginPath()
  path(sphere)
  context.fillStyle = '#e9fbff'
  context.fill()

  context.beginPath()
  path(graticule)
  context.strokeStyle = 'rgba(34, 132, 169, 0.18)'
  context.lineWidth = 0.8
  context.stroke()

  if (land) {
    context.beginPath()
    path(land)
    context.fillStyle = '#b8f2d8'
    context.fill()

    context.beginPath()
    path(land)
    context.strokeStyle = 'rgba(43, 119, 101, 0.22)'
    context.lineWidth = 0.75
    context.stroke()
  }

  context.beginPath()
  path(sphere)
  context.strokeStyle = 'rgba(28, 110, 150, 0.38)'
  context.lineWidth = 1.4
  context.stroke()

  drawMarkers()
  updateMarkers()
}

function updateMarkers() {
  const visibleStories = filteredStories()
  markerLayer.innerHTML = visibleStories
    .map((story) => {
      const projected = visibleOnFront(story.coordinates) ? projection(story.coordinates) : null
      if (!projected) return ''
      const [x, y] = projected
      const isActive = story.id === state.activeStoryId
      return `<button class="map-marker${isActive ? ' is-active' : ''}" type="button" data-story-id="${story.id}" style="--story-color:${story.color}; left:${x}px; top:${y}px" aria-label="${story.title[state.lang]}"></button>`
    })
    .join('')

  markerLayer.querySelectorAll('.map-marker').forEach((button) => {
    button.addEventListener('click', () => {
      const story = stories.find((item) => item.id === button.dataset.storyId)
      if (!story) return
      state.activeStoryId = story.id
      rotateToStory(story)
      updateText()
    })
  })
}

function animateRotation(targetRotation) {
  const startRotation = projection.rotate()
  const interpolate = d3.interpolate(startRotation, targetRotation)
  const duration = 850
  const start = performance.now()

  function tick(now) {
    const t = Math.min(1, (now - start) / duration)
    state.rotation = interpolate(d3.easeCubicInOut(t))
    projection.rotate(state.rotation)
    render()
    if (t < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
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

canvas.addEventListener('pointerdown', () => canvas.classList.add('is-dragging'))
window.addEventListener('pointerup', () => canvas.classList.remove('is-dragging'))

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.lang = button.dataset.lang
    updateText()
  })
})

d3.timer(() => {
  if (state.dragging) return
  const [lambda, phi, gamma] = projection.rotate()
  state.rotation = [lambda + 0.02, phi, gamma]
  projection.rotate(state.rotation)
  render()
})

async function loadMapData() {
  try {
    const countriesTopology = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((response) => {
      if (!response.ok) throw new Error(`Map request failed: ${response.status}`)
      return response.json()
    })
    land = topojson.feature(countriesTopology, countriesTopology.objects.countries)
    state.mapReady = true
  } catch (error) {
    state.mapFailed = true
    console.warn(error)
  } finally {
    updateText()
    render()
  }
}

window.addEventListener('resize', resize)

updateText()
resize()
loadMapData()
