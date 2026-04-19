const stockAsset = (name: string) => `${import.meta.env.BASE_URL}stock/${name}`

type SlideVisual = {
  src: string
  alt: string
  label: string
  title: string
  position: string
  scale: number
  filter: string
}

export type PresentationSlide = {
  id: string
  eyebrow: string
  title: string
  summary: string
  bullets: string[]
  primaryPanelLabel: string
  primaryPanelText: string
  deliverable?: string
  accentWord: string
  visual: SlideVisual
}

const baseVisualFilter = 'saturate(0.82) contrast(0.95) brightness(0.88)'

function createVisual(
  src: string,
  alt: string,
  label: string,
  title: string,
  position: string,
  scale: number,
  filter = baseVisualFilter,
): SlideVisual {
  return { src, alt, label, title, position, scale, filter }
}

const imageSources = {
  growthPath: stockAsset('dedicated/growth-path.jpg'),
  clientGoals: stockAsset('dedicated/client-goals.jpg'),
  milestone1: stockAsset('dedicated/milestone-1.jpg'),
  receive1: stockAsset('dedicated/receive-1.jpg'),
  milestone2: stockAsset('dedicated/milestone-2.jpg'),
  receive2: stockAsset('dedicated/receive-2.jpg'),
  milestone3: stockAsset('dedicated/milestone-3.jpg'),
  receive3: stockAsset('dedicated/receive-3.jpg'),
  milestone4: stockAsset('dedicated/milestone-4.jpg'),
  receive4: stockAsset('dedicated/receive-4.jpg'),
  milestone5: stockAsset('dedicated/milestone-5.jpg'),
  timeline: stockAsset('dedicated/timeline.jpg'),
  fullStack: stockAsset('dedicated/full-stack.jpg'),
  growthLogic: stockAsset('dedicated/growth-logic.jpg'),
  commercialSense: stockAsset('dedicated/commercial-sense.jpg'),
  nextStep: stockAsset('dedicated/next-step.jpg'),
}

const visuals = {
  growthPath: createVisual(
    imageSources.growthPath,
    'Abstract monochrome motion blur suggesting acceleration',
    'Growth frame',
    'Visibility becomes momentum',
    '50% 52%',
    1.14,
    'grayscale(0.05) saturate(0.72) contrast(1.02) brightness(0.82)',
  ),
  clientGoals: createVisual(
    imageSources.clientGoals,
    'Aerial city skyline at dusk with dense lights',
    'Demand frame',
    'Real buyers already exist in the market',
    '58% 42%',
    1.08,
    'saturate(0.78) contrast(0.96) brightness(0.9)',
  ),
  milestone1: createVisual(
    imageSources.milestone1,
    'Person writing notes beside a laptop',
    'Research frame',
    'Evidence replaces assumption',
    '62% 40%',
    1.09,
    'saturate(0.74) contrast(0.98) brightness(0.86)',
  ),
  receive1: createVisual(
    imageSources.receive1,
    'Close crop of planning notes beside a laptop',
    'Report frame',
    'Findings turned into clarity',
    '48% 64%',
    1.22,
    'grayscale(0.1) saturate(0.7) contrast(1.04) brightness(0.83)',
  ),
  milestone2: createVisual(
    imageSources.milestone2,
    'City skyline seen from above at dusk',
    'Location frame',
    'Markets, density, and reach',
    '54% 54%',
    1.12,
    'saturate(0.82) contrast(0.98) brightness(0.88)',
  ),
  receive2: createVisual(
    imageSources.receive2,
    'Closer crop of a city skyline and street grid',
    'Priority frame',
    'The strongest places stand out first',
    '72% 36%',
    1.26,
    'grayscale(0.08) saturate(0.75) contrast(1.03) brightness(0.85)',
  ),
  milestone3: createVisual(
    imageSources.milestone3,
    'Minimal workspace with laptop and notebook',
    'Strategy frame',
    'Loose ideas become a page system',
    '62% 44%',
    1.08,
    'saturate(0.78) contrast(0.97) brightness(0.87)',
  ),
  receive3: createVisual(
    imageSources.receive3,
    'Minimal desk surface with warm directional light',
    'Blueprint frame',
    'A practical structure to build from',
    '34% 48%',
    1.16,
    'grayscale(0.06) saturate(0.7) contrast(1.02) brightness(0.84)',
  ),
  milestone4: createVisual(
    imageSources.milestone4,
    'Planning notes and laptop arranged on a desk',
    'Briefing frame',
    'Intent and messaging become page direction',
    '42% 34%',
    1.14,
    'saturate(0.76) contrast(1) brightness(0.88)',
  ),
  receive4: createVisual(
    imageSources.receive4,
    'Editorial crop of a clipboard and planning material',
    'Content frame',
    'The page no longer starts from zero',
    '74% 62%',
    1.24,
    'grayscale(0.12) saturate(0.68) contrast(1.05) brightness(0.84)',
  ),
  milestone5: createVisual(
    imageSources.milestone5,
    'Dark motion blur with directional streaking',
    'Launch frame',
    'Traction starts where return is strongest',
    '44% 56%',
    1.18,
    'grayscale(0.02) saturate(0.76) contrast(1.06) brightness(0.8)',
  ),
  timeline: createVisual(
    imageSources.timeline,
    'Calm workspace surface with laptop and warm side light',
    'Timing frame',
    'Clear stages make progress legible',
    '52% 66%',
    1.18,
    'grayscale(0.08) saturate(0.72) contrast(1.02) brightness(0.84)',
  ),
  fullStack: createVisual(
    imageSources.fullStack,
    'Minimal workstation with layered materials',
    'Asset frame',
    'The output becomes a reusable stack of assets',
    '70% 28%',
    1.24,
    'saturate(0.74) contrast(0.98) brightness(0.86)',
  ),
  growthLogic: createVisual(
    imageSources.growthLogic,
    'Abstract motion trail with soft editorial blur',
    'Impact frame',
    'Better decisions compound into growth',
    '58% 46%',
    1.1,
    'grayscale(0.03) saturate(0.74) contrast(1.04) brightness(0.82)',
  ),
  commercialSense: createVisual(
    imageSources.commercialSense,
    'Moody city grid at dusk with deep contrast',
    'Focus frame',
    'Priority creates commercial efficiency',
    '40% 34%',
    1.2,
    'grayscale(0.04) saturate(0.78) contrast(1.04) brightness(0.84)',
  ),
  nextStep: createVisual(
    imageSources.nextStep,
    'Quiet desktop setup prepared for execution',
    'Next-step frame',
    'Start with the strategy that can actually launch',
    '48% 54%',
    1.12,
    'saturate(0.8) contrast(0.98) brightness(0.88)',
  ),
}

export const slides: PresentationSlide[] = [
  {
    id: 'growth-path',
    eyebrow: 'Overview',
    title: 'How an SEO project turns into business growth',
    summary:
      'A clear SEO project should move from market opportunity to strategy, then to live visibility and qualified enquiries.',
    bullets: [
      'Identify the strongest search opportunities',
      'Build the right page strategy around them',
      'Launch the highest-value SEO assets first',
      'Turn visibility into enquiries over time',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'This gives the lead an immediate answer to the only question that matters: how the work becomes commercial opportunity.',
    accentWord: 'Growth',
    visual: visuals.growthPath,
  },
  {
    id: 'client-goals',
    eyebrow: 'Outcome',
    title: 'What clients actually want from SEO',
    summary:
      'Leads do not buy SEO jargon. They buy stronger visibility, better local presence, and more qualified demand.',
    bullets: [
      'Better visibility for the right services',
      'More qualified traffic instead of random traffic',
      'Stronger presence in the right locations',
      'More enquiries from people already searching',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'The project stays focused on what a buyer can understand fast: visibility, relevance, and enquiries.',
    accentWord: 'Demand',
    visual: visuals.clientGoals,
  },
  {
    id: 'milestone-1',
    eyebrow: 'Milestone 1',
    title: 'In-depth analysis of SEO opportunities',
    summary:
      'We examine your services against real search demand so the strategy starts from opportunity, not assumption.',
    bullets: [
      'Analyse SEO opportunities across your key services',
      'Study what people actually search for',
      'Compare strong search terms against weak ones',
      'Identify where the best demand sits',
    ],
    primaryPanelLabel: 'Why this matters',
    primaryPanelText:
      'This replaces guessing with evidence, so the business knows where growth is most likely to come from.',
    deliverable: 'SEO Opportunity Analysis Report',
    accentWord: 'Analysis',
    visual: visuals.milestone1,
  },
  {
    id: 'receive-1',
    eyebrow: 'Deliverables',
    title: 'What you receive after milestone 1',
    summary:
      'The first stage gives the client a clear view of where the strongest SEO potential really is.',
    bullets: [
      'In-depth analysis of SEO opportunities across key services',
      'Identification of top key search terms',
      'Search intent analysis',
      'Early competitor and market view',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'This helps the client stop wasting time on low-value assumptions and focus on what is genuinely worth pursuing.',
    accentWord: 'Clarity',
    visual: visuals.receive1,
  },
  {
    id: 'milestone-2',
    eyebrow: 'Milestone 2',
    title: 'Location opportunity analysis',
    summary:
      'We identify which cities, areas, or local zones offer the strongest growth potential for the business.',
    bullets: [
      'Analyse the cities with the strongest opportunity',
      'Review neighborhoods or sub-areas where relevant',
      'Separate strong local opportunities from weak ones',
      'Map where local demand is worth targeting',
    ],
    primaryPanelLabel: 'Why this matters',
    primaryPanelText:
      'The client gets a smarter path to local visibility instead of trying to chase every location equally.',
    deliverable: 'Location Opportunity and Priority Map',
    accentWord: 'Local',
    visual: visuals.milestone2,
  },
  {
    id: 'receive-2',
    eyebrow: 'Deliverables',
    title: 'What you receive after milestone 2',
    summary:
      'By this stage, the client has a ranked local market view rather than a vague sense of where to start.',
    bullets: [
      'Analysis of cities with the most opportunity',
      'Neighborhood or area-level opportunity review where useful',
      'Ranked location priority list',
      'Clear view of where to start first',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'The rollout becomes more efficient because attention goes first to the locations most likely to generate leads.',
    accentWord: 'Priority',
    visual: visuals.receive2,
  },
  {
    id: 'milestone-3',
    eyebrow: 'Milestone 3',
    title: 'Full SEO page strategy',
    summary:
      'Search-term analysis and geo analysis are brought together into one clear page strategy for growth.',
    bullets: [
      'Combine key search terms with geo analysis',
      'Define which service pages need to exist',
      'Shape the page structure around growth potential',
      'Build the full SEO page strategy',
    ],
    primaryPanelLabel: 'Why this matters',
    primaryPanelText:
      'This is where SEO stops being a loose set of ideas and becomes a focused commercial plan.',
    deliverable: 'Full SEO Page Strategy Document',
    accentWord: 'Strategy',
    visual: visuals.milestone3,
  },
  {
    id: 'receive-3',
    eyebrow: 'Deliverables',
    title: 'What you receive after milestone 3',
    summary:
      'The business now has a practical blueprint for what gets built, in what order, and why.',
    bullets: [
      'Full SEO page strategy combining key search terms and geo analysis',
      'Priority service-page plan',
      'Local opportunity page plan',
      'Clear SEO roadmap for implementation',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'This creates speed and alignment because every next step is tied back to visibility and growth.',
    accentWord: 'Blueprint',
    visual: visuals.receive3,
  },
  {
    id: 'milestone-4',
    eyebrow: 'Milestone 4',
    title: 'Content planning and page briefing',
    summary:
      'The strategy becomes clear page-level direction so visibility can turn into trust and enquiries.',
    bullets: [
      'Define what each key page needs to say',
      'Map the main sections and message flow',
      'Align content with search intent and conversion intent',
      'Make sure each page supports trust and enquiries',
    ],
    primaryPanelLabel: 'Why this matters',
    primaryPanelText:
      'Getting found is only part of the job. The page also has to make sense, build trust, and convert.',
    deliverable: 'SEO Page Brief Pack',
    accentWord: 'Messaging',
    visual: visuals.milestone4,
  },
  {
    id: 'receive-4',
    eyebrow: 'Deliverables',
    title: 'What you receive after milestone 4',
    summary:
      'The client receives clear page direction that is faster to produce and easier to launch.',
    bullets: [
      'SEO page briefs',
      'Content structure for key pages',
      'Headlines and section logic',
      'Clear messaging direction for each major opportunity page',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'This improves consistency and reduces friction because the most important pages no longer start from a blank page.',
    accentWord: 'Content',
    visual: visuals.receive4,
  },
  {
    id: 'milestone-5',
    eyebrow: 'Milestone 5',
    title: 'Launch of priority SEO assets',
    summary:
      'The strongest opportunities go live first so the business can build traction in the right places sooner.',
    bullets: [
      'Launch the highest-value SEO assets first',
      'Focus on the services and locations with the strongest early return',
      'Connect the key pages into a clear structure',
      'Prepare the project for long-term growth',
    ],
    primaryPanelLabel: 'Why this matters',
    primaryPanelText:
      'The client sees early momentum where the return is most likely to be strongest, instead of waiting for everything.',
    deliverable: 'Priority Launch Package',
    accentWord: 'Launch',
    visual: visuals.milestone5,
  },
  {
    id: 'timeline',
    eyebrow: 'Timeline',
    title: 'What the timeline usually looks like',
    summary:
      'Value is created in stages. Every milestone leaves the client with a useful strategic asset, not just ongoing activity.',
    bullets: [
      'Week 1: service and market opportunity analysis',
      'Week 2: key search term and location analysis',
      'Week 3: full SEO page strategy',
      'Weeks 3 to 4: page briefs and content planning',
      'Weeks 4 to 6: launch of the first high-priority SEO assets',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'The lead can see exactly when clarity, structure, and launch-ready direction are created across the project.',
    accentWord: 'Timing',
    visual: visuals.timeline,
  },
  {
    id: 'full-stack',
    eyebrow: 'Project view',
    title: 'What you receive across the whole project',
    summary:
      'The project leaves behind a stack of strategic assets the business can use far beyond the initial launch.',
    bullets: [
      'SEO Opportunity Analysis Report',
      'Location Opportunity and Priority Map',
      'Full SEO Page Strategy Document',
      'SEO Page Brief Pack',
      'Priority Launch Package',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'This turns the project into a long-term business asset rather than a short-term burst of SEO activity.',
    accentWord: 'Assets',
    visual: visuals.fullStack,
  },
  {
    id: 'growth-logic',
    eyebrow: 'Business logic',
    title: 'How this creates business growth',
    summary:
      'Better analysis drives better decisions, and better decisions create stronger visibility, better traffic, and more enquiries.',
    bullets: [
      'Better visibility for the most valuable services',
      'Stronger presence in the right locations',
      'More relevant traffic from people already searching',
      'More chances to generate qualified enquiries',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'Every deliverable reduces guesswork and increases the odds that the work turns into real commercial opportunity.',
    accentWord: 'Impact',
    visual: visuals.growthLogic,
  },
  {
    id: 'commercial-sense',
    eyebrow: 'Why it works',
    title: 'Why this process makes commercial sense',
    summary:
      'The strongest opportunities are prioritized first, weak effort is reduced, and the whole project becomes easier to understand and measure.',
    bullets: [
      'Focus on the highest-value opportunities first',
      'Reduce wasted effort on weak terms and weak locations',
      'Make the project easier to understand and easier to measure',
      'Turn SEO into a clear growth system',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'If a step does not help the client make better growth decisions, it does not belong in the process.',
    accentWord: 'Focus',
    visual: visuals.commercialSense,
  },
  {
    id: 'next-step',
    eyebrow: 'Next step',
    title: 'Start with the opportunity analysis and page strategy',
    summary:
      'The first move is not to do everything at once. It is to build the strategy on something real.',
    bullets: [
      'Start with the SEO opportunity analysis',
      'Define the strongest search terms',
      'Map the best locations',
      'Build the full page strategy',
    ],
    primaryPanelLabel: 'Business value',
    primaryPanelText:
      'This gives the lead a clean, sensible first step and makes the engagement feel grounded from the start.',
    accentWord: 'Action',
    visual: visuals.nextStep,
  },
]
