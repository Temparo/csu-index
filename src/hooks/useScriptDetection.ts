export default function dynamicLoadJs(url: string, webId: string, callback: object) {
    let head = document.getElementsByTagName('head')[0]
    let script: HTMLScriptElement = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.defer = true
    script.setAttribute("data-website-id", webId)
    // if (typeof callback == 'function') {
    //     script.onload = script.onreadystatechange = function () {
    //         if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
    //             callback()
    //             script.onload = script.onreadystatechange = null
    //         }
    //     }
    // }
    if (typeof callback == 'function') {
        script.onload = function () {
            callback()
            script.onload = null
        }
    }
    head.appendChild(script)
}