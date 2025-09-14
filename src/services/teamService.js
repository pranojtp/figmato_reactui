import apiClient from '../api/apiClient';

const teamService = {
  // Read all team members
  getMembers: () => {
    return apiClient.get('/profiles');
  },

  // Create a new team member
  addMember: (memberData) => {
    return apiClient.post('/profiles', memberData);
  },

  // Update an existing team member
  updateMember: (id, memberData) => {
    return apiClient.put(`/profiles/${id}`, memberData);
  },

  // Delete a team member
  deleteMember: (id) => {
    return apiClient.delete(`/profiles/${id}`);
  },
};

export default teamService;