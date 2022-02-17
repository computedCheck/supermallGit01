<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"NavBar"
}
</script>

<style scoped>
.navbar{
  display:flex;
  justify-content:space-around;
  align-items:center;
  height:44px;
  box-shadow:0 1px 1px rgba(100, 100, 100, .1);
}

.center{
  color:white;
  font-weight:bold;
}
</style>
