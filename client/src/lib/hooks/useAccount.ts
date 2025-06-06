import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { loginSchema } from "../schemas/loginSchema"
import agent from "../api/agent"
import { useLocation, useNavigate } from "react-router";
import { registerSchema } from "../schemas/registerSchema";
import { toast } from "react-toastify";

export const useAccount = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();

    const loginUser = useMutation({
        mutationFn: async (creds: loginSchema) => {
            await agent.post('/login?useCookies=true', creds)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ 
                queryKey: ['user'] 
            });
            await navigate('/activities');
        }
    });

    const registerUser = useMutation({
        mutationFn: async (creds: registerSchema) => {
            await agent.post('/account/register', creds)
        },
        onSuccess: () => {
            toast.success('Registration successful, you can now login');
            navigate('/login');
        }
    })

    const logoutUser = useMutation({
        mutationFn: async () => {
            await agent.post('/account/logout')
        },
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ['user'] });
            queryClient.removeQueries({ queryKey: ['activities'] });
            navigate('/');
        }
    })

    const {data: currentUser, isLoading: LoadingUserInfo} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await agent.get<User>('/account/user-info');
            return response.data;
        },
        enabled: !queryClient.getQueryData(['user']) && location.pathname !== '/login' && location.pathname !== '/register',
    })
 
    return {
        loginUser,
        currentUser,
        logoutUser,
        LoadingUserInfo,
        registerUser
    }
}