<template>
    <div class="container">
    
         <div class="wrapper fadeInDown">
          <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
              <span>Ajouter un eleve</span>
            </div>

            <!-- Login Form -->
            
              <input type="text" id="login" v-model="username" class="fadeIn second" name="login" placeholder="Nom d'eleve">
              <input type="text" v-model="password" id="password" class="fadeIn third" name="login" placeholder="Prenom">
              <select name="" id="">
                  <option disabled>--Selectionner--</option>
                  <option value="">Fondamental</option>
                  <option value="">Post Fondamental</option>
              </select>
             
              <input type="text" v-model="password" id="password" class="fadeIn third" name="login" placeholder="Classe">
              <label for="">Date de Naissance</label>
              <input type="date" v-model="password" id="password" class="fadeIn third" name="login" placeholder="Date de Naissance">
             
              <input class="submit" type="submit" @click="login"  value="AJOUTER">
            

            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a @click="close" class="underlineHover" href="#">Fermer</a>
            </div>

          </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
export default {
    methods:{
        close(){
            this.$emit('close')
        },
    }
}
</script>
<style scoped>
  .container{
     background: rgba(0, 0, 0, 0.871);
     z-index: 1;
     top:0;
     position: fixed;
     display: flex;
     justify-content: center;
     width: 100%;
     height: 100%;
  }
  input{
      height: 40px;
      /* border-bottom: 2px solid var(--yellow); */
  }
  .submit{
      height: 50px;
  }
  input[type=date]{
    background-color: back;
    border: none;
    color: var(--blue);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
}
select{
    background-color: white;
    border: none;
    /* height: 45px; */
    color: var(--blue);
    cursor:pointer;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid #f6f6f6;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
}
label{
    display: block;
    color: #778FAC;
    margin-top:10px;
}
input[type="button"], input[type="submit"], input[type="reset"]{
    margin-bottom: 20px;
}
#formFoote{
    padding: 10px;
}
.wrapper{
    margin-top:30px;
}
</style>