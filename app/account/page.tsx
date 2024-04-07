import { getAuthSession } from "@/lib/auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { LogOut } from "lucide-react";
import Link from "next/link";

const Account = async() => {

    const session = await getAuthSession();
    if(!session) {
      throw new Error('No session found');
    }
    const user = session.user;

  return (
    <div>
      <Card>
        <CardHeader>
            <Avatar>
                {user.image && <AvatarImage src={user.image} alt={user.name ?? 'user avatar'} />}
                <AvatarFallback>{user?.name?.[0] || ''}</AvatarFallback>
            </Avatar>
          <CardTitle>{user.email}</CardTitle>
          <CardDescription>{user.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/account/settings" className={buttonVariants({ variant: 'outline' })}>Settings</Link>
          <Link href="/account/admin" className={buttonVariants({ variant: 'outline' })}>Admin</Link>
        </CardContent>
        <CardFooter>
            <LogOut className='mr-2' size={12} />
            Logout
        </CardFooter>
      </Card>
    </div>
  )
}

export default Account