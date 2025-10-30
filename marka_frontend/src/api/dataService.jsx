import api from "./axiosConfig.jsx";

const ServiceService = {
  getFeaturedServices: () => {
    return api.get("/services/", { params: { featured: true } });
  },

  getAllServices: () => {
    return api.get("/services/");
  },

  getServiceDetail: (id) => {
    return api.get(`/services/${id}/`);
  },
};

const BlogService = {
  getLatestPosts: (count = 3) => {
    return api.get("/blog/", { params: { latest: true, count: count } });
  },

  getAllPosts: () => {
    return api.get("/blog/");
  },

  getPostBySlug: (slug) => {
    return api.get(`/blog/${slug}/`);
  },
};

const TeamMemberService = {
  getAllTeamMembers: () => {
    return api.get('/team/');
  },
  
  getTeamMemberDetail: (id) => {
    return api.get(`/team/${id}/`);
  }
};

const ContactService = {
  submitContactForm: (formData) => {
    return api.post("/contact/", formData);
  },
};

export { ServiceService, BlogService, ContactService, TeamMemberService };
