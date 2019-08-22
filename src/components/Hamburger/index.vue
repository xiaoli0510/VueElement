<template>
    <div class="hamburger-wrap" @click="toggleClick">
        <svg-icon icon-class='spread' :class="{'is-active':isActive}"/>
    </div>
</template>
<script>
export default {
    name:'Hamburger',
    props:{
        isActive:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        //子组件向父组件传值
        toggleClick(){
            this.$emit('toggleClick');
        }
    }
}
</script>
<style scoped>
.hamburger-wrap {
    padding:0 15px;
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
svg.is-active{
     transform: rotate(180deg);
}
</style>
