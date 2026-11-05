import { COACH_PHOTOS } from "@/lib/coachPhotos";
import { initials } from "@/lib/label";

/** Headshot by name, or the coach's initials until the client sends one. */
export function CoachPortrait({ name }: { name: string }) {
  const photo = COACH_PHOTOS[name];
  return photo ? (
    <div className="coach-portrait has-photo" style={{ backgroundImage: `url("${photo}")` }}></div>
  ) : (
    <div className="coach-portrait" aria-hidden="true">
      {initials(name)}
    </div>
  );
}
