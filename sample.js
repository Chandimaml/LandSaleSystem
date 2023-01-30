<template>

  <div id="header">
    <div class="contentData">
      <h3>Navigation</h3>
      <ul type="none">
        <li>
          <router-link to="/user/management" tag="button" class="cont">
            <font-awesome-icon icon="fa-user-circle-o" /> User Management
          </router-link>
        </li>
        <li>
          <router-link to="/entity/management" tag="button" class="cont">
            <font-awesome-icon icon="fa-user-circle-o" /> Entity Management
          </router-link>
        </li>
        <li>
          <router-link to="/news/management" tag="button" class="cont">
            <font-awesome-icon icon="fa-user-circle-o" /> News Management
          </router-link>
        </li>
        <li>
          <router-link to="/resources/management" tag="button" class="cont">
            <font-awesome-icon icon="fa-user-circle-o" /> Resources Management
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#header {  
  background: rgba(19, 0, 36, 1);
  color: white;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 300px;
  width: 300px;  
  display: flex;
}

h3 {
  color: rgba(6, 133, 159, 1);
}

.contentData {
  padding: 30px;
  line-height: 300%;
}

.cont:hover {
  box-shadow: inset 200px 0 0 0 #54b3d6;
  color: rgba(19, 0, 36, 1);
  padding: 10px;
}
</style>
  
