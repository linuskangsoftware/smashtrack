// Login page

import { LoginForm } from "@/components/loginform"

export default function Home() {
  return (
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                  <LoginForm />
                    <footer className="text-center text-sm text-gray-500 py-4">
                        &copy; {new Date().getFullYear()} SmashTrack. All rights reserved.
                    </footer>
                </div>
          </div>
    );
}