import ProfileCard from "../components/ProfileCard";
import ProfileInfo from "../components/ProfileInfo";
import Teams from "../components/Teams";
import Projects from "../components/Projects";
import { profile, teams, projects } from "../data/mockData";

export default function Dashboard() {
  return (
    <main className="flex-1 p-6 space-y-6 bg-neutral-900">
      <ProfileCard profile={profile} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileInfo profile={profile} />
        <Teams teams={teams} />
      </div>
      <Projects projects={projects} />
    </main>
  );
}
