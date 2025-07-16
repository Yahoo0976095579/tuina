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
            完整服務項目
          </h1>
          <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            我們提供全方位的推拿整復傳統療法，針對不同症狀和需求提供專業服務
          </p>
        </div>
      </div>
    </div>

    <!-- 服務分類導航 -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex flex-wrap justify-center gap-2 md:gap-3">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          class="px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300"
          :class="
            selectedCategory === category.id
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 hover:bg-green-100'
          "
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- 服務項目列表 - 緊湊版 -->
    <div class="container mx-auto px-4 pb-8">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
      >
        <div
          v-for="service in filteredServices"
          :key="service.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- 服務圖標區 - 縮小版 -->
          <div class="bg-gradient-to-r from-green-100 to-green-50 p-3 md:p-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <h3 class="text-base md:text-lg font-bold text-gray-800">
                  {{ service.name }}
                </h3>
              </div>
              <span class="text-lg md:text-xl font-bold text-green-600">
                {{ service.price }}
              </span>
            </div>
          </div>

          <!-- 服務詳細資訊 - 緊湊版 -->
          <div class="p-3 md:p-4">
            <div class="flex justify-between items-center mb-2">
              <span
                class="text-xs md:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
              >
                {{ service.duration }}
              </span>
              <span
                v-if="service.isCombo"
                class="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full"
              >
                組合套餐
              </span>
            </div>

            <p
              class="text-gray-600 mb-3 text-xs md:text-sm leading-relaxed line-clamp-2"
            >
              {{ service.description }}
            </p>

            <!-- 適用症狀 -->
            <div class="mb-3">
              <h4 class="font-semibold text-gray-800 text-xs md:text-sm mb-1">
                適用症狀
              </h4>
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="symptom in service.symptoms.slice(0, 6)"
                  :key="symptom"
                  class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {{ symptom }}
                </span>
              </div>
            </div>

            <!-- 服務特色 - 精簡版 -->
            <div class="mb-3">
              <h4 class="font-semibold text-gray-800 text-xs md:text-sm mb-1">
                服務特色
              </h4>
              <div class="grid grid-cols-2 gap-1 text-xs text-gray-600">
                <div
                  v-for="feature in service.features.slice(0, 5)"
                  :key="feature"
                  class="flex items-start"
                >
                  <span class="text-green-500 mr-1">•</span>
                  <span>{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- 注意事項 - 精簡版 -->
            <div class="border-t pt-2">
              <h4 class="font-semibold text-gray-800 text-xs md:text-sm mb-1">
                注意事項
              </h4>
              <p class="text-xs text-gray-600 line-clamp-2">
                {{ service.precautions }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 預約聯絡區塊 - 簡化版 -->
    <div class="bg-white border-t">
      <div class="container mx-auto px-4 py-6">
        <div class="text-center">
          <h2 class="text-lg md:text-xl font-bold text-gray-800 mb-3">
            預約我們的服務
          </h2>
          <p class="text-gray-600 mb-4 text-sm">
            歡迎透過LINE聯絡我們，我們將為您提供專業的服務諮詢和預約安排
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink
              to="/#contact"
              class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              LINE立即預約
            </NuxtLink>
            <NuxtLink
              to="/"
              class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
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
// 1. 先定義基礎資料
const breadcrumbs = [
  {
    text: "服務項目",
    link: null,
  },
];

const selectedCategory = ref("all");

const categories = [
  { id: "all", name: "全部服務" },
  { id: "massage", name: "推拿整復" },
  { id: "traditional", name: "刮痧/拔罐" },
  { id: "acupressure", name: "指壓/油壓" },
  { id: "combo", name: "組合套餐" },
];

// 2. 定義服務項目資料 - 使用表情符號取代 SVG
const allServices = [
  // 推拿整復系列
  {
    id: 1,
    name: "推拿 10分鐘",
    category: "massage",
    description:
      "運用中醫推拿手法，疏通經絡、活血化瘀，有效緩解肌肉疲勞和關節疼痛",
    price: "NT$ 180",
    duration: "10分鐘",
    symptoms: ["肌肉疲勞", "關節疼痛", "肩頸僵硬", "腰背酸痛"],
    features: ["專業推拿手法", "個人化調理", "放鬆肌肉", "促進血液循環"],
    precautions: "推拿前請告知身體狀況，懷孕婦女請先諮詢醫師",
  },
  {
    id: 2,
    name: "推拿 20分鐘",
    category: "massage",
    description:
      "運用中醫推拿手法，疏通經絡、活血化瘀，有效緩解肌肉疲勞和關節疼痛",
    price: "NT$ 280",
    duration: "20分鐘",
    symptoms: ["肌肉疲勞", "關節疼痛", "肩頸僵硬", "腰背酸痛"],
    features: ["專業推拿手法", "個人化調理", "放鬆肌肉", "促進血液循環"],
    precautions: "推拿前請告知身體狀況，懷孕婦女請先諮詢醫師",
  },
  {
    id: 3,
    name: "推拿 30分鐘",
    category: "massage",
    description:
      "運用中醫推拿手法，疏通經絡、活血化瘀，有效緩解肌肉疲勞和關節疼痛",
    price: "NT$ 380",
    duration: "30分鐘",
    symptoms: ["肌肉疲勞", "關節疼痛", "肩頸僵硬", "腰背酸痛"],
    features: ["專業推拿手法", "個人化調理", "放鬆肌肉", "促進血液循環"],
    precautions: "推拿前請告知身體狀況，懷孕婦女請先諮詢醫師",
  },
  {
    id: 4,
    name: "推拿 40分鐘",
    category: "massage",
    description:
      "運用中醫推拿手法，疏通經絡、活血化瘀，有效緩解肌肉疲勞和關節疼痛",
    price: "NT$ 500",
    duration: "40分鐘",
    symptoms: ["肌肉疲勞", "關節疼痛", "肩頸僵硬", "腰背酸痛"],
    features: ["專業推拿手法", "個人化調理", "放鬆肌肉", "促進血液循環"],
    precautions: "推拿前請告知身體狀況，懷孕婦女請先諮詢醫師",
  },
  {
    id: 5,
    name: "推拿 60分鐘",
    category: "massage",
    description:
      "運用中醫推拿手法，疏通經絡、活血化瘀，有效緩解肌肉疲勞和關節疼痛",
    price: "NT$ 800",
    duration: "60分鐘",
    symptoms: ["肌肉疲勞", "關節疼痛", "肩頸僵硬", "腰背酸痛"],
    features: ["專業推拿手法", "個人化調理", "放鬆肌肉", "促進血液循環"],
    precautions: "推拿前請告知身體狀況，懷孕婦女請先諮詢醫師",
  },

  // 刮痧/拔罐系列
  {
    id: 6,
    name: "刮痧",
    category: "traditional",
    description:
      "傳統中醫刮痧療法，透過特定手法刮拭皮膚，促進氣血循環，排除體內毒素",
    price: "NT$ 180",
    duration: "10分鐘",
    symptoms: ["感冒初期", "頭痛", "肌肉緊張", "循環不良"],
    features: ["促進血液循環", "排毒養顏", "緩解疲勞", "增強免疫力"],
    precautions: "刮痧後請避免風寒，多喝溫水，24小時內不宜洗澡",
  },
  {
    id: 7,
    name: "拔罐",
    category: "traditional",
    description:
      "運用拔罐技術，通過負壓吸引改善局部血液循環，有效緩解疼痛和肌肉緊張",
    price: "NT$ 150",
    duration: "10分鐘",
    symptoms: ["局部疼痛", "肌肉緊張", "風濕痛", "疲勞"],
    features: ["改善血液循環", "舒緩疼痛", "放鬆肌肉", "促進代謝"],
    precautions: "拔罐後皮膚可能出現紅印，屬正常現象，請避免著涼",
  },
  {
    id: 8,
    name: "指壓",
    category: "acupressure",
    description:
      "運用指壓技術，透過手指按壓穴位，促進血液循環，有效緩解疲勞和壓力",
    price: "NT$ 850",
    duration: "60分鐘",
    symptoms: ["頭痛", "肩頸僵硬", "疲勞", "壓力"],
    features: ["精準穴位按壓", "放鬆身心", "改善循環", "舒緩壓力"],
    precautions: "指壓後請多喝水，避免劇烈運動",
  },
  {
    id: 9,
    name: "油壓",
    category: "acupressure",
    description:
      "使用天然按摩油搭配專業手法，深層放鬆肌肉，促進血液循環，提升整體舒適感",
    price: "NT$ 1000",
    duration: "60分鐘",
    symptoms: ["肌肉緊張", "疲勞", "壓力", "循環不良"],
    features: ["天然按摩油", "深層放鬆", "滋潤肌膚", "舒緩壓力"],
    precautions: "油壓後請勿立即洗澡，讓按摩油充分滲透",
  },

  // 組合套餐系列
  {
    id: 10,
    name: "推拿 + 刮痧",
    category: "combo",
    description: "結合推拿與刮痧的雙重療效，深層放鬆肌肉並促進氣血循環",
    price: "NT$ 280",
    duration: "20分鐘",
    symptoms: ["肌肉疲勞", "關節疼痛", "循環不良", "頭痛"],
    features: ["雙重療效", "深層放鬆", "促進循環", "排毒養顏"],
    precautions: "推拿刮痧後請避免風寒，多喝溫水，24小時內不宜洗澡",
    isCombo: true,
  },
  {
    id: 11,
    name: "推拿 + 拔罐",
    category: "combo",
    description: "結合推拿與拔罐的雙重療效，深層放鬆肌肉並改善局部血液循環",
    price: "NT$ 250",
    duration: "10分鐘",
    symptoms: ["局部疼痛", "肌肉緊張", "疲勞", "風濕痛"],
    features: ["雙重療效", "改善循環", "舒緩疼痛", "放鬆肌肉"],
    precautions: "拔罐後皮膚可能出現紅印，屬正常現象，請避免著涼",
    isCombo: true,
  },
];

// 3. 定義計算屬性
const filteredServices = computed(() => {
  if (selectedCategory.value === "all") {
    return allServices;
  }
  return allServices.filter(
    (service) => service.category === selectedCategory.value
  );
});

// 4. 設定頁面 SEO
useHead({
  title: "完整服務項目 | 推拿整復指壓油壓 | 友仁推拿整復",
  meta: [
    {
      name: "description",
      content:
        "查看我們提供的完整推拿整復服務，包含推拿、刮痧、拔罐、指壓、油壓等專業服務項目。價格透明，專業服務，組合套餐優惠。",
    },
    {
      name: "keywords",
      content: "推拿服務,刮痧,拔罐,指壓,油壓,整復,按摩,組合套餐,台中推拿價格",
    },
  ],
});

// 5. 設定結構化資料
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "推拿整復服務項目",
        description: "提供多種推拿整復服務",
        itemListElement: allServices.map((service, index) => ({
          "@type": "Service",
          position: index + 1,
          name: service.name,
          description: service.description,
          provider: {
            "@type": "LocalBusiness",
            name: "友仁推拿整復",
          },
          offers: {
            "@type": "Offer",
            price: service.price.replace("NT$ ", ""),
            priceCurrency: "TWD",
            availability: "https://schema.org/InStock",
          },
        })),
      }),
    },
  ],
});
</script>
