import { useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/core/components/ui/alert-dialog"
import { Button } from "@/core/components/ui/button"
import { Checkbox } from "@/core/components/ui/checkbox"
import { Input } from "@/core/components/ui/input"
import { Label } from "@/core/components/ui/label"
import { Progress } from "@/core/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/core/components/ui/radio-group"
import { ScrollArea } from "@/core/components/ui/scroll-area"
import { Separator } from "@/core/components/ui/separator"
import { Slider } from "@/core/components/ui/slider"
import { Switch } from "@/core/components/ui/switch"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/core/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/core/components/ui/tabs"
import { Textarea } from "@/core/components/ui/textarea"
import {
    Toast,
    ToastAction,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/core/components/ui/toast"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/core/components/ui/tooltip"

export default function TestPage() {
    const [progress, setProgress] = useState(33)
    const [sliderValue, setSliderValue] = useState([50])
    const [showToast, setShowToast] = useState(false)

    return (
        <div className="container mx-auto p-8 space-y-8">
            <h1 className="text-4xl font-bold mb-8">UI Components Test</h1>

            {/* Alert Dialog */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Alert Dialog</h2>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button>Open Alert Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </section>

            {/* Button */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Button</h2>
                <div className="space-x-4">
                    <Button>Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </section>

            {/* Checkbox */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Checkbox</h2>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
            </section>

            {/* Input */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Input</h2>
                <Input placeholder="Type something..." />
            </section>

            {/* Label */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Label</h2>
                <Label>This is a label</Label>
            </section>

            {/* Progress */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Progress</h2>
                <Progress value={progress} className="w-[60%]" />
                <div className="mt-2 space-x-2">
                    <Button onClick={() => setProgress(progress - 10)}>-10%</Button>
                    <Button onClick={() => setProgress(progress + 10)}>+10%</Button>
                </div>
            </section>

            {/* Radio Group */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Radio Group</h2>
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                    </div>
                </RadioGroup>
            </section>

            {/* Scroll Area */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Scroll Area</h2>
                <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                    <div className="space-y-4">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="p-4 border rounded">
                                Item {i + 1}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </section>

            {/* Separator */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Separator</h2>
                <div className="space-y-4">
                    <div>Above</div>
                    <Separator />
                    <div>Below</div>
                </div>
            </section>

            {/* Slider */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Slider</h2>
                <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-[60%]"
                />
                <div className="mt-2">Value: {sliderValue[0]}</div>
            </section>

            {/* Switch */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Switch</h2>
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
            </section>

            {/* Table */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Table</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>Admin</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>Inactive</TableCell>
                            <TableCell>User</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>

            {/* Tabs */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <div className="p-4">Account settings content</div>
                    </TabsContent>
                    <TabsContent value="password">
                        <div className="p-4">Password settings content</div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Textarea */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Textarea</h2>
                <Textarea placeholder="Type your message here..." />
            </section>

            {/* Toast */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Toast</h2>
                <Button onClick={() => setShowToast(true)}>Show Toast</Button>
                <ToastProvider>
                    {showToast && (
                        <Toast>
                            <ToastTitle>Success!</ToastTitle>
                            <ToastDescription>Your action was completed successfully.</ToastDescription>
                            <ToastAction altText="Close">Close</ToastAction>
                        </Toast>
                    )}
                    <ToastViewport />
                </ToastProvider>
            </section>

            {/* Tooltip */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Tooltip</h2>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button>Hover me</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>This is a tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </section>
        </div>
    )
}
