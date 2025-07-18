export default defineNuxtConfig({
  compatibilityDate: "2025-07-17",

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
  ],

  site: {
    url: "https://yourentuina.vercel.app",
    name: "友仁傳統整復中心",
    description:
      "友仁傳統整復中心提供專業推拿按摩服務，位於台中市太平區。肩頸推拿、全身推拿、刮痧、拔罐。經驗豐富師傅團隊，LINE預約更便利。",
    defaultLocale: "zh-TW",
  },

  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: "友仁傳統整復中心",
      url: "https://yourentuina.vercel.app",
      telephone: "+886-4-2393-6663",
      address: {
        type: "PostalAddress",
        streetAddress: "中山路二段91號",
        addressLocality: "太平區",
        addressRegion: "台中市",
        postalCode: "411",
        addressCountry: "TW",
      },
      // 將 openingHours 移到 identity 內
      openingHours: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:30",
          closes: "22:00",
        },
        {
          dayOfWeek: "Saturday",
          opens: "14:30",
          closes: "22:00",
        },
        {
          dayOfWeek: "Sunday",
          opens: "15:00",
          closes: "22:00",
        },
      ],
    },
  },

  // SEO 核心設定
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-TW",
      },
      title: "友仁推拿館 | 專業推拿按摩服務",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "友仁推拿館提供專業推拿按摩服務，位於台北市中山區。肩頸推拿、全身推拿、刮痧、拔罐。經驗豐富師傅團隊，LINE預約更便利。，營業時間週一至週五09:30-22:30，週六14:30-22:30，週日15:00-22:00。位於台中市太平區。",
        },
        {
          name: "keywords",
          content:
            "友仁推拿,友仁推拿館,推拿,按摩,肩頸推拿,全身推拿,台中推拿,太平區推拿,專業按摩,刮痧,拔罐,整骨,整復",
        },
        { name: "author", content: "友仁推拿整復" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },

        // Open Graph 標籤
        { property: "og:title", content: "專業推拿服務 | 舒緩疲勞重拾活力" },
        {
          property: "og:description",
          content:
            "提供專業推拿按摩服務，肩頸推拿、全身推拿、推拿整復、整骨。改善血液循環、舒緩疲勞。LINE預約更便利。",
        },
        { property: "og:image", content: "/images/og-massage.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:url", content: "https://yourentuina.vercel.app/" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "zh_TW" },
        { property: "og:site_name", content: "友仁推拿整復" },

        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "專業推拿服務 | 舒緩疲勞重拾活力" },
        {
          name: "twitter:description",
          content:
            "提供專業推拿按摩服務，肩頸推拿、全身推拿、推拿整復、整骨。改善血液循環、舒緩疲勞。",
        },
        { name: "twitter:image", content: "/images/og-massage.jpg" },

        // 地理位置標籤
        { name: "geo.region", content: "TW-TPE" },
        { name: "geo.placename", content: "台中市太平區" },
        { name: "geo.position", content: "25.0478;121.5319" },
        { name: "ICBM", content: "25.0478, 121.5319" },

        {
          name: "google-site-verification",
          content:
            "google-site-verification=e3tHuRTu_oxt9bLx08mCSCTh49KsCx6WoEnFIsH6yYk",
        },
      ],

      link: [
        { rel: "canonical", href: "https://yourentuina.vercel.app/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  // 網站地圖設定 - 修正版本
  sitemap: {
    sources: ["/", "/therapists"],
  },

  // Nitro 設定 - 移除 router.options
  nitro: {
    prerender: {
      routes: ["/", "/therapists"],
    },
  },

  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },
});
