import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from '@nextui-org/react';
import { changePasswordSchema } from '../../libs/validation/auth-validation';

const ChangePasswordForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(changePasswordSchema)
  });

  const onSubmit = (data: any) => {
    console.log('Password change data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex min-w-[388px] flex-col space-y-6">
      <div>
        <Controller
          name="oldPassword"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              label="Old Password"
              variant="bordered"
              radius="sm"
              type="password"
              labelPlacement="outside"
              isInvalid={!!error}
              placeholder="At least 8 characters"
              errorMessage={error && error.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="newPassword"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              label="New Password"
              variant="bordered"
              radius="sm"
              type="password"
              labelPlacement="outside"
              isInvalid={!!error}
              placeholder="At least 8 characters"
              errorMessage={error && error.message}
            />
          )}
        />
      </div>
      <div>
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              label="Confirm Password"
              variant="bordered"
              radius="sm"
              type="password"
              labelPlacement="outside"
              isInvalid={!!error}
              placeholder="At least 8 characters"
              errorMessage={error && error.message}
            />
          )}
        />
      </div>
      <div className="pt-6">
        <Button
          type="submit"
          radius="sm"
          className="text-md w-full rounded-lg bg-signin-blue text-white"
          size="md"
        >
          Change Password
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <p className="pt-[24px]">
          Go back to{' '}
          <a href="#" className="text-blue-600">
            Settings
          </a>
        </p>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
