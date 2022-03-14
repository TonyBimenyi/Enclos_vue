<template>
<div class="container">
  <template v-if="$store.state.user">
  <div class="header" >
    <!DOCTYPE html>
<!-- Created By CodingNepal - www.codingnepalweb.com -->
  <nav>
    
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo"><a href="/dashboard"><img src="/image/logo2.png" alt=""></a></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name">CodingLab</span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
        
          <li>
            <span class="material-icons-outlined">
                  person
                  </span> <router-link to="/students">ELEVES
            </router-link>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="htmlCss-sub-menu sub-menu">
              <li><router-link to="/students">Listes des eleves</router-link></li>
              <li><a href="#">
                Minervales</a></li>
<!--             
              <li class="more">
                <span><a href="#">More</a>
                <i class='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
                <ul class="more-sub-menu sub-menu">
                  <li><a href="#">Neumorphism</a></li>
                  <li><a href="#">Pre-loader</a></li>
                  <li><a href="#">Glassmorphism</a></li>
                </ul>
              </li> -->
            </ul>
          </li>
          <li>
            <span class="material-icons-outlined">psychology</span>
            <router-link to="">ENSEIGNANTS</router-link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><router-link to="">Listes des enseignants</router-link></li>
              <li><router-link to="">Salaires Enseignants</router-link></li>
            </ul>
          </li>
          <li>
            <span class="material-icons-outlined">account_box</span>
            <router-link to="">ADMINISTRATIFS</router-link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><router-link to="">Listes des Administratifs</router-link></li>
              <li><router-link to="">Salaires Administratif</router-link></li>
            </ul>
          </li>
           <li>
              <span class="material-icons-outlined">group_add</span>
            <router-link to="">VACATAIRES</router-link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><router-link to="">Listes des Vacataires</router-link></li>
              <li><router-link to="">Salaires Vacataires</router-link></li>
            </ul>
          </li>  
           <li>
              <span class="material-icons-outlined">outbox</span>
            <router-link to="">DEPENSES</router-link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><router-link to="">Types des Depenses</router-link></li>
              <li><router-link to="">Listes des Depenses</router-link></li>
            </ul>
          </li>
             <li>
            <span class="material-icons-outlined">move_to_inbox</span>
            <router-link to="">REVENUS</router-link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
               <li><router-link to="">Types des revenus</router-link></li>
              <li><router-link to="">Listes des Revenus</router-link></li>
            </ul>
          </li>
             <li>
                <span class="material-icons-outlined">account_balance</span>
            <router-link to="">BANQUE</router-link>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><router-link to="">Liste des Retraits</router-link></li>
              <li><router-link to="">Liste des Versements</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="logout">
       <button @click="logout">Deconnexion</button>
      </div>
      <div class="username">
         <p> {{$store.state.user.username}}</p>
        
      </div>
      <div class="search-box">
        <i class='bx bx-search'></i>
        <div class="input-box">
          <input type="text" placeholder="Search...">
        </div>
      </div>
    </div>
   
  </nav>
  </div>
   </template>
   <template v-else>
   </template>
  <router-view/>
</div>

</template>
<script>
export default {
  mounted(){
      var user = JSON.parse(localStorage.getItem('user'))
      if(user){
        this.$store.state.user = user
      }
    },
    watch: {
      '$store.state.user': {
        deep: true,
        handler(new_val){
          if(new_val){
            localStorage.setItem('user', JSON.stringify(new_val))
          }else{
            localStorage.removeItem('user')
          }
        }
      }
    },
      methods:{
        logout(){
            this.$store.state.user = null,
            localStorage.removeItem('user'),
            this.$router.push('/')
      },
      }
}

</script>
<style lang="scss">
    @import url(./assets/css/base.css);
    @import url(./assets/css/form.css);
    @import url(./assets/css/header.css);
    @import url(./assets/css/table.css);
</style>
