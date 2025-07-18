<template>
  <!-- 移除 h-screen，改用適應性高度 -->
  <section
    id="hero"
    class="hero-section min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-20"
  >
    <div class="hero-content text-center px-4 z-10 max-w-4xl">
      <!-- 手機版標題字體調整 -->
      <h1
        class="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight"
      >
        專業推拿團隊
        <br />
        <span class="text-green-600">舒緩身心</span>
      </h1>

      <p
        class="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        多位專業師傅為您服務，提供個人化推拿按摩，幫助您釋放疲勞、改善循環
      </p>

      <!-- 手機版按鈕調整 -->
      <button
        @click="scrollToContact"
        class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 mb-4 md:mb-6"
      >
        立即聯絡預約
      </button>

      <!-- 手機版營業時間調整 -->
      <div
        class="text-xs md:text-sm text-gray-500 flex flex-col items-center gap-1"
      >
        <div class="flex items-center gap-1">
          <svg
            class="shrink-0 w-3 h-3 md:w-4 md:h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="font-semibold">營業時間</span>
        </div>

        <span>週一至週五 09:30-22:00</span>
        <span>週六 14:30-22:00</span>
        <span>週日 15:00-22:00</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from "~/composables/useScrollAnimation";

const scrollToContact = () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
};

onMounted(() => {
  const { initHeroAnimations } = useScrollAnimation();
  initHeroAnimations();
});
</script>
