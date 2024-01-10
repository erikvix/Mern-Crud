import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";

export default function Component() {
  return (
    <div className="h-screen w-screen flex justify-center flex-col">
      <div className="mx-auto max-w-sm space-y-6 h-screen w-screen flex justify-center flex-col">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password or login with GitHub
          </p>
        </div>
        <div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </div>
          <Separator className="my-8" />
          <div className="space-y-4">
            <Button
              className="w-full gap-2 flex items-center justify-center"
              variant="outline"
            >
              <FaGithub size={16} />
              Login with GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
