import { useRef } from "react";

export default function SelectedProject({
	projectData,
	onDeleteProject,
	onAddTask,
	onClearTask,
}) {
	const taskData = useRef();

	function onFormSubmit(e) {
		e.preventDefault();
		onAddTask(projectData, taskData.current["task-info"].value.trim());
	}

	return (
		<div className="mt-24 w-3/4">
			<div className="w-3/4">
				<header className="pb-4 mb-4 border-b-2 border-stone-300">
					<div className="flex items-center justify-between">
						<h2 className="my-8 text-4xl font-bold text-stone-500">
							{projectData.title}
						</h2>
						<button
							className="text-stone-700 hover:text-red-700"
							onClick={() => {
								onDeleteProject(projectData);
							}}
						>
							Delete
						</button>
					</div>

					<p className="mb-4 text-stone-400">
						{new Date(projectData.date).toLocaleDateString("en-GB")}
					</p>

					<p className="text-stone-800 my-4">{projectData.description}</p>
				</header>
				<h2 className="text-2xl font-bold text-stone-500 mb-4">Tasks</h2>
				<form className="mt-4" ref={taskData} onSubmit={(e) => onFormSubmit(e)}>
					<input
						name="task-info"
						className="w-64 px-2 py-1 rounded-sm bg-stone-200"
					/>
					<button className="px-4 py-1 text-xs md:text-base text-end text-stone-700 hover:text-stone-900">
						Add Task
					</button>
				</form>

				{projectData.tasks.length > 0 ? (
					<ul className="p-4 mt-8 rounded-md bg-stone-100">
						{projectData.tasks.map((task, index) => {
							return (
								<li className="flex justify-between my-4" key={`task-${index}`}>
									{task}
									<button
										className="hover:text-red-700"
										onClick={() => onClearTask(projectData, index)}
									>
										Clear
									</button>
								</li>
							);
						})}
					</ul>
				) : (
					<p className="py-2">This project does not have any tasks yet.</p>
				)}
			</div>
		</div>
	);
}
