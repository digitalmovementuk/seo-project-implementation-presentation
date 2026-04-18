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
  },
]
