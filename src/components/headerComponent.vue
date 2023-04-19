<template>
    <div>

        <header>
            <!-- logo -->
            <div class="logo">
                <p>{{ store.logo }}</p>
            </div>

            <!-- search -->
            <input type="text">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </header>

    </div>
</template>
  
<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>
  
<style lang="scss" scoped>
header {
    width: 100%;
    height: 100px;
    background: linear-gradient(#000000, transparent);
}
</style>
  