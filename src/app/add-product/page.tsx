export const metadata = {
    title: "Add Product - Flowmazon"
}

export default function AddProductPage() {
    return (<div className="text-lg mb-3 font-bold text-black">
        <h1>Add Product</h1>
        <form>
            <input
                required
                name="name"
                placeholder="Name"
                className="mb-3 w-full input input-bordered"
            />
            <textarea
                required
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered mb-3 w-full" />
            <input
                required
                name="imageUrl"
                placeholder="Image URL"
                type="url"
                className="mb-3 w-full input input-bordered"
            />
            <input
                required
                name="price"
                placeholder="Price"
                type="number"
                className="mb-3 w-full input input-bordered"
            />
            <button className="btn btn-primary btn-block" type="submit">Add Product</button>
        </form>
    </div>)
}