<template>
  <div class="flex h-screen bg-gray-200">
    <!-- Sidebar -->
    <Sidebar />
    <!-- End-Sidebar -->

    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Header -->
      <Header />
      <!-- End-Header -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="px-4 py-4">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/layouts/Sidebar';
import Header from '@/layouts/Header';

export default {
  components: {
    Sidebar,
    Header
  }
};
</script>
