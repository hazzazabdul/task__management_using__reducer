function getTask () {
    const tasks = localStorage.getItem("tasks")
    return tasks ? JSON.parse(tasks) : []
}

export default getTask