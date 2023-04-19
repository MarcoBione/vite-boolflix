<template>
  <div>
    <headerComponent />
  </div>
</template>

<script>
import { store } from './store';

import headerComponent from './components/headerComponent.vue';
import mainComponent from './components/mainComponent.vue';
import footerComponent from './components/footerComponent.vue';

export default {

  components: { headerComponent, mainComponent, footerComponent },

  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped></style>
