import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAgent = create((set,get)=>(
    {
        projects:[],
        isgettingProject:false,

        getProject:async()=>{
            set({isgettingProject:true})
            try {
                const res = await axiosInstance.get("/projects/agent")
                set({projects:res.data})
            } catch (error) {
                console.log(error)
            }finally{
                set({isgettingProject:false})
            }
        }
    }
))