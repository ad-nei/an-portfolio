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
      ja: "仙台の飲食店紹介Webメディア",
      en: "Local dining media in Sendai",
    },
    period: "2022 —",
    status: "live",
    image: "", // TODO: /images/projects/focus.jpg を配置してこの値に設定
    challenge: {
      ja: "仙台エリアには魅力的な飲食店が数多くあるが、情報が分散していて、地元の生活者にも十分に届いていなかった。",
      en: "Sendai has many appealing restaurants, but information was scattered and rarely reached local residents effectively.",
    },
    approach: {
      ja: "ユーザー目線で記事構成と導線を設計し、検索行動や閲覧データをもとに継続的に改善。地域の文脈を踏まえた情報設計を行った。",
      en: "Designed article structure and navigation from the reader's perspective, iterating based on search behavior and analytics with information architecture tailored to local context.",
    },
    result: {
      ja: "年間5万〜6万PV規模まで成長し、検索上位を獲得。地域広告会社からの提案にもつながった。",
      en: "Grew to 50,000–60,000 page views per year, achieved top search rankings, and led to proposals from local advertising companies.",
    },
    tags: ["情報設計", "コンテンツ改善", "地域メディア", "SEO"],
    link: {
      href: "https://focus-sendai.com/",
      label: { ja: "サイトを見る", en: "Visit site" },
    },
  },
  {
    id: "meal-folio",
    title: "Meal Folio",
    subtitle: {
      ja: "飲食店探しWebアプリ",
      en: "Restaurant discovery web app",
    },
    period: "2025 — 開発中",
    status: "in-progress",
    image: "", // TODO: /images/projects/meal-folio.jpg を配置してこの値に設定
    challenge: {
      ja: "飲食店探しは選択肢が多い一方で、探す・整理する・比較するという体験そのものは十分に磨かれていない。",
      en: "While restaurant choices are abundant, the experience of searching, organizing, and comparing them remains underdesigned.",
    },
    approach: {
      ja: "AWS上でのAPI設計・認証基盤の実装を含め、個人開発として一から構築。情報整理のしやすさとユーザー体験を軸に設計している。",
      en: "Building the entire system individually — including API design and authentication on AWS — with a focus on information organization and user experience.",
    },
    result: {
      ja: "現在開発中。コア機能の実装を進めながら、実際に使える形へ近づけている。",
      en: "Currently in active development, progressively shaping core features into a usable product.",
    },
    tags: ["AWS", "API設計", "認証基盤", "サービス設計"],
  },
  {
    id: "event-design",
    title: "Event Design",
    subtitle: {
      ja: "体験を設計するイベント企画",
      en: "Event planning through experience design",
    },
    period: "2023, 2025",
    status: "completed",
    image: "", // TODO: /images/projects/event-design.jpg を配置してこの値に設定
    challenge: {
      ja: "Webメディアの認知を広げるには、オンラインの発信だけでなく、実際に体験してもらう場が必要だった。",
      en: "Growing awareness for the web media required more than online content — it needed real, hands-on experiences for participants.",
    },
    approach: {
      ja: "謎解き脱出ゲームなど参加型イベントを企画。企画意図の設計から導線・没入感の設計、広報・制作までを一貫して担当した。",
      en: "Planned participatory events such as an escape-room-style puzzle game, handling everything from concept and flow design to promotion and production.",
    },
    result: {
      ja: "参加者の満足度の高い体験を実現し、メディア運営とオフライン施策を接続する事例となった。",
      en: "Delivered a highly satisfying participant experience and connected offline initiatives with media operations.",
    },
    tags: ["体験設計", "企画構成", "ストーリーテリング", "広報"],
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
      en: "Photography spanning objects, people, and moments — including menu photography for restaurants.",
    },
    items: [
      {
        id: "photo-event-1",
        title: { ja: "イベントの様子", en: "Event snapshot" },
        kind: "photo",
        src: "", // TODO: /images/visual-works/photo-event-1.jpg を配置してこの値に設定
      },
      {
        id: "photo-event-2",
        title: { ja: "イベントの様子", en: "Event snapshot" },
        kind: "photo",
        src: "", // TODO: /images/visual-works/photo-event-2.jpg を配置してこの値に設定
      },
      {
        id: "photo-menu-1",
        title: { ja: "飲食店メニュー撮影", en: "Restaurant menu photography" },
        kind: "photo",
        src: "", // TODO: /images/visual-works/photo-menu-1.jpg を配置してこの値に設定
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
        videoUrl: "", // TODO: 埋め込みURL (YouTube/Vimeo) を追加
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
      ja: "2024年・2025年にオリジナル卓上カレンダーを制作・販売。",
      en: "Designed and sold original desk calendars in 2024 and 2025.",
    },
    items: [
      {
        id: "calendar-2024",
        title: { ja: "2024年版 卓上カレンダー", en: "2024 desk calendar" },
        kind: "design",
        src: "", // TODO: /images/visual-works/calendar-2024.jpg を配置してこの値に設定
      },
      {
        id: "calendar-2025",
        title: { ja: "2025年版 卓上カレンダー", en: "2025 desk calendar" },
        kind: "design",
        src: "", // TODO: /images/visual-works/calendar-2025.jpg を配置してこの値に設定
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
    title: "Webメディア「FocuS」立ち上げ",
    titleEn: 'Launched the web media "FocuS"',
  },
  {
    date: "2023年 秋",
    dateEn: "Autumn 2023",
    title: "Webメディア関連イベントを企画",
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
    "人の行動や感情を観察し、それを言葉や仕組み、技術に落とし込むことに関心があります。",
    "大学では工学を学びながら、飲食店でのアルバイトを通じて現場感覚を養ってきました。3つの居酒屋で、いずれもオープンキッチンという環境の中で調理補助と接客を約5年弱にわたって経験し、目の前のお客さんの反応から店の仕組みや導線を考える習慣が身につきました。",
    "その視点を活かし、2022年には仙台の飲食店を紹介するWebメディア「FocuS」を立ち上げ、記事制作から情報設計、集客までを担当。2023年にはメディアの認知を広げるための参加型イベントも企画しました。",
    "現在は、飲食店探しの体験を良くするWebアプリ「Meal Folio」を個人開発しており、AWSでのAPI設計や認証基盤の実装を通じて技術力を深めています。写真・動画・カレンダー制作といった表現活動にも継続的に取り組んでいます。",
    "大学院(工学研究科)では装置開発にも取り組みましたが、現在は研究そのものよりも、そこで培った構造化して考える力を実務に活かすことを大切にしています。",
  ],
  summaryEn:
    "Interested in observing how people behave and feel, then translating that into language, systems, and technology. Nearly five years of floor and kitchen experience across three open-kitchen izakaya built a grounded sense of hospitality and operational flow — a perspective that led to launching FocuS, a local dining media in Sendai, planning participatory events, and now building Meal Folio, a restaurant discovery app. Also engaged in photography, video editing, and calendar design. Graduate coursework in engineering added a habit of structured thinking, though research itself stays in the background.",
  highlights: [
    { ja: "飲食店実務 約5年弱", en: "~5 years in restaurant operations" },
    { ja: "オープンキッチン3店舗", en: "3 open-kitchen izakaya" },
    { ja: "工学研究科 在籍", en: "Graduate School of Engineering" },
  ],
};

export const siteConfig = {
  name: "an",
  email: "adele.work.tohoku@gmail.com",
  titleJa: "体験設計と技術実装をつなぐエンジニア",
  titleEn: "Engineer bridging user experience and digital systems",
  catchJa: "人の体験を観察し、仕組みとして設計し、技術で形にする。",
  catchEn:
    "Designing experiences, systems, and communication across digital and physical contexts.",
};
