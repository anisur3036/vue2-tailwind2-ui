<template>
  <app-layout>
    <div class="grid grid-cols-12">
      <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-2">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <a href="" class="ml-auto flex items-center">
              <icon class="w-4 h-4 text-indigo-500 mr-1" name="refresh" />
              Reload
            </a>
          </div>
          <!-- Summary -->
          <dashboard-summary></dashboard-summary>
          <!-- End-Summary -->
        </div>
      </div>
    </div>
  </app-layout>
</template>
<script>
import AppLayout from '@/layouts/Default';
import DashboardSummary from '@/components/dashboard/Summary';
import Icon from '@/shared/Icon';
export default {
  components: {
    AppLayout,
    Icon,
    DashboardSummary
  }
};
</script>
