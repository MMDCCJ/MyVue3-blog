<template>
    <div id="intro">
        <div class="sloganBox">
            <p>"{{ welcomeMsg.saying }}" --{{ welcomeMsg.speaker }}</p>
            <a @click="anchorPoint" id="toMain" ref="toTopic">
                <!-- 跳动下箭头 -->
                <svg class="float-element" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728="">
                    <path fill="currentColor"
                        d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

onMounted(() => {
    console.log("当前的route", route);

})

// 
const welcomeMsg = computed({
    get: () => {
        let data = JSON.parse(localStorage?.getItem('sayings') as string);
        let msg: Slogan;
        if (!data) {
            // api失效时默认标语
            msg = {
                saying: 'Cogito, ergo sum.',
                speaker: '笛卡尔 (René Descartes)'
            }
        } else {
            // 获取随机标语
            let id = Math.random() * 5 * 4;
            id = Math.floor(id);
            msg = data[id];
        }
        return msg
    },
    // 不写报错
    set: (value: Slogan) => {
        value
    }
})
const anchorPoint = function () {
    console.log("当前的路由名称", route.name);

    nextTick(() => {
        if (route.name === "主页") {
            document.querySelector("#me")?.scrollIntoView(true);
        } else if (route.name === "article") {
            document.querySelector(".container")?.scrollIntoView(true);
        } else if (route.name === "editing") {
            document.querySelector(".container")?.scrollIntoView(true);
        }
    })
}
</script>
<style lang='css' scoped>
#intro {
    background-image: url('../../public/mainzip.jpg');
    background-size: cover;
    width: 100%;
    height: 80vh;
    border-radius: 5px;
}

#toMain {
    width: 5%;
    height: 5%;
}

.sloganBox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

p {
    position: relative;
    color: white;
    opacity: 0.8;
    font-size: 4vh;
}

a {
    cursor: pointer;
}

/* 箭头上下浮动动画效果 */
@keyframes float-up-down {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.float-element {
    animation: float-up-down 1.65s infinite;
    color: white;
}
</style>
../type/env