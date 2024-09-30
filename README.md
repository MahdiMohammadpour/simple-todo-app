
# Next.js Project with App Router, MUI
## Project Setup
This project uses [Next.js](https://nextjs.org/) along with several important libraries like:
- **MUI**: Material-UI for UI components.
- **next-intl**: For handling internationalization (i18n).
- **Axios**: For HTTP requests.
- **Formik**: For form handling and validation (with Yup).
- **React Toastify**: For toast notifications.
- **React Icons**: For adding icons.
### Prerequisites
- **Node.js**: v16 or higher
- **npm**: v7 or higher
### Getting Started
1. Clone the repository
2. install packages
```bash
npm install or yarn
````
3. run project
```bash
npm run dev or yarn dev
````
4. Open http://localhost:3000 to view it in your browser. 
###  Project Structure
```bash
messages/           # Localization files for English and Farsi
├── en.json
├── fa.json
src/
├── app/            # Root directory for the Next.js app router
│   ├── {name-route}/
│   │   ├── api/route.ts    # Fetch and call api in route
│   │   ├── layout.tsx      # Layout for a specific route
│   │   ├── page.tsx        # Page component for the route
│   │   ├── error.tsx       # Error component for the route
│   │   ├── loading.tsx     # Loading spinner for the route
│   │   └── components/     # Components specific to this route
│   ├── api/route.ts        # Route API handlers
│   ├── layout.tsx          # Global layout
│   └── page.tsx            # Home page
├── components/     # Reusable global components
│   └── {base-component}/   # Example of a base component
````
## Contributing
We welcome contributions of all kinds to this project! Whether you're fixing bugs, improving documentation, adding features, or simply suggesting ideas, your input is greatly appreciated.
### Getting Started
1. **Fork the repository**: Fork the project on GitHub by clicking the "Fork" button at the top right of this page. This creates your own copy of the repository.
2. **Clone your fork**: Clone your forked repository to your local machine by running:
   ```bash
   git clone https://github.com/your-username/your-forked-repo.git
   ````
3. **Create a new branch**: Always create a new branch for your work to keep it isolated from the `main` branch.
   ```bash
   git checkout -b feature/your-feature-name
   ````
4. **Push the repository**: Push your changes to your forked repository
5. **Creating a Pull Request (PR)**
# enjoy it :)