<template>
  <section id="about" class="py-8 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8 md:mb-12">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
        >
          關於我們
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          多年專業推拿經驗，致力於為每位客戶提供最優質的服務
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- 主要介紹 -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-6 md:mb-8"
        >
          <div class="about-content">
            <h3
              class="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6"
            >
              專業團隊 · 用心服務
            </h3>
            <p class="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              我們的師傅團隊擁有豐富的推拿經驗，每位師傅都經過嚴格培訓，持有相關專業證照。團隊成員各有專精，能針對不同需求提供最適合的推拿服務。
            </p>
            <div class="space-y-3 md:space-y-4">
              <div class="flex items-start">
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm md:text-base">
                    5位專業師傅
                  </h4>
                  <p class="text-gray-600 text-sm md:text-base">
                    團隊成員各有專精，提供多元化推拿服務
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm md:text-base">
                    彈性預約時間
                  </h4>
                  <p class="text-gray-600 text-sm md:text-base">
                    多位師傅確保更彈性的預約時段選擇
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <svg
                  class="w-5 h-5 md:w-6 md:h-6 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div>
                  <h4 class="font-semibold text-gray-800 text-sm md:text-base">
                    品質保證
                  </h4>
                  <p class="text-gray-600 text-sm md:text-base">
                    統一的服務標準，確保每次推拿品質一致
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="about-image order-first md:order-last">
            <img
              src="../assets/images/teams.png"
              alt="專業師傅團隊照片"
              class="w-full h-48 md:h-64 bg-gray-200 rounded-lg object-contain"
            />
          </div>
        </div>

        <!-- 師傅團隊簡介 - 超緊湊版本 -->
        <div class="bg-white rounded-lg shadow-md p-3 md:p-6 mb-6 md:mb-8">
          <h3
            class="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 text-center"
          >
            專業師傅團隊
          </h3>

          <!-- 師傅頭像展示 - 緊湊版 -->
          <div
            class="grid grid-cols-3 md:grid-cols-5 gap-1 md:gap-3 mb-4 md:mb-5"
          >
            <div
              v-for="therapist in therapists"
              :key="therapist.id"
              class="text-center"
            >
              <div
                class="w-10 h-10 md:w-16 md:h-16 mx-auto mb-1 md:mb-2 bg-green-200 rounded-full flex items-center justify-center"
              >
                <span class="text-green-700 font-semibold text-sm md:text-lg">{{
                  therapist.name.charAt(0)
                }}</span>
              </div>
              <h4 class="font-semibold text-gray-800 text-xs md:text-sm">
                {{ therapist.name }}
              </h4>
              <p class="text-green-600 text-xs md:text-xs">
                {{ therapist.title }}
              </p>
            </div>
          </div>

          <!-- 查看師傅詳細介紹按鈕 -->
          <div class="text-center">
            <NuxtLink
              to="/therapists"
              class="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              查看所有師傅詳細介紹
            </NuxtLink>
          </div>
        </div>

        <!-- 數據統計 -->
        <div class="flex justify-center">
          <div class="grid grid-cols-2 gap-6 text-center">
            <div class="stats-item">
              <div
                class="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2"
              >
                5+
              </div>
              <div class="text-gray-800 text-sm md:text-base">專業師傅</div>
            </div>
            <div class="stats-item">
              <div
                class="text-2xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2"
              >
                1000+
              </div>
              <div class="text-gray-800 text-sm md:text-base">滿意客戶</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from "~/composables/useScrollAnimation";

const therapists = [
  {
    id: 1,
    name: "廖冠雄",
    title: "老闆",
    experience: "30年經驗",
  },
  {
    id: 2,
    name: "黃秀滿",
    title: "女推拿師",
    experience: "12年經驗",
  },
  {
    id: 3,
    name: "施檸檬",
    title: "女推拿師",
    experience: "10年經驗",
  },
  {
    id: 4,
    name: "皇冠",
    title: "女推拿師",
    experience: "6年經驗",
  },
  {
    id: 5,
    name: "曾士滕",
    title: "男推拿師",
    experience: "6年經驗",
  },
];

onMounted(() => {
  const { initAboutAnimations } = useScrollAnimation();
  initAboutAnimations();
});
</script>
