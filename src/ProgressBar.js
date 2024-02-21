import React, { useEffect } from "react";

function ProgressBar() {
	const yearStart = new Date(new Date().getFullYear(), 0, 1);
	const yearEnd = new Date(new Date().getFullYear() + 1, 0, 1);
	const currentDate = new Date();
	const progress = ((currentDate - yearStart) / (yearEnd - yearStart)) * 100;
	const currentYear = currentDate.getFullYear();

	useEffect(() => {
		const updatedCurrentDate = new Date();
		const updatedProgress =
			((updatedCurrentDate - yearStart) / (yearEnd - yearStart)) * 100;
		document.title = `${currentYear} | ${updatedProgress.toFixed(2)}% complete`;
	});

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="text-5xl font-bold text-green-500 mb-10">
				{currentYear} Progress Bar
			</div>
			<div className="w-96 h-10 bg-gray-300 rounded-md overflow-hidden">
				<div
					className="h-full bg-green-500"
					style={{ width: `${progress}%` }}
				></div>
			</div>
			<div className="text-xl mt-5">
				{currentYear} is {progress.toFixed(2)}% complete.
			</div>
		</div>
	);
}

export default ProgressBar;
