import { Outlet } from "react-router-dom"

// App level Module
export default function MainModule() {
    return <>
        {/* Header */}
        <>
            <Outlet />
        </>
        {/* Footer */}
    </>
}