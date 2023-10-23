<template>
    <div id="intro">
        <div class="sloganBox">
            <p>"{{ welcomeMsg.saying }}" --{{ welcomeMsg.speaker }}</p>
            <a @click="anchorPoint" id="toMain" ref="toTopic">
                <p class="el-icon-bottom float-element"></p>
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const welcomeMsg = computed(() => {
    let msg = JSON.parse(localStorage?.getItem('sayings') as string);
    if (!msg) {
        // api失效时默认标语
        msg = {
            saying: 'Cogito, ergo sum.',
            speaker: '笛卡尔 (René Descartes)'
        }
    } else {
        // 获取随机标语
        let id = Math.random() * 5 * 4;
        id = Math.floor(id);
        msg = msg[id];
    }
    return msg
})
const anchorPoint = function () {
    nextTick(() => {
        if (route.name === "main") {
            document.querySelector("#me")?.scrollIntoView(true);
        } else if (route.name === "article") {
            document.querySelector(".container")?.scrollIntoView(true);
        } else if (route.name === "editing") {
            document.querySelector(".container")?.scrollIntoView(true);
        }
    })
}
</script>
<style lang="ts" setup>

</style>