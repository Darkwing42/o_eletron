<template>
  <div class="navbar">
    
      <div class="Button">
        <span>
          <img src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/uH9N-BasNew_35.gif" alt="New Back">  
          <img src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/Limi-BasNew_roll_35.gif" class="img-top" alt="New Front">
        </span>
      </div>
      <div><input type="image" src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/fMit-BasOpen_roll_35.gif" id=""></div>
      <div><input type="image" src="https://uploads.codesandbox.io/uploads/user/c9aa8a21-016a-4e6e-95f8-97352619f096/h1md-BasSave_roll_35.gif" alt=""></div>
      <div><button>Drucken</button></div>
      <div><button>Ettiketten</button></div>
      <div><button >Freigeben</button></div>
      <div><button>Arbeitsblatt freigeben</button></div>
      <div><button>Löschen</button></div>
      <div><button>Telefonieren</button></div>
      <div><button>Dokumente scannen</button></div>
      <div><button>Proben</button></div>
      <div><button>Barcode</button></div>
      <div><button>Erster</button></div>
      <div><button>Vorheriger</button></div>
      <div><button>Nächster</button></div>
      <div><button>Letzter</button></div>
      <div><button>Normal Ansicht</button></div>
      <div><button>Druckvorschau</button></div>
      <div><button>Notizen</button></div>
      <div><button>IFSG</button></div>
      <div><button>Log</button></div>
    
      <div><router-link style="float: right;" tag="button" class="navbar-button" to="/">Home</router-link></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  margin: 0;

}

.navbar-button {
  height:35px;
  width: 35px;
}

.Button {
       
        position: relative;
        display: inline-block;
        
    }
  .Button .img-top {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
  .Button:hover .img-top {
        display: inline;
    }
</style>
