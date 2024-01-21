import ContactList from "./components/contact-list";
import Footer from "./components/footer";
import FormAddContact from "./components/form-add-contact";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <FormAddContact />
      <ContactList />
      <Footer />
    </>
  );
}

// Rekomendasi extension vscode
// Auto Rename Tag
// eslint
// prettier
// tailwindcss intellisense
