import React from 'react';

type PhoneInputProps = {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
};

function PhoneInput({ phone, setPhone }: PhoneInputProps): JSX.Element {
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  };

  return (
    <input
      className="phoneNumberInput"
      pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
      value={phone}
      onChange={handlePhone}
    />
  );
}

export default PhoneInput;
