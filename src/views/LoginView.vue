<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="userId" v-model="userId" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
            type="password"
            id="userPassword"
            v-model="userPassword"
            required
        />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      userPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(`/api/cs/user/login`, {
          userId: this.userId,
          userPassword: this.userPassword,
        });

        const data = response.data;
        if (data.code === 200) {
          console.log("Login successful!");
          await this.$store.commit("setLoginStatus", true);
          console.log("Login status set to true!");
          await this.$router.push("/success");
        } else {
          this.errorMessage = data.message;
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        this.errorMessage = "An error occurred during login.";
      }
    },
  },
};
</script>

<style scoped></style>
