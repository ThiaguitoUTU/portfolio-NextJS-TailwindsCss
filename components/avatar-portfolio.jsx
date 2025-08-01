"use client"

import Image from 'next/image';
import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position="bottom" className="fixed bottom-0 left-0 hidden md:inline-block z-50">
            <Image 
                src="/avatar-works.png" 
                width={300} 
                height={300} 
                className="w-full h-full" 
                alt="Particles" 
            />
        </MotionTransition>
    );
}

export default AvatarPortfolio;
