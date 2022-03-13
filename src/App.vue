<template>
<div class="container">
  <template v-if="$store.state.user">
  <div class="header" >
    <!DOCTYPE html>
<!-- Created By CodingNepal - www.codingnepalweb.com -->
  <nav>
    
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo"><a href="#">Ecole des Enclos</a></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name">CodingLab</span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">HTML & CSS</a>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="htmlCss-sub-menu sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Forms</a></li>
              <li><a href="#">Card Design</a></li>
              <li class="more">
                <span><a href="#">More</a>
                <i class='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
                <ul class="more-sub-menu sub-menu">
                  <li><a href="#">Neumorphism</a></li>
                  <li><a href="#">Pre-loader</a></li>
                  <li><a href="#">Glassmorphism</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">JAVASCRIPT</a>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><a href="#">Dynamic Clock</a></li>
              <li><a href="#">Form Validation</a></li>
              <li><a href="#">Card Slider</a></li>
              <li><a href="#">Complete Website</a></li>
            </ul>
          </li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      <div class="logout">
        <router-link to="/"><p>Deconnexion</p></router-link>
      </div>
      <div class="username">
         <p> <span class="material-icons-outlined">
account_circle 
</span>{{$store.state.user.username}}</p>
        
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
      },
      methods:{
        logout(){
            this.$store.state.user = null,
            localStorage.removeItem('user'),
            this.$router.push('/')
      },
      }
    },
}

</script>
<style lang="scss">
    @import url(./assets/css/base.css);
    @import url(./assets/css/form.css);
    @import url(./assets/css/header.css);
  
</style>
