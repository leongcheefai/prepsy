import Link from 'next/link';
import { HStack, Link as ChakraLink } from '@chakra-ui/react';
import {Avatar} from "@/components/ui/avatar"
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu"
import { Button } from "@/components/ui/button"


export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      {/* Logo/Brand */}
      <div className="flex-1">
        <h1 className="text-xl font-bold">Your Logo</h1>
      </div>
      
      {/* Navigation Menu */}
      <div className="flex-1 flex justify-center space-x-6">
        <Link href="/" className="hover:text-gray-600">Home</Link>
        <Link href="/dashboard" className="hover:text-gray-600">Dashboard</Link>
        <ChakraLink asChild>
            <Link href="/pricing" className="hover:text-gray-600">Pricing</Link>
        </ChakraLink>
        <Link href="/projects" className="hover:text-gray-600">Projects</Link>
        <Link href="/about" className="hover:text-gray-600">About</Link>
      </div>
      
      {/* User Profile */}
      <div className="flex-1 flex justify-end">
        <MenuRoot>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    <HStack>
                        <Avatar size="sm" name="Chee Fai" />
                    </HStack>
                </Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value="profile">Profile</MenuItem>
                <MenuItem value="preferences">
                    <Link href="/profile/preferences">Preferences</Link>
                </MenuItem>
                <MenuItem value="logout" color="fg.error">
                    <Link href="/logout">Logout</Link>
                </MenuItem>
            </MenuContent>
        </MenuRoot>
        
      </div>
    </nav>
  );
} 