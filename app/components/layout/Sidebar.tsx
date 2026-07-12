import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { SocialLinks } from "./SocialLinks";

export default function Sidebar() {
  return (
    <aside
      className="
        lg:sticky
        lg:top-1/2
        lg:-translate-y-1/2
        lg:flex
        lg:max-h-[50vh]
        lg:w-1/2
        lg:flex-col
        lg:justify-center
        lg:px-8
      "
    >
      <div className="flex flex-col gap-6">
        <Profile />
        <Navigation />
        <SocialLinks />
      </div>
    </aside>
  );
}
