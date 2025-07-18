<template>
  <section id="services" class="py-8 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2
        class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-3 md:mb-4"
      >
        專業服務項目
      </h2>
      <p
        class="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base"
      >
        我們提供多種民俗調理傳統療法，針對不同需求提供專業服務
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div v-for="service in services" :key="service.id" class="service-card">
          <div
            class="bg-white rounded-lg shadow-md border-l-4 border-green-500 p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <svg
                  class="w-6 h-6 text-green-600 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path :d="service.icon" />
                </svg>
                <h3 class="text-lg md:text-xl font-bold text-gray-800">
                  {{ service.name }}
                </h3>
              </div>
              <span class="text-xl md:text-2xl font-bold text-green-600">{{
                service.price
              }}</span>
            </div>

            <p class="text-gray-600 mb-3 text-sm md:text-base leading-relaxed">
              {{ service.description }}
            </p>

            <div class="flex justify-between items-center">
              <span
                class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
              >
                {{ service.duration }}
              </span>
              <div class="flex items-center text-green-600 text-sm">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                專業服務
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 查看更多按鈕 - 跳轉到詳細頁面 -->
      <div class="text-center mt-8">
        <NuxtLink
          to="/services"
          class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        >
          查看完整服務項目
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    name: "推拿",
    description:
      "運用民俗調理推拿手法，疏通經絡、活血化瘀，有效緩解肌肉疲勞和關節疼痛",
    price: "NT$ 180",
    duration: "10分鐘",
    icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z",
  },
  {
    id: 2,
    name: "刮痧",
    description:
      "傳統民俗調理刮痧療法，透過特定手法刮拭皮膚，促進氣血循環，排除體內毒素",
    price: "NT$ 180",
    duration: "10分鐘",
  },
  {
    id: 3,
    name: "拔罐",
    description:
      "運用拔罐技術，通過負壓吸引改善局部血液循環，有效緩解疼痛和肌肉緊張",
    price: "NT$ 150",
    duration: "10分鐘",
  },
];
</script>
