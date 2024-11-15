"use client"

import {Menu} from "lucide-react"
import React from "react"

const Sidebar = () => {
    return (
        <div>
            <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
                <div>Logo</div>
                <h1 className="font-extrabold text-2xl">Stock</h1>
                <button className="md:hidden px-3 py-2 bg-gray-100 rounded-full hover:bg-blue-100" onClick={() => {}}>
                    <Menu className="w-4 h-4" size={24} />
                </button>
            </div>
            <div className="flex-grow mt-8">{/* links */}</div>
            <div>
                <p className="text-center text-xs text-gray-500">&copy; 2024 MyRacePrints</p>
            </div>
        </div>
    )
}

export default Sidebar
