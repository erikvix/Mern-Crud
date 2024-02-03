import { create } from "zustand";

type State = {
  firstName: string;

  lastName: string;
};

type Action = {
  updateFirstName: (firstName: State["firstName"]) => void;

  updateLastName: (lastName: State["lastName"]) => void;
};

export const usePersonStore = create<State & Action>((set) => ({
  firstName: "",

  lastName: "",

  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),

  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export function test() {
  const firstName = usePersonStore((state) => state.firstName);

  const updateFirstName = usePersonStore((state) => state.updateFirstName);
}
