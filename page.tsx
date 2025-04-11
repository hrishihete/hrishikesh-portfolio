import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6 transition-colors duration-300`}>
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Hrishikesh Hete</h1>
        <p className="text-lg">Aspiring Data Analyst | MS in ITM | Data Science Enthusiast</p>
        <div className="mt-4 space-x-4">
          <a href="mailto:hrishihete4@gmail.com" className="underline">hrishihete4@gmail.com</a>
          <a href="https://www.linkedin.com/in/hrishikeshhete/" className="underline" target="_blank">LinkedIn</a>
          <a href="/Hrishikesh_Hete_Resume3.pdf" download className="underline font-semibold">Download Resume</a>
        </div>
        <div className="mt-4">
          <label className="flex items-center justify-center gap-2">
            <span className="text-sm">Toggle Dark Mode</span>
            <Switch checked={darkMode} onCheckedChange={() => setDarkMode(!darkMode)} />
          </label>
        </div>
      </header>
      <!-- remaining sections truncated for brevity -->
    </div>
  );
}
