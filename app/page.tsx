import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content</p>
        </CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>
    </div>
  );
}
