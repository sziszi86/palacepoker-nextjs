import React from 'react';
import TeamPic from "@/public/assets/team.jpg";
import coinsPic from "@/public/assets/coins.jpg";

import Image from "next/image";

const Page = () => {
    return (
        <div className="container mx-auto xl:max-w-[1180px] pt-[40px] text-white pb-[40px] px-[20px] sm:px-0">
            <h1 className="mb-8 text-xl text-center md:text-left font-extrabold leading-none tracking-tight  md:text-2xl lg:text-4xl text-white ">Bemutatkozás</h1>
            <p>Nézz be a Palace Poker Clubba, és megérted, hogy játékosaink és vendégeink, miért térnek vissza hozzánk
                újra
                meg újra! <br/>
                Kínálatunk: <br/></p>
            <ul className="list-disc mt-4">
                <li>változatos, népszerű versenyek</li>
                <li>minden játéknapon cash game ( 100/200, 200/400, 500/500 )</li>
                <li>tágas, légkondicionált terem, 6 asztallal</li>
                <li>tapasztalt, barátságos személyzet</li>
                <li>igény szerint baráti társaságoknak / cégeknek külön versenyek és cash game</li>
                <li>pókerbár széles választékkal, korrekt árakkal, kedves kiszolgálással</li>
                <li>Internetkapcsolat (WI-FI)</li>
                <li>bőséges parkolási lehetőség</li>
            </ul>
            <Image src={TeamPic} alt="Palace Poker Szombathely csapata" className="w-full rounded-xl my-5"></Image>
            <p>
                <span> A Palace Poker Club Nyugat-Magyarország első hivatalos póker klubbja! <br/><br/>

                Szombathely szívében, exkluzív környezetben várjuk régi és új pókerezni vágyó vendégeinket! <br/>

                Versenyeink és cash game-jeink széles választékot nyújtanak minden kategóriában. <br/>

                Osztóink bármikor rendelkezésére állnak a kezdő játékosoknak. <br/>

                Pókerbárunkban széles választékkal, korrekt árakkal, különböző italakciókkal és kedves kiszolgálással
                várunk <br/>

                Kérünk, első alkalommal hozz magaddal fényképes igazolványt a regisztrációhoz! <br/>

                Nem számít, hogy komoly játékos vagy, szórakozásból játszol, vagy csak szeretnél jobban megismerkedni a
                pókerrel. Mi mindenki számára tartogatunk valamit!</span>
            </p>
        </div>
    );
};

export default Page;
