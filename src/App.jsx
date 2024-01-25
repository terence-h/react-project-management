import { useRef, useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";
import SelectedProject from "./components/SelectedProject";

function App() {
	const [createProjectUI, setCreateProjectUI] = useState(false);
	const [selectedProject, setSelectedProject] = useState();

	const createProjectData = useRef({
		title: "",
		description: "",
		date: "",
		tasks: [],
	});
	const listOfProjects = useRef([]);

	function ToggleCreateProjectUI() {
		setCreateProjectUI((prevState) => !prevState);
	}

	function OnCreateProject() {
		for (let i = 0; i < listOfProjects.current.length; i++) {
			if (listOfProjects.current[i].title === createProjectData.current.title) {
				console.log("DUPLICATE TITLE");
				return false;
			}
		}

		listOfProjects.current.push(createProjectData.current);
		createProjectData.current = {
			title: "",
			description: "",
			date: "",
			tasks: [],
		};
		ToggleCreateProjectUI();
	}

	function OnSelectProject(data) {
		setSelectedProject(data);
	}

	function OnDeleteProject(data) {
		const index = listOfProjects.current.findIndex(
			(x) => x.title === data.title
		);

		listOfProjects.current.splice(index, 1);
		setSelectedProject(null);
	}

	function OnAddTask(data, task) {
		if (!task) {
			console.log("EMPTY TASK");
			return;
		}

		data.tasks.push(task);
		setSelectedProject({ ...data });
	}

	function OnClearTask(data, taskId) {
		data.tasks.splice(taskId, 1);
		setSelectedProject({ ...data });
	}

	console.log("----- RERENDERING -----");

	return (
		<main className="h-screen flex gap-8">
			<Sidebar
				onToggleCreateProject={ToggleCreateProjectUI}
				onSelectProject={OnSelectProject}
				ref={listOfProjects}
			/>
			{createProjectUI ? (
				<CreateProject
					onCancel={ToggleCreateProjectUI}
					onSave={OnCreateProject}
					ref={createProjectData}
				/>
			) : selectedProject ? (
				<SelectedProject
					projectData={selectedProject}
					onDeleteProject={OnDeleteProject}
					onAddTask={OnAddTask}
					onClearTask={OnClearTask}
				/>
			) : (
				<NoProjectSelected onToggleCreateProject={ToggleCreateProjectUI} />
			)}
		</main>
	);
}

export default App;
