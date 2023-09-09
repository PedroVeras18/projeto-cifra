import { create } from 'zustand';
import { LoginFormProps } from '@interfaces/auth';

export interface AuthServiceProps {
    userAuth: LoginFormProps | null;
    authenticate: (data: LoginFormProps) => void;
    logout: () => void;
}

export const useAuthService = create<AuthServiceProps>(
    (set) => ({
        userAuth: null,

        authenticate: async (data: LoginFormProps) => {
            // Fazer chamada na api e atribuir o retorno ao userAuth.
            set(() => ({ userAuth: data }))
        },

        logout: () => {
            set(() => ({ userAuth: null }));
        }
    })
)