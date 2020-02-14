<template>
    <div>
        <h1 v-if="settings">{{settings}}</h1>
        <div>
            <Nuxt />
        </div>
    </div>
</template>

<script>
import {getSettings} from "~/middleware/ghost"
import {mapMutations} from 'vuex'
export default {
    props:{
        settings:{
            type: Object
        }
    },
    async asyncData(){
        const settings = await getSettings();
        console.info(settings);
        return {settings: settings}
    }
}
</script>

<style>

</style>