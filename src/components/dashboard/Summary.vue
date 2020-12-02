<template>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      v-for="summary in summaryDatas"
      :key="summary.id"
      class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"
    >
      <div class="relative zoom-in">
        <div
          class="box shadow rounded-md p-5 cursor-pointer bg-white bg-white transform hover:scale-105 transition duration-200"
        >
          <div class="flex">
            <icon :name="summary.icon" class="w-8 h-8 text-indigo-600" />
            <div class="ml-auto">
              <div
                class="flex items-center rounded-full py-1 px-2 bg-indigo-600 font-semibold text-sm text-white cursor-pointer"
              >
                {{ summary.percent }}%
                <icon name="chevron_up" class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div class="text-3xl font-bold leading-8 mt-6">
            {{ summary.value }}
          </div>
          <div class="text-base text-gray-600 mt-1">{{ summary.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/shared/Icon';
export default {
  components: {
    Icon
  },
  data() {
    return {
      summaryDatas: [
        {
          id: 1,
          icon: 'users',
          percent: 33,
          value: 5012,
          text: 'Total Users'
        },
        {
          id: 2,
          icon: 'computer',
          percent: 90,
          value: 300,
          text: 'Total Computers'
        },
        {
          id: 3,
          icon: 'video-camera',
          percent: 99,
          value: 320,
          text: 'Total Camera'
        },
        {
          id: 4,
          icon: 'settings',
          percent: 33,
          value: 12,
          text: 'New Installation'
        }
      ]
    };
  }
};
</script>
