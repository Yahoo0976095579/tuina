<template>
  <nav class="bg-gray-100 py-3" aria-label="麵包屑導航">
    <div class="container mx-auto px-4">
      <ol class="flex items-center space-x-2 text-sm">
        <li>
          <NuxtLink
            to="/"
            class="text-green-600 hover:text-green-700 transition-colors"
          >
            <svg
              class="w-4 h-4 mr-1 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-3a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            首頁
          </NuxtLink>
        </li>

        <li
          v-for="(item, index) in breadcrumbs"
          :key="index"
          class="flex items-center"
        >
          <svg
            class="w-4 h-4 mx-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>

          <NuxtLink
            v-if="item.link && index < breadcrumbs.length - 1"
            :to="item.link"
            class="text-green-600 hover:text-green-700 transition-colors"
          >
            {{ item.text }}
          </NuxtLink>

          <span
            v-else
            class="text-gray-500 font-medium"
            :aria-current="index === breadcrumbs.length - 1 ? 'page' : false"
          >
            {{ item.text }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});
</script>
