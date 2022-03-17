import { AuthProvider as Box } from '../../contexts/auth';

type Auth = {
    children: React.ReactChild[];
};

const AuthProvider = ({ children }: Auth) => {
  return <Box>{children}</Box>;
};

export default AuthProvider;