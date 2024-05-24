import { CardWrapper } from "./card-wrapper";

type Props = {};
export const LoginForm = ({}: Props) => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};
