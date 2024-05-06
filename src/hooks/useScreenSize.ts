import {ref} from 'vue'

export default function useScreenSize() {
    const width = ref(document.documentElement.clientWidth)
    const height = ref(document.documentElement.clientHeight)

    window.onresize = () => {
        width.value = document.documentElement.clientWidth
        height.value = document.documentElement.clientHeight
    }

    return {
        width,
        height
    }
}