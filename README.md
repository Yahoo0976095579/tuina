# 友仁傳統整復中心 | 官方形象網站

這是一個為 **「友仁傳統整復中心」** 打造的現代化官方形象網站，旨在提供清晰的服務資訊、便捷的預約方式，並透過專業的內容與設計，提升品牌形象與客戶信任度。

專案採用 **Nuxt 3** 全端框架開發，實現高效能的 **伺服器端渲染 (SSR)** 與 **靜態網站生成 (SSG)**，並針對 **搜尋引擎進行深度優化 (SEO)**，確保網站在 Google 等搜尋引擎上能有良好排名。

**線上預覽:** [https://yourentuina.vercel.app/](https://yourentuina.vercel.app/)

---

## ✨ 主要功能 (Features)

- **響應式設計 (RWD)**  
  適配桌面、平板與手機，提供一致的最佳瀏覽體驗。
- **完整服務介紹**  
  包含服務項目、價目表、推拿健康效益與服務流程。
- **專業師傅團隊頁面**  
  詳細介紹每位師傅的專長、經驗與特色，方便客戶選擇。
- **客戶見證輪播**  
  使用 [`vue3-carousel`](https://ismail9k.github.io/vue3-carousel/) 呈現真實好評。
- **即時營業狀態顯示**  
  聯絡區塊可動態顯示當前營業狀態與下次變更時間。
- **便捷 LINE 預約**  
  懸浮按鈕與聯絡區塊引導用戶快速預約。
- **常見問題 (FAQ) 手風琴**  
  收合式選單讓內容簡潔、易讀。
- **流暢動畫效果**  
  適度使用 [GSAP](https://greensock.com/gsap/) 提升網站精緻度。
- **深度 SEO 優化**
  - 自動生成 `sitemap.xml` 與 `robots.txt`
  - 使用 [`nuxt-schema-org`](https://nuxt.com/modules/schema-org) 生成結構化資料
  - 各頁面獨立設定標題 (Title)、描述 (Description)、關鍵字 (Keywords)
  - 完整設定 Open Graph 與 Twitter Cards，優化社群分享預覽

---

## 🛠 技術棧 (Technology Stack)

- **前端框架:** [Nuxt 3](https://nuxt.com/) (基於 [Vue 3](https://vuejs.org/))
- **樣式設計:** [Tailwind CSS](https://tailwindcss.com/)
- **動畫效果:** [GSAP](https://greensock.com/gsap/)
- **輪播元件:** [Vue 3 Carousel](https://ismail9k.github.io/vue3-carousel/)
- **SEO 優化:** [@nuxtjs/seo](https://nuxt.com/modules/seo)
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

這是一個靜態的形象網站，結合了現代前端技術、深度 SEO 優化與良好使用者體驗。
