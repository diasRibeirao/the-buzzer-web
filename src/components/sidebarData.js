import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Comprar Créditos",
        path: "/buyCredits",
        icon: <FaIcons.FaRegCreditCard />,
        cName: "nav-text"
    },
    {
        title: "Ocorrência",
        path: "/report",
        icon: <AiIcons.AiFillWarning />,
        cName: "nav-text"
    },
    {
        title: "Emergência",
        path: "/emergency",
        icon: <AiIcons.AiFillAlert />,
        cName: "nav-text"
    },
    {
        title: "Sugestões",
        path: "/suggestions",
        icon: <FaIcons.FaRegComments />,
        cName: "nav-text"
    },
    {
        title: "Ranking",
        path: "/ranking",
        icon: <IoIcons.IoMdTrophy />,
        cName: "nav-text"
    }
]

