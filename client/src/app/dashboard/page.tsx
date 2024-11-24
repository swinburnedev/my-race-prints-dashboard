"use client"

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xs:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
            <div className="bg-gray-500 row-span-3 xl:row-span-6"></div>
            <div className="bg-gray-500 row-span-3 xl:row-span-6"></div>
            <div className="bg-gray-500 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1"></div>
            <div className="bg-gray-500 row-span-3"></div>
            <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
            <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
            <div className="bg-gray-500 md:row-span-1 xl:row-span-2"></div>
        </div>
    )
}

export default Dashboard
