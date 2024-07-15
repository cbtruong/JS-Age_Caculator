import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [showResult, setShowResult] = useState("");
	const [date, setDate] = useState("");

	let currentDate = new Date();
	// Tăng ngày lên 1
	currentDate.setDate(currentDate.getDate() + 1);
	// Định dạng lại ngày mới thành chuỗi YYYY-MM-DD và khởi tạo state với giá trị này
	const [formattedDate, setFormattedDate] = useState(
		currentDate.toISOString().split("T")[0]
	);

	// hàm tính tuổi
	const calculateAge = () => {
		let y = parseInt(date.split("-")[0]);
		let m = parseInt(date.split("-")[1]);
		let d = parseInt(date.split("-")[2]);

		let yy = currentDate.getFullYear();
		let mm = currentDate.getMonth() + 1;
		let dd = currentDate.getDate() - 1;

		// tính tuổi
		console.log("month", mm, m);
		console.log("Date", dd, d);
		let y1 = yy - y;
		let m1 = mm - m;
		let d1 = dd - d;
		if (d1 < 0) {
			m1--;
			d1 += new Date(y, mm, 0).getDate();
		}
		if (m1 < 0) {
			y1--;
			m1 += 12;
		}

		// hiển thị tuổi
		setShowResult(
			"You are " + y1 + " years," + m1 + " months and " + d1 + " days old"
		);
	};
	return (
		<div className="container">
			<div className="calculator">
				<h1>
					JavaScript <br />
					<span>Age Calculator</span>
				</h1>
				<div className="input-box">
					<input
						type="date"
						id="date"
						max={formattedDate}
						onChange={(e) => setDate(e.target.value)}
					/>
					<button onClick={calculateAge}>Calculator</button>
				</div>
				<p id="result">{showResult}</p>
			</div>
		</div>
	);
}

export default App;
