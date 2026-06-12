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
    shown: '当前显示',
    searchPlaceholder: '搜索案例、地点、主题',
    noResults: '没有匹配案例，试试更宽泛的关键词。',
    typeAll: '全部类型',
    sourceLabel: '来源状态',
    sourceLink: '查看来源',
    sourceNamed: '有明确组织、作品或机构线索，可继续补充更多一手材料。',
    sourcePattern: '综合型实践入口：适合引出问题，但后续应拆成更具体的样本。',
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
    shown: 'Showing',
    searchPlaceholder: 'Search case, place, theme',
    noResults: 'No matching cases. Try a broader keyword.',
    typeAll: 'All types',
    sourceLabel: 'Source status',
    sourceLink: 'View source',
    sourceNamed: 'Named organization, work, or institutional cue; more primary material can be added.',
    sourcePattern: 'Interpretive practice pattern: useful as a problem entry, but should later be split into specific samples.',
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

const storyTypeLabels = {
  concrete: { zh: '具体案例', en: 'Named case' },
  pattern: { zh: '实践类型', en: 'Practice pattern' },
}

const typeOrder = ['all', 'concrete', 'pattern']

const criticalLensLabels = {
  zh: {
    antiViolence: '可追问：当舞蹈成为抗议工具时，谁能被看见，谁仍被迫承担创伤叙事？',
    community: '可追问：社区舞蹈如何在赋权与机构化之间保持张力，而不被简化成“疗愈”标签？',
    decolonial: '可追问：去殖民身体知识如何避免被全球当代舞市场重新包装为异域风格？',
    gaze: '可追问：反凝视并不只是拒绝美感，也是在重写谁拥有观看和解释身体的权力。',
    indigenous: '可追问：土地、谱系和主权不是背景素材，而是这些实践的知识结构。',
    publicSpace: '可追问：公共空间中的身体可见性同时受到性别、阶级、宗教和国家权力的限制。',
    digital: '可追问：平台扩散带来可见性，也带来署名、收益和算法规训的新不平等。',
    labor: '可追问：表演中的女性身体既是艺术媒介，也是劳动、风险和收入结构的一部分。',
    popular: '可追问：流行舞和粉丝二创既可能打开能动性，也可能复制产业中的性别消费逻辑。',
    disability: '可追问：残障身体美学挑战的是“正常身体”的默认标准，而不只是扩大代表性。',
    migration: '可追问：迁徙叙事不能只被读成身份故事，也要读出边界、语言和制度压力。',
    ritual: '可追问：仪式舞蹈中的女性劳动常常不在舞台中心，却维系着动作的社会生命。',
    classic: '可追问：重构经典并不只是换故事背景，而是改变身体、阶级和欲望的叙事位置。',
  },
  en: {
    antiViolence: 'Ask: when dance becomes protest, who becomes visible, and who is still asked to carry trauma in public?',
    community: 'Ask: how can community dance hold tension between empowerment and institutional capture, instead of becoming a simple healing label?',
    decolonial: 'Ask: how can decolonial body knowledge avoid being repackaged by the global contemporary dance market as exotic style?',
    gaze: 'Ask: anti-gaze work is not only a refusal of beauty; it rewrites who gets to look at and interpret the body.',
    indigenous: 'Ask: land, genealogy, and sovereignty are not backdrops here; they are knowledge structures inside the practice.',
    publicSpace: 'Ask: bodily visibility in public space is shaped at once by gender, class, religion, and state power.',
    digital: 'Ask: platform circulation creates visibility, but also new inequalities in credit, revenue, and algorithmic discipline.',
    labor: 'Ask: women performers are not only artistic figures; they are workers inside structures of risk, income, and respectability.',
    popular: 'Ask: popular dance and fan remix can open agency while also reproducing gendered consumption in entertainment industries.',
    disability: 'Ask: disability aesthetics challenges the default idea of the normal body, not only the lack of representation.',
    migration: 'Ask: migration in dance is not only identity story; it also carries borders, language, and institutional pressure.',
    ritual: 'Ask: women\'s labor in ritual dance may sit outside the stage center while sustaining the social life of movement.',
    classic: 'Ask: reworking a classic is not just changing the setting; it shifts the narrative place of body, class, and desire.',
  },
}

const practicePatternIds = new Set([
  'yunnan',
  'istanbul',
  'delhi',
  'tokyo',
  'cairo',
  'lagos',
  'rio',
  'seattle',
  'paris',
  'fogo-sagrado',
  'tehran-dance-resistance',
  'zaouli-women',
  'aboriginal-dance-theatre',
])

const storyLensKeys = {
  santiago: 'antiViolence',
  brooklyn: 'community',
  toubab: 'decolonial',
  brussels: 'gaze',
  auckland: 'indigenous',
  yunnan: 'community',
  istanbul: 'publicSpace',
  delhi: 'publicSpace',
  tokyo: 'popular',
  cairo: 'labor',
  lagos: 'digital',
  rio: 'gaze',
  seattle: 'community',
  paris: 'migration',
  'one-billion-rising': 'antiViolence',
  'dancing-while-black': 'community',
  chandralekha: 'classic',
  nrityagram: 'community',
  'sins-invalid': 'disability',
  'dancing-earth': 'indigenous',
  'danza-organica': 'decolonial',
  'mujeres-creando': 'publicSpace',
  'fogo-sagrado': 'digital',
  'akram-khan-giselle': 'classic',
  'tehran-dance-resistance': 'publicSpace',
  'zaouli-women': 'ritual',
  'aboriginal-dance-theatre': 'indigenous',
}

const sourceLinks = {
  santiago: 'https://designmuseum.org/exhibitions/beazley-designs-of-the-year/digital/a-rapist-in-your-way-un-violador-en-tu-camino',
  brooklyn: 'https://urbanbushwomen.org/about-ubw',
  toubab: 'https://ecoledessables.org/en/',
  brussels: 'https://www.rosas.be/en/productions/378-rosas-danst-rosas',
  'one-billion-rising': 'https://www.onebillionrising.org/about/campaign/one-billion-rising/',
  'dancing-while-black': 'https://movementresearch.org/people/dancing-while-black/',
  chandralekha: 'https://www.sharjahart.org/en/sharjah-biennial/sb-16/people/details/chandralekha/',
  nrityagram: 'https://nrityagram.org/protima/',
  'sins-invalid': 'https://sinsinvalid.org/about-sins/',
  'dancing-earth': 'https://www.dancingearth.org/',
  'danza-organica': 'https://www.danzaorganica.org/the-company.php',
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
  {
    id: 'one-billion-rising',
    coordinates: [121.5654, 25.033],
    region: 'asia',
    continent: { zh: '亚洲/全球', en: 'Asia/Global' },
    color: '#e63946',
    year: '2012-',
    theme: { zh: '全球反暴力行动', en: 'Global anti-violence action' },
    title: { zh: 'One Billion Rising 的全球共舞', en: 'One Billion Rising as global dance action' },
    subtitle: { zh: '菲律宾、台湾与全球城市', en: 'Philippines, Taiwan, and global cities' },
    body: {
      zh: '每年以快闪、集体编舞和公共聚集回应性别暴力，把“起身跳舞”转化为跨城市的抗议语法。',
      en: 'Flash mobs, shared choreography, and public gatherings turn rising and dancing into a translocal protest grammar against gender violence.',
    },
    tags: { zh: ['快闪', '跨国行动', '反性别暴力'], en: ['Flash mob', 'Transnational action', 'Gender violence'] },
  },
  {
    id: 'dancing-while-black',
    coordinates: [-74.006, 40.7128],
    region: 'north-america',
    continent: { zh: '北美', en: 'North America' },
    color: '#111827',
    year: '2012-',
    theme: { zh: '黑人舞蹈自我定义', en: 'Black dance self-definition' },
    title: { zh: 'Dancing While Black', en: 'Dancing While Black' },
    subtitle: { zh: '美国，纽约', en: 'New York, United States' },
    body: {
      zh: 'Paloma McGregor 发起的平台支持黑人舞蹈艺术家发展作品、对话和档案，让身体语言由社群自身命名。',
      en: 'Paloma McGregor\'s platform supports Black dance artists through development, dialogue, and documentation, letting communities name their own movement languages.',
    },
    tags: { zh: ['黑人艺术家', '档案', '自我定义'], en: ['Black artists', 'Archive', 'Self-definition'] },
  },
  {
    id: 'chandralekha',
    coordinates: [80.2707, 13.0827],
    region: 'asia',
    continent: { zh: '亚洲', en: 'Asia' },
    color: '#9b5de5',
    year: '1980s-2000s',
    theme: { zh: '古典舞的女性主义重构', en: 'Feminist reworking of classical dance' },
    title: { zh: 'Chandralekha 的身体抵抗', en: 'Chandralekha and embodied resistance' },
    subtitle: { zh: '印度，钦奈', en: 'Chennai, India' },
    body: {
      zh: '她把 Bharatanatyam、瑜伽和武术重新组合，抵抗古典舞中被规训的女性身体和民族主义叙事。',
      en: 'Her work recombined Bharatanatyam, yoga, and martial forms to resist disciplined femininity and nationalist scripts in classical dance.',
    },
    tags: { zh: ['古典舞重构', '身体抵抗', '印度现代舞'], en: ['Classical reworking', 'Body resistance', 'Indian modern dance'] },
  },
  {
    id: 'nrityagram',
    coordinates: [77.5946, 12.9716],
    region: 'asia',
    continent: { zh: '亚洲', en: 'Asia' },
    color: '#f77f00',
    year: '1990-',
    theme: { zh: '女性主导的舞蹈共同体', en: 'Women-led dance community' },
    title: { zh: 'Nrityagram 舞蹈村', en: 'Nrityagram Dance Village' },
    subtitle: { zh: '印度，班加罗尔近郊', en: 'Near Bengaluru, India' },
    body: {
      zh: 'Protima Gauri 创立的舞蹈村把训练、生活和表演放在同一处空间，让女性主导的传承成为日常制度。',
      en: 'Founded by Protima Gauri, the dance village joins training, living, and performance, turning women-led transmission into an everyday institution.',
    },
    tags: { zh: ['Odissi', '共同体', '传承'], en: ['Odissi', 'Community', 'Transmission'] },
  },
  {
    id: 'sins-invalid',
    coordinates: [-122.4194, 37.7749],
    region: 'north-america',
    continent: { zh: '北美', en: 'North America' },
    color: '#06aed5',
    year: '2006-',
    theme: { zh: '残障正义与身体美学', en: 'Disability justice and body aesthetics' },
    title: { zh: 'Sins Invalid 的残障身体表演', en: 'Sins Invalid and disabled embodiment' },
    subtitle: { zh: '美国，旧金山湾区', en: 'San Francisco Bay Area, United States' },
    body: {
      zh: '以残障、酷儿、有色人种经验为中心的表演项目，把美、欲望和行动能力从健全主义框架中夺回。',
      en: 'This performance project centers disabled, queer, and BIPOC experience, reclaiming beauty, desire, and agency from ableist frames.',
    },
    tags: { zh: ['残障正义', '酷儿身体', '表演'], en: ['Disability justice', 'Queer embodiment', 'Performance'] },
  },
  {
    id: 'dancing-earth',
    coordinates: [-105.9378, 35.687],
    region: 'north-america',
    continent: { zh: '北美', en: 'North America' },
    color: '#2a9d8f',
    year: '2004-',
    theme: { zh: '原住民生态舞蹈', en: 'Indigenous ecological dance' },
    title: { zh: 'Dancing Earth Indigenous Contemporary Dance Creations', en: 'Dancing Earth Indigenous Contemporary Dance Creations' },
    subtitle: { zh: '美国，新墨西哥州圣菲', en: 'Santa Fe, United States' },
    body: {
      zh: 'Rulan Tangen 创立的舞团把原住民生态知识、仪式和当代舞连接起来，强调土地关系与身体韧性。',
      en: 'Founded by Rulan Tangen, the company connects Indigenous ecological knowledge, ceremony, and contemporary dance around land relations and embodied resilience.',
    },
    tags: { zh: ['原住民', '生态知识', '当代舞'], en: ['Indigenous', 'Ecological knowledge', 'Contemporary dance'] },
  },
  {
    id: 'danza-organica',
    coordinates: [-71.0589, 42.3601],
    region: 'north-america',
    continent: { zh: '北美/加勒比', en: 'North America/Caribbean' },
    color: '#118ab2',
    year: '2007-',
    theme: { zh: '去殖民与社会正义舞蹈', en: 'Decolonial and social justice dance' },
    title: { zh: 'Danza Organica', en: 'Danza Organica' },
    subtitle: { zh: '美国波士顿与波多黎各', en: 'Boston and Puerto Rico' },
    body: {
      zh: 'Mar Parrilla 的舞蹈剧场实践连接波多黎各、离散经验和社会正义，把编舞变成集体疗愈与组织方法。',
      en: 'Mar Parrilla\'s dance theater links Puerto Rico, diaspora, and social justice, making choreography a method of collective healing and organizing.',
    },
    tags: { zh: ['去殖民', '离散', '社会正义'], en: ['Decolonial', 'Diaspora', 'Social justice'] },
  },
  {
    id: 'mujeres-creando',
    coordinates: [-68.1193, -16.4897],
    region: 'latin-america',
    continent: { zh: '拉丁美洲', en: 'Latin America' },
    color: '#d00000',
    year: '1992-',
    theme: { zh: '街头表演与女性主义行动', en: 'Street performance and feminist action' },
    title: { zh: 'Mujeres Creando 的街头行动', en: 'Mujeres Creando street actions' },
    subtitle: { zh: '玻利维亚，拉巴斯', en: 'La Paz, Bolivia' },
    body: {
      zh: '这个无政府女性主义集体用涂鸦、街头剧场和身体介入挑战父权、贫困与殖民性权力结构。',
      en: 'The anarcho-feminist collective uses graffiti, street theater, and embodied intervention against patriarchy, poverty, and colonial power.',
    },
    tags: { zh: ['街头剧场', '无政府女性主义', '城市介入'], en: ['Street theater', 'Anarcha-feminism', 'Urban intervention'] },
  },
  {
    id: 'fogo-sagrado',
    coordinates: [-46.6333, -23.5505],
    region: 'latin-america',
    continent: { zh: '拉丁美洲', en: 'Latin America' },
    color: '#ff006e',
    year: '当代',
    theme: { zh: '女性街舞与城市归属', en: 'Women in street dance and urban belonging' },
    title: { zh: '巴西女性街舞圈的城市占位', en: 'Brazilian women in street dance spaces' },
    subtitle: { zh: '巴西，圣保罗', en: 'Sao Paulo, Brazil' },
    body: {
      zh: '在 breaking、passinho 与 funk 舞蹈场景中，女性通过 battle、教学和影像传播争取署名、空间和安全。',
      en: 'Across breaking, passinho, and funk scenes, women use battles, teaching, and video circulation to claim credit, space, and safety.',
    },
    tags: { zh: ['街舞', '署名权', '城市青年文化'], en: ['Street dance', 'Credit', 'Urban youth culture'] },
  },
  {
    id: 'akram-khan-giselle',
    coordinates: [-0.1276, 51.5072],
    region: 'europe',
    continent: { zh: '欧洲', en: 'Europe' },
    color: '#7209b7',
    year: '2016',
    theme: { zh: '经典芭蕾的阶级与性别重读', en: 'Class and gender rereading of ballet' },
    title: { zh: 'English National Ballet 的 Giselle 重构', en: 'English National Ballet\'s reworked Giselle' },
    subtitle: { zh: '英国，伦敦', en: 'London, United Kingdom' },
    body: {
      zh: 'Tamara Rojo 任艺术总监时期委约的版本把女工、边界和剥削置入经典故事，改变了芭蕾中的女性受害叙事。',
      en: 'Commissioned under Tamara Rojo, this version places women workers, borders, and exploitation inside the classic story, shifting ballet\'s victimhood script.',
    },
    tags: { zh: ['芭蕾重构', '女工', '阶级'], en: ['Ballet reworking', 'Women workers', 'Class'] },
  },
  {
    id: 'tehran-dance-resistance',
    coordinates: [51.389, 35.6892],
    region: 'asia',
    continent: { zh: '亚洲/西亚', en: 'Asia/West Asia' },
    color: '#f72585',
    year: '2020s',
    theme: { zh: '禁令下的身体可见性', en: 'Bodily visibility under restriction' },
    title: { zh: '伊朗女性的数字舞蹈抵抗', en: 'Iranian women and digital dance resistance' },
    subtitle: { zh: '伊朗，德黑兰', en: 'Tehran, Iran' },
    body: {
      zh: '在街头、屋顶与社交媒体之间，短舞蹈片段把被限制的女性身体转化为可传播的公共声明。',
      en: 'Between streets, rooftops, and social media, short dance videos turn restricted women\'s bodies into circulating public statements.',
    },
    tags: { zh: ['数字抵抗', '身体可见性', '公共声明'], en: ['Digital resistance', 'Bodily visibility', 'Public statement'] },
  },
  {
    id: 'zaouli-women',
    coordinates: [-5.5471, 7.54],
    region: 'africa',
    continent: { zh: '非洲', en: 'Africa' },
    color: '#fb8500',
    year: '持续实践',
    theme: { zh: '仪式舞蹈中的女性劳动', en: 'Women\'s labor in ritual dance' },
    title: { zh: '西非仪式舞蹈中的女性组织角色', en: 'Women\'s organizing roles in West African ritual dance' },
    subtitle: { zh: '科特迪瓦与西非社群', en: 'Cote d\'Ivoire and West African communities' },
    body: {
      zh: '即使某些面具舞由男性表演，女性在歌唱、节奏、服饰和仪式组织中仍维系着舞蹈的社会生命。',
      en: 'Even where some masked dances are performed by men, women sustain the dance\'s social life through song, rhythm, dress, and ritual organization.',
    },
    tags: { zh: ['仪式', '女性劳动', '社群记忆'], en: ['Ritual', 'Women\'s labor', 'Community memory'] },
  },
  {
    id: 'aboriginal-dance-theatre',
    coordinates: [151.2093, -33.8688],
    region: 'oceania',
    continent: { zh: '大洋洲', en: 'Oceania' },
    color: '#0081a7',
    year: '1970s-',
    theme: { zh: '原住民舞蹈训练与主权', en: 'Indigenous dance training and sovereignty' },
    title: { zh: '澳大利亚原住民女性舞者与舞蹈训练', en: 'Aboriginal women dancers and dance training in Australia' },
    subtitle: { zh: '澳大利亚，悉尼', en: 'Sydney, Australia' },
    body: {
      zh: '从社区训练到当代舞台，原住民女性舞者把身体、土地和主权叙事带入国家文化机构。',
      en: 'From community training to contemporary stages, Aboriginal women dancers bring body, Country, and sovereignty into national cultural institutions.',
    },
    tags: { zh: ['原住民主权', '训练', '土地关系'], en: ['Indigenous sovereignty', 'Training', 'Country'] },
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
          <label class="search-field">
            <span class="search-icon" aria-hidden="true"></span>
            <input class="story-search" type="search" autocomplete="off" />
          </label>
          <div class="type-filters"></div>
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
      <p class="focus-critical"></p>
      <div class="focus-source"></div>
      <div class="focus-tags"></div>
    </section>
  </main>
`

const canvas = app.querySelector('.globe-canvas')
const context = canvas.getContext('2d')
const summaryGrid = app.querySelector('.summary-grid')
const regionFilters = app.querySelector('.region-filters')
const typeFilters = app.querySelector('.type-filters')
const storyItems = app.querySelector('.story-items')
const storySearch = app.querySelector('.story-search')
const markerLayer = app.querySelector('.marker-layer')
const focusContinent = app.querySelector('.focus-continent')
const focusYear = app.querySelector('.focus-year')
const focusTitle = app.querySelector('.focus-title')
const focusTheme = app.querySelector('.focus-theme')
const focusSubtitle = app.querySelector('.focus-subtitle')
const focusBody = app.querySelector('.focus-body')
const focusTags = app.querySelector('.focus-tags')
const focusCritical = app.querySelector('.focus-critical')
const focusSource = app.querySelector('.focus-source')
const mapStatus = app.querySelector('.map-status')
const langButtons = Array.from(app.querySelectorAll('.lang-button'))

const state = {
  lang: 'zh',
  activeStoryId: stories[0].id,
  activeRegion: 'all',
  activeType: 'all',
  query: '',
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
  return stories.filter((story) => {
    const matchesRegion = state.activeRegion === 'all' || story.region === state.activeRegion
    const matchesType = state.activeType === 'all' || storyKind(story) === state.activeType
    const matchesQuery = !state.query || searchableText(story).includes(state.query.toLowerCase())
    return matchesRegion && matchesType && matchesQuery
  })
}

function activeStory() {
  return stories.find((story) => story.id === state.activeStoryId) ?? filteredStories()[0] ?? stories[0]
}

function uniqueThemes() {
  return new Set(stories.map((story) => story.theme[state.lang])).size
}

function storyKind(story) {
  return practicePatternIds.has(story.id) ? 'pattern' : 'concrete'
}

function criticalLens(story) {
  return criticalLensLabels[state.lang][storyLensKeys[story.id] ?? 'publicSpace']
}

function regionCount(region) {
  return stories.filter((story) => {
    const matchesRegion = region === 'all' || story.region === region
    const matchesType = state.activeType === 'all' || storyKind(story) === state.activeType
    const matchesQuery = !state.query || searchableText(story).includes(state.query.toLowerCase())
    return matchesRegion && matchesType && matchesQuery
  }).length
}

function typeCount(type) {
  return stories.filter((story) => {
    const matchesRegion = state.activeRegion === 'all' || story.region === state.activeRegion
    const matchesType = type === 'all' || storyKind(story) === type
    const matchesQuery = !state.query || searchableText(story).includes(state.query.toLowerCase())
    return matchesRegion && matchesType && matchesQuery
  }).length
}

function searchableText(story) {
  return [
    story.year,
    story.region,
    story.continent.zh,
    story.continent.en,
    story.theme.zh,
    story.theme.en,
    story.title.zh,
    story.title.en,
    story.subtitle.zh,
    story.subtitle.en,
    story.body.zh,
    story.body.en,
    ...story.tags.zh,
    ...story.tags.en,
  ]
    .join(' ')
    .toLowerCase()
}

function ensureActiveStoryVisible() {
  const visibleStories = filteredStories()
  if (visibleStories.length && !visibleStories.some((story) => story.id === state.activeStoryId)) {
    state.activeStoryId = visibleStories[0].id
    rotateToStory(visibleStories[0])
  }
}

function renderControls() {
  const locale = copy[state.lang]
  storySearch.placeholder = locale.searchPlaceholder
  storySearch.value = state.query

  typeFilters.innerHTML = typeOrder
    .map((type) => {
      const label = type === 'all' ? locale.typeAll : storyTypeLabels[type][state.lang]
      const isActive = type === state.activeType
      return `
        <button class="type-button${isActive ? ' is-active' : ''}" type="button" data-type="${type}">
          <span>${label}</span>
          <strong>${typeCount(type)}</strong>
        </button>
      `
    })
    .join('')

  typeFilters.querySelectorAll('.type-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeType = button.dataset.type
      ensureActiveStoryVisible()
      updateText()
      render()
    })
  })
}

function updateText() {
  const locale = copy[state.lang]
  app.querySelectorAll('[data-copy]').forEach((node) => {
    node.textContent = locale[node.dataset.copy]
  })

  mapStatus.textContent = state.mapFailed ? locale.mapFallback : state.mapReady ? '' : locale.mapLoading

  renderControls()

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
      return `
        <button class="filter-button${isActive ? ' is-active' : ''}" type="button" data-region="${region}">
          <span>${regionLabels[region][state.lang]}</span>
          <strong>${regionCount(region)}</strong>
        </button>
      `
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
  const locale = copy[state.lang]
  const visibleStories = filteredStories()
  storyItems.innerHTML = visibleStories
    .map((story) => {
      const isActive = story.id === state.activeStoryId
      const typeLabel = storyTypeLabels[storyKind(story)][state.lang]
      return `
        <button class="story-item${isActive ? ' is-active' : ''}" type="button" data-story-id="${story.id}">
          <span class="story-dot" style="--story-color:${story.color}"></span>
          <span class="story-copy">
            <strong>${story.title[state.lang]}</strong>
            <span>${story.subtitle[state.lang]}</span>
            <span class="story-meta">
              <span>${story.year}</span>
              <span>${story.theme[state.lang]}</span>
              <span>${typeLabel}</span>
            </span>
          </span>
          <span class="story-region">${story.continent[state.lang]}</span>
        </button>
      `
    })
    .join('')

  storyItems.insertAdjacentHTML(
    'afterbegin',
    `<div class="story-count">${locale.shown} <strong>${visibleStories.length}</strong> / ${stories.length}</div>`,
  )

  if (!visibleStories.length) {
    storyItems.insertAdjacentHTML('beforeend', `<div class="empty-state">${locale.noResults}</div>`)
  }

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
  const typeLabel = storyTypeLabels[storyKind(story)][state.lang]
  const sourceUrl = sourceLinks[story.id]
  const sourceText = storyKind(story) === 'pattern' ? copy[state.lang].sourcePattern : copy[state.lang].sourceNamed
  focusContinent.textContent = story.continent[state.lang]
  focusYear.textContent = story.year
  focusTitle.textContent = story.title[state.lang]
  focusTheme.innerHTML = `<span>${story.theme[state.lang]}</span><span>${typeLabel}</span>`
  focusSubtitle.textContent = story.subtitle[state.lang]
  focusBody.textContent = story.body[state.lang]
  focusCritical.textContent = criticalLens(story)
  focusSource.innerHTML = `
    <span>${copy[state.lang].sourceLabel}</span>
    <p>${sourceText}</p>
    ${sourceUrl ? `<a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">${copy[state.lang].sourceLink}</a>` : ''}
  `
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

storySearch.addEventListener('input', () => {
  state.query = storySearch.value.trim().toLowerCase()
  ensureActiveStoryVisible()
  updateText()
  render()
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
