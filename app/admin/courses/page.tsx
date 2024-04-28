import { getRequiredAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Link from 'next/link'

import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/components/layout/layout"

import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Typography } from "@/components/ui/typography"

const Courses = async () => {

  const session = await getRequiredAuthSession();

  const courses = await prisma.course.findMany({
    where: {
      creatorId: session.user.id,
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