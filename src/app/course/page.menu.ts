interface subItemsInfoType {
    href: string,
    label: string,
    date: string,
}

interface itemsInfoType {
    href: string,
    label: string,
    date: string,
    submenu: subItemsInfoType[]
}

export const modedev = false

export const infoCourse = {
    title: "Electrónica Digital",
    description: "La electrónica digital es una rama de la electrónica que se ocupa del diseño y análisis de circuitos que operan con señales eléctricas que solo pueden tener dos estados discretos, comúnmente representados como 0 (cero) y 1 (uno).",
    image: "https://electronicaonline.net/wp-content/uploads/2023/07/Electronica-Digital.webp"
}

export const itemsInfo: itemsInfoType[] = [
    {
        href: "/course",
        label: "Introducción",
        date: '2024-4-26',
        submenu: []
    },
    {
        href: "/course/contents/semana1",
        label: "Semana 1",
        date: '2024-4-26',
        submenu: [
            {
                href: "/course/contents/semana1",
                label: "Contenido",
                date: '2024-4-26',
            },
            {
                href: "/course/activities/actividad1",
                label: "Actividad 1",
                date: '2024-4-26',
            },           
        ]
    },     
]
