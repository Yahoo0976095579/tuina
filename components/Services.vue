<script setup>
import { ref } from "vue";

// State for the image zoom modal
const zoomedImageSrc = ref(null);

const openZoom = (src) => {
  zoomedImageSrc.value = src;
};

const closeZoom = () => {
  zoomedImageSrc.value = null;
};
</script>

<template>
  <div id="services" class="bg-gray-50">
    <!-- Page Title -->
    <div class="bg-gradient-to-br from-green-50 to-blue-50 py-8 md:py-12">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 md:mb-4"
          >
            服務項目與價目表
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            我們提供多樣化的專業推拿服務，價格透明。點擊下方價目表可放大圖片查閱。
          </p>
        </div>
      </div>
    </div>

    <!-- Image Price Lists Grid -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-3 gap-4 md:gap-8">
        <!-- Card 1: Monthly Offers -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
          <h3
            class="text-lg font-bold text-gray-800 text-center py-3 bg-gray-50"
          >
            本月優惠
          </h3>
          <div class="p-2 md:p-4">
            <img
              src="/images/本月優惠.png"
              alt="本月推拿優惠方案"
              class="w-full h-auto rounded-md shadow-sm cursor-pointer transition-transform duration-300 group-hover:scale-105"
              @click="openZoom('/images/本月優惠.png')"
            />
            <!-- SEO-friendly text, visually hidden -->
            <div class="sr-only">
              <h4>本月優惠</h4>
              <ul>
                <li>推拿+刮痧: 原價400元, 特價320元</li>
                <li>推拿+拔罐: 原價350元, 特價280元</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2: Main Price List -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
          <h3
            class="text-lg font-bold text-gray-800 text-center py-3 bg-gray-50"
          >
            價目表
          </h3>
          <div class="p-2 md:p-4">
            <img
              src="/images/價目表.jpg"
              alt="推拿服務價目表"
              class="w-full h-auto rounded-md shadow-sm cursor-pointer transition-transform duration-300 group-hover:scale-105"
              @click="openZoom('/images/價目表.jpg')"
            />
            <!-- SEO-friendly text, visually hidden -->
            <div class="sr-only">
              <h4>價目表</h4>
              <ul>
                <li>推拿一次: 200元</li>
                <li>推拿20分鐘: 300元</li>
                <li>推拿30分鐘: 400元</li>
                <li>推拿40分鐘: 520元</li>
                <li>拔罐: 150元</li>
                <li>刮痧: 200元</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3: Acupressure / Oil Massage -->
        <div class="bg-white rounded-lg shadow-lg overflow-hidden group">
          <h3
            class="text-lg font-bold text-gray-800 text-center py-3 bg-gray-50"
          >
            指壓/油壓
          </h3>
          <div class="p-2 md:p-4">
            <img
              src="/images/指壓油壓.jpg"
              alt="指壓與油壓方案價格"
              class="w-full h-auto rounded-md shadow-sm cursor-pointer transition-transform duration-300 group-hover:scale-105"
              @click="openZoom('/images/指壓油壓.jpg')"
            />
            <!-- SEO-friendly text, visually hidden -->
            <div class="sr-only">
              <h4>指壓油壓</h4>
              <ul>
                <li>指壓方案1小時: 850元</li>
                <li>油壓方案1小時: 1000元</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Zoom Modal -->
    <div
      v-if="zoomedImageSrc"
      @click="closeZoom"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
    >
      <img
        :src="zoomedImageSrc"
        alt="放大的價目表"
        class="max-w-full max-h-full object-contain"
        @click.stop
      />
      <button
        @click="closeZoom"
        class="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        &times;
      </button>
    </div>
  </div>
</template>
