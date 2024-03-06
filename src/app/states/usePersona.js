import { create } from 'zustand'

export const usePersona = create((set) => ({
  personas: [],
  borrarPersona: async(id)=>{
    
  },
  obtenerPersonas: ()=>{}
}))