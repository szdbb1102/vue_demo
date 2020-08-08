<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div
      style="position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0,0,0,0.3 );
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;"
      v-show="visible"
      class="custom-loading-mask"
    >
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <img
          src="@/assets/spinner.gif"
          alt=""
        >
        <!--loading上面显示的文字-->
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      text: 'loading...',
      visible: false
    }
  }
}
</script>
