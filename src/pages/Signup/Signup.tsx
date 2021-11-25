// components
// forms
import BASE_URL from "@/api/BaseUrl/BaseUrl";
import Banner from "@/components/banner/Banner";
import axios from "axios";
import SignupForm from "./mains/SignupForm/SignupForm";
// others
import classes from "./Signup.module.scss";

/**
 * Signin
 */
export default function Signup() {
  const onFinish = (values: any) => {
    console.log(values);

    axios({
      method: "post",
      url: `${BASE_URL}/auth/register`,
      data: {
        name: values.user.name,
        email: values.user.email,
        phone: values.user.phone,
        address: values.user.address,
        password: values.password,
        position: "1",
      },
    }).then((res) => {
      console.log("res: ==", res);
    });
  };
  return (
    <div className={classes.wrapper}>
      <Banner title="A few clicks away from creating your account" />
      <SignupForm onFinish={onFinish} />
    </div>
  );
}
