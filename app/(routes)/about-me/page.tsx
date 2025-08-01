"use client"

import Avatar from "@/components/avatar";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";


const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
            <Avatar />
                 <h1 className="text-2xl leading-tight 
                 text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-orange-500">
                        trayectoria profesional
                    </span>
                </h1>
            <CounterServices />
            <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutMePage;