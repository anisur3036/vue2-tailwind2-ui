<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img class="w-10 h-10 mr-2" src="/img/SKCL-Logo.png" alt="SKCL" />
        <span class="text-gray-700 font-semibold text-2xl">Create Account</span>
      </div>

      <form class="mt-4" @submit.prevent="register">
        <label class="relative block">
          <span class="text-gray-700 text-sm">Your name</span>
          <input
            :class="
              errors[0]
                ? 'border-red-300 focus:ring-red-300 focus:red-opacity-50'
                : 'border-green-300 focus:ring-green-300 focus:green-opacity-50'
            "
            type="text"
            class="py-1 px-2 mt-1 border block w-full rounded-md focus:ring-1"
            v-model="form.name"
          />
          <icon
            v-if="!errors[0]"
            name="check"
            class="w-4 h-4 absolute text-green-300 top-0 right-0 mt-8 mr-2 z-20"
          />
          <icon
            v-if="errors[0]"
            name="close"
            class="w-4 h-4 absolute top-0 text-red-300 right-0 mt-9 mr-2 z-20"
          />
        </label>
        <label class="relative block">
          <span class="text-gray-700 text-sm">Email</span>
          <input
            type="email"
            :class="
              errors[0]
                ? 'border-red-300 focus:ring-red-300 focus:red-opacity-50'
                : 'border-green-300 focus:ring-green-300 focus:green-opacity-50'
            "
            class="py-1 px-2 mt-1 border border-green-200 block w-full rounded-md focus:ring-1 focus:ring-green-200 focus:green-opacity-50"
            v-model="form.email"
          />
          <template v-if="!errors">
            <icon
              v-show="errors[0]"
              name="close"
              class="w-4 h-4 absolute top-0 text-red-300 right-0 mt-9 mr-2 z-20"
            />
          </template>
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Password</span>
          <input
            type="password"
            :class="
              errors[0]
                ? 'border-red-300 focus:ring-red-300 focus:red-opacity-50'
                : 'border-green-300 focus:ring-green-300 focus:green-opacity-50'
            "
            class="py-1 px-2 border border-green-200 mt-1 block w-full rounded-md focus:ring-1 focus:ring-green-200 focus:green-opacity-50"
            v-model="form.password"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Confirm Password</span>
          <input
            type="password"
            :class="
              errors[0]
                ? 'border-red-300 focus:ring-red-300 focus:red-opacity-50'
                : 'border-green-300 focus:ring-green-300 focus:green-opacity-50'
            "
            class="py-1 px-2 border border-green-200 mt-1 block w-full rounded-md focus:ring-1 focus:ring-green-200 focus:green-opacity-50"
            v-model="form.password2"
          />
        </label>
        <div class="flex flex-col mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-green-600 rounded-md w-full text-white text-sm hover:bg-green-500"
          >
            Register Now
          </button>
          <span class="text-center mt-3 text-green-600"
            >Do not have account?
            <router-link class="text-red-400 hover:underline" to="/login"
              >Register now</router-link
            ></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from "@/shared/Icon";
export default {
  components: {
    Icon
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password2: null
      },
      errors: []
    };
  },
  methods: {
    register() {
      this.errors = [];
      if (
        this.form.name &&
        this.form.email &&
        this.form.password &&
        this.form.password2
      ) {
        return true;
      }

      if (!this.form.name) {
        this.errors.push({ name: "Name is required." });
        console.log(this.errors[0].name);
      }
      if (!this.form.email) {
        this.errors.push({ email: "Email is required." });
        console.log(this.errors[0].email);
      }

      if (
        /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{2,})+@([a-zA-Z0-9-]{2,})+(?:\.([a-zA-Z0-9-]{2,6}))*$/.test(
          this.form.email
        ) === false
      ) {
        this.errors.push({ email: "Email is not valid." });
        console.log(this.errors[0].email);
      }
    }
  }
};
</script>
