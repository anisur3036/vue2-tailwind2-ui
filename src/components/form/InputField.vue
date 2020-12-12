<template>
  <label class="relative block">
    <span class="text-gray-700 text-sm">{{ name }}</span>
    <input
      :name="name"
      :class="
        false
          ? 'border-red-300 focus:ring-red-300 focus:red-opacity-50'
          : 'border-green-300 focus:ring-green-300 focus:green-opacity-50'
      "
      :type="type"
      class="py-1 px-2 mt-1 border block w-full rounded-md focus:ring-1"
      v-model="form.name"
    />
    <p class="mt-1 text-sm text-red-600">
      {{ errorMessage }}
    </p>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    type: {
      type: String
    },
    rules: {
      type: Object
    },
    password: {
    	type: String
    },
    password2: {
    	type: String
    }
  },
  data() {
    return {
      errors: true,
      form: {
        name: null
      }
    };
  },
  method: {
    upperCaseFirst(value) {
      return value[0].toUpperCase() + value.substring(1);
    }
  },
  computed: {
    errorMessage() {
      const upperCaseFirst = value => {
        return value[0].toUpperCase() + value.slice(1);
      };

      if (this.rules.required && !this.form.name) {
        return `${upperCaseFirst(this.name)} is requied.`;
      }

      if (this.rules.min && this.form.name.length < this.rules.min) {
        return `${upperCaseFirst(this.name)} field should be minimum ${
          this.rules.min
        } character length`;
      }
      if (this.rules.max && this.form.name.length > this.rules.max) {
        return `${upperCaseFirst(this.name)} field should be maximum ${
          this.rules.max
        } character length`;
      }

      if (
        this.rules.email &&
        /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{2,})+@([a-zA-Z0-9-]{2,})+\.([a-zA-Z0-9-]{2,6})$/.test(
          this.form.name
        ) === false
      ) {
        return `${upperCaseFirst(this.name)} must be valied email.`;
      }
      if (this.password != this.password2) {
        return `${upperCaseFirst(this.name)} not match.`;
      }
      return null;
    }
  }
};
</script>
