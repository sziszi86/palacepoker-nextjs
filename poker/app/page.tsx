import Image from 'next/image'
import Header from "@/components/Header";
import Ads from "@/components/Ads";
import Events from "@/components/Events";

export default function Home() {
    return (
        <main className="">
            <Header/>
            <Events/>
            <Ads/>
        </main>
    )
}
