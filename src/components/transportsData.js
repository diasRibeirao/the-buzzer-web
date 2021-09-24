import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const TransportsData = [
    {
        title: "Trem/Metrô",
        param: "Acessar Palmeiras–Barra Funda (3 - Vermelha) e descer na Corinthians–Itaquera (3 - Vermelha)",
        icon: <FaIcons.FaSubway />,
        iconRight: <FaIcons.FaAngleRight />
    },
    {
        title: "Ônibus",
        param: "Peque o ônibus 477P-10 - Ipiranga ↔ Rio Pequeno que chegará em 5 minutos",
        icon: <FaIcons.FaBusAlt />,
        iconRight: <FaIcons.FaAngleRight />
    },
    {
        title: "Carro",
        param: "Diriga por 5 km pela marginal Pinheiros",
        icon: <AiIcons.AiTwotoneCar />,
        iconRight: <FaIcons.FaAngleRight />
    },
    {
        title: "Bicicleta",
        param: "Pedale por 15 km pela ciclofaixa da marginal Pinheiros",
        icon: <FaIcons.FaBicycle />,
        iconRight: <FaIcons.FaAngleRight />, 
    },
    {
        title: "Integrações",
        param: "/Rota sem integrações",
        icon: <IoIcons.IoMdSettings />,
        iconRight: <FaIcons.FaAngleRight />, 
    }
]

