
import { useState, useEffect } from 'react';
import teamService from '../services/teamService';
import Teamform from './Teamform';
import { toast } from "react-toastify";

export default function Teams() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const[readMore,setReadMore]=useState(false);
  const [memberToEdit, setMemberToEdit] = useState(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await teamService.getMembers();
      setMembers(response.data.reverse());
      setLoading(false);
    } catch (error) {
      console.error("Error fetching team members:", error);
      toast.error("Failed to load team members");
      setLoading(false);
    }
  };

  const handleAddClick = () => {
    setMemberToEdit(null); // Clear any member data from a previous edit
    setShowForm(true);
  };

  const handleEditClick = (member) => {
    setMemberToEdit(member); // Set the member to be edited
    setShowForm(true);
  };

  const handleSave = async (memberData) => {
    try {
      if (memberData.id) {
        await teamService.updateMember(memberData.id, memberData);
        toast.success("Member updated successfully!");
      } else {
        await teamService.addMember(memberData);
        toast.success("Member added successfully!");
      }
      setShowForm(false);
      setMemberToEdit(null);
      fetchMembers();
    } catch (error) {
      console.error("Error saving member:", error);
      toast.error("Failed to save member");
    }
  };

  const handleRemove = async (id) => {
    try {
      await teamService.deleteMember(id);
      toast.success("Member removed successfully!");
      fetchMembers();
    } catch (error) {
      console.error("Error removing member:", error);
      toast.success("Failed to remove member");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black rounded-2xl p-4 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Teams</h3>
        <button
          className="px-4 py-1 bg-[#00FFA3] text-black rounded-2xl hover:bg-[#00e695] transition"
          onClick={handleAddClick}
        >
          Add Members
        </button>
      </div>

      {/* Conditional Rendering of the Form */}
      {showForm && (
        <div className="my-4">
          <Teamform
            memberToEdit={memberToEdit}
            onSave={handleSave}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Team List */}
      <ul className="space-y-3">
        {members.slice(0,3).map((member) => (
          <li
            key={member.id}
            className="flex justify-between items-center bg-black px-4 py-3 rounded-lg border-b border-gray-500"
          >
            {/* Left Section - Avatar + Text */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#00FFA3] flex-shrink-0"></div>
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-xs text-gray-400">{member.role || 'No Role'}</p>
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex gap-3 text-sm">
              <button
                className="text-[#00FFA3] hover:underline"
                onClick={() => handleEditClick(member)}
              >
                Edit
              </button>
              <button
                className="text-[#00FFA3] hover:underline"
                onClick={() => handleRemove(member.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
       

       {!readMore&& <button onClick={()=>setReadMore(!readMore)} className="text-[#00FFA3] hover:underline">loadmore...</button>}
        {readMore && (
          members.slice(3).map((member) => (
            <li
              key={member.id}
              className="flex justify-between items-center bg-black px-4 py-3 rounded-lg border-b border-gray-500"
            >
              {/* Left Section - Avatar + Text */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00FFA3] flex-shrink-0"></div>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-xs text-gray-400">{member.role || 'No Role'}</p>
                </div>
              </div>

              {/* Right Section - Actions */}
              <div className="flex gap-3 text-sm">
                <button
                  className="text-[#00FFA3] hover:underline"
                  onClick={() => handleEditClick(member)}
                >
                  Edit
                </button>
                <button
                  className="text-[#00FFA3] hover:underline"
                  onClick={() => handleRemove(member.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))
        )}
                
       </ul>
    </div>
  );
}