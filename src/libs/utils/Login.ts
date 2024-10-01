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
  PasswordValidationRule:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
}

export const LoginConsts = {
  Login:'login',
  ForgotPassword:'forgotPassword',
  AlreadyRegistered:'alreadyRegistered'
}