import type { ProtectRoutePropTypes } from "../utils/types";
import NoMatch from "../pages/NoMatch";

export default function ProtectRoute({
  token,
  children,
}: ProtectRoutePropTypes) {
  if (!token) {
    return <NoMatch />;
  }
  return children;
}
