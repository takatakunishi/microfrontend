import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const HOST_TYPE = {
    vue: "vue",
    react: "react",
} as const

const RENDER_NAME: { [key in keyof typeof HOST_TYPE]: keyof Window } = {
    vue: "renderRuntimeVue",
    react: "renderRuntimeReact"
} as const


type ConfigType = {
    host: string,
    name: keyof typeof HOST_TYPE,
    id: string,
    bundleFile: string
}

const CONFIG: { [key in keyof typeof HOST_TYPE]: ConfigType } = {
    vue: {
        host: "http://localhost/vue-runtime",
        name: "vue",
        id: "vue-runtime",
        bundleFile: "bundle-runtime.js",
    },
    react: {
        host: "http://localhost/react-runtime",
        name: "react",
        id: "react-runtime",
        bundleFile: "bundle-runtime.js",
    },
} as const

function Runtime() {
    return (
        <Routes>
            <Route path="/vue/*" element={<VueRuntime />} />
            <Route path="/react/*" element={<ReactRuntime />} />
            <Route path="/nuxt/*" element={<NuxtRuntime />} />
        </Routes>
    )
}

function ReactRuntime() {
    return <RuntimeRender {...{ hostType: HOST_TYPE.react }} />
}

function VueRuntime() {
    return <RuntimeRender {...{ hostType: HOST_TYPE.vue }} />
}


function NuxtRuntime() {
    const host = "http://localhost/nuxt-runtime"
    const currentPath = window.location.pathname.replace("/runtime/nuxt", "")
    const sccriptId = `micro-frontend-script-nuxt-runtime`;
    const requestPath = host + currentPath
    fetch(requestPath).then(h => h.text()).then(data => {
        if (document.getElementById("__nuxt")) return
        const runtimeRoot = document.getElementById("nuxt-runtime")
        const parser = new DOMParser();
        const html = parser.parseFromString(data, "text/html");
        const html_nuxt_elements = html.body.querySelector("div")
        const html_nuxt_window_elements = [...html.body.querySelectorAll('script')];

        const fake = [...html_nuxt_window_elements]
        fake.flatMap((h_e, i) => {
            if (!(h_e.id === "") && document.getElementById(h_e.id)) return
            if (document.getElementById(`nuxt-runtime-${i}`)) return
            if (!(h_e.id === "")) {
                document.body.append(h_e)
            } else {
                const script = document.createElement("script");
                script.innerHTML = h_e.textContent || "console.log('hello')"
                script.id = `nuxt-runtime-${i}`
                document.body.append(script)
            }
        })
        runtimeRoot?.appendChild(html_nuxt_elements!)
        const html_elements = html.head.querySelectorAll('style');
        for (let h_e of html_elements) {
            runtimeRoot?.appendChild(h_e)
        }
    }).then(() => {
        if (document.getElementById(sccriptId)) return
        const script = document.createElement("script");
        script.id = sccriptId;
        script.src = "http://localhost/_nuxt/nuxt/bundle.js";
        script.onload = () => {
            console.log("load nuxt runtime js")
        };
        document.head.appendChild(script)
    })
    return (
        <div id="nuxt-runtime">
        </div>
    )
}

function RuntimeRender(props: { hostType: keyof typeof HOST_TYPE }) {
    const { host, name, id, bundleFile } = CONFIG[props.hostType]
    const sccriptId = `micro-frontend-script-${name}-runtime`;
    useEffect(() => {
        if (!document.getElementById(sccriptId)) {
            const script = document.createElement("script");
            script.id = sccriptId;
            script.src = `${host}/${bundleFile}`;
            script.onload = () => {
                window[RENDER_NAME[name]]()
            };
            document.head.appendChild(script)
        } else {
            window[RENDER_NAME[name]]()
        }
    }, [])
    return (
        <div id={id}></div>
    )
}

export default Runtime