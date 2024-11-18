"use client"

import React, {useEffect} from "react"
import NavBar from "@/app/(components)/NavBar"
import Sidebar from "@/app/(components)/Sidebar"
import StoreProvider, {useAppSelector} from "./redux"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const isSidebatCollapsed = useAppSelector(state => state.global.isSidebarCollapsed)
    const isDarkMode = useAppSelector(state => state.global.isDarkMode)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
        } else {
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
            <Sidebar />
            <main
                className={`flex flex-col w-full h-full py- px-9 bg-gray-50 ${
                    isSidebatCollapsed ? "md:pl-24" : "md:pl-72"
                }`}
            >
                <NavBar />
                {children}
            </main>
        </div>
    )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    )
}

export default DashboardWrapper
