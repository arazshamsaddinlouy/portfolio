import { Navigation } from "./Navigation";
import { Profile } from "./Profile";
import { SocialLinks } from "./SocialLinks";

export default function Sidebar() {
  return (
    <aside
      className="
        lg:sticky
        lg:top-0
        lg:flex
        lg:h-screen
        lg:w-1/2
        lg:flex-col
        lg:py-24
      "
    >
      <div>
        <Profile />
        <Navigation />
      </div>

      <div className="mt-auto pb-4">
        <SocialLinks />
      </div>
    </aside>
  );
}
