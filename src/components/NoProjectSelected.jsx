import projectIcon from "../assets/no-projects.png";

export default function NoProjectSelected({ onToggleCreateProject }) {
	return (
		<div className="mt-24 text-center w-3/4">
			<img src={projectIcon} className="w-16 h-16 object-contain mx-auto" />
			<h2 className="my-8 text-center text-5xl font-bold text-stone-500">
				No Project Selected
			</h2>
			<p className="mb-4 text-stone-400">
				Select a project or get started with a new one
			</p>
			<button
				className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
				onClick={onToggleCreateProject}
			>
				Create a new project
			</button>
		</div>
	);
}
