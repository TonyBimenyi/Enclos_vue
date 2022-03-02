<template>
    <div class="container">
    
              <div class="wrapper fadeInDown">
          <div id="formContent">
            <!-- Tabs Titles -->
            <img src="/image/logo.jpg" alt="">

            <!-- Icon -->
            <div class="fadeIn first">
              <span>Connexion</span>
            </div>

            <!-- Login Form -->
            
              <input type="text" id="login" v-model="username" class="fadeIn second" name="login" placeholder="Nom d'utilisateur">
              <input type="password" v-model="password" id="password" class="fadeIn third" name="login" placeholder="Mot de passe">
              <input type="submit" @click="login"  value="Se connecter">
            

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
            </div>

          </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    name: 'Login',
    data(){
        return{
            username:'',
            password:'',
            errors:[],
            // badmssg:''
        }
    },
    methods:{
        login(){
            const formData = {
                username: this.username,
                password: this.password
            }
            // if(this.$store.state.user.username != this.username){
            //     this.badmssg='Yess'
            // }else{
            axios
                .post("http://127.0.0.1:8000/api/login/", formData)
                .then(response => {
                    this.$store.state.user = response.data
                    console.log(this.$store.state.user)
                    this.$router.push('/about')
                })
                .catch(error=>{
                  console.log(error)
                  alert(error)
                })
            // }
        },

    }
}
</script>
<style scoped>
  .container{
    
  }
</style>