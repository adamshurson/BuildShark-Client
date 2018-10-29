import React from 'react';
import "./header.css";

export default function Header(props) {
    const projects = props.projects || [];
    return props.shouldDisplay
            ? <div className="bg-black flex items-center relative shadow-md">
                <svg className="p-2 pl-12"
                    viewBox="0 0 100 100"
                    height="60px"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <path fill="#6cb2eb"
                              d="M 16 32
               h 68
               v 35
               l -34 23
               l -34 -23"
                    />
                    <path fill="#2779bd"
                              d="M 16 32
               l 34 -23
               l 34 23
               l -4 3
               h -60"
                    />
                    <path fill="#3490dc"
                              d="M 50 15
               l 30 20
               v 30
               l -30 20
               l -30 -20
               v -30"
                    />
                    <path fill="white"
                              d="M 35 30
               q 17.5 10, 35 35
               q -20 -5, -35 0
               q 5 -17.5, 0 -35"
                    />
                </svg>
                <div className="ml-auto absolute pin-t pin-b pin-r flex pr-12">
                    <button className="header-menu hover:bg-blue h-full flex items-center cursor-pointer relative">
                        <h4 className="text-white px-4">Projects</h4>
                        <div className="z-10 header-submenu pin-b pin-r absolute flex flex-col shadow-md bg-white">
                        {
                            projects.map(project => {
                                return <h4 className="text-black p-4 hover:bg-orange hover:text-white whitespace-no-wrap text-right">{project.clients.join(" ")}</h4>
                            })
                        }
                            <h4 className="text-black p-4 hover:bg-orange hover:text-white whitespace-no-wrap text-center">Add Project</h4>
                        </div>
                    </button>
                    <button className="header-menu hover:bg-blue h-full flex items-center cursor-pointer relative">
                        <h4 className="text-white px-4">Account</h4>
                        <div className="z-10 header-submenu pin-b pin-r absolute flex flex-col shadow-md bg-white">
                            <h4 className="text-black p-4 hover:bg-orange hover:text-white whitespace-no-wrap text-right">My Account</h4>
                            <h4 className="text-black p-4 hover:bg-orange hover:text-white whitespace-no-wrap text-right">Company</h4>
                            <h4 onClick={() => props.logout()} className="text-black p-4 hover:bg-orange hover:text-white whitespace-no-wrap text-right">Logout</h4>
                        </div>
                    </button>
                </div>
            </div>
            : null
}