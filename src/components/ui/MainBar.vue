<template>
  <div class="navbar">
    <div><router-link
    tag="img"
    src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/sP6t-olauftr2_roll_35.gif" 
    class="navbar-button" 
    to="/auftragserfassung">
    
    Auftragserfassung
    </router-link></div>
    <div><router-link 
    tag="img" 
    src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/10jP-olsamp30_roll_35.gif"
    class="navbar-button" 
    to="/proben">
    Proben
    </router-link></div>
    <div><router-link 
    tag="img"
    src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/X_21-olmibi_roll_35.gif"
    class="navbar-button" 
    to="/mikrobiologie">
    
    Mikrobiologie
    </router-link></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
}
.navbar > div {
}
.navbar-button {
  padding: 2px;
  
}

</style>
