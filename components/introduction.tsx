"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { techStack } from "@/data";
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <div className="flex justify-center">
                    <Image src="/home-4.png" priority width={300} height={300} alt="Avatar" />
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Developer FrontEnd <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                       Hola, soy Santiago. Estudiante de Ingeniería de Software.
                        Actualmente me enfoco en el Frontend, combinando diseño y funcionalidad para crear experiencias accesibles, modernas y responsivas.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-7 text-white">
  {techStack.map(({ logo, src, id }) =>
    src ? (
      <Link
        key={id}
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 hover:scale-110"
      >
        {logo}
      </Link>
    ) : (
      <div key={id} className="transition-all duration-300 hover:scale-110">
        {logo}
      </div>
    )
  )}
</div>


                    

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:text-orange-500" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;