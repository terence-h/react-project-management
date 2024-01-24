import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";

function App() {
	const [createProject, setCreateProject] = useState(false);

	function ToggleCreateProject() {
		setCreateProject((prevState) => !prevState);
	}

	return (
		<main className="h-screen flex gap-8">
			<Sidebar onCreateProject={ToggleCreateProject} />
			{createProject ? (
				<CreateProject onCancel={ToggleCreateProject} />
			) : (
				<NoProjectSelected onCreateProject={ToggleCreateProject} />
			)}
		</main>
	);
}

export default App;
