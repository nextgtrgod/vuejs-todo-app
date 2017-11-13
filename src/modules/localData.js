
export default function localData() {
	return {
		set: data => localStorage && localStorage.setItem('todoData', JSON.stringify(data)),
		get: () => localStorage && (JSON.parse(localStorage.getItem('todoData')) || [])
	}
}