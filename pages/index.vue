<template>
  <div>
    <!-- Hero 區塊 -->
    <section class="hero">
      <h1>友仁推拿館 - 專業推拿服務</h1>
      <p>友仁推拿館提供專業推拿按摩服務，經驗豐富的師傅團隊為您舒緩疲勞</p>
    </section>
    <!-- About 區塊 -->
    <section id="about">
      <h2>關於友仁推拿館</h2>
      <p>友仁推拿館成立多年，致力於提供最專業的推拿服務...</p>
    </section>
    <Services />
    <Benefits />
    <Process />
    <Testimonials />
    <FAQ />
    <Contact />
    <FloatingLineButton />
  </div>
</template>

<script setup>
import { useScrollAnimation } from "~/composables/useScrollAnimation";

useHead({
  title: "友仁推拿館 - 專業推拿服務",
  meta: [
    {
      name: "description",
      content:
        "提供專業推拿按摩服務，肩頸推拿、全身推拿、足底按摩。改善血液循環、舒緩疲勞。LINE預約更便利。",
    },
  ],
});

const { initScrollAnimations } = useScrollAnimation();

onMounted(() => {
  initScrollAnimations();
});
</script>
