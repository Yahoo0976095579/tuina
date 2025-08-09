# 友仁傳統整復中心 | 官方形象網站

這是一個為「友仁傳統整復中心」打造的現代化官方形象網站，旨在提供清晰的服務資訊、便捷的預約方式，並透過專業的內容與設計，提升品牌形象與客戶信任度。

專案採用 Nuxt 3 全端框架開發，實現了高效能的伺服器端渲染 (SSR) 與靜態網站生成 (SSG)，並針對搜尋引擎進行了深度優化 (SEO)，確保網站在 Google 等搜尋引擎上能有良好的排名。

**線上預覽:** [https://yourentuina.vercel.app/](https://yourentuina.vercel.app/)

---

## ✨ 主要功能 (Features)

- **響應式設計 (RWD):** 無論在桌面、平板或手機上，都能提供最佳的瀏覽體驗。
- **完整的服務介紹:** 清晰展示服務項目、價目表、推拿的健康效益以及服務流程。
- **專業師傅團隊頁面:** 詳細介紹每位師傅的專長、經驗與服務特色，幫助客戶選擇合適的師傅。
- **客戶見證輪播:** 使用 `vue3-carousel` 套件，真實呈現客戶的好評回饋。
- **即時營業狀態顯示:** 在聯絡區塊，動態顯示當前的營業狀態 (營業中/休息中)，並提示下次狀態變更時間。
- **便捷的 LINE 預約:** 提供懸浮按鈕與聯絡區塊，引導使用者透過 LINE 官方帳號快速預約。
- **常見問題 (FAQ) 手風琴:** 以收合式選單呈現常見問題，介面簡潔且易於閱讀。
- **流暢的動畫效果:** 適度使用 GSAP 動畫庫，在頁面滾動時觸發元素動畫，提升網站的精緻度與使用者體驗。
- **深度 SEO 優化:**
  - 自動生成 `sitemap.xml` 與 `robots.txt`。
  - 透過 `nuxt-schema-org` 自動生成結構化資料，幫助 Google 更了解網站內容。
  - 為每個頁面設定了獨立的標題 (Title)、描述 (Description) 與關鍵字 (Keywords)。
  - 完整設定 Open Graph (for Facebook, Line) 與 Twitter Cards 標籤，優化社群分享預覽。

---

## 🛠️ 技術棧 (Technology Stack)

- **前端框架:** [Nuxt 3](https://nuxt.com/) (基於 [Vue 3](https://vuejs.org/))
- **樣式設計:** [Tailwind CSS](https://tailwindcss.com/)
- **動畫效果:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
- **輪播元件:** [Vue 3 Carousel](https://ismail9k.github.io/vue3-carousel/)
- **SEO 優化:** [@nuxtjs/seo](https://nuxt.com/modules/seo) (整合 sitemap, schema.org 等模組)
- **圖片優化:** [@nuxt/image](https://image.nuxt.com/)
- **部署平台:** [Vercel](https://vercel.com/)

---

## 📂 專案結構

```
tuina/
├── components/         # 所有可重用的 Vue 元件 (如 Hero, About, Services)
│   ├── About.vue
│   ├── Contact.vue
│   └── ...
├── composables/        # Nuxt 3 的組合式函數
│   └── useScrollAnimation.js # 集中管理 GSAP 動畫邏輯
├── pages/              # 頁面元件
│   ├── index.vue       # 首頁
│   └── therapists.vue  # 師傅團隊頁面
├── public/             # 靜態資源 (圖片、favicon)
├── assets/             # 未經處理的資源 (CSS)
├── nuxt.config.ts      # Nuxt 核心設定檔 (模組、SEO、路由)
└── package.json        # 專案依賴與腳本
```

- **模組化元件:** 專案遵循元件化開發思想，將首頁的每個區塊都拆分成獨立的元件，存放於 `components` 目錄下，提高了程式碼的可讀性與可維護性。
- **動畫邏輯分離:** 將所有 GSAP 相關的動畫邏輯抽離至 `composables/useScrollAnimation.js` 中，讓元件本身更專注於模板與樣式，符合關注點分離原則。
- **中心化設定:** `nuxt.config.ts` 作為專案的大腦，集中管理了所有模組、全域 SEO 設定、路由規則等，讓專案配置一目了然。

---

## 📝 總結

這個專案不僅僅是一個靜態的形象網站，而是一個結合了現代前端技術、深度 SEO 優化與良好使用者體驗的完整解決方案。透過 Nuxt 3 的強大功能，成功為「友仁傳統整復中心」打造了一個專業、可靠的線上門面。
