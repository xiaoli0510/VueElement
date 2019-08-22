<template>
    <div class="slotcontent">
        <ul>
            <!--<slot></slot>-->
            <li v-for="(item,index) in items" :key="index">{{item.text}}</li>
        </ul>
    </div>
</template>
 
<script>
    export default{
        data(){
            return{
                items:[
                    {id:1,text:'第1段'},
                    {id:2,text:'第2段'},
                    {id:3,text:'第3段'},
                ]
            }
        }
    }
     
</script>
 
<style scoped>
     
</style>