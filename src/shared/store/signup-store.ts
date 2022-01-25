import create from 'zustand';

type SignupProperties = {
  count: number;
  setCount: (newStep: number) => void;
  email: string;
  setEmail: (newEmail: string) => void;
  phone: string;
  setPhone: (newPhone: string) => void;
  emailVerified: boolean;
  setEmailVerified: () => void;
};

const signupStore = create<SignupProperties>((set) => ({
  count: 1,
  setCount: (newStep) => set((state) => ({ ...state, count: newStep })),
  email: '',
  setEmail: (newEmail) => set((state) => ({ ...state, email: newEmail })),
  phone: '',
  setPhone: (newPhone) => set((state) => ({ ...state, phone: newPhone })),
  emailVerified: false,
  setEmailVerified: () =>
    set((state) => ({ emailVerified: !state.emailVerified })),
}));

export default signupStore;
