<template>
  <section id="benefits" class="relative py-16 bg-white overflow-hidden">
    <!-- Decorative background gradients -->
    <div class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
      <div class="w-96 h-96 rounded-full bg-green-500/5 blur-3xl"></div>
    </div>
    <div class="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
      <div class="w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
    </div>

    <div class="relative container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          推拿的健康效益
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          透過專業的推拿調理，您的身體將能體驗到多方面的顯著改善。
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div 
          v-for="benefit in benefits" 
          :key="benefit.id" 
          class="bg-white/60 backdrop-blur-sm border border-gray-200/80 rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="benefit.icon"></svg>
          </div>
          <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-2">
            {{ benefit.title }}
          </h3>
          <p class="text-xs md:text-sm text-gray-600">
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
    description: "促進氣血流動，增加末梢含氧量，改善手腳冰冷。",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>`,
  },
  {
    id: 2,
    title: "舒緩肌肉緊張",
    description: "釋放深層肌肉的緊繃與結節，有效減輕身體的疼痛與不適。",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>`,
  },
  {
    id: 3,
    title: "減輕壓力焦慮",
    description: "調節自律神經，降低壓力荷爾蒙，讓您的身心靈重獲平靜。",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`,
  },
  {
    id: 4,
    title: "提升睡眠品質",
    description: "幫助中樞神經系統放鬆，更容易進入深層睡眠，改善失眠問題。",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>`,
  },
];
</script>