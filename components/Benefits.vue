<template>
  <section id="benefits" class="py-8 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-6 md:mb-12">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4"
        >
          推拿的健康功效
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          專業推拿不僅能放鬆身心，更能帶來多重健康益處
        </p>
      </div>

      <!-- 手機版：2x2 網格，桌面版：1x4 網格 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div v-for="benefit in benefits" :key="benefit.id" class="text-center">
          <!-- 手機版縮小圖示 -->
          <div
            class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-green-100 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 md:w-8 md:h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path :d="benefit.icon" />
            </svg>
          </div>
          <!-- 手機版縮小字體和間距 -->
          <h3
            class="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2"
          >
            {{ benefit.title }}
          </h3>
          <p class="text-gray-600 text-xs md:text-sm leading-tight">
            {{ benefit.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    id: 1,
    title: "改善血液循環",
    description: "促進血液流動，增加氧氣輸送",
    icon: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
  },
  {
    id: 2,
    title: "舒緩肌肉緊張",
    description: "釋放肌肉結節，減輕疼痛",
    icon: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z",
  },
  {
    id: 3,
    title: "減輕壓力",
    description: "降低壓力荷爾蒙，身心放鬆",
    icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
  },
  {
    id: 4,
    title: "提升睡眠品質",
    description: "幫助神經放鬆，改善睡眠",
    icon: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
  },
];
</script>
