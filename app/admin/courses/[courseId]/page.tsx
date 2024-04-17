import { getRequiredAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Link from 'next/link'

import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/components/layout/layout"

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

const Course = async (id: String) => {

  const session = await getRequiredAuthSession();

  const courses = await prisma.course.findMany({
    where: {
      creatorId: session.user.id
    }
  });

  const course = courses.find(course => course.id === id);
  if(!course) {
    throw new Error('Course not found');
  }

  const usersOnCourse = course.users;

  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Users</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <Card className="m-auto mt-4">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User image</TableHead>
                  <TableHead>User name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersOnCourse.map(userOnCourse => {
                  return (
                    // <Link href="/admin/courses/:courseId" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
                        <TableRow>
                            <TableCell>
                              <Avatar className="rounded">
                                  <AvatarFallback>{userOnCourse.name?.[0]}</AvatarFallback>
                                {userOnCourse.image && <AvatarImage src={userOnCourse.image} alt={userOnCourse.name} />}
                              </Avatar>
                            </TableCell>
                            <TableCell>
                              <Typography as={Link} variant={'large'} href={`/admin/courses/${course.id}`} >
                                {userOnCourse.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Button>
                                {userOnCourse.status}
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button>
                                Actions
                              </Button>
                            </TableCell>
                        </TableRow>
                    // </Link>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="m-auto mt-4">
          <CardHeader></CardHeader>
          <CardContent>
            <p>{usersOnCourse.length} users</p>
            <p>{usersOnCourse.course[id].lessons.length} lessons</p>
            <Button>Edit</Button>
            <Button>Edit lessons</Button>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  )
}

export default Course