import Image from 'next/image'
import Header from "@/components/Header";
import Ads from "@/components/Ads";
import Events from "@/components/Events";
import HomeEvents from "@/components/HomEvents";

export default function Home() {
    return (
        <main className="">
          <HomeEvents/>
            <Header/>

            <Ads/>
        </main>
    )
}
