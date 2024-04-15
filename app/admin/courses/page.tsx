import { getAuthSession } from "@/lib/auth"
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table'
import { Table } from '@/components/ui/table'
import React from 'react'
import { prisma } from "@/lib/prisma"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "@/components/ui/typography"
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/components/layout/layout"

const Courses = async () => {

  const session = await getAuthSession();
  if(!session) {
    throw new Error('No session found');
  }
  const user = session.user;
  const courses = await prisma.course.findMany({
    where: {
      creatorId: user.id,
    }
  });

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Courses</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card className="m-auto mt-4">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course image</TableHead>
                  <TableHead>Course title</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map(course => {
                  return (
                    // <Link href="/admin/courses/:courseId" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                        <TableRow>
                            <TableCell>
                              <Avatar className="rounded">
                                  <AvatarFallback>{course.name?.[0]}</AvatarFallback>
                                {course.image && <AvatarImage src={course.image} alt={course.name} />}
                              </Avatar>
                            </TableCell>
                            <TableCell>
                              <Typography as={Link} variant={'large'} href={`/admin/courses/${course.id}`} >
                                {course.name}
                              </Typography>
                            </TableCell>
                        </TableRow>
                    // </Link>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  )
}

export default Courses