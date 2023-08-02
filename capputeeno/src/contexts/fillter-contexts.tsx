"use client"

import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/prioriry-types";
import { ReactNode, createContext, useState } from "react";
export const FilterContext = createContext({
    search: "",
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setSearch: (value: string) => {},
    setPriority: (value: PriorityTypes) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})


interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider(children : ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

    return(
        <FilterContext.Provider value = {{search, page, type, priority, setSearch, setPage, setType, setPriority}}
            {...children}
        />

        
    )

}


