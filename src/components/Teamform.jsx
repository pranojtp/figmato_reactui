import { useState, useEffect } from "react"

const Teamform = ({ memberToEdit, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (memberToEdit) {
            setName(memberToEdit.name);
            setRole(memberToEdit.role);
            setIsEditing(true);
        } else {
            setName('');
            setRole('');
            setIsEditing(false);
        }
    }, [memberToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !role) {
            alert("Please enter both name and role.");
            return;
        }
        onSave({ id: memberToEdit?.id, name, role });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg space-y-3">
            <h4 className="text-lg font-semibold">{isEditing ? 'Edit Member' : 'Add New Member'}</h4>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 px-3 py-2"
                    placeholder="Enter name"
                />
            </div>
            <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-400">Role</label>
                <input
                    type="text"
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 px-3 py-2"
                    placeholder="Enter role"
                />
            </div>
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-1 rounded-md text-gray-300 hover:text-white transition"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-1 bg-[#00FFA3] text-black rounded-md hover:bg-[#00e695] transition"
                >
                    {isEditing ? 'Update' : 'Add'}
                </button>
            </div>
        </form>
    );

}

export default Teamform
