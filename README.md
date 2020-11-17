## [UI Kit - The Front](https://frontpages.netlify.app/)

Material React Landing Pages Kit made with [Material UI's](https://material-ui.com/?ref=maccarian-agency) components, [React](https://reactjs.org/?ref=maccarian-agency) and of course [create-react-app](https://facebook.github.io/create-react-app/?ref=maccarian-agency) and [NextJS](https://nextjs.org/?ref=maccarian-agency) to boost your app development process!
A professional React Kit that comes with plenty of ready-to-use Material-UI components that will help you to build faster & beautiful Fontend pages. Each component is fully customizable, responsive and easy to integrate.

<br /><br />

### **Quick start with React Scripts (SPA)**

- Download the theme

- Make sure your NodeJS and npm versions are up to date for `React 16.8.6`

- Install dependencies: `npm install`

- Start the server: `npm run cra:start`

- Views are on: `localhost:3000`

- Build on production: `npm run cra:build`

<br /><br />

### **Quick start with Pre-rendered version NextJS Scripts (SSR)**

- Download the theme

- Make sure your NodeJS and npm versions are up to date for `React 16.8.6`

- Install dependencies: `npm install`

- Start the server: `npm run dev`

- Views are on: `localhost:3000`

- Build on production: `npm run build`

- Start the build server: `npm run build && npm run start`

<br /><br />

### **Instalation of Assets/Images**

In order to not overload the theme size with the static images we hosted them into a different git repository and put them as a dependency of the theme which is being installed when doing `npm i` and being copied from `node_modules` into the `public` folder during `npm postinstall`
The images will be deleted from `public` folder and will be fetched again from remote git repository every time you do `npm i`

First you need to do the following, before starting to modify/customize the theme and also images based on your app/business needs:

- Download images manually from https://github.com/gevorgmakaryan/thefront-assets
- Copy the `images` folder and paste into the `public` folder
- Remove the `public/images` in `.gitignore` file
- Open the `package.json` file and remove `assets` and `postinstall` scripts
- Remove `thefront-assets` from the `dependencies` in `package.json` file

<br /><br />

### **Folder structure**

In the root folder there are 3 folders:
- **pages** *The NextJS pre-rendered pages are located under this folder. If you are not using NextJS you may delete or ignore the `pages` folder*
- **public** *Here are the public assets, images and `index.html` file. Note that you don't need `index.html` file if you are not using NextJS version.*
- **src** *Here is the main business logic of the theme.*
- **|----components** *The reusable and stand-alone components are stored here, by following [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)*
- **|----|----atoms** *These are small functional components that are not using any other atomic components*
- **|----|----molecules** *Tese are those functional components which have dependencies from other atoms*
- **|----|----organisms** *These are the functional components that are using other molecules and atoms*
- **|----layouts**
- **|----|----Main** *The main layout: header navigation, the main container and footer part*
- **|----|----Minimal** *The minimal layout*
- **|----theme** *In this folder there are overrides of the default color palette and typography coming from MUI*
- **|----views** *All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations.*

<br /><br />

### **Run the style guide**

- `npm run styleguide`

<br /><br />

### **Landing Pages Built For Customization**

theFront landing page examples can be used out of the box, but since they’re built on flexible components, you can also create new pages all your own with ease. Copy-paste a section here, a component there, switch up a few variables, and you have an entirely new landing! Here are the examples we provide to give you an idea of what’s possible:

#### **The full list of pages**
- More than 45 pages
- 300+ component compositions
- 30+ stand-alone components
- create-react-app scripts support
- NextJS and server side rendering support

<br />

#### **[Overview Of All Pages](https://thefront.maccarianagency.com)**

<br />

#### **Development Highlights**
We built Thefront to make you be able to customize and extend our components as simple as the Material UI core itself.

- Component-centric atomic design architechture
- Customization made easy with stand alone components
- Browsersync live reload
- Fully responsive on all modern browsers
- Rich documentation with code samples and parameters/options

<br />

#### **Design Highlights**
theFront was designed as a rich system from the start, which is reflected in both the end result and the original design.

- Beautiful, modern style flexible enough to suit most brands
- Included Sketch design file
- Type styles, color styles, and components for easy file-wide changes
- All images are included with a free-to-use license
- Icon set provided by Font Awesome Kit

<br /><br />

### **Built with**

- React
- NextJS
- Material-UI v4

<br /><br />

### **MUI Documentation**

The full documentation for the React Material Kit can be found [here](https://material-ui.com?ref=maccarian-agency).

<br /><br />

### **Free Updates and Support**

No matter how well documented and built something is, sometimes you just need a little help! That’s why we make ourselves available to help you anytime, just contact our [support](hi@maccarianagency.com) email. We’re also planning tons of updates! In addition to keeping theFront up to date with Material UI's core and any necessary patches, we’ll be adding new features regularly over the coming months!

- [Contact us via email](hi@maccarianagency.com)

<br /><br />

### **Contact Us**

- Email Us: hi@maccarianagency.com
- [Follow us on Linkedin](https://www.linkedin.com/company/maccarian)
- [Follow us on Instagram](https://www.instagram.com/maccarian/)
- [Follow us on Facebook](https://facebook.com/maccarian.agency/)
