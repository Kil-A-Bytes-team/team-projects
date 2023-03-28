import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { SignIn, SignInScreen } from "./screens/SignInScreen";
import { SignUp, SignUpScreen } from "./screens/SignUpScreen";
import { useCurrentUser } from "./hooks/useCurrentUser";

function App() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return (
      <Routes>
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    );
  }
  return <NotFoundScreen />;
}

export default App;
