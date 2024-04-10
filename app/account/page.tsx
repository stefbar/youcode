import { getAuthSession } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import { LogoutButton } from "@/features/auth/LogoutButton";

const Account = async() => {

    const session = await getAuthSession();
    if(!session) {
      throw new Error('No session found');
    }
    const user = session.user;

  return (
    <div>
      <Card className="m-auto mt-4 max-w-lg">
        <CardHeader className="flex flex-row gap-4 space-y-0">
            <Avatar>
                <AvatarFallback>{user?.name?.[0] || ''}</AvatarFallback>
                {user.image && <AvatarImage src={user.image} alt={user.name ?? 'user avatar'} />}
            </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle>{user.email}</CardTitle>
            <CardDescription>{user.name}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Link href="/account/profile" className={buttonVariants({ variant: 'outline', size: 'lg' })}>Profile</Link>
          <Link href="/account/admin" className={buttonVariants({ variant: 'outline', size: 'lg' })}>Admin</Link>
        </CardContent>
        <CardFooter className="flex flex-row-reverse">
            <LogoutButton />
        </CardFooter>
      </Card>
    </div>
  )
}

export default Account