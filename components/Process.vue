<template>
  <section id="process" class="py-16 bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          調理流程
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          我們設計了簡單清晰的四個步驟，確保您能獲得最專業、最安心的調理體驗。
        </p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- Desktop connecting line -->
        <div class="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-300"></div>
        
        <div class="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8">
          <div
            v-for="(step, index) in steps"
            :key="step.id"
            class="relative text-center"
          >
            <!-- Step Circle -->
            <div class="relative z-10 w-16 h-16 mx-auto bg-white border-4 border-green-600 rounded-full flex items-center justify-center text-green-600 font-bold text-2xl mb-4 shadow-lg">
              {{ index + 1 }}
            </div>
            
            <!-- Step Content -->
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              {{ step.title }}
            </h3>
            <p class="text-gray-600 text-sm">
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
    description: "透過官方LINE聯絡我們，預約您的專屬時段。",
  },
  {
    id: 2,
    title: "身體評估",
    description: "調理前，推拿師會與您溝通，了解您的身體狀況。",
  },
  {
    id: 3,
    title: "專業調理",
    description: "針對您的需求，提供客製化的推拿調理服務。",
  },
  {
    id: 4,
    title: "保健建議",
    description: "調理後，給予您個人化的日常保健與放鬆建議。",
  },
];
</script>