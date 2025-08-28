import { Twitter,Facebook,Instagram} from "lucide-react";

export default function ProfileInfo({ profile }) {
  return (
    <div className="bg-black rounded-2xl p-4 text-white">
      <h3 className="text-lg font-semibold mb-2">Profile Information</h3>
      <p className="text-sm text-white-200 mb-3">{profile.bio}</p><hr /><br />
      <div className="text-sm space-y-1">
        <p>Full Name: X</p>
        <p>Industry: Y</p>
        <p>Role: Z</p>
        <p>Location: X</p>
        <p className="flex items-center gap-4">Social Media:<Twitter size={15} color="#00C4FF" /><Facebook size={15} color="#00C4FF" /><Instagram size={15} color="#00C4FF" /></p>
      </div>
    </div>
  );
}
