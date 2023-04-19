import { useCurrentUser } from "./hooks/useCurrentUser";
import { Routes, Route } from "react-router";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { SignUpScreen } from "./screens/SignUpScreen";

function App() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return (
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    );
  }
  return <NotFoundScreen />;
}

export default App;
