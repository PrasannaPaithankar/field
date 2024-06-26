'use client'

import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Machine } from '../../../src-tauri/types';

export default function Home() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    // Replace with the actual user ID of the logged-in user
    const userId = 1;

    async function fetchMachines() {
      try {
        // use manage state variable
        const result: Machine[] = await invoke('get_machines', { userid: userId });
        setMachines(result);
      } catch (error) {
        console.error('Error fetching machines:', error);
      }
    }

    fetchMachines();
  }, []);

    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <a
          href="/"
          className="fixed top-0 left-0 m-0 p-4 dark:bg-black/50"
        >
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
        </a>
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-bl from-cyan-500 to-indigo-500 dark:from-cyan-900 dark:to-indigo-900">
            Settings
        </h1>
        {/* create a hr with gradient color */}
        <hr className="w-1/2 h-0.5 mt-3 mb-6 bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-900 dark:to-indigo-900" />
        {/* switch to switch to dark mode */}
        <div className="flex items-center justify-center">
          <label htmlFor="darkmode" className="mr-3">Dark Mode</label>
          <input type="checkbox" id="darkmode" />
        </div>
        