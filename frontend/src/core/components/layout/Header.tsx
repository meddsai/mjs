import Link from "next/link";
import { SearchIcon, UserCircle, BellIcon, Settings } from "lucide-react";
import { Button } from "@/core/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/core/components/ui/dropdown-menu";

const Header = () => {
    // Mock user data - in a real app, this would come from your auth context
    const user = null;
    const notificationCount = 3;

    return (
        <>
            {/* Top Utility Bar */}
            <div className="bg-muted py-2 border-b">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm">
                        {!user && (
                            <>
                                <Link href="/login" className="hover:underline flex items-center gap-1">
                                    Log in
                                </Link>
                                <span className="text-muted-foreground">|</span>
                                <Link href="/register" className="hover:underline flex items-center gap-1">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/submit" className="text-sm hover:underline">Submit a Manuscript</Link>
                        <Link href="#" className="text-sm hover:underline">Get Issue Alerts</Link>

                        {user && (
                            <div className="relative">
                                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                    <BellIcon className="h-5 w-5" />
                                    {notificationCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                            {notificationCount > 99 ? '99+' : notificationCount}
                                        </span>
                                    )}
                                </Button>
                            </div>
                        )}

                        {/* User dropdown */}
                        {user && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                        <UserCircle className="h-4 w-4" />
                                        <span>{user.name || user.email}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                        {user.name || user.email}
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {Array.isArray(user.role) ? user.role.join(', ') : user.role}
                                        </p>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />

                                    <DropdownMenuItem asChild>
                                        <Link href="/author-dashboard" className="w-full cursor-pointer">Author Dashboard</Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <Link href="/reviewer-dashboard" className="w-full cursor-pointer">Reviewer Dashboard</Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <Link href="/editor-dashboard" className="w-full cursor-pointer">Editor Dashboard</Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <Link href="/admin-dashboard" className="w-full cursor-pointer">Admin Dashboard</Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/profile" className="w-full cursor-pointer">Profile</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href="/user-settings" className="w-full cursor-pointer">
                                            <Settings className="h-4 w-4 mr-2" />
                                            Settings
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>
                </div>
            </div>

            {/* Journal Header with Logo */}
            <header className="bg-primary py-4 border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground">MJS</h1>
                            <div className="ml-4 border-l border-primary-foreground/30 pl-4">
                                <p className="text-sm md:text-base text-primary-foreground">
                                    Modern Journal Systems<br />
                                    A customizable academic journal platform
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 md:mt-0 flex items-center">
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full py-1.5 px-3 pr-8 rounded text-sm border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
                                />
                                <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary-foreground/60" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
