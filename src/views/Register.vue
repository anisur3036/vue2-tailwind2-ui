<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <img class="w-10 h-10 mr-2" src="/img/SKCL-Logo.png" alt="SKCL" />
        <span class="text-gray-700 font-semibold text-2xl">Create Account</span>
      </div>

      <form class="mt-4" @submit.prevent="register">
        <input-field
          name="name"
          type="text"
          :rules="{ required: true, min: 3, max: 120 }"
        ></input-field>
        <input-field
          name="email"
          type="email"
          :rules="{ required: true, email: true }"
        ></input-field>
        <input-field
          name="password"
          ref="password"
          type="password"
          :rules="{ required: true, min: 6, max: 40 }"
        ></input-field>
        <input-field
          name="password2"
          ref="password2"
          type="password"
          :rules="{ required: true, match: true}"
        ></input-field>
        <div class="flex flex-col mt-6">
          <button
            type="submit"
            class="py-2 px-4 text-center bg-green-600 rounded-md w-full text-white text-sm hover:bg-green-500"
          >
            Register Now
          </button>
          <span class="text-center mt-3 text-green-600"
            >Have account?
            <router-link class="text-red-400 hover:underline" to="/login"
              >Login.</router-link
            ></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from '@/components/form/InputField';
export default {
  metaInfo: { title: 'Register' },
  components: {
    InputField
  },

  methods: {
  	register() {
  		console.log(this.password)
  	}
  }
};
</script>
