import { create } from 'zustand'

// const useUserStore = create((set) =>({
//     user: "",
//     setUser: (newUser) => set({user: newUser})
// }))


export const useUserStore = create((set)=>{
    return{
        user: {
         email: 'oi'
        },
        setUser: (newUser) => 
        set((state) => ({
            user: {...state.user, ...newUser}
        }))
    }
})

// export { useUserStore }