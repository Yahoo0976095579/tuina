<template>
  <div class="min-h-screen bg-gray-50">
    <Breadcrumb :breadcrumbs="breadcrumbs" />

    <!-- 頁面標題區 -->
    <div class="bg-gradient-to-br from-green-50 to-blue-50 py-8 md:py-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1
            class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4"
          >
            專業師傅團隊
          </h1>
          <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            每位師傅都有豐富經驗和專業技能，為您提供最適合的推拿服務
          </p>
        </div>
      </div>
    </div>

    <!-- 師傅詳細介紹 - 優化版本 -->
    <div class="container mx-auto px-4 py-6 md:py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div
          v-for="therapist in therapists"
          :key="therapist.id"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <!-- 師傅頭像區 - 縮小版 -->
          <div class="bg-gradient-to-br from-green-100 to-green-50 p-4 md:p-6">
            <div class="flex items-center">
              <div
                class="w-16 h-16 md:w-20 md:h-20 mr-4 bg-green-200 rounded-full flex items-center justify-center"
              >
                <span class="text-green-700 font-bold text-lg md:text-xl">
                  {{ therapist.name.charAt(0) }}
                </span>
              </div>
              <div>
                <h2 class="font-bold text-gray-800 text-lg md:text-xl mb-1">
                  {{ therapist.name }}
                </h2>
                <p
                  class="text-green-600 text-sm md:text-base font-semibold mb-1"
                >
                  {{ therapist.title }}
                </p>
                <p class="text-gray-700 text-xs md:text-sm">
                  {{ therapist.experience }}
                </p>
              </div>
            </div>
          </div>

          <!-- 師傅詳細資訊 - 緊湊版 -->
          <div class="p-4 md:p-6">
            <!-- 專長領域 -->
            <div class="mb-4">
              <h3
                class="font-semibold text-gray-800 text-sm md:text-base mb-2 flex items-center"
              >
                <svg
                  class="w-4 h-4 text-green-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                專長領域
              </h3>
              <div class="flex flex-wrap gap-1 md:gap-2">
                <span
                  v-for="specialty in therapist.specialties"
                  :key="specialty"
                  class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                >
                  {{ specialty }}
                </span>
              </div>
            </div>

            <!-- 服務特色 -->
            <div class="mb-4">
              <h3
                class="font-semibold text-gray-800 text-sm md:text-base mb-2 flex items-center"
              >
                <svg
                  class="w-4 h-4 text-green-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                    clip-rule="evenodd"
                  />
                </svg>
                服務特色
              </h3>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                {{ therapist.description }}
              </p>
            </div>

            <!-- 適合客群 -->
            <div class="mb-4">
              <h3
                class="font-semibold text-gray-800 text-sm md:text-base mb-2 flex items-center"
              >
                <svg
                  class="w-4 h-4 text-green-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                  />
                </svg>
                適合客群
              </h3>
              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-1 text-xs md:text-sm text-gray-600"
              >
                <div
                  v-for="target in therapist.targetClients.slice(0, 4)"
                  :key="target"
                  class="flex items-start"
                >
                  <span class="text-green-500 mr-1 flex-shrink-0">•</span>
                  <span>{{ target }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 預約區塊 - 簡化版 -->
      <div class="mt-8 bg-white rounded-lg shadow-md p-4 md:p-6">
        <div class="text-center">
          <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-2">
            選擇您的專屬師傅
          </h2>
          <p class="text-gray-600 text-sm md:text-base mb-4">
            LINE預約時可指定師傅，或由我們根據您的需求推薦最適合的師傅
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink
              to="/#contact"
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              立即預約師傅
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300"
            >
              返回首頁
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 1. 先定義資料 - 這是最重要的修正
const therapists = [
  {
    id: 1,
    name: "廖冠雄",
    title: "老闆",
    experience: "30年專業經驗",
    specialties: ["全身痠痛", "深層推拿", "開椎拉伸", "手腳舊傷整復"],
    description:
      "民國84年開始從事推拿行業，至今30年，期間12年待過中醫診所，經驗老道，解決一切疑難痠痛，開椎手法細膩，手腳舊傷整復",
    targetClients: [
      "長期使用電腦的辦公室族群",
      "肩頸僵硬、頭痛患者",
      "運動愛好者和運動員",
      "需要深層按摩的客戶",
    ],
  },
  {
    id: 2,
    name: "黃秀滿",
    title: "女推拿師",
    experience: "店內3年經驗",
    specialties: ["全身推拿", "經絡疏通"],
    description:
      "按捏輕重適宜，經絡準確，好溝通，平時喜歡研究各派推拿手法，喜歡嘗試不同推拿手法的首選。",
    targetClients: [
      "身體肌肉僵硬",
      "需要女性推拿師",
      "喜愛力道重",
      "重視經絡平衡的客戶",
    ],
  },
  {
    id: 3,
    name: "施檸檬",
    title: "女推拿師",
    experience: "含有美容院專業經驗",
    specialties: ["舒壓按摩", "手法細膩", "力大無比", "刮痧/滑罐"],
    description:
      "本店的女推拿師，力大無比，可輕可重，還會指油壓，想放鬆的最好選擇。",
    targetClients: [
      "高壓工作族群",
      "追求放鬆享受的客戶",
      "喜歡指油壓的客戶",
      "初次體驗按摩的客戶",
      "需要女性推拿師",
    ],
  },
  {
    id: 4,
    name: "皇冠",
    title: "女推拿師",
    experience: "推拿專業經驗",
    specialties: ["肌肉放鬆", "女性刮痧"],
    description: "年輕活力的新生代師傅，刮痧非常細心，推拿手法溫和。",
    targetClients: ["怕痛的客戶", "需要女推拿師", "中暑刮痧"],
  },
  {
    id: 5,
    name: "曾士滕",
    title: "男推拿師",
    experience: "推拿專業經驗",
    specialties: ["肌肉放鬆", "傾聽", "手法小心"],
    description:
      "年輕活力的新生代師傅，手法非常細心，推拿手法溫和，是個超級貼心的推拿師。",
    targetClients: ["怕痛的客戶", "喜歡聊天"],
  },
];

// 2. 再定義麵包屑
const breadcrumbs = [
  {
    text: "師傅團隊",
    link: null,
  },
];

// 3. 設定頁面 SEO
useHead({
  title: "專業師傅團隊介紹 | 友仁推拿整復",
  meta: [
    {
      name: "description",
      content:
        "認識我們的專業師傅團隊，每位師傅都有豐富的推拿經驗和專業技能，為您提供最適合的推拿服務。",
    },
    {
      name: "keywords",
      content: "推拿師傅,專業按摩師,肩頸推拿專家,經絡調理師,台中推拿師傅",
    },
    {
      property: "og:title",
      content: "專業師傅團隊介紹 | 友仁推拿整復",
    },
    {
      property: "og:description",
      content: "認識我們的專業師傅團隊，每位師傅都有豐富的推拿經驗和專業技能。",
    },
    {
      property: "og:url",
      content: "https://your-domain.com/therapists/",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://your-domain.com/therapists/",
    },
  ],
});

// 4. 最後設定結構化資料
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: therapists.map((therapist, index) => ({
          "@type": "Person",
          position: index + 1,
          name: therapist.name,
          jobTitle: therapist.title,
          description: therapist.description,
          knowsAbout: therapist.specialties,
          worksFor: {
            "@type": "LocalBusiness",
            name: "友仁推拿整復",
          },
        })),
      }),
    },
  ],
});
</script>
