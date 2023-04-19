<template>
    <div>

        <header>
            <div class="logo">
                <p>{{ store.logo }}</p>
            </div>
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
  