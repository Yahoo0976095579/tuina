<template>
  <section id="contact" class="py-8 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8 md:mb-12">
        <h2
          class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4"
        >
          聯絡我們
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          歡迎透過以下方式與我們聯絡，我們將為您提供專業的推拿服務諮詢
        </p>
      </div>

      <div
        class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        <!-- 店家資訊 -->
        <div class="bg-gray-50 rounded-lg p-6 md:p-8">
          <h3 class="text-lg md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
            店家資訊
          </h3>
          <div class="space-y-4">
            <!-- 地址 -->
            <div class="flex items-start">
              <svg
                class="w-5 h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <p class="font-semibold text-gray-800 text-sm md:text-base">
                  地址
                </p>
                <a
                  href="https://maps.app.goo.gl/GmA8iuGPJTUXn91H8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-green-600 transition-colors text-sm md:text-base underline"
                >
                  411台中市太平區中山路二段91號
                </a>
              </div>
            </div>

            <!-- 電話 -->
            <div class="flex items-start">
              <svg
                class="w-5 h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                ></path>
              </svg>
              <div>
                <p class="font-semibold text-gray-800 text-sm md:text-base">
                  電話
                </p>
                <a
                  href="tel:+886-4-2393-6663"
                  class="text-gray-600 hover:text-green-600 transition-colors text-sm md:text-base font-medium"
                >
                  04 2393 6663
                </a>
              </div>
            </div>

            <!-- 營業時間 -->
            <div class="flex items-start">
              <svg
                class="w-5 h-5 text-green-600 mr-2 md:mr-3 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>
                <p class="font-semibold text-gray-800 text-sm md:text-base">
                  營業時間
                </p>
                <div class="text-gray-600 text-sm md:text-base space-y-1">
                  <div>週一至週五：09:30 - 22:30</div>
                  <div>週六：14:30 - 22:30</div>
                  <div>週日：15:00 - 22:00</div>
                </div>
                <div class="mt-2">
                  <span
                    class="text-xs px-2 py-1 rounded-full font-medium"
                    :class="
                      businessStatus.isOpen
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    "
                  >
                    {{ businessStatus.text }}
                  </span>
                  <p class="text-xs text-gray-500 mt-1">
                    {{ businessStatus.nextChange }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LINE聯絡方式 - 優化版本 -->
        <div class="bg-green-50 rounded-lg p-6 md:p-8 text-center">
          <h3 class="text-lg md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
            LINE 立即預約
          </h3>
          <p class="text-gray-600 mb-4 text-sm md:text-base">
            加入我們的LINE官方帳號，快速預約推拿服務
          </p>

          <!-- 優化後的預約資訊 -->
          <div
            class="bg-white rounded-lg p-4 mb-4 md:mb-6 border-l-4 border-green-500"
          >
            <h4
              class="font-semibold text-gray-800 mb-3 text-sm md:text-base flex items-center"
            >
              <svg
                class="w-4 h-4 text-green-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              預約時請提供以下資訊
            </h4>
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-3 text-left text-xs md:text-sm"
            >
              <div class="flex items-start">
                <span class="text-green-500 mr-2 font-bold">①</span>
                <div>
                  <p class="font-medium text-gray-800">服務項目</p>
                  <p class="text-gray-600">推拿 / 刮痧 / 拔罐</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-2 font-bold">②</span>
                <div>
                  <p class="font-medium text-gray-800">預約時間</p>
                  <p class="text-gray-600">希望的日期和時段</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-2 font-bold">③</span>
                <div>
                  <p class="font-medium text-gray-800">指定師傅</p>
                  <p class="text-gray-600">可選擇或由我們推薦</p>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-green-500 mr-2 font-bold">④</span>
                <div>
                  <p class="font-medium text-gray-800">特殊需求</p>
                  <p class="text-gray-600">身體狀況或注意事項</p>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="openLine"
            class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 md:gap-3 mx-auto mb-3 md:mb-4"
          >
            <svg
              class="w-5 h-5 md:w-6 md:h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
              />
            </svg>
            加入LINE官方帳號
          </button>

          <p class="text-xs md:text-sm text-gray-500">LINE ID: @your-line-id</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 營業時間邏輯保持不變
const businessStatus = computed(() => {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  let openTime,
    closeTime,
    isOpen = false,
    nextChange = "";

  if (currentDay >= 1 && currentDay <= 5) {
    openTime = 9 * 60 + 30;
    closeTime = 22 * 60 + 30;
    isOpen = currentTime >= openTime && currentTime <= closeTime;

    if (isOpen) {
      const remainingMinutes = closeTime - currentTime;
      const remainingHours = Math.floor(remainingMinutes / 60);
      const remainingMins = remainingMinutes % 60;
      nextChange = `${remainingHours}小時${remainingMins}分鐘後休息`;
    } else if (currentTime < openTime) {
      const minutesToOpen = openTime - currentTime;
      const hoursToOpen = Math.floor(minutesToOpen / 60);
      const minsToOpen = minutesToOpen % 60;
      nextChange = `${hoursToOpen}小時${minsToOpen}分鐘後開始營業`;
    } else {
      nextChange = "明日 09:30 開始營業";
    }
  } else if (currentDay === 6) {
    openTime = 14 * 60 + 30;
    closeTime = 22 * 60 + 30;
    isOpen = currentTime >= openTime && currentTime <= closeTime;

    if (isOpen) {
      const remainingMinutes = closeTime - currentTime;
      const remainingHours = Math.floor(remainingMinutes / 60);
      const remainingMins = remainingMinutes % 60;
      nextChange = `${remainingHours}小時${remainingMins}分鐘後休息`;
    } else if (currentTime < openTime) {
      const minutesToOpen = openTime - currentTime;
      const hoursToOpen = Math.floor(minutesToOpen / 60);
      const minsToOpen = minutesToOpen % 60;
      nextChange = `${hoursToOpen}小時${minsToOpen}分鐘後開始營業`;
    } else {
      nextChange = "明日 15:00 開始營業";
    }
  } else {
    openTime = 15 * 60;
    closeTime = 22 * 60;
    isOpen = currentTime >= openTime && currentTime <= closeTime;

    if (isOpen) {
      const remainingMinutes = closeTime - currentTime;
      const remainingHours = Math.floor(remainingMinutes / 60);
      const remainingMins = remainingMinutes % 60;
      nextChange = `${remainingHours}小時${remainingMins}分鐘後休息`;
    } else if (currentTime < openTime) {
      const minutesToOpen = openTime - currentTime;
      const hoursToOpen = Math.floor(minutesToOpen / 60);
      const minsToOpen = minutesToOpen % 60;
      nextChange = `${hoursToOpen}小時${minsToOpen}分鐘後開始營業`;
    } else {
      nextChange = "明日 09:30 開始營業";
    }
  }

  return {
    isOpen,
    text: isOpen ? "營業中" : "休息中",
    nextChange,
  };
});

const openLine = () => {
  window.open("https://line.me/R/ti/p/@your-line-id", "_blank");

  if (typeof gtag !== "undefined") {
    gtag("event", "line_contact_click", {
      event_category: "contact",
      event_label: "contact_section_button",
    });
  }
};
</script>
