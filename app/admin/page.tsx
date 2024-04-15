import Link from "next/link";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/components/layout/layout";

const Admin = () => {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Admin</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Link href="/admin/courses">Courses</Link>
      </LayoutContent>
    </Layout>
  )
}

export default Admin