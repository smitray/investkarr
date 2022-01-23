import create from 'zustand';

type SignupProperties = {
  count: number;
  setCount: () => void;
  email: string;
  setEmail: (newEmail: string) => void;
  phone: string;
  setPhone: (newPhone: string) => void;
  emailVerified: boolean;
  setEmailVerified: () => void;
};

const signupStore = create<SignupProperties>((set) => ({
  count: 1,
  setCount: () => set((state) => ({ count: state.count + 1 })),
  email: '',
  setEmail: (newEmail) => set((state) => ({ ...state, email: newEmail })),
  phone: '',
  setPhone: (newPhone) => set((state) => ({ ...state, phone: newPhone })),
  emailVerified: false,
  setEmailVerified: () =>
    set((state) => ({ emailVerified: !state.emailVerified })),
}));

export default signupStore;
