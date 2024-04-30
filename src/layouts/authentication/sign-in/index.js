import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

const bgImage = "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignIn = () => {
    const { username, password } = credentials;
    // Replace these credentials with those from your environment or settings
    if (username === "admin" && password === "admin") {
      navigate("/generateImages/StyleGan");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
      <IllustrationLayout
          title="Sign In"
          description="Enter your email and password to sign in"
          illustration={{
            image: bgImage,
            title: '"Attention is the new currency"',
            description:
                "The more effortless the writing looks, the more effort the writer actually put into the process.",
          }}
      >
        <ArgonBox component="form" role="form">
          <ArgonBox mb={2}>
            <ArgonInput type="email" name="username" placeholder="Email" size="large" value={credentials.username} onChange={handleChange} />
          </ArgonBox>
          <ArgonBox mb={2}>
            <ArgonInput type="password" name="password" placeholder="Password" size="large" value={credentials.password} onChange={handleChange} />
          </ArgonBox>
          <ArgonBox display="flex" alignItems="center">
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <ArgonTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
            >
              &nbsp;&nbsp;Remember me
            </ArgonTypography>
          </ArgonBox>
          <ArgonBox mt={4} mb={1}>
            <ArgonButton color="info" size="large" fullWidth onClick={handleSignIn}>
              Sign In
            </ArgonButton>
          </ArgonBox>
          <ArgonBox mt={3} textAlign="center">
            <ArgonTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <ArgonTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
              >
                Sign up
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
        </ArgonBox>
      </IllustrationLayout>
  );
}

export default Illustration;
