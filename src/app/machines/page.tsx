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
            Machines
        </h1>
        {/* create a hr with gradient color */}
        <hr className="w-1/2 h-0.5 mt-3 mb-6 bg-gradient-to-r from-cyan-500 to-indigo-500 dark:from-cyan-900 dark:to-indigo-900" />
        <div className="grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          {machines.map((machine) => (
            <a
              key={machine.machine_id}
              href={`/machines/${machine.machine_id}`}
              className={`group rounded-lg border-2 ${machine.status === 'active' ? 'border-green-500' : 'border-red-500'}
               px-5 py-4 transition-colors hover:border-0 hover:bg-transperant hover:dark:bg-neutral-800/30`}
              rel="noopener noreferrer"
            >
              <h2 className="mb-2 text-2xl font-semibold">
                {machine.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
              </h2>
              <div className="m-0 max-w-[30ch] text-sm opacity-80">
                {/* if status is active set color to green else red */}
                <span className={`text-xs font-semibold ${machine.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                  {machine.status}
                </span><br />
                IPv4: {machine.ip}<br />
                OS: {machine.os}<br />
                CPU: {machine.cpu}<br />
                RAM: {machine.ram}<br />
                Disk: {machine.disk}
              </div>
            </a>
          ))}
        </div>
      </main>
    );
}