const Form = () => {

    const handleSubmit = () => {
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nick" />
                <input type="number" placeholder="Sub months" />
                <input type="text" placeholder="Avatar" />
                <textarea placeholder="Description" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form