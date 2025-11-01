<template>
  <div>
    <!-- 導航選單 -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <NuxtLink
            to="/"
            class="text-xl font-bold text-green-600 hover:text-green-700 transition-colors"
          >
            友仁推拿整復
          </NuxtLink>

          <!-- 桌面版選單 -->
          <div class="hidden md:flex space-x-6">
            <a
              href="/#hero"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'hero',
              }"
            >
              首頁
              <span
                v-if="currentSection === 'hero'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
            <a
              href="/#about"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'about',
              }"
            >
              關於我們
              <span
                v-if="currentSection === 'about'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
            <a
              href="/#services"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'services',
              }"
            >
              服務項目
              <span
                v-if="currentSection === 'services'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
            <a
              href="/#benefits"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'benefits',
              }"
            >
              健康功效
              <span
                v-if="currentSection === 'benefits'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
            <a
              href="/#testimonials"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'testimonials',
              }"
            >
              客戶見證
              <span
                v-if="currentSection === 'testimonials'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
            <a
              href="/#faq"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'faq',
              }"
            >
              常見問題
              <span
                v-if="currentSection === 'faq'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
            <a
              href="/#contact"
              class="text-gray-700 hover:text-green-600 transition-colors relative"
              :class="{
                'text-green-600 font-medium': currentSection === 'contact',
              }"
            >
              聯絡我們
              <span
                v-if="currentSection === 'contact'"
                class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 rounded-full"
              ></span>
            </a>
          </div>

          <!-- 手機版選單按鈕 -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <svg
              v-if="!showMobileMenu"
              class="w-6 h-6 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- 手機版選單 -->
        <div
          v-if="showMobileMenu"
          class="md:hidden bg-white border-t"
          @click.stop
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/#hero"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'hero',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
                首頁
              </div>
            </a>
            <a
              href="/#about"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'about',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                關於我們
              </div>
            </a>
            <a
              href="/#services"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'services',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                服務項目
              </div>
            </a>
            <a
              href="/#benefits"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'benefits',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
                健康功效
              </div>
            </a>
            <a
              href="/#testimonials"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'testimonials',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                客戶見證
              </div>
            </a>
            <a
              href="/#faq"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'faq',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                常見問題
              </div>
            </a>
            <a
              href="/#contact"
              @click="closeMobileMenu"
              class="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
              :class="{
                'text-green-600 bg-green-50 font-medium':
                  currentSection === 'contact',
              }"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                聯絡我們
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要內容 -->
    <div class="pt-16 overflow-x-hidden">
      <NuxtPage />
      <Analytics />
    </div>
  </div>
</template>

<script setup>
import { Analytics } from "@vercel/analytics/nuxt";
const showMobileMenu = ref(false);
const currentSection = ref("hero");

// 切換手機版選單
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

// 關閉手機版選單
const closeMobileMenu = () => {
  showMobileMenu.value = false;
};

// 點擊頁面其他地方關閉選單
const handleClickOutside = (event) => {
  if (showMobileMenu.value && !event.target.closest("nav")) {
    closeMobileMenu();
  }
};

// 監聽滾動事件，自動高亮當前區塊
const handleScroll = () => {
  const sections = [
    "hero",
    "about",
    "services",
    "benefits",
    "testimonials",
    "faq",
    "contact",
  ];
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = 100; // 導覽列高度的補償

      // 如果區塊在視窗頂部附近，設為當前區塊
      if (rect.top <= offset && rect.bottom >= offset) {
        currentSection.value = section;
      }
    }
  });
};

// 平滑滾動到指定區塊
const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // 導覽列高度補償
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

// 生命週期鉤子
onMounted(() => {
  // 監聽滾動事件
  window.addEventListener("scroll", handleScroll);

  // 監聽點擊事件（關閉選單）
  document.addEventListener("click", handleClickOutside);

  // 初始化當前區塊
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});

// 頁面 meta 設定
useHead({
  titleTemplate: "%s | 友仁傳統推拿",
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});
</script>
