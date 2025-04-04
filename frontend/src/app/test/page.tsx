import { Button } from "@/core/components/ui"
import { Input } from "@/core/components/ui"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/core/components/ui"
import { Label } from "@/core/components/ui"
import { Checkbox } from "@/core/components/ui"

export default function TestPage() {
    return (
        <div className="container mx-auto p-8 space-y-8">
            <h1 className="text-2xl font-bold mb-8">Component Test Page</h1>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Buttons</h2>
                <div className="flex gap-4">
                    <Button>Default Button</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Inputs</h2>
                <div className="space-y-4 max-w-md">
                    <Input placeholder="Default input" />
                    <Input type="email" placeholder="Email input" />
                    <Input type="password" placeholder="Password input" />
                    <Input disabled placeholder="Disabled input" />
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Combined Components</h2>
                <div className="flex gap-4 max-w-md">
                    <Input placeholder="Search..." className="flex-1" />
                    <Button>Search</Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Cards</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card content goes here.</p>
                        </CardContent>
                        <CardFooter>
                            <Button>Action</Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Another Card</CardTitle>
                            <CardDescription>With different content</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <Input placeholder="Input inside card" />
                                <Button variant="outline">Card Button</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Form Elements</h2>
                <div className="space-y-4 max-w-md">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                </div>
            </div>
        </div>
    )
}
