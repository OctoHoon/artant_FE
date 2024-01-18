import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import SignupInput from "./SignupInput";
import ValidationMessage from "./ValidationMessage";

export default function InputIdandPw({
  username,
  setUsername,
  handleValidateEmail,
  isEmailAvailable,
  emailValidationMessage,
  showPassword,
  password,
  isPasswordValid,
  setPassword,
  handleValidatePassword,
  handlePasswordVisibility,
  passwordValidationMessage,
  password_check,
  setPasswordCheck,
  passwordCheckValidationMessage,
}) {
  return (
    <>
      <SignupInput
        label={"아이디"}
        id={"username"}
        type={"email"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder={"아이디(이메일)을 입력하세요."}
        onBlur={handleValidateEmail}
        isInvalid={!isEmailAvailable}
        errorBorderColor="red.300"
      />

      <ValidationMessage
        message={emailValidationMessage}
        isValid={isEmailAvailable}
      />
      <FormControl isRequired>
        <FormLabel htmlFor="password">비밀번호</FormLabel>

        <InputGroup>
          <Input
            variant="flushed"
            width={"full"}
            placeholder="비밀번호를 입력하세요."
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            isInvalid={!isPasswordValid}
            onChange={(e) => {
              setPassword(e.target.value);
              handleValidatePassword();
            }}
            onBlur={handleValidatePassword}
          />
          <InputRightElement
            children={
              <Icon as={showPassword ? AiOutlineEyeInvisible : AiOutlineEye} />
            }
            onClick={handlePasswordVisibility}
            cursor="pointer"
          />
        </InputGroup>
      </FormControl>

      <ValidationMessage
        message={passwordValidationMessage}
        isValid={isPasswordValid}
      />

      <SignupInput
        label={"비밀번호 확인"}
        id={"password_check"}
        type={"password"}
        value={password_check}
        onChange={(e) => setPasswordCheck(e.target.value)}
        placeholder={"비밀번호를 확인하세요."}
        onBlur={undefined}
        isInvalid={undefined}
        errorBorderColor="red.300"
      />

      <ValidationMessage
        message={passwordCheckValidationMessage}
        isValid={false}
      />
    </>
  );
}
