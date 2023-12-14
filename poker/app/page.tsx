import Header from "@/components/Header";
import Ads from "@/components/Ads";
import HomeEvents from "@/components/HomEvents";
import LatestEvents from "@/components/LatestEvents";

export default function Home() {
    return (
        <main className="">
            <HomeEvents/>
            <div className="flex flex-col-reverse xl:flex-row container mx-auto xl:max-w-[1180px] gap-x-5">
                <div className="w-full xl:w-8/12 ">
                    <Header/></div>
                <div className="w-full xl:w-4/12 mb-8 xl:mb-0">
                    <LatestEvents/>
                </div>
            </div>
            <Ads/>
        </main>
    )
}
