<template>
  <section id="testimonials" class="py-8 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-6 md:mb-12">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4"
        >
          客戶見證
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          聽聽我們客戶的真實回饋
        </p>
      </div>

      <!-- 手機版：3欄並排，桌面版：4欄 -->
      <div class="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-lg shadow-md p-2 md:p-4 text-center"
        >
          <!-- 簡化的星星顯示 -->
          <div class="flex items-center justify-center mb-1 md:mb-2">
            <div class="flex text-yellow-400">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-2 h-2 md:w-3 md:h-3 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>

          <!-- 非常精簡的評論 -->
          <p
            class="text-gray-600 mb-2 md:mb-3 text-xs md:text-sm leading-tight line-clamp-2"
          >
            "{{ testimonial.shortContent }}"
          </p>

          <!-- 極簡化的用戶資訊 -->
          <div class="text-center">
            <p class="font-semibold text-gray-800 text-xs md:text-sm">
              {{ testimonial.name }}
            </p>
            <p class="text-gray-500 text-xs">{{ testimonial.service }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: "王小姐",
    service: "肩頸推拿",
    shortContent: "手法專業，肩頸問題改善很多",
  },
  {
    id: 2,
    name: "李先生",
    service: "全身推拿",
    shortContent: "推拿後整個人都放鬆了",
  },
  {
    id: 3,
    name: "陳女士",
    service: "下半身整復",
    shortContent: "原本無法蹲下，調理完可以爬山了",
  },
  {
    id: 4,
    name: "張先生",
    service: "上半身調理",
    shortContent: "長期搬重，手舉不起來，推拿後我明顯改善了",
  },
  {
    id: 5,
    name: "林小姐",
    service: "全身推拿",
    shortContent: "最近都睡不好，推拿後全身放鬆，有改善睡眠品質了",
  },
  {
    id: 6,
    name: "黃女士",
    service: "骨盆調整",
    shortContent: "生完小孩骨盆有點寬，來這裡調整後明顯沒那麼寬了",
  },
];
</script>
