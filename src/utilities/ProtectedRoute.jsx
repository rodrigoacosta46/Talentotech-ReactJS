import { Navigate } from "react-router";

export default function ProtectedRoute({condition, send, children}) {
    if (condition) {
        return <Navigate to={send} />
    }

    return children;
}