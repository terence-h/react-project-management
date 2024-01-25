import { forwardRef } from "react";

const Sidebar = forwardRef(function Sidebar(
	{ onToggleCreateProject, onSelectProject },
	ref
) {
	return (
		<aside className="w-1/4 px-8 py-16 min-h-screen bg-stone-900 text-stone-50">
			<h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
				PROJECTS LIST
			</h2>
			<button
				className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
				onClick={onToggleCreateProject}
			>
				+ Add Project
			</button>
			<ul className="mt-8">
				{ref.current.map((data) => {
					return (
						<li key={data.title}>
							<button
								className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
								onClick={() => {
									onSelectProject(data);
								}}
							>
								{data.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
});

export default Sidebar;
