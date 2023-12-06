export const task__manager = () => {
    const data = localStorage.getItem("task")
    return data ?  JSON.parse(data) : []
}