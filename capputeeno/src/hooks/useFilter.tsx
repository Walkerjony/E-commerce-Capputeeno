import { FilterContext } from "@/contexts/fillter-contexts";
import { useContext } from "react";

export function useFilter(){
    return useContext(FilterContext)
}