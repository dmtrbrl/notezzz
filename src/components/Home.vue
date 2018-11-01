<template>
    <section class="home">
        <Sidebar/>
        <Pad/>
    </section>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Pad from "@/components/Pad";
export default {
  components: {
    Sidebar,
    Pad
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  width: 100%;
}
</style>


