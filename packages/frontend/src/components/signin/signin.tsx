import React from 'react';
import { Input } from '@nextui-org/input';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/react';
import Google_svg from './Google_logo';
import Logo_svg from './Logo_svg';
import Discord_svg from './Discord_logo';

const signin = () => {
  return (
    <main className="flex items-center gap-6 bg-white">
      <div className="flex basis-1/2 flex-col items-center">
        <div className="-mr-28 flex flex-col items-center">
          <div className="-mt-28 mb-32 flex max-[1600px]:-mt-14 max-[1600px]:mb-14">
            <Logo_svg />
          </div>
          <div>
            <div>
              {/* Welcome Back and description */}
              <h1 className="text-4xl font-semibold max-[1600px]:text-2xl">Welcome Back!</h1>
              <p className="my-4 text-lg max-[1600px]:my-2 max-[1600px]:text-sm">
                Sign in to connect with your buddy
              </p>
            </div>
            <div className="flex flex-col">
              {/* Labels - Inputs - Forgot_password - Sign_In_Button */}
              <div>
                <label className="text-base max-[1600px]:text-sm">Email</label>
                <Input type="Email" size="sm" placeholder="Example@gmail.com" />
              </div>
              <div className="my-5 max-[1600px]:my-3">
                <label className="text-base max-[1600px]:text-sm">Password</label>
                <Input type="Password" placeholder="At least 8 characters" />
              </div>
              <a href="" className="mb-3 ml-48 text-sm text-blue-600 max-[1600px]:text-xs">
                Forgot Password?
              </a>
              <Button radius="sm" className="bg-signin-blue text-white" size="md">
                Sign in
              </Button>
            </div>
            <div className="flex flex-col">
              <div className="inline-flex items-center justify-center">
                {/* hr_line - or */}
                <hr className="my-8 h-px w-32 border-0 bg-gray-200 dark:bg-gray-700" />
                <span className="mx-4 my-10 text-sm max-[1600px]:my-0">Or</span>
                <hr className="my-8 h-px w-32 border-0 bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="flex flex-col items-center gap-y-5 max-[1600px]:gap-y-2">
                {/* Google and Discord Buttons and Sign_Up link */}
                <Button
                  className="bg-google-button w-full max-[1600px]:text-sm"
                  radius="sm"
                  startContent={<Google_svg />}
                  size="md"
                >
                  Sign in with Google
                </Button>
                <Button
                  className="bg-google-button w-full max-[1600px]:text-sm"
                  radius="sm"
                  startContent={<Discord_svg />}
                  size="md"
                >
                  Sign in with Discord
                </Button>
                <p className="mt-5 max-[1600px]:text-sm">
                  Don't you have an account?
                  <a href="#" className="text-blue-600">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 py-5 pl-28">
        <Image
          src="public/signin/login_art.jpeg"
          className="h-[905px] w-[800px] max-[1600px]:h-[685px] max-[1600px]:w-[620px]"
        />
      </div>
    </main>
  );
};

export default signin;
