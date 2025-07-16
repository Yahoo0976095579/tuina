<template>
  <section id="faq" class="py-8 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-6 md:mb-8">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4"
        >
          常見問題
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          為您解答推拿相關的常見疑問
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- 手機版單欄，桌面版雙欄 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div v-for="faq in faqs" :key="faq.id" class="mb-2 md:mb-0">
            <button
              @click="toggleFAQ(faq.id)"
              class="w-full bg-white rounded-lg shadow-md p-3 md:p-4 text-left hover:shadow-lg transition-shadow duration-300"
            >
              <div class="flex justify-between items-center">
                <h3
                  class="font-semibold text-gray-800 text-sm md:text-base pr-3"
                >
                  {{ faq.question }}
                </h3>
                <svg
                  :class="{ 'rotate-180': openFAQ === faq.id }"
                  class="w-4 h-4 text-gray-500 transition-transform duration-300 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                v-if="openFAQ === faq.id"
                class="mt-2 text-gray-600 text-sm leading-relaxed"
              >
                {{ faq.answer }}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openFAQ = ref(null);

const toggleFAQ = (id) => {
  openFAQ.value = openFAQ.value === id ? null : id;
};

const faqs = [
  {
    id: 1,
    question: "第一次來推拿需要注意什麼？",
    answer:
      "建議穿著寬鬆舒適的衣物，推拿前避免飽食，如有特殊疾病請事先告知師傅。",
  },
  {
    id: 2,
    question: "推拿後有什麼注意事項？",
    answer:
      "推拿後請多喝水幫助排毒，避免立即洗澡，建議休息30分鐘後再進行其他活動。",
  },
  {
    id: 3,
    question: "多久推拿一次比較好？",
    answer:
      "一般建議每週1-2次，根據個人身體狀況調整。長期坐辦公室的人可以增加頻率。",
  },
  {
    id: 4,
    question: "推拿會痛嗎？",
    answer:
      "推拿過程中可能會有酸脹感，這是正常現象。師傅會根據您的承受度調整力道。",
  },
  {
    id: 5,
    question: "孕婦可以推拿嗎？",
    answer:
      "孕婦需要特別注意，建議先諮詢醫師意見，我們也提供孕婦專用的溫和推拿服務。",
  },
  {
    id: 6,
    question: "可以指定師傅嗎？",
    answer: "可以的！如果您有偏好的師傅，請在LINE預約時告知，我們會盡量安排。",
  },
];
</script>
