import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const InputFields = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <div className="relative">
        <Input
          type={inputType}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          {...register(name, validation)}
          className={cn("form-input", {
            "opacity-50 cursor-not-allowed": disabled,
            "pr-10": isPasswordField,
          })}
          autoComplete={
            name === "password"
              ? "current-password"
              : name === "email"
              ? "email"
              : name === "fullName"
              ? "name"
              : "off"
          }
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            disabled={disabled}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default InputFields;
