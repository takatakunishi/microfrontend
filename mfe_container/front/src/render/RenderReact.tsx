import { useEffect } from "react";
const RenderReact = () => {
    const name = "react"
    const id = `micro-shadow-${name}`
    useEffect(() => {
        const element = document.getElementById(id)
        const scriptId = `micro-frontend-script-${name}-shadowdom`;
        if (!element) return
        if (!document.getElementById(scriptId)) {
            const host = "http://localhost/react"
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = `${host}/bundle-index.js`;
            const renderMicroFrontend = () => {
                const customElement = document.createElement("react-custom")
                element.appendChild(customElement)
            };
            script.onload = () => {
                renderMicroFrontend();
            };
            document.head.append(script)
        } else {
            const customElement = document.createElement("react-custom")
            element.appendChild(customElement)
        }
    }, []);
    return (<div id={id}></div>);
}

export default RenderReact