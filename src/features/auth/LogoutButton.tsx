'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import Loader from '@/components/ui/loader'

const LogoutButton = () => {

  const mutation = useMutation({
    mutationFn: async() => signOut(),
  })
  return (
    <Button
      variant="outline"
      size="sm"
      disabled={mutation.isPending}
      onClick={() => mutation.mutate()}
    >
        {mutation.isPending ? <Loader className='mr-2' size={12} /> : <LogOut className='mr-2' size={12} />}
        Logout
    </Button>
  ) 
}

export { LogoutButton }