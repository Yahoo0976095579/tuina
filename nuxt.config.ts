export default defineNuxtConfig({
  compatibilityDate: "2025-07-17",

  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],

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

      script: [
        // JSON-LD 結構化資料
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://yourentuina.vercel.app/#localbusiness",
            name: "友仁推拿整復",
            description:
              "專業推拿服務，提供肩頸推拿、全身推拿、推拿整復、整骨、刮痧、拔罐、放鬆等服務",
            url: "https://yourentuina.vercel.app/",
            telephone: "+886-4-2393-6663",
            email: "info@your-domain.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "中山路二段91號",
              addressLocality: "台中市",
              addressRegion: "太平區",
              postalCode: "41160",
              addressCountry: "TW",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "25.0478",
              longitude: "121.5319",
            },
            openingHours: [
              "Mo-Fr 09:30-22:30",
              "Sa 14:30-22:30",
              "Su 15:00-22:00",
            ],
            priceRange: "NT$150-NT$1000",
            paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
            currenciesAccepted: "TWD",
            image: ["https://your-domain.com/images/team-photo.jpg"],
            logo: "https://yourentuina.vercel.app/images/logo.png",
            sameAs: [
              "https://www.facebook.com/p/%E5%8F%8B%E4%BB%81%E6%8E%A8%E6%8B%BF%E6%95%B4%E5%BE%A9%E4%B8%AD%E5%BF%83-100064760584268/",
              "https://www.instagram.com/p0982818113/",
              "https://line.me/R/ti/p/@your-line-id",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "推拿按摩服務",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "全身推拿",
                    description: "全身經絡疏通，促進血液循環的推拿服務",
                  },
                  price: "180",
                  priceCurrency: "TWD",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "刮痧",
                    description: "避免中暑，釋放濕氣",
                  },
                  price: "180",
                  priceCurrency: "TWD",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "拔罐",
                    description: "放鬆肌肉，避免中暑，釋放濕氣",
                  },
                  price: "150",
                  priceCurrency: "TWD",
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "156",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        },
      ],
    },
  },

  // 網站地圖設定 - 修正版本
  sitemap: {
    sources: ["/", "/therapists", "/services"],
  },

  // Nitro 設定 - 移除 router.options
  nitro: {
    prerender: {
      routes: ["/", "/therapists", "/services"],
    },
  },

  css: ["~/assets/css/main.css"],

  devtools: { enabled: true },
});
