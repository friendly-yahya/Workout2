import { create } from "zustand";
import {presist} from "zustand/middleware";
const useWorkoutStore = create(
    presist(
    //presist needs to encompass all the  goodies 
        (set) => ({
    // here goes data?
            session: [],
            greeting: "IS this WOrKINg?",
    // here goes functions to update date . however what do they do ?       
            addSession: (session) =>
                set((state)=>({session: [...state.sessions, session]})),//don't know what this does
            
            setGreeting: (newGreeting)=>
                set({greeting: newGreeting})
            }),
            {name: 'seretonin-storage'}
    )
);
