import { useCurrentUser } from "./hooks/useCurrentUser";
import { Routes, Route } from "react-router";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { HomeScreen } from "./screens/HomeScreen";

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
  return <HomeScreen />;
}

export default App;
