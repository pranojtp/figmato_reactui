import { profile, teams, projects } from "../data/mockData";

// Fake API call (simulated with Promise)
export function fetchProfile() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(profile), 500);
  });
}

export function fetchTeams() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(teams), 500);
  });
}

export function fetchProjects() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(projects), 500);
  });
}
