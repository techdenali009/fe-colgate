// Login Form
export const LoginForm = {
  Email: 'email' as const,
  Password: 'password' as const,
  Message: 'This field is required',
}

export const ValidationForm = {
  Required: 'This field is required',
  PasswordNotMatch : 'Password do not match',
  PasswordRequirementFailed : 'Password does not meet complexity requirements',
  EmailValidationRule : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
  EmailRuleFailed :'E-mail address is invalid.',
  PasswordValidationRule:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  EmailPasswordFailed : 'Invalid login or password'
}

export const LoginConsts = {
  Login:'login',
  ForgotPassword:'forgotPassword',
  AlreadyRegistered:'alreadyRegistered'
}
export const passwordRequirements = [
  { label: 'At least 8 characters', regex: /.{8,}/ },
  { label: 'Contains an uppercase letter', regex: /[A-Z]/ },
  { label: 'Contains a lowercase letter', regex: /[a-z]/ },
  { label: 'Contains a number', regex: /[0-9]/ },
  { label: 'Contains a special symbol', regex: /[!@#$%^&*(),.?":{}|<>]/ },
];
  