import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Admin = () => {
  return (
    <>
        <h1>Admin</h1>
        <Link href="/admin/courses" className={buttonVariants({ variant: 'outline', size: 'lg' })}>Courses</Link>
    </>
  )
}

export default Admin