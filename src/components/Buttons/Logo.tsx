import { Link } from "@tanstack/react-router";

export default function Logo() {
  return (
    <Link to="/">
      <div className="btn flex justify-center btn-ghost no-animation normal-case text-3xl font-semibold w-full">
        🦅 Hack OSx
      </div>
    </Link>
  );
}
