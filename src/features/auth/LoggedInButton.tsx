'use client'

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { LogIn, LogOut, User2 } from 'lucide-react'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { AlertDialogTitle, AlertDialogTrigger } from '@radix-ui/react-alert-dialog'
import Loader from '@/components/ui/loader'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export type LoggedInButtonProps = {
  user: Session['user']
}
const LoggedInButton = (props: LoggedInButtonProps) => {

  const mutation = useMutation({
    mutationFn: async() => signOut(),
  })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          onClick={() => mutation.mutate()}
        >
          <Avatar className='mr-2 size-6'>
            <AvatarFallback>
              {props.user?.name?.[0] || ''}
            </AvatarFallback>
            {props.user.image &&
              <AvatarImage
                src={props.user.image}
                alt={props.user.name ?? 'user avatar'}
              />
            }
          </Avatar>
          {props.user?.name}
          <LogIn className='mr-2' size={12} />
        </Button>
      </DropdownMenuTrigger>
        <AlertDialog>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href='/account' >
                <User2 className='mr-2' size={12} />
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <AlertDialogTrigger asChild>
              <DropdownMenuItem>
                <LogOut className='mr-2' size={12} />
                Logout
              </DropdownMenuItem>
            </AlertDialogTrigger>
          </DropdownMenuContent>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to logout ?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              {mutation.isPending ? <Loader className='mr-2' size={12} /> : <AlertDialogAction
                // variant="destructive"
                disabled={mutation.isPending}
                onClick={() => mutation.mutate()}
              >
                <LogOut className='mr-2' size={12} />
                Logout
              </AlertDialogAction>}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </DropdownMenu>
  ) 
}

export { LoggedInButton }