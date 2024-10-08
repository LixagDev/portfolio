"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import Link from "next/link";

export default function Skills() {
    const skills = [
        {name: "Javascript", description: "Language de programmation de script.", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", link: "https://developer.mozilla.org/fr/docs/Web/JavaScript"},
        {name: "Next.js", description: "Framework de React.", src: "https://codelynx.dev/_next/image?url=%2Fimages%2Flogo%2Fnextjs.png&w=96&q=100", link: "https://nextjs.org/"},
        {name: "Laravel", description: "Framework PHP.", src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", link: "https://laravel.com/"},
        {name: "HTML", description: "Langage de balisage conçu pour représenter les pages web.", src: "https://i.ibb.co/5vPwwbr/HTML5-logo-and-wordmark-svg-1.png", link: "https://developer.mozilla.org/fr/docs/Web/HTML"},
        {name: "Tailwind", description: "Framework CSS.", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042", link: "https://tailwindcss.com/"},
        {name: "MySQL", description: "Système de gestion de bases de données.", src: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png", link: "https://www.mysql.com/fr/"},
        {name: "Prisma", description: "Mapping objet-relationnel nouvelle génération.", src: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png", link: "https://www.prisma.io/"},
        {name: "CSS", description: "Langage de feuille de style utilisé pour l'HTML.", src: "https://i.ibb.co/2qQdcmY/CSS3-logo-and-wordmark-svg-1.png", link: "https://developer.mozilla.org/fr/docs/Web/CSS"},
        {name: "Socket.IO", description: "Bibliothèque de communication à faible latence entre un client et un serveur.", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png?20200308235956", link: "https://www.prisma.io/"},
        {name: "PHP", description: "Language de programmation pour produire des pages Web dynamiques via un serveur web.", src: "https://i.ibb.co/LNbPWxk/PHP-Logo-PNG-Image-Background-1.png", link: "https://www.php.net/"},
        {name: "Electron.js", description: "Créateur d'application de bureau multiplateformes avec JavaScript, HTML et CSS.", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png", link: "https://www.electronjs.org/fr/"},
    ];

    return (
        <SectionWrapper>
            <Card>
                <CardHeader>
                    <CardTitle>Mes compétences</CardTitle>
                    <CardDescription>Les outils et technologies que je sais utiliser.</CardDescription>
                </CardHeader>
                <CardContent className={"flex flex-wrap justify-center items-center px-72 gap-4"}>
                    {
                        skills.map((skill, i) => {
                            return(
                                <HoverCard openDelay={100} closeDelay={100}>
                                    <HoverCardTrigger>
                                        <div key={i} className={"flex flex-col justify-center items-center w-fit cursor-pointer"}>
                                            <img draggable={false} src={skill.src} className={"w-12 h-12 object-contain"} alt={""}/>
                                            <p>{skill.name}</p>
                                        </div>
                                    </HoverCardTrigger>
                                    <HoverCardContent side={"top"} className={"border-2 w-80"}>
                                        <div className="flex justify-between space-x-4">
                                            <div className="space-y-1">
                                                <Link className={"text-sm font-semibold underline"} href={skill.link}>{skill.name}</Link>
                                                <p className="text-sm">{skill.description}</p>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            );
                        })
                    }
                </CardContent>
            </Card>
        </SectionWrapper>
    );
}