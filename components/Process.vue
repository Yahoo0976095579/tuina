<template>
  <section id="process" class="py-8 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-6 md:mb-12">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4"
        >
          服務流程
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          專業貼心的服務流程，讓您享受最佳的推拿體驗
        </p>
      </div>

      <!-- 手機版：2x2 網格，桌面版：1x4 網格 -->
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="text-center"
          >
            <div class="relative mb-3 md:mb-6">
              <!-- 手機版縮小圓圈 -->
              <div
                class="w-12 h-12 md:w-16 md:h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg"
              >
                {{ index + 1 }}
              </div>
              <!-- 桌面版連接線 -->
              <div
                v-if="index < steps.length - 1"
                class="hidden md:block absolute top-6 md:top-8 left-1/2 w-full h-0.5 bg-green-200 transform translate-x-6 md:translate-x-8"
              ></div>
            </div>
            <!-- 手機版縮小字體 -->
            <h3
              class="text-sm md:text-lg font-semibold text-gray-800 mb-1 md:mb-2"
            >
              {{ step.title }}
            </h3>
            <p class="text-gray-600 text-xs md:text-sm leading-tight">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    id: 1,
    title: "LINE預約",
    description: "聯絡我們，告知需求和時間",
  },
  {
    id: 2,
    title: "身體評估",
    description: "了解身體狀況和主要問題",
  },
  {
    id: 3,
    title: "專業推拿",
    description: "提供客製化推拿服務",
  },
  {
    id: 4,
    title: "保健建議",
    description: "給予日常保健和預約建議",
  },
];
</script>
