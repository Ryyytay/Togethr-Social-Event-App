import { Navigate, Outlet, useLocation } from "react-router";
import { useAccount } from "../../lib/hooks/useAccount";

export default function RequireAuth() {
    const { currentUser, LoadingUserInfo } = useAccount();
    const location = useLocation();

    if (LoadingUserInfo) return <div>Loading...</div>;

    if (!currentUser) return <Navigate to='/login' state={{from: location}}></Navigate>


    return (
        <Outlet />
    )
}