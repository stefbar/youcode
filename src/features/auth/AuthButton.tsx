import { getAuthSession } from "@/lib/auth";
import { LoginButton } from "@/features/auth/LoginButton";
import { LoggedInButton } from "@/features/auth/LoggedInButton";

export type AuthButtonProps = {
    className?: string;
};

export const AuthButton = async (props: AuthButtonProps) => {
    const session = await getAuthSession();

    const user = session?.user;
    if (!user) { //si le user n'est pas connecté
        return <LoginButton />;
    }
    return <LoggedInButton user={user} />;
}