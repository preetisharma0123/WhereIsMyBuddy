# WhereIsMyBuddy

A buddy finder app to help you find/create a community of like minded people seeking to collaborate and learn together.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

#### 1. Install Root Package

To set up the root package, install dependencies, and configure Husky pre-commit hooks and the Lerna build system:

```bash
npm install
# or
yarn install
```

This will install all necessary dependencies and set up the Husky pre-commit hooks.

#### 2. Frontend Setup

Navigate to './packages/frontend/' directory and install the dependencies

```bash
cd ./packages/frontend
npm install
# or
yarn install
```

To run the development server:

```bash
npm run dev
# or
yarn dev
```

#### 3. Backend Setup

Navigate to the './packages/backend/' and install dependencies:

```bash
cd ./packages/backend
npm install
# or
yarn install
```

To run development server:

```bash
npm run dev
# or
yarn dev
```
#### 4. Husky hooks
Use  below 2 commands on command line, if you are unable to execute husky hooks:

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

In case of the warning message husky - '~/.huskyrc' is DEPRECATED, use below commands:
```bash
mkdir -p ~/.config/husky
mv ~/.huskyrc ~/.config/husky/init.sh
npm install -g npm
```
### Contributing

We welcome contributions to improve this project. Please fork the repository and submit a pull request.