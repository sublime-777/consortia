import React from "react";

function InputPassword(props) {
  const {
    labelName,
    inputType,
    inputPlaceholder,
    inputName,
    inputValue,
    showPassFunch,
    errorMsg,
    inputOnChangeFunc,
    showPassword,
    password,
    errors,
    touched,
    onBlur,
  } = props;
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={labelName}
        className="text-label-md heading-3 sm:text-[1.2375em]"
      >
        {labelName}
      </label>
      <div className="relative">
        <div className="bg-gradient-to-r from-[#1D2CDF] to-[#B731FF] p-0.5 rounded-[24px]">
          <input
            className="w-full py-2.5 px-4 bg-dark-blue border-0 rounded-[24px] placeholder:text-white placeholder:opacity-60 text-white focus:outline-none text-[13px]"
            type={inputType}
            name={inputName}
            id={labelName}
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={inputOnChangeFunc}
            onBlur={onBlur}
          />
        </div>
        {errors && touched ? (
          <p className="error mx-4 mt-1 text-[14px] text-[red]">{errorMsg}</p>
        ) : null}

        <span
          onClick={() => showPassFunch(password)}
          className="cursor-pointer material-symbols-outlined absolute top-0 right-0 mt-[10px] me-4"
        >
          {showPassword ? "visibility_off" : "visibility"}
        </span>
      </div>
    </div>
  );
}

export default InputPassword;
