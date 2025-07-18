<template>
  <section id="testimonials" class="py-16 bg-warm-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          顧客怎麼說
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          我們的專業與用心，都體現在顧客的真實好評中。
        </p>
      </div>

      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="carousel__item">
            <div
              class="bg-white rounded-xl shadow-lg p-8 mx-2 flex flex-col h-full"
            >
              <p class="text-gray-600 italic mb-6 flex-grow">
                "{{ testimonial.content }}"
              </p>
              <div class="flex items-center mt-auto">
                <div
                  class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-800">
                    {{ testimonial.name }}
                  </p>
                  <div class="flex items-center text-yellow-400">
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};

const testimonials = [
  {
    id: 1,
    name: "王小姐",
    content:
      "長期坐辦公室，肩頸僵硬到不行。來這裡調理幾次後，真的感覺輕鬆很多，晚上下班不再那麼痛苦了。",
  },
  {
    id: 2,
    name: "李先生",
    content:
      "師傅的手法非常專業，能準確找到我痠痛的點。每次推拿完都像充飽電一樣，整個人都活過來了！",
  },
  {
    id: 3,
    name: "陳女士",
    content:
      "之前因為膝蓋問題，連蹲下都有困難。經過師傅細心調理，現在不僅能輕鬆蹲下，還能去爬山，太感謝了！",
  },
  {
    id: 4,
    name: "張先生",
    content:
      "工作需要常常搬重物，手臂常常舉不起來。來這裡推拿後，活動角度明顯改善，工作效率都變高了。",
  },
  {
    id: 5,
    name: "林小姐",
    content:
      "最近壓力大一直睡不好，朋友推薦來這裡試試。推拿完整個人都鬆了下來，晚上真的有比較好睡，睡眠品質提升很多。",
  },
  {
    id: 6,
    name: "黃女士",
    content:
      "生完小孩後總覺得骨盆卡卡的。來這裡調整了幾次，感覺順暢很多，走路也舒服多了，真心推薦給產後媽媽！",
  },
];
</script>

<style>
.carousel__prev,
.carousel__next {
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.carousel__prev:hover,
.carousel__next:hover {
  background-color: #f0f0f0;
}
.carousel__pagination-button::after {
  background-color: #d1d5db;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: #10b981;
}
</style>
