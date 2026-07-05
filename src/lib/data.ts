// 差し替え用データ層
// 画像・動画・リンクは値を追加/変更するだけで反映されます。
// src が未設定(空文字 or undefined)の場合は自動的にプレースホルダー表示になります。

export type Bilingual = {
  ja: string;
  en: string;
};

export type ProjectStatus = "live" | "in-progress" | "completed";

export type ProjectLink = {
  href: string;
  label: Bilingual;
};

export type Project = {
  id: string;
  title: string;
  subtitle: Bilingual;
  period: string;
  status: ProjectStatus;
  /** カードのサムネイル画像。未設定ならプレースホルダーを表示 */
  image?: string;
  challenge: Bilingual;
  approach: Bilingual;
  result: Bilingual;
  tags: string[];
  link?: ProjectLink;
};

export const projects: Project[] = [
  {
    id: "focus",
    title: "FocuS",
    subtitle: {
      ja: "仙台の飲食店を紹介するWEBメディア",
      en: "Local dining media in Sendai",
    },
    period: "2022 — 2025",
    status: "live",
    image: "/images/projects/focus.png",
    challenge: {
      ja: "仙台エリアには魅力的な飲食店が数多くあるが、流通している情報の精度に課題があった。",
      en: "Sendai has many appealing restaurants, but the information circulating about them lacked accuracy.",
    },
    approach: {
      ja: "ユーザー目線で記事構成と導線を設計し、検索行動や閲覧データをもとに継続的に改善。",
      en: "Designed article structure and navigation from the reader's perspective, iterating based on search behavior and analytics.",
    },
    result: {
      ja: "年間5万〜6万PV規模まで成長し、検索上位を獲得。地域の広告代理店から協働の提案を受けるほどに認知を獲得。",
      en: "Grew to 50,000–60,000 page views per year, achieved top search rankings, and gained enough recognition that a local advertising agency proposed a collaboration.",
    },
    tags: ["地域メディア", "SEO", "マネジメント"],
    link: {
      href: "https://focus-sendai.com/",
      label: { ja: "サイトを見る", en: "Visit site" },
    },
  },
  {
    id: "meal-folio",
    title: "Meal Folio",
    subtitle: {
      ja: "飲食店と「出会える」WEBアプリ",
      en: "A web app for discovering restaurants.",
    },
    period: "2025 — 開発中",
    status: "in-progress",
    image: "/images/projects/meal-folio.png",
    challenge: {
      ja: "資本力のある飲食店が広告や宣伝で優位に立てるサービスが乱立し、ユーザーが新しい飲食店と「出会う」体験が阻害されている。",
      en: "A proliferation of services lets well-funded restaurants dominate through advertising, and it has become harder for users to discover new restaurants naturally.",
    },
    approach: {
      ja: "AWS上でのAPI設計・認証基盤の実装を含め、個人開発として一から構築。情報整理のしやすさとユーザー体験を軸に設計している。",
      en: "Building the entire system individually — including API design and authentication on AWS — with a focus on information organization and user experience.",
    },
    result: {
      ja: "現在開発中。5月にユーザーテストを実施し、コア機能の実装を進めながら、実際に使える形へ近づけている。",
      en: "Currently in active development; user testing was conducted in May, progressively shaping core features into a usable product.",
    },
    tags: ["AWS", "API設計", "認証基盤", "サービス設計"],
  },
  {
    id: "event-design",
    title: "Event Design",
    subtitle: {
      ja: "体験を設計するイベント企画",
      en: "Experience-driven event planning.",
    },
    period: "2023, 2025",
    status: "completed",
    image: "/images/projects/event-design.jpg",
    challenge: {
      ja: "WEBメディアの認知を広げるには、オンラインの発信だけでなく、実際に体験してもらう場が必要だった。",
      en: "Growing awareness for the web media required more than online content — it needed real, hands-on experiences for participants.",
    },
    approach: {
      ja: "参加型イベントを企画し、企画意図の設計から導線・没入感の設計、広報・制作までを一貫して担当した。",
      en: "Planned participatory events, handling everything from concept and flow design to promotion and production.",
    },
    result: {
      ja: "参加者の満足度の高い体験を実現し、メディア運営とオフライン施策を接続する事例となった。",
      en: "Created an engaging experience for participants and connected offline initiatives with media operations.",
    },
    tags: ["体験設計", "企画構成", "広報"],
  },
];

export type VisualWorkItem = {
  id: string;
  title: Bilingual;
  /** "photo" | "video" | "design" */
  kind: "photo" | "video" | "design";
  /** 画像 / サムネイル画像パス。未設定ならプレースホルダー */
  src?: string;
  /** kind: "video" の場合、埋め込み用URL (YouTube/Vimeoなど) */
  videoUrl?: string;
  /** kind: "video" の場合の埋め込み比率。未設定なら横長(16:9) */
  videoAspect?: "horizontal" | "vertical";
  description?: Bilingual;
};

export type VisualWorkCategory = {
  id: string;
  title: Bilingual;
  description: Bilingual;
  items: VisualWorkItem[];
};

export const visualWorkCategories: VisualWorkCategory[] = [
  {
    id: "photography",
    title: { ja: "写真", en: "Photography" },
    description: {
      ja: "モノ・ヒト・コトを対象に撮影。飲食店のメニュー撮影実績あり。",
      en: "Photography across objects, people, and events.",
    },
    items: [
      {
        id: "photo-mono",
        title: { ja: "モノ", en: "Objects" },
        kind: "photo",
        src: "/images/visual-works/photo-mono.jpg",
      },
      {
        id: "photo-hito",
        title: { ja: "ヒト", en: "People" },
        kind: "photo",
        src: "/images/visual-works/photo-hito.jpg",
      },
      {
        id: "photo-koto",
        title: { ja: "コト", en: "Moments" },
        kind: "photo",
        src: "/images/visual-works/photo-koto.jpg",
      },
    ],
  },
  {
    id: "video",
    title: { ja: "動画編集", en: "Video Editing" },
    description: {
      ja: "スタートアップの広報支援やイベント関連PVなど、目的に応じた動画編集を担当。",
      en: "Video editing for startup PR support and event promotional videos, tailored to each purpose.",
    },
    items: [
      {
        id: "video-startup-pr",
        title: { ja: "スタートアップ広報動画", en: "Startup PR video" },
        kind: "video",
        videoUrl: "", // TODO: 埋め込みURL (YouTube/Vimeo) を追加
        description: {
          ja: "スタートアップの広報素材として制作した動画。",
          en: "A promotional video produced for a startup's PR needs.",
        },
      },
      {
        id: "video-event-pv",
        title: { ja: "イベントPV", en: "Event promotional video" },
        kind: "video",
        videoUrl:
          "https://player.vimeo.com/video/1207134694?badge=0&autopause=0&player_id=0&app_id=58479",
        videoAspect: "vertical",
        description: {
          ja: "イベント告知のために制作したプロモーション動画。",
          en: "A promotional video produced to announce an event.",
        },
      },
    ],
  },
  {
    id: "calendar",
    title: { ja: "カレンダー制作", en: "Calendar Design" },
    description: {
      ja: "2023年・2024年にオリジナル卓上カレンダーを制作・販売。",
      en: "Designed and sold original desk calendars in 2023 and 2024.",
    },
    items: [
      {
        id: "calendar-2023",
        title: { ja: "2023年版 卓上カレンダー", en: "2023 desk calendar" },
        kind: "design",
        src: "/images/visual-works/calendar-2023.jpg",
      },
      {
        id: "calendar-2024",
        title: { ja: "2024年版 卓上カレンダー", en: "2024 desk calendar" },
        kind: "design",
        src: "/images/visual-works/calendar-2024.jpg",
      },
    ],
  },
];

export type TimelineItem = {
  date: string;
  dateEn: string;
  title: string;
  titleEn: string;
};

export const timeline: TimelineItem[] = [
  {
    date: "2020年 春",
    dateEn: "Spring 2020",
    title: "工学部入学",
    titleEn: "Enrolled in the Faculty of Engineering",
  },
  {
    date: "2022年 春",
    dateEn: "Spring 2022",
    title: "WEBメディア「FocuS」立ち上げ",
    titleEn: 'Launched the web media "FocuS"',
  },
  {
    date: "2023年 秋",
    dateEn: "Autumn 2023",
    title: "WEBメディア関連イベントを企画",
    titleEn: "Planned an event for the web media",
  },
  {
    date: "2024年 秋",
    dateEn: "Autumn 2024",
    title: "工学研究科入学",
    titleEn: "Enrolled in the Graduate School of Engineering",
  },
  {
    date: "2025年 秋",
    dateEn: "Autumn 2025",
    title: "謎解き脱出ゲームを企画",
    titleEn: "Planned an escape-room puzzle event",
  },
  {
    date: "2025年 秋",
    dateEn: "Autumn 2025",
    title: "Meal Folio 開発始動",
    titleEn: "Started development of Meal Folio",
  },
  {
    date: "2026年 9月",
    dateEn: "September 2026",
    title: "工学研究科修了予定",
    titleEn: "Expected to complete the Graduate School of Engineering",
  },
  {
    date: "2027年 4月",
    dateEn: "April 2027",
    title: "新卒エンジニアとして入社予定",
    titleEn: "Expected to join a company as a new graduate engineer",
  },
];

export type SocialLink = {
  id: string;
  label: string;
  /** 空文字の場合は「準備中」として非活性表示 */
  href: string;
};

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "" }, // TODO: GitHubリンクを追加
  { id: "linkedin", label: "LinkedIn", href: "" }, // TODO: LinkedInリンクを追加
  { id: "x", label: "X (Twitter)", href: "" }, // TODO: Xリンクを追加
  { id: "instagram", label: "Instagram", href: "" }, // TODO: Instagramリンクを追加
];

export const about = {
  paragraphsJa: [
    "人の体験において、どのように価値を提供できるかに関心があります。",
    "大学では電子工学を学びながら、飲食店でのアルバイトを通じて現場感覚を養ってきました。3つの居酒屋で、いずれもオープンキッチンという環境の中で調理補助と接客をおよそ5年にわたって経験し、目の前のお客さんの反応からサービスやオペレーションについて考える習慣が身につきました。",
    "また、地域の情報流通への課題感から、2022年には仙台の飲食店を紹介するWEBメディア「FocuS」を立ち上げ、サービス設計から企画立案、アナリティクスまでを担当。2023年にはメディアの認知を広げるための参加型イベントも企画しました。",
    "現在は、飲食店探しの新しい体験を実現するべくWEBアプリ「Meal Folio」を個人開発しており、AWSでのAPI設計や認証基盤の実装を通じて技術力を深めています。写真・動画といった表現活動にも取り組んでいます。",
    "大学院では、装置開発にも取り組みましたが、現在は研究そのものよりも、そこで培った力を実務に活かすことを目指しています。",
  ],
  summaryEn: [
    "I am interested in how thoughtful design can create value in people's experiences. While studying electronic engineering, I developed a strong sense of real-world service through nearly five years of part-time work at three izakaya restaurants, where I supported both kitchen operations and customer service in open-kitchen settings. Those experiences taught me to think about service and operations from the perspective of people right in front of me.",
    "In 2022, I launched FocuS, a web media platform introducing restaurants in Sendai, driven by a desire to improve the way local information is shared. I was involved in everything from service design and content planning to analytics, and in 2023 I also planned participatory events to expand its reach.",
    "I am currently building Meal Folio on my own, a web app designed to create a better restaurant discovery experience, while deepening my technical skills through API design and authentication on AWS. I also work in photography and video as forms of visual communication.",
    "In graduate school, I also worked on device development. Today, I hope to apply the skills I developed there to real-world work rather than research itself.",
  ],
  highlights: [
    {
      ja: "飲食店実務（5年・3店舗・オープンキッチン）",
      en: "Restaurant experience (5 yrs · 3 shops · open kitchen)",
    },
    {
      ja: "工学研究科 9月修了予定",
      en: "Graduate School of Engineering — expected graduation in September",
    },
  ],
};

export const siteConfig = {
  name: "an",
  email: "adele.work.tohoku@gmail.com",
  titleJa: "体験を設計する駆け出しエンジニア",
  titleEn: "An emerging engineer focused on experience design.",
  catchJa: "人の体験を観察し、仕組みを設計して、実装する",
  catchEn: "Observing human experiences, designing systems, and bringing them into implementation.",
};
