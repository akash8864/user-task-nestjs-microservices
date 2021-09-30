import React from 'react'
import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <div>
<nav className="bg-white shadow-lg my-2">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
						<div class="flex items-center py-4 px-2">
								<span class="font-semibold text-gray-500 text-lg">Technocodz</span>
							</div>
							
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Task</Link>
						</div>
					</div>
					<div className="hidden md:flex items-center space-x-3 ">
						<Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
					</div>
					
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>

		</nav>
        </div>
    )
}
